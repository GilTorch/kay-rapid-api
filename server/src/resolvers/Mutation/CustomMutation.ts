import { getUserId, Context } from "../../utils";

export const CustomMutation = {
  async createCountry(parent, { name }, context: Context, info) {
    return context.db.mutation.createCountry({ data: { name } }, info);
  },
  async createState(parent, { name, idCountry }, context: Context, info) {
    return context.db.mutation.createState(
      {
        data: {
          name,
          country: {
            connect: { id: idCountry }
          }
        }
      },
      info
    );
  },
  async createCity(parent, { name, idState }, context: Context, info) {
    return context.db.mutation.createCity(
      {
        data: {
          name,
          state: {
            connect: { id: idState }
          }
        }
      },
      info
    );
  },
  async createCommune(parent, { name, idCity }, context: Context, info) {
    return context.db.mutation.createCommune(
      {
        data: {
          name,
          city: {
            connect: { id: idCity }
          }
        }
      },
      info
    );
  },
  async createHouse(parent, args, context: Context, info) {
    const userId = getUserId(context);
    return context.db.mutation.createHouse(
      {
        data: {
          name: args.name,
          area: args.area,
          age: args.age,
          shortDescription: args.shortDescription,
          description: args.description,
          maxGuests: args.maxGuests,
          numBedrooms: args.numBedrooms,
          numBaths: args.numBaths,
          leaseType: args.leaseType,
          type: args.type,
          residency: args.residency,
          amenities: {},
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
          }
        }
      },
      info
    );
  }
};
