import { Context,getUserId,hasPermission } from "../utils";
import * as jwt from "jsonwebtoken";

export const Query = {
  countries(parent, {}, context: Context) {
    const userId = getUserId(context);
    if(!userId){
      throw new Error('You must be logged in')
    } 
    hasPermission(context.prisma.$exists.user({ id: userId}),['ADMIN','LANDLORD','PERMISSIONUPDATE','ITEMCREATE'])
    return context.prisma.countries({});
  },
  states(parent, {}, context: Context) {
    return context.prisma.states({});
  },
  cities(parent, {}, context: Context) {
    return context.prisma.cities({});
  },
  communes(parent, {}, context: Context) {
    return context.prisma.communes({});
  },
  getToken(parent, { id }, context: Context) {
    return jwt.sign(
      {
        userId: id
      },
      process.env.APP_SECRET
    );
  },
  House(parent, args, context: Context){
    return context.prisma.house({
      id:args.id
    })
  },
  Houses(parent, args, context: Context) {
    return context.prisma.houses({
      orderBy: "createdAt_ASC",
      last:args.last
    });
  },
  topCommunes(parent, { c }, context: Context) {
    return context.prisma.communes(
      {
        orderBy: "rank_DESC",
        first: c
      }
    );
  },
  async houseFavoritedByUser(parent, args,context: Context) {
    const userId = getUserId(context);
    if (!userId) {
      throw new Error('you must be signed in!');
    }
    return context.prisma.houseFavoriteds(
      {
        where: {
          user: { id: userId },
        },
      }
    );
},
async housesOwnByUser(parent, args,context: Context) {
  const userId = getUserId(context);
  if (!userId) {
    throw new Error('you must be signed in!');
  }
  const houses =  await context.prisma.houses(
    {
      where: {
        host: { id: userId },
      },
    }
  );

 return houses;

},
async housesOwnByUserCount(parent, args,context: Context) {
  const userId = getUserId(context);
  if (!userId) {
    throw new Error('you must be signed in!');
  }
  const count =  await context.prisma.housesConnection(
    {
      where:{
        host:{
          id: userId
        }
      }
    }
  ).aggregate().count();

 return count;

},
  async houseRating(parent, args,context: Context){
    const count =  await context.prisma.reviewsConnection({where:
      {
       House:{
          id: args.houseId
        }
        
      }}).aggregate().count()
  
    let reviews = await context.prisma.reviews({where:
      {
       House:{
          id: args.houseId
        }
        
      }})

    const sumRating = reviews.map(item => item.stars).reduce((prev, next) => prev + next)
    const rating = sumRating /count


      //  reviews.reduce((a,b)=> {a + b['stars']},0)

      console.log(sumRating);
      
    return {
      count,
      rating,
      reviews
    }
  }



  
  // me(parent, args, context:Context){
  //   if (!getUserId()) {
      
  //   }
  // }
};
