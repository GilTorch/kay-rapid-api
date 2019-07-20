import { getUserId, Context, hasPermission } from "../../utils";

export const CustomMutation = {
  async createCountry(parent, { name }, context: Context) {
    return context.prisma.createCountry({  name });
  },
  async createState(parent, { name, idCountry }, context: Context) {
    return context.prisma.createState(
      { 
          name,
          country: {
            connect: { id: idCountry }
          }
        } 
    );
  },
  async createCity(parent, { name, idState }, context: Context) {
    return context.prisma.createCity(
      {
          name,
          state: {
            connect: { id: idState }
          }
      }
    );
  },
  async createCommune(parent, { name, idCity }, context: Context) {
    return context.prisma.createCommune(
      {
          name,
          city: {
            connect: { id: idCity }
          }
      }
    );
  },
  async createHouse(parent, args, context: Context) {
    const userId = getUserId(context);
    if(!userId){
      throw new Error('You must be logged in')
    } 
     let x = await context.prisma.user({id : userId})
     hasPermission(x,['ADMIN','LANDLORD','PERMISSIONUPDATE','ITEMCREATE'])
    return context.prisma.createHouse(
      {
          area: args.area,
          age: args.age,
          shortDescription: args.shortDescription,
          description: args.description,
          maxGuests: args.maxGuests,
          numBedrooms: args.numBedrooms,
          numBaths: args.numBaths,
          numLivingrooms: args.numLivingrooms,
          numDiningrooms: args.numDiningrooms,
          leaseType: args.leaseType,
          type: args.type,
          residency: args.residency,
          amenities: {
            create: {
              electricity: args.electricity,
              electricity_frequency: args.electricity_frequency,
              water_pipe: args.water_pipe,
              water_tank: args.water_tank,
              water_frequency: args.water_frequency,
              elevator: args.elevator,
              petsAllowed: args.petsAllowed,
              internet: args.internet,
              kitchen: args.kitchen,
              wirelessInternet: args.wirelessInternet,
              familyKidFriendly: args.familyKidFriendly,
              freeParkingOnPremises: args.freeParkingOnPremises,
              hotTub: args.hotTub,
              pool: args.pool,
              smokingAllowed: args.smokingAllowed,
              wheelchairAccessible: args.wheelchairAccessible,
              cableTv: args.cableTv,
              suitableForEvents: args.suitableForEvents,
              dryer: args.dryer,
              washer: args.washer,
              indoorFireHouse: args.indoorFireHouse,
              tv: args.tv,
              heating: args.heating,
              hangers: args.hangers,
              iron: args.iron,
              hairDryer: args.hairDryer,
              doorman: args.doorman,
              paidParkingOffPremises: args.paidParkingOffPremises,
              freeParkingOnStreet: args.freeParkingOnStreet,
              gym: args.gym,
              airConditioning: args.airConditioning,
              shampoo: args.shampoo,
              essentials: args.essentials,
              laptopFriendlyWorkspace: args.laptopFriendlyWorkspace,
              privateEntrance: args.privateEntrance,
              buzzerWirelessIntercom: args.buzzerWirelessIntercom,
              bathtub: args.bathtub,
              crib: args.crib
            }
          },
          lease: args.lease,
          host: {
            connect: { id: userId }
          },
          pricing: {
            create: {
              basePrice: args.basePrice,
              highestPrice: args.highestPrice,
              currency: args.currency,
              income: args.income
            }
          },
          location: {
            create: {
              address: args.address,
              commune: {
                connect: {
                  id: args.communeId
                }
              },
              lat: args.lat,
              lng: args.lng
            }
          },
          rooms: {
            create: args.rooms
          },
          preview_image: {
            create: {
              url: args.previewImage
            }
          }
      }
    );
  },
  async updateHouse(parent, args, context: Context) {
    return context.prisma.updateHouse({
      data: {
        area: args.area,
        age: args.age,
        shortDescription: args.shortDescription,
        description: args.description,
        maxGuests: args.maxGuests,
        numBedrooms: args.numBedrooms,
        numBaths: args.numBaths,
        numLivingrooms: args.numLivingrooms,
        numDiningrooms: args.numDiningrooms,
        leaseType: args.leaseType,
        type: args.type,
        residency: args.residency,
        amenities: {
          update: {
            electricity: args.electricity,
            electricity_frequency: args.electricity_frequency,
            water_pipe: args.water_pipe,
            water_tank: args.water_tank,
            water_frequency: args.water_frequency,
            elevator: args.elevator,
            petsAllowed: args.petsAllowed,
            internet: args.internet,
            kitchen: args.kitchen,
            wirelessInternet: args.wirelessInternet,
            familyKidFriendly: args.familyKidFriendly,
            freeParkingOnPremises: args.freeParkingOnPremises,
            hotTub: args.hotTub,
            pool: args.pool,
            smokingAllowed: args.smokingAllowed,
            wheelchairAccessible: args.wheelchairAccessible,
            cableTv: args.cableTv,
            suitableForEvents: args.suitableForEvents,
            dryer: args.dryer,
            washer: args.washer,
            indoorFireHouse: args.indoorFireHouse,
            tv: args.tv,
            heating: args.heating,
            hangers: args.hangers,
            iron: args.iron,
            hairDryer: args.hairDryer,
            doorman: args.doorman,
            paidParkingOffPremises: args.paidParkingOffPremises,
            freeParkingOnStreet: args.freeParkingOnStreet,
            gym: args.gym,
            airConditioning: args.airConditioning,
            shampoo: args.shampoo,
            essentials: args.essentials,
            laptopFriendlyWorkspace: args.laptopFriendlyWorkspace,
            privateEntrance: args.privateEntrance,
            buzzerWirelessIntercom: args.buzzerWirelessIntercom,
            bathtub: args.bathtub,
            crib: args.crib
          }
        },
        lease: args.lease,
        pricing: {},
        location: {},
        views: {},
        bookings: {},
        preview_image: {
          create: {
            url: args.previewImage
          }
        },
        rooms: args.rooms
      },
      where: {
        id: args.houseId
      }
    });
  },
  async deleteHouse(parent, args, context: Context) {
    return context.prisma.deleteHouse({
        id: args.houseId
    });
  },
  addroomManyPicture(parent, args, context: Context) {
    return context.prisma.createRoom(
      {
          label: args.label,
          house: {
            connect: {
              id: args.houseId
            }
          },
          picture_previews: {
            create: args.picture_previews
          }
      }
    );
  },
  async createFavoriteHouse(parent, args, context: Context) {
    const userId = getUserId(context);
    if(!userId){
      throw new Error('You must be logged in')
    } 
    console.log(userId)
    const [favoriteExists] = await context.prisma.houseFavoriteds({where:
      {
        user: {
          id: userId
        },
        house:{
          id: args.houseId
        }
        
    //"graphql": "14.0.0",
      }})
      console.log(favoriteExists)

      if (favoriteExists) {
        throw new Error('house already in favorites');
  } 
    
    return context.prisma.createHouseFavorited(
      {
          house: {
            connect: {
              id: args.idHouse
            }
          },
          user: {
            connect: {
              id: userId
            }
          }
      }
    );
  }
};
