import { getUserId, Context, hasPermission } from '../../utils'

export const CustomMutation = {
  async createCountry (parent, { name }, context: Context) {
    return context.prisma.createCountry({ name })
  },
  async createState (parent, { name, idCountry }, context: Context) {
    return context.prisma.createState({
      name,
      country: {
        connect: { id: idCountry }
      }
    })
  },
  async createCity (parent, { name, idState }, context: Context) {
    return context.prisma.createCity({
      name,
      state: {
        connect: { id: idState }
      }
    })
  },
  async createCommune (parent, { name, idCity }, context: Context) {
    return context.prisma.createCommune({
      name,
      city: {
        connect: { id: idCity }
      }
    })
  },
  // search the houses that the user owns
  async createHouse (parent, args, context: Context) {
    const userId = getUserId(context)
    if (!userId) {
      throw new Error('You must be logged in')
    }
    let x = await context.prisma.user({ id: userId })
    hasPermission(x, ['STANDARD'])
    return context.prisma.createHouse({
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
      },
      rentOrSell: args.rentOrSell
    })
  },
  async updateHouse (parent, args, context: Context) {
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
        leaseType: args.rentOrSell === "SELL" ? "NOT_ASSIGNED" : args.leaseType,
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
        lease: args.rentOrSell === "SELL" ? 0 : args.lease,
        pricing: {
          update: {
            highestPrice: args.highestPrice,
            basePrice: args.basePrice,
            currency: args.currency
          }
        },
        location: {
          update: {
            address: args.address,
            lat: args.lat,
            lng: args.lng,
            commune: {
              connect: {
                id: args.communeId
              }
            }
          }
        },
        views: {},
        bookings: {},
        preview_image: {
          create: {
            url: args.previewImage
          }
        },
        rooms: args.rooms,
        rentOrSell: args.rentOrSell
      },
      where: {
        id: args.houseId
      }
    })
  },
  async deleteHouse (parent, args, context: Context) {
    // fetch all favorites with id of house
    const userId = getUserId(context)
    console.log(userId)
    const [house] = await context.prisma.houses({
      where: {
        id: args.id,
        host: {
          id: userId
        }
      }
    })

    if (!house) {
      throw new Error('You are not authorized to delete this house')
    }

    return context.prisma.deleteHouse({
      id: house.id
    })
  },
  addroomManyPicture (parent, args, context: Context) {
    return context.prisma.createRoom({
      label: args.label,
      house: {
        connect: {
          id: args.houseId
        }
      },
      picture_previews: {
        create: args.picture_previews
      }
    })
  },
  async createFavoriteHouse (parent, args, context: Context) {
    const userId = getUserId(context)
    if (!userId) {
      throw new Error('You must be logged in')
    }
    const [favoriteExists] = await context.prisma.houseFavoriteds({
      where: {
        user: {
          id: userId
        },
        house: {
          id: args.idHouse
        }
      }
    })

    if (favoriteExists) {
      throw new Error('house already in favorites')
    }

    return context.prisma.createHouseFavorited({
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
    })
  },
  async createReview (parent, args, context: Context) {
    const userId = getUserId(context)
    if (!userId) {
      throw new Error('You must be logged in')
    }
    if (args.stars > 5) {
      throw new Error("Ratings can't be superior than 5")
    }
    const [ReviewExists] = await context.prisma.reviews({
      where: {
        user: {
          id: userId
        },
        House: {
          id: args.houseId
        }
      }
    })

    if (ReviewExists) {
      throw new Error('You already made a review for this house')
    }
    let review = await context.prisma.createReview({
      stars: args.stars,
      text: args.text,
      House: {
        connect: {
          id: args.houseId
        }
      },
      user: {
        connect: {
          id: userId
        }
      }
    })
    ///updating the house averagerating processs
    const count = await context.prisma
      .reviewsConnection({
        where: {
          House: {
            id: args.houseId
          }
        }
      })
      .aggregate()
      .count()

    let reviews = await context.prisma.reviews({
      where: {
        House: {
          id: args.houseId
        }
      }
    })

    const sumRating = await reviews
      .map(item => item.stars)
      .reduce((prev, next) => prev + next)
    const rating = sumRating / count
    const lastRatingHouse = await context.prisma.updateHouse({
      data: {
        lastRating: rating
      },
      where: {
        id: args.houseId
      }
    })
    return review
  },
  async deleteFavoriteHouse (parent, args, context: Context) {
    return context.prisma.deleteManyHouseFavoriteds({
      id_in: args.idHouseFavorite
    })
  }
}
