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
      },
      info
    );
  },
  async updateHouse(parent, args, context: Context, info) {
    return context.db.mutation.updateHouse({
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
  async deleteHouse(parent, args, context: Context, info) {
    return context.db.mutation.deleteHouse({
      where: {
        id: args.houseId
      }
    });
  },
  addroomManyPicture(parent, args, context: Context, info) {
    return context.db.mutation.createRoom(
      {
        data: {
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
      },
      info
    );
  },
  createFavoriteHouse(parent, args, context: Context, info) {
    return context.db.mutation.createHouse_Favorited(
      {
        data: {
          house: {
            connect: {
              id: args.idHouse
            }
          },
          user: {
            connect: {
              id: args.idUser
            }
          }
        }
      },
      info
    );
  }
};
