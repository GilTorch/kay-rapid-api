import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    rooms: <T = Room[]>(args: { where?: RoomWhereInput, orderBy?: RoomOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pricings: <T = Pricing[]>(args: { where?: PricingWhereInput, orderBy?: PricingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    viewses: <T = Views[]>(args: { where?: ViewsWhereInput, orderBy?: ViewsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    amenitieses: <T = Amenities[]>(args: { where?: AmenitiesWhereInput, orderBy?: AmenitiesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reviews: <T = Review[]>(args: { where?: ReviewWhereInput, orderBy?: ReviewOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bookings: <T = Booking[]>(args: { where?: BookingWhereInput, orderBy?: BookingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    house_Favoriteds: <T = House_Favorited[]>(args: { where?: House_FavoritedWhereInput, orderBy?: House_FavoritedOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    negotiations: <T = Negotiation[]>(args: { where?: NegotiationWhereInput, orderBy?: NegotiationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentHouses: <T = PaymentHouse[]>(args: { where?: PaymentHouseWhereInput, orderBy?: PaymentHouseOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentAccounts: <T = PaymentAccount[]>(args: { where?: PaymentAccountWhereInput, orderBy?: PaymentAccountOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paypalInformations: <T = PaypalInformation[]>(args: { where?: PaypalInformationWhereInput, orderBy?: PaypalInformationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    creditCardInformations: <T = CreditCardInformation[]>(args: { where?: CreditCardInformationWhereInput, orderBy?: CreditCardInformationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentLanlordInfoes: <T = PaymentLanlordInfo[]>(args: { where?: PaymentLanlordInfoWhereInput, orderBy?: PaymentLanlordInfoOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notifications: <T = Notification[]>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locations: <T = Location[]>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    communes: <T = Commune[]>(args: { where?: CommuneWhereInput, orderBy?: CommuneOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    countries: <T = Country[]>(args: { where?: CountryWhereInput, orderBy?: CountryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    states: <T = State[]>(args: { where?: StateWhereInput, orderBy?: StateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    houses: <T = House[]>(args: { where?: HouseWhereInput, orderBy?: HouseOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    videos: <T = Video[]>(args: { where?: VideoWhereInput, orderBy?: VideoOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pictures: <T = Picture[]>(args: { where?: PictureWhereInput, orderBy?: PictureOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cities: <T = City[]>(args: { where?: CityWhereInput, orderBy?: CityOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    room: <T = Room | null>(args: { where: RoomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pricing: <T = Pricing | null>(args: { where: PricingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    views: <T = Views | null>(args: { where: ViewsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    amenities: <T = Amenities | null>(args: { where: AmenitiesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    review: <T = Review | null>(args: { where: ReviewWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    booking: <T = Booking | null>(args: { where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    house_Favorited: <T = House_Favorited | null>(args: { where: House_FavoritedWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    negotiation: <T = Negotiation | null>(args: { where: NegotiationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentHouse: <T = PaymentHouse | null>(args: { where: PaymentHouseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentAccount: <T = PaymentAccount | null>(args: { where: PaymentAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paypalInformation: <T = PaypalInformation | null>(args: { where: PaypalInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    creditCardInformation: <T = CreditCardInformation | null>(args: { where: CreditCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentLanlordInfo: <T = PaymentLanlordInfo | null>(args: { where: PaymentLanlordInfoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commune: <T = Commune | null>(args: { where: CommuneWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    country: <T = Country | null>(args: { where: CountryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    state: <T = State | null>(args: { where: StateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    house: <T = House | null>(args: { where: HouseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    city: <T = City | null>(args: { where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    roomsConnection: <T = RoomConnection>(args: { where?: RoomWhereInput, orderBy?: RoomOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pricingsConnection: <T = PricingConnection>(args: { where?: PricingWhereInput, orderBy?: PricingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    viewsesConnection: <T = ViewsConnection>(args: { where?: ViewsWhereInput, orderBy?: ViewsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    amenitiesesConnection: <T = AmenitiesConnection>(args: { where?: AmenitiesWhereInput, orderBy?: AmenitiesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reviewsConnection: <T = ReviewConnection>(args: { where?: ReviewWhereInput, orderBy?: ReviewOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bookingsConnection: <T = BookingConnection>(args: { where?: BookingWhereInput, orderBy?: BookingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    house_FavoritedsConnection: <T = House_FavoritedConnection>(args: { where?: House_FavoritedWhereInput, orderBy?: House_FavoritedOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    negotiationsConnection: <T = NegotiationConnection>(args: { where?: NegotiationWhereInput, orderBy?: NegotiationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentHousesConnection: <T = PaymentHouseConnection>(args: { where?: PaymentHouseWhereInput, orderBy?: PaymentHouseOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentAccountsConnection: <T = PaymentAccountConnection>(args: { where?: PaymentAccountWhereInput, orderBy?: PaymentAccountOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paypalInformationsConnection: <T = PaypalInformationConnection>(args: { where?: PaypalInformationWhereInput, orderBy?: PaypalInformationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    creditCardInformationsConnection: <T = CreditCardInformationConnection>(args: { where?: CreditCardInformationWhereInput, orderBy?: CreditCardInformationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentLanlordInfoesConnection: <T = PaymentLanlordInfoConnection>(args: { where?: PaymentLanlordInfoWhereInput, orderBy?: PaymentLanlordInfoOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    communesConnection: <T = CommuneConnection>(args: { where?: CommuneWhereInput, orderBy?: CommuneOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    countriesConnection: <T = CountryConnection>(args: { where?: CountryWhereInput, orderBy?: CountryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    statesConnection: <T = StateConnection>(args: { where?: StateWhereInput, orderBy?: StateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    housesConnection: <T = HouseConnection>(args: { where?: HouseWhereInput, orderBy?: HouseOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    videosConnection: <T = VideoConnection>(args: { where?: VideoWhereInput, orderBy?: VideoOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    picturesConnection: <T = PictureConnection>(args: { where?: PictureWhereInput, orderBy?: PictureOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    citiesConnection: <T = CityConnection>(args: { where?: CityWhereInput, orderBy?: CityOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createRoom: <T = Room>(args: { data: RoomCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPricing: <T = Pricing>(args: { data: PricingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createViews: <T = Views>(args: { data: ViewsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAmenities: <T = Amenities>(args: { data: AmenitiesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createReview: <T = Review>(args: { data: ReviewCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBooking: <T = Booking>(args: { data: BookingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createHouse_Favorited: <T = House_Favorited>(args: { data: House_FavoritedCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNegotiation: <T = Negotiation>(args: { data: NegotiationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPaymentHouse: <T = PaymentHouse>(args: { data: PaymentHouseCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPaymentAccount: <T = PaymentAccount>(args: { data: PaymentAccountCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPaypalInformation: <T = PaypalInformation>(args: { data: PaypalInformationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCreditCardInformation: <T = CreditCardInformation>(args: { data: CreditCardInformationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPaymentLanlordInfo: <T = PaymentLanlordInfo>(args: { data: PaymentLanlordInfoCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCommune: <T = Commune>(args: { data: CommuneCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCountry: <T = Country>(args: { data: CountryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createState: <T = State>(args: { data: StateCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createHouse: <T = House>(args: { data: HouseCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createVideo: <T = Video>(args: { data: VideoCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPicture: <T = Picture>(args: { data: PictureCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCity: <T = City>(args: { data: CityCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRoom: <T = Room | null>(args: { data: RoomUpdateInput, where: RoomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePricing: <T = Pricing | null>(args: { data: PricingUpdateInput, where: PricingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateViews: <T = Views | null>(args: { data: ViewsUpdateInput, where: ViewsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAmenities: <T = Amenities | null>(args: { data: AmenitiesUpdateInput, where: AmenitiesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateReview: <T = Review | null>(args: { data: ReviewUpdateInput, where: ReviewWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBooking: <T = Booking | null>(args: { data: BookingUpdateInput, where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateHouse_Favorited: <T = House_Favorited | null>(args: { data: House_FavoritedUpdateInput, where: House_FavoritedWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNegotiation: <T = Negotiation | null>(args: { data: NegotiationUpdateInput, where: NegotiationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePaymentHouse: <T = PaymentHouse | null>(args: { data: PaymentHouseUpdateInput, where: PaymentHouseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePaymentAccount: <T = PaymentAccount | null>(args: { data: PaymentAccountUpdateInput, where: PaymentAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePaypalInformation: <T = PaypalInformation | null>(args: { data: PaypalInformationUpdateInput, where: PaypalInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCreditCardInformation: <T = CreditCardInformation | null>(args: { data: CreditCardInformationUpdateInput, where: CreditCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePaymentLanlordInfo: <T = PaymentLanlordInfo | null>(args: { data: PaymentLanlordInfoUpdateInput, where: PaymentLanlordInfoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCommune: <T = Commune | null>(args: { data: CommuneUpdateInput, where: CommuneWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCountry: <T = Country | null>(args: { data: CountryUpdateInput, where: CountryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateState: <T = State | null>(args: { data: StateUpdateInput, where: StateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateHouse: <T = House | null>(args: { data: HouseUpdateInput, where: HouseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCity: <T = City | null>(args: { data: CityUpdateInput, where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRoom: <T = Room | null>(args: { where: RoomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePricing: <T = Pricing | null>(args: { where: PricingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteViews: <T = Views | null>(args: { where: ViewsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAmenities: <T = Amenities | null>(args: { where: AmenitiesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteReview: <T = Review | null>(args: { where: ReviewWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBooking: <T = Booking | null>(args: { where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteHouse_Favorited: <T = House_Favorited | null>(args: { where: House_FavoritedWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNegotiation: <T = Negotiation | null>(args: { where: NegotiationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePaymentHouse: <T = PaymentHouse | null>(args: { where: PaymentHouseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePaymentAccount: <T = PaymentAccount | null>(args: { where: PaymentAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePaypalInformation: <T = PaypalInformation | null>(args: { where: PaypalInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCreditCardInformation: <T = CreditCardInformation | null>(args: { where: CreditCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePaymentLanlordInfo: <T = PaymentLanlordInfo | null>(args: { where: PaymentLanlordInfoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCommune: <T = Commune | null>(args: { where: CommuneWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCountry: <T = Country | null>(args: { where: CountryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteState: <T = State | null>(args: { where: StateWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteHouse: <T = House | null>(args: { where: HouseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCity: <T = City | null>(args: { where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRoom: <T = Room>(args: { where: RoomWhereUniqueInput, create: RoomCreateInput, update: RoomUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPricing: <T = Pricing>(args: { where: PricingWhereUniqueInput, create: PricingCreateInput, update: PricingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertViews: <T = Views>(args: { where: ViewsWhereUniqueInput, create: ViewsCreateInput, update: ViewsUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAmenities: <T = Amenities>(args: { where: AmenitiesWhereUniqueInput, create: AmenitiesCreateInput, update: AmenitiesUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertReview: <T = Review>(args: { where: ReviewWhereUniqueInput, create: ReviewCreateInput, update: ReviewUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBooking: <T = Booking>(args: { where: BookingWhereUniqueInput, create: BookingCreateInput, update: BookingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertHouse_Favorited: <T = House_Favorited>(args: { where: House_FavoritedWhereUniqueInput, create: House_FavoritedCreateInput, update: House_FavoritedUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNegotiation: <T = Negotiation>(args: { where: NegotiationWhereUniqueInput, create: NegotiationCreateInput, update: NegotiationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPaymentHouse: <T = PaymentHouse>(args: { where: PaymentHouseWhereUniqueInput, create: PaymentHouseCreateInput, update: PaymentHouseUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPaymentAccount: <T = PaymentAccount>(args: { where: PaymentAccountWhereUniqueInput, create: PaymentAccountCreateInput, update: PaymentAccountUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPaypalInformation: <T = PaypalInformation>(args: { where: PaypalInformationWhereUniqueInput, create: PaypalInformationCreateInput, update: PaypalInformationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCreditCardInformation: <T = CreditCardInformation>(args: { where: CreditCardInformationWhereUniqueInput, create: CreditCardInformationCreateInput, update: CreditCardInformationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPaymentLanlordInfo: <T = PaymentLanlordInfo>(args: { where: PaymentLanlordInfoWhereUniqueInput, create: PaymentLanlordInfoCreateInput, update: PaymentLanlordInfoUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCommune: <T = Commune>(args: { where: CommuneWhereUniqueInput, create: CommuneCreateInput, update: CommuneUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCountry: <T = Country>(args: { where: CountryWhereUniqueInput, create: CountryCreateInput, update: CountryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertState: <T = State>(args: { where: StateWhereUniqueInput, create: StateCreateInput, update: StateUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertHouse: <T = House>(args: { where: HouseWhereUniqueInput, create: HouseCreateInput, update: HouseUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCity: <T = City>(args: { where: CityWhereUniqueInput, create: CityCreateInput, update: CityUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRooms: <T = BatchPayload>(args: { data: RoomUpdateInput, where?: RoomWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPricings: <T = BatchPayload>(args: { data: PricingUpdateInput, where?: PricingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyViewses: <T = BatchPayload>(args: { data: ViewsUpdateInput, where?: ViewsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAmenitieses: <T = BatchPayload>(args: { data: AmenitiesUpdateInput, where?: AmenitiesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyReviews: <T = BatchPayload>(args: { data: ReviewUpdateInput, where?: ReviewWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBookings: <T = BatchPayload>(args: { data: BookingUpdateInput, where?: BookingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyHouse_Favoriteds: <T = BatchPayload>(args: { data: House_FavoritedUpdateInput, where?: House_FavoritedWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNegotiations: <T = BatchPayload>(args: { data: NegotiationUpdateInput, where?: NegotiationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPaymentHouses: <T = BatchPayload>(args: { data: PaymentHouseUpdateInput, where?: PaymentHouseWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPaymentAccounts: <T = BatchPayload>(args: { data: PaymentAccountUpdateInput, where?: PaymentAccountWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPaypalInformations: <T = BatchPayload>(args: { data: PaypalInformationUpdateInput, where?: PaypalInformationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCreditCardInformations: <T = BatchPayload>(args: { data: CreditCardInformationUpdateInput, where?: CreditCardInformationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPaymentLanlordInfoes: <T = BatchPayload>(args: { data: PaymentLanlordInfoUpdateInput, where?: PaymentLanlordInfoWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateInput, where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateInput, where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCommunes: <T = BatchPayload>(args: { data: CommuneUpdateInput, where?: CommuneWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCountries: <T = BatchPayload>(args: { data: CountryUpdateInput, where?: CountryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStates: <T = BatchPayload>(args: { data: StateUpdateInput, where?: StateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyHouses: <T = BatchPayload>(args: { data: HouseUpdateInput, where?: HouseWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyVideos: <T = BatchPayload>(args: { data: VideoUpdateInput, where?: VideoWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPictures: <T = BatchPayload>(args: { data: PictureUpdateInput, where?: PictureWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCities: <T = BatchPayload>(args: { data: CityUpdateInput, where?: CityWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRooms: <T = BatchPayload>(args: { where?: RoomWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPricings: <T = BatchPayload>(args: { where?: PricingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyViewses: <T = BatchPayload>(args: { where?: ViewsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAmenitieses: <T = BatchPayload>(args: { where?: AmenitiesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyReviews: <T = BatchPayload>(args: { where?: ReviewWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBookings: <T = BatchPayload>(args: { where?: BookingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyHouse_Favoriteds: <T = BatchPayload>(args: { where?: House_FavoritedWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNegotiations: <T = BatchPayload>(args: { where?: NegotiationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPaymentHouses: <T = BatchPayload>(args: { where?: PaymentHouseWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPaymentAccounts: <T = BatchPayload>(args: { where?: PaymentAccountWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPaypalInformations: <T = BatchPayload>(args: { where?: PaypalInformationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCreditCardInformations: <T = BatchPayload>(args: { where?: CreditCardInformationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPaymentLanlordInfoes: <T = BatchPayload>(args: { where?: PaymentLanlordInfoWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCommunes: <T = BatchPayload>(args: { where?: CommuneWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCountries: <T = BatchPayload>(args: { where?: CountryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStates: <T = BatchPayload>(args: { where?: StateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyHouses: <T = BatchPayload>(args: { where?: HouseWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyVideos: <T = BatchPayload>(args: { where?: VideoWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPictures: <T = BatchPayload>(args: { where?: PictureWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCities: <T = BatchPayload>(args: { where?: CityWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    room: <T = RoomSubscriptionPayload | null>(args: { where?: RoomSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    pricing: <T = PricingSubscriptionPayload | null>(args: { where?: PricingSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    views: <T = ViewsSubscriptionPayload | null>(args: { where?: ViewsSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    amenities: <T = AmenitiesSubscriptionPayload | null>(args: { where?: AmenitiesSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    review: <T = ReviewSubscriptionPayload | null>(args: { where?: ReviewSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    booking: <T = BookingSubscriptionPayload | null>(args: { where?: BookingSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    house_Favorited: <T = House_FavoritedSubscriptionPayload | null>(args: { where?: House_FavoritedSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    negotiation: <T = NegotiationSubscriptionPayload | null>(args: { where?: NegotiationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    paymentHouse: <T = PaymentHouseSubscriptionPayload | null>(args: { where?: PaymentHouseSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    paymentAccount: <T = PaymentAccountSubscriptionPayload | null>(args: { where?: PaymentAccountSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    paypalInformation: <T = PaypalInformationSubscriptionPayload | null>(args: { where?: PaypalInformationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    creditCardInformation: <T = CreditCardInformationSubscriptionPayload | null>(args: { where?: CreditCardInformationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    paymentLanlordInfo: <T = PaymentLanlordInfoSubscriptionPayload | null>(args: { where?: PaymentLanlordInfoSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    commune: <T = CommuneSubscriptionPayload | null>(args: { where?: CommuneSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    country: <T = CountrySubscriptionPayload | null>(args: { where?: CountrySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    state: <T = StateSubscriptionPayload | null>(args: { where?: StateSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    house: <T = HouseSubscriptionPayload | null>(args: { where?: HouseSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    video: <T = VideoSubscriptionPayload | null>(args: { where?: VideoSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    picture: <T = PictureSubscriptionPayload | null>(args: { where?: PictureSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    city: <T = CitySubscriptionPayload | null>(args: { where?: CitySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Room: (where?: RoomWhereInput) => Promise<boolean>
  Pricing: (where?: PricingWhereInput) => Promise<boolean>
  Views: (where?: ViewsWhereInput) => Promise<boolean>
  Amenities: (where?: AmenitiesWhereInput) => Promise<boolean>
  Review: (where?: ReviewWhereInput) => Promise<boolean>
  Booking: (where?: BookingWhereInput) => Promise<boolean>
  House_Favorited: (where?: House_FavoritedWhereInput) => Promise<boolean>
  Negotiation: (where?: NegotiationWhereInput) => Promise<boolean>
  PaymentHouse: (where?: PaymentHouseWhereInput) => Promise<boolean>
  PaymentAccount: (where?: PaymentAccountWhereInput) => Promise<boolean>
  PaypalInformation: (where?: PaypalInformationWhereInput) => Promise<boolean>
  CreditCardInformation: (where?: CreditCardInformationWhereInput) => Promise<boolean>
  PaymentLanlordInfo: (where?: PaymentLanlordInfoWhereInput) => Promise<boolean>
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Commune: (where?: CommuneWhereInput) => Promise<boolean>
  Country: (where?: CountryWhereInput) => Promise<boolean>
  State: (where?: StateWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  House: (where?: HouseWhereInput) => Promise<boolean>
  Video: (where?: VideoWhereInput) => Promise<boolean>
  Picture: (where?: PictureWhereInput) => Promise<boolean>
  City: (where?: CityWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAmenities {
  count: Int!
}

type AggregateBooking {
  count: Int!
}

type AggregateCity {
  count: Int!
}

type AggregateCommune {
  count: Int!
}

type AggregateCountry {
  count: Int!
}

type AggregateCreditCardInformation {
  count: Int!
}

type AggregateHouse {
  count: Int!
}

type AggregateHouse_Favorited {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateNegotiation {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregatePaymentAccount {
  count: Int!
}

type AggregatePaymentHouse {
  count: Int!
}

type AggregatePaymentLanlordInfo {
  count: Int!
}

type AggregatePaypalInformation {
  count: Int!
}

type AggregatePicture {
  count: Int!
}

type AggregatePricing {
  count: Int!
}

type AggregateReview {
  count: Int!
}

type AggregateRoom {
  count: Int!
}

type AggregateState {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVideo {
  count: Int!
}

type AggregateViews {
  count: Int!
}

type Amenities implements Node {
  id: ID!
  House(where: HouseWhereInput): House!
  electricity: Boolean!
  electricity_frequency: FREQUENCY
  elevator: Boolean!
  petsAllowed: Boolean!
  internet: Boolean!
  kitchen: Boolean!
  wirelessInternet: Boolean!
  familyKidFriendly: Boolean!
  freeParkingOnPremises: Boolean!
  hotTub: Boolean!
  pool: Boolean!
  smokingAllowed: Boolean!
  wheelchairAccessible: Boolean!
  cableTv: Boolean!
  suitableForEvents: Boolean!
  dryer: Boolean!
  washer: Boolean!
  indoorFireHouse: Boolean!
  tv: Boolean!
  heating: Boolean!
  hangers: Boolean!
  iron: Boolean!
  hairDryer: Boolean!
  doorman: Boolean!
  paidParkingOffPremises: Boolean!
  freeParkingOnStreet: Boolean!
  gym: Boolean!
  airConditioning: Boolean!
  shampoo: Boolean!
  essentials: Boolean!
  laptopFriendlyWorkspace: Boolean!
  privateEntrance: Boolean!
  buzzerWirelessIntercom: Boolean!
  bathtub: Boolean!
  crib: Boolean!
}

"""A connection to a list of items."""
type AmenitiesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AmenitiesEdge]!
  aggregate: AggregateAmenities!
}

input AmenitiesCreateInput {
  electricity: Boolean
  electricity_frequency: FREQUENCY
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireHouse: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  bathtub: Boolean
  crib: Boolean
  House: HouseCreateOneWithoutAmenitiesInput!
}

input AmenitiesCreateOneWithoutHouseInput {
  create: AmenitiesCreateWithoutHouseInput
  connect: AmenitiesWhereUniqueInput
}

input AmenitiesCreateWithoutHouseInput {
  electricity: Boolean
  electricity_frequency: FREQUENCY
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireHouse: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  bathtub: Boolean
  crib: Boolean
}

"""An edge in a connection."""
type AmenitiesEdge {
  """The item at the end of the edge."""
  node: Amenities!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AmenitiesOrderByInput {
  id_ASC
  id_DESC
  electricity_ASC
  electricity_DESC
  electricity_frequency_ASC
  electricity_frequency_DESC
  elevator_ASC
  elevator_DESC
  petsAllowed_ASC
  petsAllowed_DESC
  internet_ASC
  internet_DESC
  kitchen_ASC
  kitchen_DESC
  wirelessInternet_ASC
  wirelessInternet_DESC
  familyKidFriendly_ASC
  familyKidFriendly_DESC
  freeParkingOnPremises_ASC
  freeParkingOnPremises_DESC
  hotTub_ASC
  hotTub_DESC
  pool_ASC
  pool_DESC
  smokingAllowed_ASC
  smokingAllowed_DESC
  wheelchairAccessible_ASC
  wheelchairAccessible_DESC
  cableTv_ASC
  cableTv_DESC
  suitableForEvents_ASC
  suitableForEvents_DESC
  dryer_ASC
  dryer_DESC
  washer_ASC
  washer_DESC
  indoorFireHouse_ASC
  indoorFireHouse_DESC
  tv_ASC
  tv_DESC
  heating_ASC
  heating_DESC
  hangers_ASC
  hangers_DESC
  iron_ASC
  iron_DESC
  hairDryer_ASC
  hairDryer_DESC
  doorman_ASC
  doorman_DESC
  paidParkingOffPremises_ASC
  paidParkingOffPremises_DESC
  freeParkingOnStreet_ASC
  freeParkingOnStreet_DESC
  gym_ASC
  gym_DESC
  airConditioning_ASC
  airConditioning_DESC
  shampoo_ASC
  shampoo_DESC
  essentials_ASC
  essentials_DESC
  laptopFriendlyWorkspace_ASC
  laptopFriendlyWorkspace_DESC
  privateEntrance_ASC
  privateEntrance_DESC
  buzzerWirelessIntercom_ASC
  buzzerWirelessIntercom_DESC
  bathtub_ASC
  bathtub_DESC
  crib_ASC
  crib_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AmenitiesPreviousValues {
  id: ID!
  electricity: Boolean!
  electricity_frequency: FREQUENCY
  elevator: Boolean!
  petsAllowed: Boolean!
  internet: Boolean!
  kitchen: Boolean!
  wirelessInternet: Boolean!
  familyKidFriendly: Boolean!
  freeParkingOnPremises: Boolean!
  hotTub: Boolean!
  pool: Boolean!
  smokingAllowed: Boolean!
  wheelchairAccessible: Boolean!
  cableTv: Boolean!
  suitableForEvents: Boolean!
  dryer: Boolean!
  washer: Boolean!
  indoorFireHouse: Boolean!
  tv: Boolean!
  heating: Boolean!
  hangers: Boolean!
  iron: Boolean!
  hairDryer: Boolean!
  doorman: Boolean!
  paidParkingOffPremises: Boolean!
  freeParkingOnStreet: Boolean!
  gym: Boolean!
  airConditioning: Boolean!
  shampoo: Boolean!
  essentials: Boolean!
  laptopFriendlyWorkspace: Boolean!
  privateEntrance: Boolean!
  buzzerWirelessIntercom: Boolean!
  bathtub: Boolean!
  crib: Boolean!
}

type AmenitiesSubscriptionPayload {
  mutation: MutationType!
  node: Amenities
  updatedFields: [String!]
  previousValues: AmenitiesPreviousValues
}

input AmenitiesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AmenitiesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AmenitiesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AmenitiesSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AmenitiesWhereInput
}

input AmenitiesUpdateInput {
  electricity: Boolean
  electricity_frequency: FREQUENCY
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireHouse: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  bathtub: Boolean
  crib: Boolean
  House: HouseUpdateOneWithoutAmenitiesInput
}

input AmenitiesUpdateOneWithoutHouseInput {
  create: AmenitiesCreateWithoutHouseInput
  connect: AmenitiesWhereUniqueInput
  delete: Boolean
  update: AmenitiesUpdateWithoutHouseDataInput
  upsert: AmenitiesUpsertWithoutHouseInput
}

input AmenitiesUpdateWithoutHouseDataInput {
  electricity: Boolean
  electricity_frequency: FREQUENCY
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireHouse: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  bathtub: Boolean
  crib: Boolean
}

input AmenitiesUpsertWithoutHouseInput {
  update: AmenitiesUpdateWithoutHouseDataInput!
  create: AmenitiesCreateWithoutHouseInput!
}

input AmenitiesWhereInput {
  """Logical AND on all given filters."""
  AND: [AmenitiesWhereInput!]

  """Logical OR on all given filters."""
  OR: [AmenitiesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AmenitiesWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  electricity: Boolean

  """All values that are not equal to given value."""
  electricity_not: Boolean
  electricity_frequency: FREQUENCY

  """All values that are not equal to given value."""
  electricity_frequency_not: FREQUENCY

  """All values that are contained in given list."""
  electricity_frequency_in: [FREQUENCY!]

  """All values that are not contained in given list."""
  electricity_frequency_not_in: [FREQUENCY!]
  elevator: Boolean

  """All values that are not equal to given value."""
  elevator_not: Boolean
  petsAllowed: Boolean

  """All values that are not equal to given value."""
  petsAllowed_not: Boolean
  internet: Boolean

  """All values that are not equal to given value."""
  internet_not: Boolean
  kitchen: Boolean

  """All values that are not equal to given value."""
  kitchen_not: Boolean
  wirelessInternet: Boolean

  """All values that are not equal to given value."""
  wirelessInternet_not: Boolean
  familyKidFriendly: Boolean

  """All values that are not equal to given value."""
  familyKidFriendly_not: Boolean
  freeParkingOnPremises: Boolean

  """All values that are not equal to given value."""
  freeParkingOnPremises_not: Boolean
  hotTub: Boolean

  """All values that are not equal to given value."""
  hotTub_not: Boolean
  pool: Boolean

  """All values that are not equal to given value."""
  pool_not: Boolean
  smokingAllowed: Boolean

  """All values that are not equal to given value."""
  smokingAllowed_not: Boolean
  wheelchairAccessible: Boolean

  """All values that are not equal to given value."""
  wheelchairAccessible_not: Boolean
  cableTv: Boolean

  """All values that are not equal to given value."""
  cableTv_not: Boolean
  suitableForEvents: Boolean

  """All values that are not equal to given value."""
  suitableForEvents_not: Boolean
  dryer: Boolean

  """All values that are not equal to given value."""
  dryer_not: Boolean
  washer: Boolean

  """All values that are not equal to given value."""
  washer_not: Boolean
  indoorFireHouse: Boolean

  """All values that are not equal to given value."""
  indoorFireHouse_not: Boolean
  tv: Boolean

  """All values that are not equal to given value."""
  tv_not: Boolean
  heating: Boolean

  """All values that are not equal to given value."""
  heating_not: Boolean
  hangers: Boolean

  """All values that are not equal to given value."""
  hangers_not: Boolean
  iron: Boolean

  """All values that are not equal to given value."""
  iron_not: Boolean
  hairDryer: Boolean

  """All values that are not equal to given value."""
  hairDryer_not: Boolean
  doorman: Boolean

  """All values that are not equal to given value."""
  doorman_not: Boolean
  paidParkingOffPremises: Boolean

  """All values that are not equal to given value."""
  paidParkingOffPremises_not: Boolean
  freeParkingOnStreet: Boolean

  """All values that are not equal to given value."""
  freeParkingOnStreet_not: Boolean
  gym: Boolean

  """All values that are not equal to given value."""
  gym_not: Boolean
  airConditioning: Boolean

  """All values that are not equal to given value."""
  airConditioning_not: Boolean
  shampoo: Boolean

  """All values that are not equal to given value."""
  shampoo_not: Boolean
  essentials: Boolean

  """All values that are not equal to given value."""
  essentials_not: Boolean
  laptopFriendlyWorkspace: Boolean

  """All values that are not equal to given value."""
  laptopFriendlyWorkspace_not: Boolean
  privateEntrance: Boolean

  """All values that are not equal to given value."""
  privateEntrance_not: Boolean
  buzzerWirelessIntercom: Boolean

  """All values that are not equal to given value."""
  buzzerWirelessIntercom_not: Boolean
  bathtub: Boolean

  """All values that are not equal to given value."""
  bathtub_not: Boolean
  crib: Boolean

  """All values that are not equal to given value."""
  crib_not: Boolean
  House: HouseWhereInput
}

input AmenitiesWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Booking implements Node {
  id: ID!
  createdAt: DateTime!
  bookee(where: UserWhereInput): User!
  House(where: HouseWhereInput): House!
  startDate: DateTime!
  endDate: DateTime!
  payment(where: PaymentHouseWhereInput): PaymentHouse!
}

"""A connection to a list of items."""
type BookingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BookingEdge]!
  aggregate: AggregateBooking!
}

input BookingCreateInput {
  startDate: DateTime!
  endDate: DateTime!
  bookee: UserCreateOneWithoutBookingsInput!
  House: HouseCreateOneWithoutBookingsInput!
  payment: PaymentHouseCreateOneWithoutBookingInput!
}

input BookingCreateManyWithoutBookeeInput {
  create: [BookingCreateWithoutBookeeInput!]
  connect: [BookingWhereUniqueInput!]
}

input BookingCreateManyWithoutHouseInput {
  create: [BookingCreateWithoutHouseInput!]
  connect: [BookingWhereUniqueInput!]
}

input BookingCreateOneWithoutPaymentInput {
  create: BookingCreateWithoutPaymentInput
  connect: BookingWhereUniqueInput
}

input BookingCreateWithoutBookeeInput {
  startDate: DateTime!
  endDate: DateTime!
  House: HouseCreateOneWithoutBookingsInput!
  payment: PaymentHouseCreateOneWithoutBookingInput!
}

input BookingCreateWithoutHouseInput {
  startDate: DateTime!
  endDate: DateTime!
  bookee: UserCreateOneWithoutBookingsInput!
  payment: PaymentHouseCreateOneWithoutBookingInput!
}

input BookingCreateWithoutPaymentInput {
  startDate: DateTime!
  endDate: DateTime!
  bookee: UserCreateOneWithoutBookingsInput!
  House: HouseCreateOneWithoutBookingsInput!
}

"""An edge in a connection."""
type BookingEdge {
  """The item at the end of the edge."""
  node: Booking!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BookingOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BookingPreviousValues {
  id: ID!
  createdAt: DateTime!
  startDate: DateTime!
  endDate: DateTime!
}

type BookingSubscriptionPayload {
  mutation: MutationType!
  node: Booking
  updatedFields: [String!]
  previousValues: BookingPreviousValues
}

input BookingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BookingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BookingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BookingSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BookingWhereInput
}

input BookingUpdateInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserUpdateOneWithoutBookingsInput
  House: HouseUpdateOneWithoutBookingsInput
  payment: PaymentHouseUpdateOneWithoutBookingInput
}

input BookingUpdateManyWithoutBookeeInput {
  create: [BookingCreateWithoutBookeeInput!]
  connect: [BookingWhereUniqueInput!]
  disconnect: [BookingWhereUniqueInput!]
  delete: [BookingWhereUniqueInput!]
  update: [BookingUpdateWithWhereUniqueWithoutBookeeInput!]
  upsert: [BookingUpsertWithWhereUniqueWithoutBookeeInput!]
}

input BookingUpdateManyWithoutHouseInput {
  create: [BookingCreateWithoutHouseInput!]
  connect: [BookingWhereUniqueInput!]
  disconnect: [BookingWhereUniqueInput!]
  delete: [BookingWhereUniqueInput!]
  update: [BookingUpdateWithWhereUniqueWithoutHouseInput!]
  upsert: [BookingUpsertWithWhereUniqueWithoutHouseInput!]
}

input BookingUpdateOneWithoutPaymentInput {
  create: BookingCreateWithoutPaymentInput
  connect: BookingWhereUniqueInput
  delete: Boolean
  update: BookingUpdateWithoutPaymentDataInput
  upsert: BookingUpsertWithoutPaymentInput
}

input BookingUpdateWithoutBookeeDataInput {
  startDate: DateTime
  endDate: DateTime
  House: HouseUpdateOneWithoutBookingsInput
  payment: PaymentHouseUpdateOneWithoutBookingInput
}

input BookingUpdateWithoutHouseDataInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserUpdateOneWithoutBookingsInput
  payment: PaymentHouseUpdateOneWithoutBookingInput
}

input BookingUpdateWithoutPaymentDataInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserUpdateOneWithoutBookingsInput
  House: HouseUpdateOneWithoutBookingsInput
}

input BookingUpdateWithWhereUniqueWithoutBookeeInput {
  where: BookingWhereUniqueInput!
  data: BookingUpdateWithoutBookeeDataInput!
}

input BookingUpdateWithWhereUniqueWithoutHouseInput {
  where: BookingWhereUniqueInput!
  data: BookingUpdateWithoutHouseDataInput!
}

input BookingUpsertWithoutPaymentInput {
  update: BookingUpdateWithoutPaymentDataInput!
  create: BookingCreateWithoutPaymentInput!
}

input BookingUpsertWithWhereUniqueWithoutBookeeInput {
  where: BookingWhereUniqueInput!
  update: BookingUpdateWithoutBookeeDataInput!
  create: BookingCreateWithoutBookeeInput!
}

input BookingUpsertWithWhereUniqueWithoutHouseInput {
  where: BookingWhereUniqueInput!
  update: BookingUpdateWithoutHouseDataInput!
  create: BookingCreateWithoutHouseInput!
}

input BookingWhereInput {
  """Logical AND on all given filters."""
  AND: [BookingWhereInput!]

  """Logical OR on all given filters."""
  OR: [BookingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BookingWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  startDate: DateTime

  """All values that are not equal to given value."""
  startDate_not: DateTime

  """All values that are contained in given list."""
  startDate_in: [DateTime!]

  """All values that are not contained in given list."""
  startDate_not_in: [DateTime!]

  """All values less than the given value."""
  startDate_lt: DateTime

  """All values less than or equal the given value."""
  startDate_lte: DateTime

  """All values greater than the given value."""
  startDate_gt: DateTime

  """All values greater than or equal the given value."""
  startDate_gte: DateTime
  endDate: DateTime

  """All values that are not equal to given value."""
  endDate_not: DateTime

  """All values that are contained in given list."""
  endDate_in: [DateTime!]

  """All values that are not contained in given list."""
  endDate_not_in: [DateTime!]

  """All values less than the given value."""
  endDate_lt: DateTime

  """All values less than or equal the given value."""
  endDate_lte: DateTime

  """All values greater than the given value."""
  endDate_gt: DateTime

  """All values greater than or equal the given value."""
  endDate_gte: DateTime
  bookee: UserWhereInput
  House: HouseWhereInput
  payment: PaymentHouseWhereInput
}

input BookingWhereUniqueInput {
  id: ID
}

type City implements Node {
  id: ID!
  name: String!
  state(where: StateWhereInput): State!
}

"""A connection to a list of items."""
type CityConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CityEdge]!
  aggregate: AggregateCity!
}

input CityCreateInput {
  name: String!
  state: StateCreateOneInput!
}

input CityCreateOneInput {
  create: CityCreateInput
  connect: CityWhereUniqueInput
}

"""An edge in a connection."""
type CityEdge {
  """The item at the end of the edge."""
  node: City!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CityPreviousValues {
  id: ID!
  name: String!
}

type CitySubscriptionPayload {
  mutation: MutationType!
  node: City
  updatedFields: [String!]
  previousValues: CityPreviousValues
}

input CitySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CitySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CitySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CitySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CityWhereInput
}

input CityUpdateDataInput {
  name: String
  state: StateUpdateOneInput
}

input CityUpdateInput {
  name: String
  state: StateUpdateOneInput
}

input CityUpdateOneInput {
  create: CityCreateInput
  connect: CityWhereUniqueInput
  delete: Boolean
  update: CityUpdateDataInput
  upsert: CityUpsertNestedInput
}

input CityUpsertNestedInput {
  update: CityUpdateDataInput!
  create: CityCreateInput!
}

input CityWhereInput {
  """Logical AND on all given filters."""
  AND: [CityWhereInput!]

  """Logical OR on all given filters."""
  OR: [CityWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CityWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  state: StateWhereInput
}

input CityWhereUniqueInput {
  id: ID
}

type Commune implements Node {
  id: ID!
  name: String!
  city(where: CityWhereInput): City!
}

"""A connection to a list of items."""
type CommuneConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommuneEdge]!
  aggregate: AggregateCommune!
}

input CommuneCreateInput {
  name: String!
  city: CityCreateOneInput!
}

input CommuneCreateOneInput {
  create: CommuneCreateInput
  connect: CommuneWhereUniqueInput
}

"""An edge in a connection."""
type CommuneEdge {
  """The item at the end of the edge."""
  node: Commune!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommuneOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CommunePreviousValues {
  id: ID!
  name: String!
}

type CommuneSubscriptionPayload {
  mutation: MutationType!
  node: Commune
  updatedFields: [String!]
  previousValues: CommunePreviousValues
}

input CommuneSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CommuneSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommuneSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommuneSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CommuneWhereInput
}

input CommuneUpdateDataInput {
  name: String
  city: CityUpdateOneInput
}

input CommuneUpdateInput {
  name: String
  city: CityUpdateOneInput
}

input CommuneUpdateOneInput {
  create: CommuneCreateInput
  connect: CommuneWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CommuneUpdateDataInput
  upsert: CommuneUpsertNestedInput
}

input CommuneUpsertNestedInput {
  update: CommuneUpdateDataInput!
  create: CommuneCreateInput!
}

input CommuneWhereInput {
  """Logical AND on all given filters."""
  AND: [CommuneWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommuneWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommuneWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  city: CityWhereInput
}

input CommuneWhereUniqueInput {
  id: ID
}

type Country implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type CountryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CountryEdge]!
  aggregate: AggregateCountry!
}

input CountryCreateInput {
  name: String!
}

input CountryCreateOneInput {
  create: CountryCreateInput
  connect: CountryWhereUniqueInput
}

"""An edge in a connection."""
type CountryEdge {
  """The item at the end of the edge."""
  node: Country!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CountryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CountryPreviousValues {
  id: ID!
  name: String!
}

type CountrySubscriptionPayload {
  mutation: MutationType!
  node: Country
  updatedFields: [String!]
  previousValues: CountryPreviousValues
}

input CountrySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CountrySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CountrySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CountrySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CountryWhereInput
}

input CountryUpdateDataInput {
  name: String
}

input CountryUpdateInput {
  name: String
}

input CountryUpdateOneInput {
  create: CountryCreateInput
  connect: CountryWhereUniqueInput
  delete: Boolean
  update: CountryUpdateDataInput
  upsert: CountryUpsertNestedInput
}

input CountryUpsertNestedInput {
  update: CountryUpdateDataInput!
  create: CountryCreateInput!
}

input CountryWhereInput {
  """Logical AND on all given filters."""
  AND: [CountryWhereInput!]

  """Logical OR on all given filters."""
  OR: [CountryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CountryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input CountryWhereUniqueInput {
  id: ID
}

type CreditCardInformation implements Node {
  id: ID!
  createdAt: DateTime!
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
  paymentAccount(where: PaymentAccountWhereInput): PaymentAccount
}

"""A connection to a list of items."""
type CreditCardInformationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CreditCardInformationEdge]!
  aggregate: AggregateCreditCardInformation!
}

input CreditCardInformationCreateInput {
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
  paymentAccount: PaymentAccountCreateOneWithoutCreditcardInput
}

input CreditCardInformationCreateOneWithoutPaymentAccountInput {
  create: CreditCardInformationCreateWithoutPaymentAccountInput
  connect: CreditCardInformationWhereUniqueInput
}

input CreditCardInformationCreateWithoutPaymentAccountInput {
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
}

"""An edge in a connection."""
type CreditCardInformationEdge {
  """The item at the end of the edge."""
  node: CreditCardInformation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CreditCardInformationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  cardNumber_ASC
  cardNumber_DESC
  expiresOnMonth_ASC
  expiresOnMonth_DESC
  expiresOnYear_ASC
  expiresOnYear_DESC
  securityCode_ASC
  securityCode_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  postalCode_ASC
  postalCode_DESC
  country_ASC
  country_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CreditCardInformationPreviousValues {
  id: ID!
  createdAt: DateTime!
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
}

type CreditCardInformationSubscriptionPayload {
  mutation: MutationType!
  node: CreditCardInformation
  updatedFields: [String!]
  previousValues: CreditCardInformationPreviousValues
}

input CreditCardInformationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CreditCardInformationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CreditCardInformationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CreditCardInformationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CreditCardInformationWhereInput
}

input CreditCardInformationUpdateInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount: PaymentAccountUpdateOneWithoutCreditcardInput
}

input CreditCardInformationUpdateOneWithoutPaymentAccountInput {
  create: CreditCardInformationCreateWithoutPaymentAccountInput
  connect: CreditCardInformationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CreditCardInformationUpdateWithoutPaymentAccountDataInput
  upsert: CreditCardInformationUpsertWithoutPaymentAccountInput
}

input CreditCardInformationUpdateWithoutPaymentAccountDataInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

input CreditCardInformationUpsertWithoutPaymentAccountInput {
  update: CreditCardInformationUpdateWithoutPaymentAccountDataInput!
  create: CreditCardInformationCreateWithoutPaymentAccountInput!
}

input CreditCardInformationWhereInput {
  """Logical AND on all given filters."""
  AND: [CreditCardInformationWhereInput!]

  """Logical OR on all given filters."""
  OR: [CreditCardInformationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CreditCardInformationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  cardNumber: String

  """All values that are not equal to given value."""
  cardNumber_not: String

  """All values that are contained in given list."""
  cardNumber_in: [String!]

  """All values that are not contained in given list."""
  cardNumber_not_in: [String!]

  """All values less than the given value."""
  cardNumber_lt: String

  """All values less than or equal the given value."""
  cardNumber_lte: String

  """All values greater than the given value."""
  cardNumber_gt: String

  """All values greater than or equal the given value."""
  cardNumber_gte: String

  """All values containing the given string."""
  cardNumber_contains: String

  """All values not containing the given string."""
  cardNumber_not_contains: String

  """All values starting with the given string."""
  cardNumber_starts_with: String

  """All values not starting with the given string."""
  cardNumber_not_starts_with: String

  """All values ending with the given string."""
  cardNumber_ends_with: String

  """All values not ending with the given string."""
  cardNumber_not_ends_with: String
  expiresOnMonth: Int

  """All values that are not equal to given value."""
  expiresOnMonth_not: Int

  """All values that are contained in given list."""
  expiresOnMonth_in: [Int!]

  """All values that are not contained in given list."""
  expiresOnMonth_not_in: [Int!]

  """All values less than the given value."""
  expiresOnMonth_lt: Int

  """All values less than or equal the given value."""
  expiresOnMonth_lte: Int

  """All values greater than the given value."""
  expiresOnMonth_gt: Int

  """All values greater than or equal the given value."""
  expiresOnMonth_gte: Int
  expiresOnYear: Int

  """All values that are not equal to given value."""
  expiresOnYear_not: Int

  """All values that are contained in given list."""
  expiresOnYear_in: [Int!]

  """All values that are not contained in given list."""
  expiresOnYear_not_in: [Int!]

  """All values less than the given value."""
  expiresOnYear_lt: Int

  """All values less than or equal the given value."""
  expiresOnYear_lte: Int

  """All values greater than the given value."""
  expiresOnYear_gt: Int

  """All values greater than or equal the given value."""
  expiresOnYear_gte: Int
  securityCode: String

  """All values that are not equal to given value."""
  securityCode_not: String

  """All values that are contained in given list."""
  securityCode_in: [String!]

  """All values that are not contained in given list."""
  securityCode_not_in: [String!]

  """All values less than the given value."""
  securityCode_lt: String

  """All values less than or equal the given value."""
  securityCode_lte: String

  """All values greater than the given value."""
  securityCode_gt: String

  """All values greater than or equal the given value."""
  securityCode_gte: String

  """All values containing the given string."""
  securityCode_contains: String

  """All values not containing the given string."""
  securityCode_not_contains: String

  """All values starting with the given string."""
  securityCode_starts_with: String

  """All values not starting with the given string."""
  securityCode_not_starts_with: String

  """All values ending with the given string."""
  securityCode_ends_with: String

  """All values not ending with the given string."""
  securityCode_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  postalCode: String

  """All values that are not equal to given value."""
  postalCode_not: String

  """All values that are contained in given list."""
  postalCode_in: [String!]

  """All values that are not contained in given list."""
  postalCode_not_in: [String!]

  """All values less than the given value."""
  postalCode_lt: String

  """All values less than or equal the given value."""
  postalCode_lte: String

  """All values greater than the given value."""
  postalCode_gt: String

  """All values greater than or equal the given value."""
  postalCode_gte: String

  """All values containing the given string."""
  postalCode_contains: String

  """All values not containing the given string."""
  postalCode_not_contains: String

  """All values starting with the given string."""
  postalCode_starts_with: String

  """All values not starting with the given string."""
  postalCode_not_starts_with: String

  """All values ending with the given string."""
  postalCode_ends_with: String

  """All values not ending with the given string."""
  postalCode_not_ends_with: String
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values less than the given value."""
  country_lt: String

  """All values less than or equal the given value."""
  country_lte: String

  """All values greater than the given value."""
  country_gt: String

  """All values greater than or equal the given value."""
  country_gte: String

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string."""
  country_not_ends_with: String
  paymentAccount: PaymentAccountWhereInput
}

input CreditCardInformationWhereUniqueInput {
  id: ID
}

enum CURRENCY {
  HTG
  USD
}

scalar DateTime

enum FREQUENCY {
  NEVER
  SOMETIMES
  OFTEN
  ALWAYS
}

type House implements Node {
  id: ID!
  name: String
  area: Int
  age: Int!
  shortDescription: String!
  description: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBaths: Int!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  amenities(where: AmenitiesWhereInput): Amenities!
  host(where: UserWhereInput): User!
  pricing(where: PricingWhereInput): Pricing!
  location(where: LocationWhereInput): Location!
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean!
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int!
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room!]
  views(where: ViewsWhereInput): Views
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking!]
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture!]
  contactInfoPayments(where: PaymentLanlordInfoWhereInput, orderBy: PaymentLanlordInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentLanlordInfo!]
  popularity: Int!
}

type House_Favorited implements Node {
  id: ID!
  createdAt: DateTime!
  user(where: UserWhereInput): User!
  house(where: HouseWhereInput): House!
}

"""A connection to a list of items."""
type House_FavoritedConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [House_FavoritedEdge]!
  aggregate: AggregateHouse_Favorited!
}

input House_FavoritedCreateInput {
  user: UserCreateOneInput!
  house: HouseCreateOneInput!
}

"""An edge in a connection."""
type House_FavoritedEdge {
  """The item at the end of the edge."""
  node: House_Favorited!

  """A cursor for use in pagination."""
  cursor: String!
}

enum House_FavoritedOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type House_FavoritedPreviousValues {
  id: ID!
  createdAt: DateTime!
}

type House_FavoritedSubscriptionPayload {
  mutation: MutationType!
  node: House_Favorited
  updatedFields: [String!]
  previousValues: House_FavoritedPreviousValues
}

input House_FavoritedSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [House_FavoritedSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [House_FavoritedSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [House_FavoritedSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: House_FavoritedWhereInput
}

input House_FavoritedUpdateInput {
  user: UserUpdateOneInput
  house: HouseUpdateOneInput
}

input House_FavoritedWhereInput {
  """Logical AND on all given filters."""
  AND: [House_FavoritedWhereInput!]

  """Logical OR on all given filters."""
  OR: [House_FavoritedWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [House_FavoritedWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  user: UserWhereInput
  house: HouseWhereInput
}

input House_FavoritedWhereUniqueInput {
  id: ID
}

enum HOUSE_LEASE_TYPE {
  WEEKLY
  MONTHLY
  YEARLY
}

enum House_RESIDENCY {
  BUSINESS
  RESIDENCE
}

enum HOUSE_TYPES {
  APARTMENT
  VILLA
  STUDIO
}

"""A connection to a list of items."""
type HouseConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [HouseEdge]!
  aggregate: AggregateHouse!
}

input HouseCreateInput {
  name: String
  area: Int
  age: Int
  shortDescription: String!
  description: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBaths: Int!
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int!
  popularity: Int
  reviews: ReviewCreateManyWithoutHouseInput
  amenities: AmenitiesCreateOneWithoutHouseInput!
  host: UserCreateOneWithoutOwnedHousesInput!
  pricing: PricingCreateOneWithoutHouseInput!
  location: LocationCreateOneInput!
  rooms: RoomCreateManyWithoutHouseInput
  views: ViewsCreateOneWithoutHouseInput
  bookings: BookingCreateManyWithoutHouseInput
  pictures: PictureCreateManyInput
  contactInfoPayments: PaymentLanlordInfoCreateManyWithoutHouseInput
}

input HouseCreateManyWithoutHostInput {
  create: [HouseCreateWithoutHostInput!]
  connect: [HouseWhereUniqueInput!]
}

input HouseCreateOneInput {
  create: HouseCreateInput
  connect: HouseWhereUniqueInput
}

input HouseCreateOneWithoutAmenitiesInput {
  create: HouseCreateWithoutAmenitiesInput
  connect: HouseWhereUniqueInput
}

input HouseCreateOneWithoutBookingsInput {
  create: HouseCreateWithoutBookingsInput
  connect: HouseWhereUniqueInput
}

input HouseCreateOneWithoutContactInfoPaymentsInput {
  create: HouseCreateWithoutContactInfoPaymentsInput
  connect: HouseWhereUniqueInput
}

input HouseCreateOneWithoutPricingInput {
  create: HouseCreateWithoutPricingInput
  connect: HouseWhereUniqueInput
}

input HouseCreateOneWithoutReviewsInput {
  create: HouseCreateWithoutReviewsInput
  connect: HouseWhereUniqueInput
}

input HouseCreateOneWithoutRoomsInput {
  create: HouseCreateWithoutRoomsInput
  connect: HouseWhereUniqueInput
}

input HouseCreateOneWithoutViewsInput {
  create: HouseCreateWithoutViewsInput
  connect: HouseWhereUniqueInput
}

input HouseCreateWithoutAmenitiesInput {
  name: String
  area: Int
  age: Int
  shortDescription: String!
  description: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBaths: Int!
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int!
  popularity: Int
  reviews: ReviewCreateManyWithoutHouseInput
  host: UserCreateOneWithoutOwnedHousesInput!
  pricing: PricingCreateOneWithoutHouseInput!
  location: LocationCreateOneInput!
  rooms: RoomCreateManyWithoutHouseInput
  views: ViewsCreateOneWithoutHouseInput
  bookings: BookingCreateManyWithoutHouseInput
  pictures: PictureCreateManyInput
  contactInfoPayments: PaymentLanlordInfoCreateManyWithoutHouseInput
}

input HouseCreateWithoutBookingsInput {
  name: String
  area: Int
  age: Int
  shortDescription: String!
  description: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBaths: Int!
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int!
  popularity: Int
  reviews: ReviewCreateManyWithoutHouseInput
  amenities: AmenitiesCreateOneWithoutHouseInput!
  host: UserCreateOneWithoutOwnedHousesInput!
  pricing: PricingCreateOneWithoutHouseInput!
  location: LocationCreateOneInput!
  rooms: RoomCreateManyWithoutHouseInput
  views: ViewsCreateOneWithoutHouseInput
  pictures: PictureCreateManyInput
  contactInfoPayments: PaymentLanlordInfoCreateManyWithoutHouseInput
}

input HouseCreateWithoutContactInfoPaymentsInput {
  name: String
  area: Int
  age: Int
  shortDescription: String!
  description: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBaths: Int!
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int!
  popularity: Int
  reviews: ReviewCreateManyWithoutHouseInput
  amenities: AmenitiesCreateOneWithoutHouseInput!
  host: UserCreateOneWithoutOwnedHousesInput!
  pricing: PricingCreateOneWithoutHouseInput!
  location: LocationCreateOneInput!
  rooms: RoomCreateManyWithoutHouseInput
  views: ViewsCreateOneWithoutHouseInput
  bookings: BookingCreateManyWithoutHouseInput
  pictures: PictureCreateManyInput
}

input HouseCreateWithoutHostInput {
  name: String
  area: Int
  age: Int
  shortDescription: String!
  description: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBaths: Int!
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int!
  popularity: Int
  reviews: ReviewCreateManyWithoutHouseInput
  amenities: AmenitiesCreateOneWithoutHouseInput!
  pricing: PricingCreateOneWithoutHouseInput!
  location: LocationCreateOneInput!
  rooms: RoomCreateManyWithoutHouseInput
  views: ViewsCreateOneWithoutHouseInput
  bookings: BookingCreateManyWithoutHouseInput
  pictures: PictureCreateManyInput
  contactInfoPayments: PaymentLanlordInfoCreateManyWithoutHouseInput
}

input HouseCreateWithoutPricingInput {
  name: String
  area: Int
  age: Int
  shortDescription: String!
  description: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBaths: Int!
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int!
  popularity: Int
  reviews: ReviewCreateManyWithoutHouseInput
  amenities: AmenitiesCreateOneWithoutHouseInput!
  host: UserCreateOneWithoutOwnedHousesInput!
  location: LocationCreateOneInput!
  rooms: RoomCreateManyWithoutHouseInput
  views: ViewsCreateOneWithoutHouseInput
  bookings: BookingCreateManyWithoutHouseInput
  pictures: PictureCreateManyInput
  contactInfoPayments: PaymentLanlordInfoCreateManyWithoutHouseInput
}

input HouseCreateWithoutReviewsInput {
  name: String
  area: Int
  age: Int
  shortDescription: String!
  description: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBaths: Int!
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int!
  popularity: Int
  amenities: AmenitiesCreateOneWithoutHouseInput!
  host: UserCreateOneWithoutOwnedHousesInput!
  pricing: PricingCreateOneWithoutHouseInput!
  location: LocationCreateOneInput!
  rooms: RoomCreateManyWithoutHouseInput
  views: ViewsCreateOneWithoutHouseInput
  bookings: BookingCreateManyWithoutHouseInput
  pictures: PictureCreateManyInput
  contactInfoPayments: PaymentLanlordInfoCreateManyWithoutHouseInput
}

input HouseCreateWithoutRoomsInput {
  name: String
  area: Int
  age: Int
  shortDescription: String!
  description: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBaths: Int!
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int!
  popularity: Int
  reviews: ReviewCreateManyWithoutHouseInput
  amenities: AmenitiesCreateOneWithoutHouseInput!
  host: UserCreateOneWithoutOwnedHousesInput!
  pricing: PricingCreateOneWithoutHouseInput!
  location: LocationCreateOneInput!
  views: ViewsCreateOneWithoutHouseInput
  bookings: BookingCreateManyWithoutHouseInput
  pictures: PictureCreateManyInput
  contactInfoPayments: PaymentLanlordInfoCreateManyWithoutHouseInput
}

input HouseCreateWithoutViewsInput {
  name: String
  area: Int
  age: Int
  shortDescription: String!
  description: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBaths: Int!
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int!
  popularity: Int
  reviews: ReviewCreateManyWithoutHouseInput
  amenities: AmenitiesCreateOneWithoutHouseInput!
  host: UserCreateOneWithoutOwnedHousesInput!
  pricing: PricingCreateOneWithoutHouseInput!
  location: LocationCreateOneInput!
  rooms: RoomCreateManyWithoutHouseInput
  bookings: BookingCreateManyWithoutHouseInput
  pictures: PictureCreateManyInput
  contactInfoPayments: PaymentLanlordInfoCreateManyWithoutHouseInput
}

"""An edge in a connection."""
type HouseEdge {
  """The item at the end of the edge."""
  node: House!

  """A cursor for use in pagination."""
  cursor: String!
}

enum HouseOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  area_ASC
  area_DESC
  age_ASC
  age_DESC
  shortDescription_ASC
  shortDescription_DESC
  description_ASC
  description_DESC
  maxGuests_ASC
  maxGuests_DESC
  numBedrooms_ASC
  numBedrooms_DESC
  numBaths_ASC
  numBaths_DESC
  leaseType_ASC
  leaseType_DESC
  verified_ASC
  verified_DESC
  type_ASC
  type_DESC
  residency_ASC
  residency_DESC
  lease_ASC
  lease_DESC
  popularity_ASC
  popularity_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type HousePreviousValues {
  id: ID!
  name: String
  area: Int
  age: Int!
  shortDescription: String!
  description: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBaths: Int!
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean!
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int!
  popularity: Int!
}

type HouseSubscriptionPayload {
  mutation: MutationType!
  node: House
  updatedFields: [String!]
  previousValues: HousePreviousValues
}

input HouseSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [HouseSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [HouseSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HouseSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: HouseWhereInput
}

input HouseUpdateDataInput {
  name: String
  area: Int
  age: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutHouseInput
  amenities: AmenitiesUpdateOneWithoutHouseInput
  host: UserUpdateOneWithoutOwnedHousesInput
  pricing: PricingUpdateOneWithoutHouseInput
  location: LocationUpdateOneInput
  rooms: RoomUpdateManyWithoutHouseInput
  views: ViewsUpdateOneWithoutHouseInput
  bookings: BookingUpdateManyWithoutHouseInput
  pictures: PictureUpdateManyInput
  contactInfoPayments: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

input HouseUpdateInput {
  name: String
  area: Int
  age: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutHouseInput
  amenities: AmenitiesUpdateOneWithoutHouseInput
  host: UserUpdateOneWithoutOwnedHousesInput
  pricing: PricingUpdateOneWithoutHouseInput
  location: LocationUpdateOneInput
  rooms: RoomUpdateManyWithoutHouseInput
  views: ViewsUpdateOneWithoutHouseInput
  bookings: BookingUpdateManyWithoutHouseInput
  pictures: PictureUpdateManyInput
  contactInfoPayments: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

input HouseUpdateManyWithoutHostInput {
  create: [HouseCreateWithoutHostInput!]
  connect: [HouseWhereUniqueInput!]
  disconnect: [HouseWhereUniqueInput!]
  delete: [HouseWhereUniqueInput!]
  update: [HouseUpdateWithWhereUniqueWithoutHostInput!]
  upsert: [HouseUpsertWithWhereUniqueWithoutHostInput!]
}

input HouseUpdateOneInput {
  create: HouseCreateInput
  connect: HouseWhereUniqueInput
  delete: Boolean
  update: HouseUpdateDataInput
  upsert: HouseUpsertNestedInput
}

input HouseUpdateOneWithoutAmenitiesInput {
  create: HouseCreateWithoutAmenitiesInput
  connect: HouseWhereUniqueInput
  delete: Boolean
  update: HouseUpdateWithoutAmenitiesDataInput
  upsert: HouseUpsertWithoutAmenitiesInput
}

input HouseUpdateOneWithoutBookingsInput {
  create: HouseCreateWithoutBookingsInput
  connect: HouseWhereUniqueInput
  delete: Boolean
  update: HouseUpdateWithoutBookingsDataInput
  upsert: HouseUpsertWithoutBookingsInput
}

input HouseUpdateOneWithoutContactInfoPaymentsInput {
  create: HouseCreateWithoutContactInfoPaymentsInput
  connect: HouseWhereUniqueInput
  delete: Boolean
  update: HouseUpdateWithoutContactInfoPaymentsDataInput
  upsert: HouseUpsertWithoutContactInfoPaymentsInput
}

input HouseUpdateOneWithoutPricingInput {
  create: HouseCreateWithoutPricingInput
  connect: HouseWhereUniqueInput
  delete: Boolean
  update: HouseUpdateWithoutPricingDataInput
  upsert: HouseUpsertWithoutPricingInput
}

input HouseUpdateOneWithoutReviewsInput {
  create: HouseCreateWithoutReviewsInput
  connect: HouseWhereUniqueInput
  delete: Boolean
  update: HouseUpdateWithoutReviewsDataInput
  upsert: HouseUpsertWithoutReviewsInput
}

input HouseUpdateOneWithoutRoomsInput {
  create: HouseCreateWithoutRoomsInput
  connect: HouseWhereUniqueInput
  delete: Boolean
  update: HouseUpdateWithoutRoomsDataInput
  upsert: HouseUpsertWithoutRoomsInput
}

input HouseUpdateOneWithoutViewsInput {
  create: HouseCreateWithoutViewsInput
  connect: HouseWhereUniqueInput
  delete: Boolean
  update: HouseUpdateWithoutViewsDataInput
  upsert: HouseUpsertWithoutViewsInput
}

input HouseUpdateWithoutAmenitiesDataInput {
  name: String
  area: Int
  age: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutHouseInput
  host: UserUpdateOneWithoutOwnedHousesInput
  pricing: PricingUpdateOneWithoutHouseInput
  location: LocationUpdateOneInput
  rooms: RoomUpdateManyWithoutHouseInput
  views: ViewsUpdateOneWithoutHouseInput
  bookings: BookingUpdateManyWithoutHouseInput
  pictures: PictureUpdateManyInput
  contactInfoPayments: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

input HouseUpdateWithoutBookingsDataInput {
  name: String
  area: Int
  age: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutHouseInput
  amenities: AmenitiesUpdateOneWithoutHouseInput
  host: UserUpdateOneWithoutOwnedHousesInput
  pricing: PricingUpdateOneWithoutHouseInput
  location: LocationUpdateOneInput
  rooms: RoomUpdateManyWithoutHouseInput
  views: ViewsUpdateOneWithoutHouseInput
  pictures: PictureUpdateManyInput
  contactInfoPayments: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

input HouseUpdateWithoutContactInfoPaymentsDataInput {
  name: String
  area: Int
  age: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutHouseInput
  amenities: AmenitiesUpdateOneWithoutHouseInput
  host: UserUpdateOneWithoutOwnedHousesInput
  pricing: PricingUpdateOneWithoutHouseInput
  location: LocationUpdateOneInput
  rooms: RoomUpdateManyWithoutHouseInput
  views: ViewsUpdateOneWithoutHouseInput
  bookings: BookingUpdateManyWithoutHouseInput
  pictures: PictureUpdateManyInput
}

input HouseUpdateWithoutHostDataInput {
  name: String
  area: Int
  age: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutHouseInput
  amenities: AmenitiesUpdateOneWithoutHouseInput
  pricing: PricingUpdateOneWithoutHouseInput
  location: LocationUpdateOneInput
  rooms: RoomUpdateManyWithoutHouseInput
  views: ViewsUpdateOneWithoutHouseInput
  bookings: BookingUpdateManyWithoutHouseInput
  pictures: PictureUpdateManyInput
  contactInfoPayments: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

input HouseUpdateWithoutPricingDataInput {
  name: String
  area: Int
  age: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutHouseInput
  amenities: AmenitiesUpdateOneWithoutHouseInput
  host: UserUpdateOneWithoutOwnedHousesInput
  location: LocationUpdateOneInput
  rooms: RoomUpdateManyWithoutHouseInput
  views: ViewsUpdateOneWithoutHouseInput
  bookings: BookingUpdateManyWithoutHouseInput
  pictures: PictureUpdateManyInput
  contactInfoPayments: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

input HouseUpdateWithoutReviewsDataInput {
  name: String
  area: Int
  age: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int
  popularity: Int
  amenities: AmenitiesUpdateOneWithoutHouseInput
  host: UserUpdateOneWithoutOwnedHousesInput
  pricing: PricingUpdateOneWithoutHouseInput
  location: LocationUpdateOneInput
  rooms: RoomUpdateManyWithoutHouseInput
  views: ViewsUpdateOneWithoutHouseInput
  bookings: BookingUpdateManyWithoutHouseInput
  pictures: PictureUpdateManyInput
  contactInfoPayments: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

input HouseUpdateWithoutRoomsDataInput {
  name: String
  area: Int
  age: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutHouseInput
  amenities: AmenitiesUpdateOneWithoutHouseInput
  host: UserUpdateOneWithoutOwnedHousesInput
  pricing: PricingUpdateOneWithoutHouseInput
  location: LocationUpdateOneInput
  views: ViewsUpdateOneWithoutHouseInput
  bookings: BookingUpdateManyWithoutHouseInput
  pictures: PictureUpdateManyInput
  contactInfoPayments: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

input HouseUpdateWithoutViewsDataInput {
  name: String
  area: Int
  age: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType: HOUSE_LEASE_TYPE
  verified: Boolean
  type: HOUSE_TYPES
  residency: House_RESIDENCY
  lease: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutHouseInput
  amenities: AmenitiesUpdateOneWithoutHouseInput
  host: UserUpdateOneWithoutOwnedHousesInput
  pricing: PricingUpdateOneWithoutHouseInput
  location: LocationUpdateOneInput
  rooms: RoomUpdateManyWithoutHouseInput
  bookings: BookingUpdateManyWithoutHouseInput
  pictures: PictureUpdateManyInput
  contactInfoPayments: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

input HouseUpdateWithWhereUniqueWithoutHostInput {
  where: HouseWhereUniqueInput!
  data: HouseUpdateWithoutHostDataInput!
}

input HouseUpsertNestedInput {
  update: HouseUpdateDataInput!
  create: HouseCreateInput!
}

input HouseUpsertWithoutAmenitiesInput {
  update: HouseUpdateWithoutAmenitiesDataInput!
  create: HouseCreateWithoutAmenitiesInput!
}

input HouseUpsertWithoutBookingsInput {
  update: HouseUpdateWithoutBookingsDataInput!
  create: HouseCreateWithoutBookingsInput!
}

input HouseUpsertWithoutContactInfoPaymentsInput {
  update: HouseUpdateWithoutContactInfoPaymentsDataInput!
  create: HouseCreateWithoutContactInfoPaymentsInput!
}

input HouseUpsertWithoutPricingInput {
  update: HouseUpdateWithoutPricingDataInput!
  create: HouseCreateWithoutPricingInput!
}

input HouseUpsertWithoutReviewsInput {
  update: HouseUpdateWithoutReviewsDataInput!
  create: HouseCreateWithoutReviewsInput!
}

input HouseUpsertWithoutRoomsInput {
  update: HouseUpdateWithoutRoomsDataInput!
  create: HouseCreateWithoutRoomsInput!
}

input HouseUpsertWithoutViewsInput {
  update: HouseUpdateWithoutViewsDataInput!
  create: HouseCreateWithoutViewsInput!
}

input HouseUpsertWithWhereUniqueWithoutHostInput {
  where: HouseWhereUniqueInput!
  update: HouseUpdateWithoutHostDataInput!
  create: HouseCreateWithoutHostInput!
}

input HouseWhereInput {
  """Logical AND on all given filters."""
  AND: [HouseWhereInput!]

  """Logical OR on all given filters."""
  OR: [HouseWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HouseWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  area: Int

  """All values that are not equal to given value."""
  area_not: Int

  """All values that are contained in given list."""
  area_in: [Int!]

  """All values that are not contained in given list."""
  area_not_in: [Int!]

  """All values less than the given value."""
  area_lt: Int

  """All values less than or equal the given value."""
  area_lte: Int

  """All values greater than the given value."""
  area_gt: Int

  """All values greater than or equal the given value."""
  area_gte: Int
  age: Int

  """All values that are not equal to given value."""
  age_not: Int

  """All values that are contained in given list."""
  age_in: [Int!]

  """All values that are not contained in given list."""
  age_not_in: [Int!]

  """All values less than the given value."""
  age_lt: Int

  """All values less than or equal the given value."""
  age_lte: Int

  """All values greater than the given value."""
  age_gt: Int

  """All values greater than or equal the given value."""
  age_gte: Int
  shortDescription: String

  """All values that are not equal to given value."""
  shortDescription_not: String

  """All values that are contained in given list."""
  shortDescription_in: [String!]

  """All values that are not contained in given list."""
  shortDescription_not_in: [String!]

  """All values less than the given value."""
  shortDescription_lt: String

  """All values less than or equal the given value."""
  shortDescription_lte: String

  """All values greater than the given value."""
  shortDescription_gt: String

  """All values greater than or equal the given value."""
  shortDescription_gte: String

  """All values containing the given string."""
  shortDescription_contains: String

  """All values not containing the given string."""
  shortDescription_not_contains: String

  """All values starting with the given string."""
  shortDescription_starts_with: String

  """All values not starting with the given string."""
  shortDescription_not_starts_with: String

  """All values ending with the given string."""
  shortDescription_ends_with: String

  """All values not ending with the given string."""
  shortDescription_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  maxGuests: Int

  """All values that are not equal to given value."""
  maxGuests_not: Int

  """All values that are contained in given list."""
  maxGuests_in: [Int!]

  """All values that are not contained in given list."""
  maxGuests_not_in: [Int!]

  """All values less than the given value."""
  maxGuests_lt: Int

  """All values less than or equal the given value."""
  maxGuests_lte: Int

  """All values greater than the given value."""
  maxGuests_gt: Int

  """All values greater than or equal the given value."""
  maxGuests_gte: Int
  numBedrooms: Int

  """All values that are not equal to given value."""
  numBedrooms_not: Int

  """All values that are contained in given list."""
  numBedrooms_in: [Int!]

  """All values that are not contained in given list."""
  numBedrooms_not_in: [Int!]

  """All values less than the given value."""
  numBedrooms_lt: Int

  """All values less than or equal the given value."""
  numBedrooms_lte: Int

  """All values greater than the given value."""
  numBedrooms_gt: Int

  """All values greater than or equal the given value."""
  numBedrooms_gte: Int
  numBaths: Int

  """All values that are not equal to given value."""
  numBaths_not: Int

  """All values that are contained in given list."""
  numBaths_in: [Int!]

  """All values that are not contained in given list."""
  numBaths_not_in: [Int!]

  """All values less than the given value."""
  numBaths_lt: Int

  """All values less than or equal the given value."""
  numBaths_lte: Int

  """All values greater than the given value."""
  numBaths_gt: Int

  """All values greater than or equal the given value."""
  numBaths_gte: Int
  leaseType: HOUSE_LEASE_TYPE

  """All values that are not equal to given value."""
  leaseType_not: HOUSE_LEASE_TYPE

  """All values that are contained in given list."""
  leaseType_in: [HOUSE_LEASE_TYPE!]

  """All values that are not contained in given list."""
  leaseType_not_in: [HOUSE_LEASE_TYPE!]
  verified: Boolean

  """All values that are not equal to given value."""
  verified_not: Boolean
  type: HOUSE_TYPES

  """All values that are not equal to given value."""
  type_not: HOUSE_TYPES

  """All values that are contained in given list."""
  type_in: [HOUSE_TYPES!]

  """All values that are not contained in given list."""
  type_not_in: [HOUSE_TYPES!]
  residency: House_RESIDENCY

  """All values that are not equal to given value."""
  residency_not: House_RESIDENCY

  """All values that are contained in given list."""
  residency_in: [House_RESIDENCY!]

  """All values that are not contained in given list."""
  residency_not_in: [House_RESIDENCY!]
  lease: Int

  """All values that are not equal to given value."""
  lease_not: Int

  """All values that are contained in given list."""
  lease_in: [Int!]

  """All values that are not contained in given list."""
  lease_not_in: [Int!]

  """All values less than the given value."""
  lease_lt: Int

  """All values less than or equal the given value."""
  lease_lte: Int

  """All values greater than the given value."""
  lease_gt: Int

  """All values greater than or equal the given value."""
  lease_gte: Int
  popularity: Int

  """All values that are not equal to given value."""
  popularity_not: Int

  """All values that are contained in given list."""
  popularity_in: [Int!]

  """All values that are not contained in given list."""
  popularity_not_in: [Int!]

  """All values less than the given value."""
  popularity_lt: Int

  """All values less than or equal the given value."""
  popularity_lte: Int

  """All values greater than the given value."""
  popularity_gt: Int

  """All values greater than or equal the given value."""
  popularity_gte: Int
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  amenities: AmenitiesWhereInput
  host: UserWhereInput
  pricing: PricingWhereInput
  location: LocationWhereInput
  rooms_every: RoomWhereInput
  rooms_some: RoomWhereInput
  rooms_none: RoomWhereInput
  views: ViewsWhereInput
  bookings_every: BookingWhereInput
  bookings_some: BookingWhereInput
  bookings_none: BookingWhereInput
  pictures_every: PictureWhereInput
  pictures_some: PictureWhereInput
  pictures_none: PictureWhereInput
  contactInfoPayments_every: PaymentLanlordInfoWhereInput
  contactInfoPayments_some: PaymentLanlordInfoWhereInput
  contactInfoPayments_none: PaymentLanlordInfoWhereInput
}

input HouseWhereUniqueInput {
  id: ID
}

type Location implements Node {
  id: ID!
  lat: Float
  lng: Float
  address: String
  commune(where: CommuneWhereInput): Commune
}

"""A connection to a list of items."""
type LocationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  lat: Float
  lng: Float
  address: String
  commune: CommuneCreateOneInput
}

input LocationCreateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
}

"""An edge in a connection."""
type LocationEdge {
  """The item at the end of the edge."""
  node: Location!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  lat_ASC
  lat_DESC
  lng_ASC
  lng_DESC
  address_ASC
  address_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LocationPreviousValues {
  id: ID!
  lat: Float
  lng: Float
  address: String
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
}

input LocationUpdateDataInput {
  lat: Float
  lng: Float
  address: String
  commune: CommuneUpdateOneInput
}

input LocationUpdateInput {
  lat: Float
  lng: Float
  address: String
  commune: CommuneUpdateOneInput
}

input LocationUpdateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  lat: Float

  """All values that are not equal to given value."""
  lat_not: Float

  """All values that are contained in given list."""
  lat_in: [Float!]

  """All values that are not contained in given list."""
  lat_not_in: [Float!]

  """All values less than the given value."""
  lat_lt: Float

  """All values less than or equal the given value."""
  lat_lte: Float

  """All values greater than the given value."""
  lat_gt: Float

  """All values greater than or equal the given value."""
  lat_gte: Float
  lng: Float

  """All values that are not equal to given value."""
  lng_not: Float

  """All values that are contained in given list."""
  lng_in: [Float!]

  """All values that are not contained in given list."""
  lng_not_in: [Float!]

  """All values less than the given value."""
  lng_lt: Float

  """All values less than or equal the given value."""
  lng_lte: Float

  """All values greater than the given value."""
  lng_gt: Float

  """All values greater than or equal the given value."""
  lng_gte: Float
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  commune: CommuneWhereInput
}

input LocationWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createRoom(data: RoomCreateInput!): Room!
  createPricing(data: PricingCreateInput!): Pricing!
  createViews(data: ViewsCreateInput!): Views!
  createAmenities(data: AmenitiesCreateInput!): Amenities!
  createReview(data: ReviewCreateInput!): Review!
  createBooking(data: BookingCreateInput!): Booking!
  createHouse_Favorited(data: House_FavoritedCreateInput!): House_Favorited!
  createNegotiation(data: NegotiationCreateInput!): Negotiation!
  createPaymentHouse(data: PaymentHouseCreateInput!): PaymentHouse!
  createPaymentAccount(data: PaymentAccountCreateInput!): PaymentAccount!
  createPaypalInformation(data: PaypalInformationCreateInput!): PaypalInformation!
  createCreditCardInformation(data: CreditCardInformationCreateInput!): CreditCardInformation!
  createPaymentLanlordInfo(data: PaymentLanlordInfoCreateInput!): PaymentLanlordInfo!
  createNotification(data: NotificationCreateInput!): Notification!
  createLocation(data: LocationCreateInput!): Location!
  createCommune(data: CommuneCreateInput!): Commune!
  createCountry(data: CountryCreateInput!): Country!
  createState(data: StateCreateInput!): State!
  createUser(data: UserCreateInput!): User!
  createHouse(data: HouseCreateInput!): House!
  createVideo(data: VideoCreateInput!): Video!
  createPicture(data: PictureCreateInput!): Picture!
  createCity(data: CityCreateInput!): City!
  updateRoom(data: RoomUpdateInput!, where: RoomWhereUniqueInput!): Room
  updatePricing(data: PricingUpdateInput!, where: PricingWhereUniqueInput!): Pricing
  updateViews(data: ViewsUpdateInput!, where: ViewsWhereUniqueInput!): Views
  updateAmenities(data: AmenitiesUpdateInput!, where: AmenitiesWhereUniqueInput!): Amenities
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateBooking(data: BookingUpdateInput!, where: BookingWhereUniqueInput!): Booking
  updateHouse_Favorited(data: House_FavoritedUpdateInput!, where: House_FavoritedWhereUniqueInput!): House_Favorited
  updateNegotiation(data: NegotiationUpdateInput!, where: NegotiationWhereUniqueInput!): Negotiation
  updatePaymentHouse(data: PaymentHouseUpdateInput!, where: PaymentHouseWhereUniqueInput!): PaymentHouse
  updatePaymentAccount(data: PaymentAccountUpdateInput!, where: PaymentAccountWhereUniqueInput!): PaymentAccount
  updatePaypalInformation(data: PaypalInformationUpdateInput!, where: PaypalInformationWhereUniqueInput!): PaypalInformation
  updateCreditCardInformation(data: CreditCardInformationUpdateInput!, where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  updatePaymentLanlordInfo(data: PaymentLanlordInfoUpdateInput!, where: PaymentLanlordInfoWhereUniqueInput!): PaymentLanlordInfo
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateCommune(data: CommuneUpdateInput!, where: CommuneWhereUniqueInput!): Commune
  updateCountry(data: CountryUpdateInput!, where: CountryWhereUniqueInput!): Country
  updateState(data: StateUpdateInput!, where: StateWhereUniqueInput!): State
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateHouse(data: HouseUpdateInput!, where: HouseWhereUniqueInput!): House
  updateCity(data: CityUpdateInput!, where: CityWhereUniqueInput!): City
  deleteRoom(where: RoomWhereUniqueInput!): Room
  deletePricing(where: PricingWhereUniqueInput!): Pricing
  deleteViews(where: ViewsWhereUniqueInput!): Views
  deleteAmenities(where: AmenitiesWhereUniqueInput!): Amenities
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteBooking(where: BookingWhereUniqueInput!): Booking
  deleteHouse_Favorited(where: House_FavoritedWhereUniqueInput!): House_Favorited
  deleteNegotiation(where: NegotiationWhereUniqueInput!): Negotiation
  deletePaymentHouse(where: PaymentHouseWhereUniqueInput!): PaymentHouse
  deletePaymentAccount(where: PaymentAccountWhereUniqueInput!): PaymentAccount
  deletePaypalInformation(where: PaypalInformationWhereUniqueInput!): PaypalInformation
  deleteCreditCardInformation(where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  deletePaymentLanlordInfo(where: PaymentLanlordInfoWhereUniqueInput!): PaymentLanlordInfo
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteCommune(where: CommuneWhereUniqueInput!): Commune
  deleteCountry(where: CountryWhereUniqueInput!): Country
  deleteState(where: StateWhereUniqueInput!): State
  deleteUser(where: UserWhereUniqueInput!): User
  deleteHouse(where: HouseWhereUniqueInput!): House
  deleteCity(where: CityWhereUniqueInput!): City
  upsertRoom(where: RoomWhereUniqueInput!, create: RoomCreateInput!, update: RoomUpdateInput!): Room!
  upsertPricing(where: PricingWhereUniqueInput!, create: PricingCreateInput!, update: PricingUpdateInput!): Pricing!
  upsertViews(where: ViewsWhereUniqueInput!, create: ViewsCreateInput!, update: ViewsUpdateInput!): Views!
  upsertAmenities(where: AmenitiesWhereUniqueInput!, create: AmenitiesCreateInput!, update: AmenitiesUpdateInput!): Amenities!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  upsertBooking(where: BookingWhereUniqueInput!, create: BookingCreateInput!, update: BookingUpdateInput!): Booking!
  upsertHouse_Favorited(where: House_FavoritedWhereUniqueInput!, create: House_FavoritedCreateInput!, update: House_FavoritedUpdateInput!): House_Favorited!
  upsertNegotiation(where: NegotiationWhereUniqueInput!, create: NegotiationCreateInput!, update: NegotiationUpdateInput!): Negotiation!
  upsertPaymentHouse(where: PaymentHouseWhereUniqueInput!, create: PaymentHouseCreateInput!, update: PaymentHouseUpdateInput!): PaymentHouse!
  upsertPaymentAccount(where: PaymentAccountWhereUniqueInput!, create: PaymentAccountCreateInput!, update: PaymentAccountUpdateInput!): PaymentAccount!
  upsertPaypalInformation(where: PaypalInformationWhereUniqueInput!, create: PaypalInformationCreateInput!, update: PaypalInformationUpdateInput!): PaypalInformation!
  upsertCreditCardInformation(where: CreditCardInformationWhereUniqueInput!, create: CreditCardInformationCreateInput!, update: CreditCardInformationUpdateInput!): CreditCardInformation!
  upsertPaymentLanlordInfo(where: PaymentLanlordInfoWhereUniqueInput!, create: PaymentLanlordInfoCreateInput!, update: PaymentLanlordInfoUpdateInput!): PaymentLanlordInfo!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertCommune(where: CommuneWhereUniqueInput!, create: CommuneCreateInput!, update: CommuneUpdateInput!): Commune!
  upsertCountry(where: CountryWhereUniqueInput!, create: CountryCreateInput!, update: CountryUpdateInput!): Country!
  upsertState(where: StateWhereUniqueInput!, create: StateCreateInput!, update: StateUpdateInput!): State!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertHouse(where: HouseWhereUniqueInput!, create: HouseCreateInput!, update: HouseUpdateInput!): House!
  upsertCity(where: CityWhereUniqueInput!, create: CityCreateInput!, update: CityUpdateInput!): City!
  updateManyRooms(data: RoomUpdateInput!, where: RoomWhereInput): BatchPayload!
  updateManyPricings(data: PricingUpdateInput!, where: PricingWhereInput): BatchPayload!
  updateManyViewses(data: ViewsUpdateInput!, where: ViewsWhereInput): BatchPayload!
  updateManyAmenitieses(data: AmenitiesUpdateInput!, where: AmenitiesWhereInput): BatchPayload!
  updateManyReviews(data: ReviewUpdateInput!, where: ReviewWhereInput): BatchPayload!
  updateManyBookings(data: BookingUpdateInput!, where: BookingWhereInput): BatchPayload!
  updateManyHouse_Favoriteds(data: House_FavoritedUpdateInput!, where: House_FavoritedWhereInput): BatchPayload!
  updateManyNegotiations(data: NegotiationUpdateInput!, where: NegotiationWhereInput): BatchPayload!
  updateManyPaymentHouses(data: PaymentHouseUpdateInput!, where: PaymentHouseWhereInput): BatchPayload!
  updateManyPaymentAccounts(data: PaymentAccountUpdateInput!, where: PaymentAccountWhereInput): BatchPayload!
  updateManyPaypalInformations(data: PaypalInformationUpdateInput!, where: PaypalInformationWhereInput): BatchPayload!
  updateManyCreditCardInformations(data: CreditCardInformationUpdateInput!, where: CreditCardInformationWhereInput): BatchPayload!
  updateManyPaymentLanlordInfoes(data: PaymentLanlordInfoUpdateInput!, where: PaymentLanlordInfoWhereInput): BatchPayload!
  updateManyNotifications(data: NotificationUpdateInput!, where: NotificationWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateInput!, where: LocationWhereInput): BatchPayload!
  updateManyCommunes(data: CommuneUpdateInput!, where: CommuneWhereInput): BatchPayload!
  updateManyCountries(data: CountryUpdateInput!, where: CountryWhereInput): BatchPayload!
  updateManyStates(data: StateUpdateInput!, where: StateWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyHouses(data: HouseUpdateInput!, where: HouseWhereInput): BatchPayload!
  updateManyVideos(data: VideoUpdateInput!, where: VideoWhereInput): BatchPayload!
  updateManyPictures(data: PictureUpdateInput!, where: PictureWhereInput): BatchPayload!
  updateManyCities(data: CityUpdateInput!, where: CityWhereInput): BatchPayload!
  deleteManyRooms(where: RoomWhereInput): BatchPayload!
  deleteManyPricings(where: PricingWhereInput): BatchPayload!
  deleteManyViewses(where: ViewsWhereInput): BatchPayload!
  deleteManyAmenitieses(where: AmenitiesWhereInput): BatchPayload!
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  deleteManyBookings(where: BookingWhereInput): BatchPayload!
  deleteManyHouse_Favoriteds(where: House_FavoritedWhereInput): BatchPayload!
  deleteManyNegotiations(where: NegotiationWhereInput): BatchPayload!
  deleteManyPaymentHouses(where: PaymentHouseWhereInput): BatchPayload!
  deleteManyPaymentAccounts(where: PaymentAccountWhereInput): BatchPayload!
  deleteManyPaypalInformations(where: PaypalInformationWhereInput): BatchPayload!
  deleteManyCreditCardInformations(where: CreditCardInformationWhereInput): BatchPayload!
  deleteManyPaymentLanlordInfoes(where: PaymentLanlordInfoWhereInput): BatchPayload!
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyCommunes(where: CommuneWhereInput): BatchPayload!
  deleteManyCountries(where: CountryWhereInput): BatchPayload!
  deleteManyStates(where: StateWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyHouses(where: HouseWhereInput): BatchPayload!
  deleteManyVideos(where: VideoWhereInput): BatchPayload!
  deleteManyPictures(where: PictureWhereInput): BatchPayload!
  deleteManyCities(where: CityWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type Negotiation implements Node {
  id: ID!
  createdAt: DateTime!
  negotiator(where: UserWhereInput): User!
  House(where: HouseWhereInput): House!
  offer: Float!
  status: NEGOTIATION_TYPE
}

enum NEGOTIATION_TYPE {
  PENDING
  ACCEPTED
  REFUSED
}

"""A connection to a list of items."""
type NegotiationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NegotiationEdge]!
  aggregate: AggregateNegotiation!
}

input NegotiationCreateInput {
  offer: Float!
  status: NEGOTIATION_TYPE
  negotiator: UserCreateOneInput!
  House: HouseCreateOneInput!
}

"""An edge in a connection."""
type NegotiationEdge {
  """The item at the end of the edge."""
  node: Negotiation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NegotiationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  offer_ASC
  offer_DESC
  status_ASC
  status_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NegotiationPreviousValues {
  id: ID!
  createdAt: DateTime!
  offer: Float!
  status: NEGOTIATION_TYPE
}

type NegotiationSubscriptionPayload {
  mutation: MutationType!
  node: Negotiation
  updatedFields: [String!]
  previousValues: NegotiationPreviousValues
}

input NegotiationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NegotiationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NegotiationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NegotiationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NegotiationWhereInput
}

input NegotiationUpdateInput {
  offer: Float
  status: NEGOTIATION_TYPE
  negotiator: UserUpdateOneInput
  House: HouseUpdateOneInput
}

input NegotiationWhereInput {
  """Logical AND on all given filters."""
  AND: [NegotiationWhereInput!]

  """Logical OR on all given filters."""
  OR: [NegotiationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NegotiationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  offer: Float

  """All values that are not equal to given value."""
  offer_not: Float

  """All values that are contained in given list."""
  offer_in: [Float!]

  """All values that are not contained in given list."""
  offer_not_in: [Float!]

  """All values less than the given value."""
  offer_lt: Float

  """All values less than or equal the given value."""
  offer_lte: Float

  """All values greater than the given value."""
  offer_gt: Float

  """All values greater than or equal the given value."""
  offer_gte: Float
  status: NEGOTIATION_TYPE

  """All values that are not equal to given value."""
  status_not: NEGOTIATION_TYPE

  """All values that are contained in given list."""
  status_in: [NEGOTIATION_TYPE!]

  """All values that are not contained in given list."""
  status_not_in: [NEGOTIATION_TYPE!]
  negotiator: UserWhereInput
  House: HouseWhereInput
}

input NegotiationWhereUniqueInput {
  id: ID
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Notification implements Node {
  id: ID!
  createdAt: DateTime!
  type: NOTIFICATION_TYPE
  user(where: UserWhereInput): User!
  link: String!
  readDate: DateTime!
}

enum NOTIFICATION_TYPE {
  OFFER
  INSTANT_BOOK
  RESPONSIVENESS
  NEW_AMENITIES
  HOUSE_RULES
}

"""A connection to a list of items."""
type NotificationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NotificationEdge]!
  aggregate: AggregateNotification!
}

input NotificationCreateInput {
  type: NOTIFICATION_TYPE
  link: String!
  readDate: DateTime!
  user: UserCreateOneWithoutNotificationsInput!
}

input NotificationCreateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
}

input NotificationCreateWithoutUserInput {
  type: NOTIFICATION_TYPE
  link: String!
  readDate: DateTime!
}

"""An edge in a connection."""
type NotificationEdge {
  """The item at the end of the edge."""
  node: Notification!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NotificationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  type_ASC
  type_DESC
  link_ASC
  link_DESC
  readDate_ASC
  readDate_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NotificationPreviousValues {
  id: ID!
  createdAt: DateTime!
  type: NOTIFICATION_TYPE
  link: String!
  readDate: DateTime!
}

type NotificationSubscriptionPayload {
  mutation: MutationType!
  node: Notification
  updatedFields: [String!]
  previousValues: NotificationPreviousValues
}

input NotificationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NotificationWhereInput
}

input NotificationUpdateInput {
  type: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
  user: UserUpdateOneWithoutNotificationsInput
}

input NotificationUpdateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  delete: [NotificationWhereUniqueInput!]
  update: [NotificationUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [NotificationUpsertWithWhereUniqueWithoutUserInput!]
}

input NotificationUpdateWithoutUserDataInput {
  type: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
}

input NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  data: NotificationUpdateWithoutUserDataInput!
}

input NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  update: NotificationUpdateWithoutUserDataInput!
  create: NotificationCreateWithoutUserInput!
}

input NotificationWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  type: NOTIFICATION_TYPE

  """All values that are not equal to given value."""
  type_not: NOTIFICATION_TYPE

  """All values that are contained in given list."""
  type_in: [NOTIFICATION_TYPE!]

  """All values that are not contained in given list."""
  type_not_in: [NOTIFICATION_TYPE!]
  link: String

  """All values that are not equal to given value."""
  link_not: String

  """All values that are contained in given list."""
  link_in: [String!]

  """All values that are not contained in given list."""
  link_not_in: [String!]

  """All values less than the given value."""
  link_lt: String

  """All values less than or equal the given value."""
  link_lte: String

  """All values greater than the given value."""
  link_gt: String

  """All values greater than or equal the given value."""
  link_gte: String

  """All values containing the given string."""
  link_contains: String

  """All values not containing the given string."""
  link_not_contains: String

  """All values starting with the given string."""
  link_starts_with: String

  """All values not starting with the given string."""
  link_not_starts_with: String

  """All values ending with the given string."""
  link_ends_with: String

  """All values not ending with the given string."""
  link_not_ends_with: String
  readDate: DateTime

  """All values that are not equal to given value."""
  readDate_not: DateTime

  """All values that are contained in given list."""
  readDate_in: [DateTime!]

  """All values that are not contained in given list."""
  readDate_not_in: [DateTime!]

  """All values less than the given value."""
  readDate_lt: DateTime

  """All values less than or equal the given value."""
  readDate_lte: DateTime

  """All values greater than the given value."""
  readDate_gt: DateTime

  """All values greater than or equal the given value."""
  readDate_gte: DateTime
  user: UserWhereInput
}

input NotificationWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PAYMENT_PROVIDER {
  PAYPAL
  CREDIT_CARD
}

type PaymentAccount implements Node {
  id: ID!
  createdAt: DateTime!
  type: PAYMENT_PROVIDER
  user(where: UserWhereInput): User!
  payments(where: PaymentHouseWhereInput, orderBy: PaymentHouseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentHouse!]
  paypal(where: PaypalInformationWhereInput): PaypalInformation
  creditcard(where: CreditCardInformationWhereInput): CreditCardInformation
}

"""A connection to a list of items."""
type PaymentAccountConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaymentAccountEdge]!
  aggregate: AggregatePaymentAccount!
}

input PaymentAccountCreateInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneInput!
  payments: PaymentHouseCreateManyWithoutPaymentMethodInput
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateOneWithoutCreditcardInput {
  create: PaymentAccountCreateWithoutCreditcardInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateOneWithoutPaymentsInput {
  create: PaymentAccountCreateWithoutPaymentsInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateOneWithoutPaypalInput {
  create: PaymentAccountCreateWithoutPaypalInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateWithoutCreditcardInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneInput!
  payments: PaymentHouseCreateManyWithoutPaymentMethodInput
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateWithoutPaymentsInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneInput!
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateWithoutPaypalInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneInput!
  payments: PaymentHouseCreateManyWithoutPaymentMethodInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

"""An edge in a connection."""
type PaymentAccountEdge {
  """The item at the end of the edge."""
  node: PaymentAccount!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaymentAccountOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaymentAccountPreviousValues {
  id: ID!
  createdAt: DateTime!
  type: PAYMENT_PROVIDER
}

type PaymentAccountSubscriptionPayload {
  mutation: MutationType!
  node: PaymentAccount
  updatedFields: [String!]
  previousValues: PaymentAccountPreviousValues
}

input PaymentAccountSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentAccountSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentAccountSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentAccountSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaymentAccountWhereInput
}

input PaymentAccountUpdateInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneInput
  payments: PaymentHouseUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateOneWithoutCreditcardInput {
  create: PaymentAccountCreateWithoutCreditcardInput
  connect: PaymentAccountWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PaymentAccountUpdateWithoutCreditcardDataInput
  upsert: PaymentAccountUpsertWithoutCreditcardInput
}

input PaymentAccountUpdateOneWithoutPaymentsInput {
  create: PaymentAccountCreateWithoutPaymentsInput
  connect: PaymentAccountWhereUniqueInput
  delete: Boolean
  update: PaymentAccountUpdateWithoutPaymentsDataInput
  upsert: PaymentAccountUpsertWithoutPaymentsInput
}

input PaymentAccountUpdateOneWithoutPaypalInput {
  create: PaymentAccountCreateWithoutPaypalInput
  connect: PaymentAccountWhereUniqueInput
  delete: Boolean
  update: PaymentAccountUpdateWithoutPaypalDataInput
  upsert: PaymentAccountUpsertWithoutPaypalInput
}

input PaymentAccountUpdateWithoutCreditcardDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneInput
  payments: PaymentHouseUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithoutPaymentsDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithoutPaypalDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneInput
  payments: PaymentHouseUpdateManyWithoutPaymentMethodInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpsertWithoutCreditcardInput {
  update: PaymentAccountUpdateWithoutCreditcardDataInput!
  create: PaymentAccountCreateWithoutCreditcardInput!
}

input PaymentAccountUpsertWithoutPaymentsInput {
  update: PaymentAccountUpdateWithoutPaymentsDataInput!
  create: PaymentAccountCreateWithoutPaymentsInput!
}

input PaymentAccountUpsertWithoutPaypalInput {
  update: PaymentAccountUpdateWithoutPaypalDataInput!
  create: PaymentAccountCreateWithoutPaypalInput!
}

input PaymentAccountWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentAccountWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentAccountWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentAccountWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  type: PAYMENT_PROVIDER

  """All values that are not equal to given value."""
  type_not: PAYMENT_PROVIDER

  """All values that are contained in given list."""
  type_in: [PAYMENT_PROVIDER!]

  """All values that are not contained in given list."""
  type_not_in: [PAYMENT_PROVIDER!]
  user: UserWhereInput
  payments_every: PaymentHouseWhereInput
  payments_some: PaymentHouseWhereInput
  payments_none: PaymentHouseWhereInput
  paypal: PaypalInformationWhereInput
  creditcard: CreditCardInformationWhereInput
}

input PaymentAccountWhereUniqueInput {
  id: ID
}

type PaymentHouse implements Node {
  id: ID!
  createdAt: DateTime!
  totalPrice: Float!
  booking(where: BookingWhereInput): Booking!
  paymentMethod(where: PaymentAccountWhereInput): PaymentAccount!
}

"""A connection to a list of items."""
type PaymentHouseConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaymentHouseEdge]!
  aggregate: AggregatePaymentHouse!
}

input PaymentHouseCreateInput {
  totalPrice: Float!
  booking: BookingCreateOneWithoutPaymentInput!
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput!
}

input PaymentHouseCreateManyWithoutPaymentMethodInput {
  create: [PaymentHouseCreateWithoutPaymentMethodInput!]
  connect: [PaymentHouseWhereUniqueInput!]
}

input PaymentHouseCreateOneWithoutBookingInput {
  create: PaymentHouseCreateWithoutBookingInput
  connect: PaymentHouseWhereUniqueInput
}

input PaymentHouseCreateWithoutBookingInput {
  totalPrice: Float!
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput!
}

input PaymentHouseCreateWithoutPaymentMethodInput {
  totalPrice: Float!
  booking: BookingCreateOneWithoutPaymentInput!
}

"""An edge in a connection."""
type PaymentHouseEdge {
  """The item at the end of the edge."""
  node: PaymentHouse!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaymentHouseOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  totalPrice_ASC
  totalPrice_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaymentHousePreviousValues {
  id: ID!
  createdAt: DateTime!
  totalPrice: Float!
}

type PaymentHouseSubscriptionPayload {
  mutation: MutationType!
  node: PaymentHouse
  updatedFields: [String!]
  previousValues: PaymentHousePreviousValues
}

input PaymentHouseSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentHouseSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentHouseSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentHouseSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaymentHouseWhereInput
}

input PaymentHouseUpdateInput {
  totalPrice: Float
  booking: BookingUpdateOneWithoutPaymentInput
  paymentMethod: PaymentAccountUpdateOneWithoutPaymentsInput
}

input PaymentHouseUpdateManyWithoutPaymentMethodInput {
  create: [PaymentHouseCreateWithoutPaymentMethodInput!]
  connect: [PaymentHouseWhereUniqueInput!]
  disconnect: [PaymentHouseWhereUniqueInput!]
  delete: [PaymentHouseWhereUniqueInput!]
  update: [PaymentHouseUpdateWithWhereUniqueWithoutPaymentMethodInput!]
  upsert: [PaymentHouseUpsertWithWhereUniqueWithoutPaymentMethodInput!]
}

input PaymentHouseUpdateOneWithoutBookingInput {
  create: PaymentHouseCreateWithoutBookingInput
  connect: PaymentHouseWhereUniqueInput
  delete: Boolean
  update: PaymentHouseUpdateWithoutBookingDataInput
  upsert: PaymentHouseUpsertWithoutBookingInput
}

input PaymentHouseUpdateWithoutBookingDataInput {
  totalPrice: Float
  paymentMethod: PaymentAccountUpdateOneWithoutPaymentsInput
}

input PaymentHouseUpdateWithoutPaymentMethodDataInput {
  totalPrice: Float
  booking: BookingUpdateOneWithoutPaymentInput
}

input PaymentHouseUpdateWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentHouseWhereUniqueInput!
  data: PaymentHouseUpdateWithoutPaymentMethodDataInput!
}

input PaymentHouseUpsertWithoutBookingInput {
  update: PaymentHouseUpdateWithoutBookingDataInput!
  create: PaymentHouseCreateWithoutBookingInput!
}

input PaymentHouseUpsertWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentHouseWhereUniqueInput!
  update: PaymentHouseUpdateWithoutPaymentMethodDataInput!
  create: PaymentHouseCreateWithoutPaymentMethodInput!
}

input PaymentHouseWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentHouseWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentHouseWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentHouseWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  totalPrice: Float

  """All values that are not equal to given value."""
  totalPrice_not: Float

  """All values that are contained in given list."""
  totalPrice_in: [Float!]

  """All values that are not contained in given list."""
  totalPrice_not_in: [Float!]

  """All values less than the given value."""
  totalPrice_lt: Float

  """All values less than or equal the given value."""
  totalPrice_lte: Float

  """All values greater than the given value."""
  totalPrice_gt: Float

  """All values greater than or equal the given value."""
  totalPrice_gte: Float
  booking: BookingWhereInput
  paymentMethod: PaymentAccountWhereInput
}

input PaymentHouseWhereUniqueInput {
  id: ID
}

type PaymentLanlordInfo implements Node {
  id: ID!
  createdAt: DateTime!
  totalPrice: Float!
  client(where: UserWhereInput): User!
  House(where: HouseWhereInput): House!
  moncashTransactId: String!
}

"""A connection to a list of items."""
type PaymentLanlordInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaymentLanlordInfoEdge]!
  aggregate: AggregatePaymentLanlordInfo!
}

input PaymentLanlordInfoCreateInput {
  totalPrice: Float!
  moncashTransactId: String!
  client: UserCreateOneWithoutPaidContactsInput!
  House: HouseCreateOneWithoutContactInfoPaymentsInput!
}

input PaymentLanlordInfoCreateManyWithoutClientInput {
  create: [PaymentLanlordInfoCreateWithoutClientInput!]
  connect: [PaymentLanlordInfoWhereUniqueInput!]
}

input PaymentLanlordInfoCreateManyWithoutHouseInput {
  create: [PaymentLanlordInfoCreateWithoutHouseInput!]
  connect: [PaymentLanlordInfoWhereUniqueInput!]
}

input PaymentLanlordInfoCreateWithoutClientInput {
  totalPrice: Float!
  moncashTransactId: String!
  House: HouseCreateOneWithoutContactInfoPaymentsInput!
}

input PaymentLanlordInfoCreateWithoutHouseInput {
  totalPrice: Float!
  moncashTransactId: String!
  client: UserCreateOneWithoutPaidContactsInput!
}

"""An edge in a connection."""
type PaymentLanlordInfoEdge {
  """The item at the end of the edge."""
  node: PaymentLanlordInfo!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaymentLanlordInfoOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  totalPrice_ASC
  totalPrice_DESC
  moncashTransactId_ASC
  moncashTransactId_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaymentLanlordInfoPreviousValues {
  id: ID!
  createdAt: DateTime!
  totalPrice: Float!
  moncashTransactId: String!
}

type PaymentLanlordInfoSubscriptionPayload {
  mutation: MutationType!
  node: PaymentLanlordInfo
  updatedFields: [String!]
  previousValues: PaymentLanlordInfoPreviousValues
}

input PaymentLanlordInfoSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentLanlordInfoSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentLanlordInfoSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentLanlordInfoSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaymentLanlordInfoWhereInput
}

input PaymentLanlordInfoUpdateInput {
  totalPrice: Float
  moncashTransactId: String
  client: UserUpdateOneWithoutPaidContactsInput
  House: HouseUpdateOneWithoutContactInfoPaymentsInput
}

input PaymentLanlordInfoUpdateManyWithoutClientInput {
  create: [PaymentLanlordInfoCreateWithoutClientInput!]
  connect: [PaymentLanlordInfoWhereUniqueInput!]
  disconnect: [PaymentLanlordInfoWhereUniqueInput!]
  delete: [PaymentLanlordInfoWhereUniqueInput!]
  update: [PaymentLanlordInfoUpdateWithWhereUniqueWithoutClientInput!]
  upsert: [PaymentLanlordInfoUpsertWithWhereUniqueWithoutClientInput!]
}

input PaymentLanlordInfoUpdateManyWithoutHouseInput {
  create: [PaymentLanlordInfoCreateWithoutHouseInput!]
  connect: [PaymentLanlordInfoWhereUniqueInput!]
  disconnect: [PaymentLanlordInfoWhereUniqueInput!]
  delete: [PaymentLanlordInfoWhereUniqueInput!]
  update: [PaymentLanlordInfoUpdateWithWhereUniqueWithoutHouseInput!]
  upsert: [PaymentLanlordInfoUpsertWithWhereUniqueWithoutHouseInput!]
}

input PaymentLanlordInfoUpdateWithoutClientDataInput {
  totalPrice: Float
  moncashTransactId: String
  House: HouseUpdateOneWithoutContactInfoPaymentsInput
}

input PaymentLanlordInfoUpdateWithoutHouseDataInput {
  totalPrice: Float
  moncashTransactId: String
  client: UserUpdateOneWithoutPaidContactsInput
}

input PaymentLanlordInfoUpdateWithWhereUniqueWithoutClientInput {
  where: PaymentLanlordInfoWhereUniqueInput!
  data: PaymentLanlordInfoUpdateWithoutClientDataInput!
}

input PaymentLanlordInfoUpdateWithWhereUniqueWithoutHouseInput {
  where: PaymentLanlordInfoWhereUniqueInput!
  data: PaymentLanlordInfoUpdateWithoutHouseDataInput!
}

input PaymentLanlordInfoUpsertWithWhereUniqueWithoutClientInput {
  where: PaymentLanlordInfoWhereUniqueInput!
  update: PaymentLanlordInfoUpdateWithoutClientDataInput!
  create: PaymentLanlordInfoCreateWithoutClientInput!
}

input PaymentLanlordInfoUpsertWithWhereUniqueWithoutHouseInput {
  where: PaymentLanlordInfoWhereUniqueInput!
  update: PaymentLanlordInfoUpdateWithoutHouseDataInput!
  create: PaymentLanlordInfoCreateWithoutHouseInput!
}

input PaymentLanlordInfoWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentLanlordInfoWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentLanlordInfoWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentLanlordInfoWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  totalPrice: Float

  """All values that are not equal to given value."""
  totalPrice_not: Float

  """All values that are contained in given list."""
  totalPrice_in: [Float!]

  """All values that are not contained in given list."""
  totalPrice_not_in: [Float!]

  """All values less than the given value."""
  totalPrice_lt: Float

  """All values less than or equal the given value."""
  totalPrice_lte: Float

  """All values greater than the given value."""
  totalPrice_gt: Float

  """All values greater than or equal the given value."""
  totalPrice_gte: Float
  moncashTransactId: String

  """All values that are not equal to given value."""
  moncashTransactId_not: String

  """All values that are contained in given list."""
  moncashTransactId_in: [String!]

  """All values that are not contained in given list."""
  moncashTransactId_not_in: [String!]

  """All values less than the given value."""
  moncashTransactId_lt: String

  """All values less than or equal the given value."""
  moncashTransactId_lte: String

  """All values greater than the given value."""
  moncashTransactId_gt: String

  """All values greater than or equal the given value."""
  moncashTransactId_gte: String

  """All values containing the given string."""
  moncashTransactId_contains: String

  """All values not containing the given string."""
  moncashTransactId_not_contains: String

  """All values starting with the given string."""
  moncashTransactId_starts_with: String

  """All values not starting with the given string."""
  moncashTransactId_not_starts_with: String

  """All values ending with the given string."""
  moncashTransactId_ends_with: String

  """All values not ending with the given string."""
  moncashTransactId_not_ends_with: String
  client: UserWhereInput
  House: HouseWhereInput
}

input PaymentLanlordInfoWhereUniqueInput {
  id: ID
}

type PaypalInformation implements Node {
  id: ID!
  createdAt: DateTime!
  email: String!
  paymentAccount(where: PaymentAccountWhereInput): PaymentAccount!
}

"""A connection to a list of items."""
type PaypalInformationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaypalInformationEdge]!
  aggregate: AggregatePaypalInformation!
}

input PaypalInformationCreateInput {
  email: String!
  paymentAccount: PaymentAccountCreateOneWithoutPaypalInput!
}

input PaypalInformationCreateOneWithoutPaymentAccountInput {
  create: PaypalInformationCreateWithoutPaymentAccountInput
  connect: PaypalInformationWhereUniqueInput
}

input PaypalInformationCreateWithoutPaymentAccountInput {
  email: String!
}

"""An edge in a connection."""
type PaypalInformationEdge {
  """The item at the end of the edge."""
  node: PaypalInformation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaypalInformationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  email_ASC
  email_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaypalInformationPreviousValues {
  id: ID!
  createdAt: DateTime!
  email: String!
}

type PaypalInformationSubscriptionPayload {
  mutation: MutationType!
  node: PaypalInformation
  updatedFields: [String!]
  previousValues: PaypalInformationPreviousValues
}

input PaypalInformationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaypalInformationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaypalInformationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaypalInformationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaypalInformationWhereInput
}

input PaypalInformationUpdateInput {
  email: String
  paymentAccount: PaymentAccountUpdateOneWithoutPaypalInput
}

input PaypalInformationUpdateOneWithoutPaymentAccountInput {
  create: PaypalInformationCreateWithoutPaymentAccountInput
  connect: PaypalInformationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PaypalInformationUpdateWithoutPaymentAccountDataInput
  upsert: PaypalInformationUpsertWithoutPaymentAccountInput
}

input PaypalInformationUpdateWithoutPaymentAccountDataInput {
  email: String
}

input PaypalInformationUpsertWithoutPaymentAccountInput {
  update: PaypalInformationUpdateWithoutPaymentAccountDataInput!
  create: PaypalInformationCreateWithoutPaymentAccountInput!
}

input PaypalInformationWhereInput {
  """Logical AND on all given filters."""
  AND: [PaypalInformationWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaypalInformationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaypalInformationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  paymentAccount: PaymentAccountWhereInput
}

input PaypalInformationWhereUniqueInput {
  id: ID
}

type Picture {
  url: String!
}

"""A connection to a list of items."""
type PictureConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PictureEdge]!
  aggregate: AggregatePicture!
}

input PictureCreateInput {
  url: String!
}

input PictureCreateManyInput {
  create: [PictureCreateInput!]
}

input PictureCreateOneInput {
  create: PictureCreateInput
}

"""An edge in a connection."""
type PictureEdge {
  """The item at the end of the edge."""
  node: Picture!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PictureOrderByInput {
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PicturePreviousValues {
  url: String!
}

type PictureSubscriptionPayload {
  mutation: MutationType!
  node: Picture
  updatedFields: [String!]
  previousValues: PicturePreviousValues
}

input PictureSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PictureSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PictureSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PictureSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PictureWhereInput
}

input PictureUpdateDataInput {
  url: String
}

input PictureUpdateInput {
  url: String
}

input PictureUpdateManyInput {
  create: [PictureCreateInput!]
}

input PictureUpdateOneInput {
  create: PictureCreateInput
  disconnect: Boolean
  delete: Boolean
  update: PictureUpdateDataInput
  upsert: PictureUpsertNestedInput
}

input PictureUpsertNestedInput {
  update: PictureUpdateDataInput!
  create: PictureCreateInput!
}

input PictureWhereInput {
  """Logical AND on all given filters."""
  AND: [PictureWhereInput!]

  """Logical OR on all given filters."""
  OR: [PictureWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PictureWhereInput!]
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
}

type Pricing implements Node {
  id: ID!
  House(where: HouseWhereInput): House!
  basePrice: Int!
  highestPrice: Int!
  currency: CURRENCY
  income: Int!
}

"""A connection to a list of items."""
type PricingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PricingEdge]!
  aggregate: AggregatePricing!
}

input PricingCreateInput {
  basePrice: Int!
  highestPrice: Int!
  currency: CURRENCY
  income: Int!
  House: HouseCreateOneWithoutPricingInput!
}

input PricingCreateOneWithoutHouseInput {
  create: PricingCreateWithoutHouseInput
  connect: PricingWhereUniqueInput
}

input PricingCreateWithoutHouseInput {
  basePrice: Int!
  highestPrice: Int!
  currency: CURRENCY
  income: Int!
}

"""An edge in a connection."""
type PricingEdge {
  """The item at the end of the edge."""
  node: Pricing!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PricingOrderByInput {
  id_ASC
  id_DESC
  basePrice_ASC
  basePrice_DESC
  highestPrice_ASC
  highestPrice_DESC
  currency_ASC
  currency_DESC
  income_ASC
  income_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PricingPreviousValues {
  id: ID!
  basePrice: Int!
  highestPrice: Int!
  currency: CURRENCY
  income: Int!
}

type PricingSubscriptionPayload {
  mutation: MutationType!
  node: Pricing
  updatedFields: [String!]
  previousValues: PricingPreviousValues
}

input PricingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PricingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PricingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PricingSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PricingWhereInput
}

input PricingUpdateInput {
  basePrice: Int
  highestPrice: Int
  currency: CURRENCY
  income: Int
  House: HouseUpdateOneWithoutPricingInput
}

input PricingUpdateOneWithoutHouseInput {
  create: PricingCreateWithoutHouseInput
  connect: PricingWhereUniqueInput
  delete: Boolean
  update: PricingUpdateWithoutHouseDataInput
  upsert: PricingUpsertWithoutHouseInput
}

input PricingUpdateWithoutHouseDataInput {
  basePrice: Int
  highestPrice: Int
  currency: CURRENCY
  income: Int
}

input PricingUpsertWithoutHouseInput {
  update: PricingUpdateWithoutHouseDataInput!
  create: PricingCreateWithoutHouseInput!
}

input PricingWhereInput {
  """Logical AND on all given filters."""
  AND: [PricingWhereInput!]

  """Logical OR on all given filters."""
  OR: [PricingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PricingWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  basePrice: Int

  """All values that are not equal to given value."""
  basePrice_not: Int

  """All values that are contained in given list."""
  basePrice_in: [Int!]

  """All values that are not contained in given list."""
  basePrice_not_in: [Int!]

  """All values less than the given value."""
  basePrice_lt: Int

  """All values less than or equal the given value."""
  basePrice_lte: Int

  """All values greater than the given value."""
  basePrice_gt: Int

  """All values greater than or equal the given value."""
  basePrice_gte: Int
  highestPrice: Int

  """All values that are not equal to given value."""
  highestPrice_not: Int

  """All values that are contained in given list."""
  highestPrice_in: [Int!]

  """All values that are not contained in given list."""
  highestPrice_not_in: [Int!]

  """All values less than the given value."""
  highestPrice_lt: Int

  """All values less than or equal the given value."""
  highestPrice_lte: Int

  """All values greater than the given value."""
  highestPrice_gt: Int

  """All values greater than or equal the given value."""
  highestPrice_gte: Int
  currency: CURRENCY

  """All values that are not equal to given value."""
  currency_not: CURRENCY

  """All values that are contained in given list."""
  currency_in: [CURRENCY!]

  """All values that are not contained in given list."""
  currency_not_in: [CURRENCY!]
  income: Int

  """All values that are not equal to given value."""
  income_not: Int

  """All values that are contained in given list."""
  income_in: [Int!]

  """All values that are not contained in given list."""
  income_not_in: [Int!]

  """All values less than the given value."""
  income_lt: Int

  """All values less than or equal the given value."""
  income_lte: Int

  """All values greater than the given value."""
  income_gt: Int

  """All values greater than or equal the given value."""
  income_gte: Int
  House: HouseWhereInput
}

input PricingWhereUniqueInput {
  id: ID
}

type Query {
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room]!
  pricings(where: PricingWhereInput, orderBy: PricingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pricing]!
  viewses(where: ViewsWhereInput, orderBy: ViewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Views]!
  amenitieses(where: AmenitiesWhereInput, orderBy: AmenitiesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Amenities]!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking]!
  house_Favoriteds(where: House_FavoritedWhereInput, orderBy: House_FavoritedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [House_Favorited]!
  negotiations(where: NegotiationWhereInput, orderBy: NegotiationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Negotiation]!
  paymentHouses(where: PaymentHouseWhereInput, orderBy: PaymentHouseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentHouse]!
  paymentAccounts(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentAccount]!
  paypalInformations(where: PaypalInformationWhereInput, orderBy: PaypalInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaypalInformation]!
  creditCardInformations(where: CreditCardInformationWhereInput, orderBy: CreditCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CreditCardInformation]!
  paymentLanlordInfoes(where: PaymentLanlordInfoWhereInput, orderBy: PaymentLanlordInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentLanlordInfo]!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  communes(where: CommuneWhereInput, orderBy: CommuneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Commune]!
  countries(where: CountryWhereInput, orderBy: CountryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Country]!
  states(where: StateWhereInput, orderBy: StateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [State]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  houses(where: HouseWhereInput, orderBy: HouseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [House]!
  videos(where: VideoWhereInput, orderBy: VideoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Video]!
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture]!
  cities(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [City]!
  room(where: RoomWhereUniqueInput!): Room
  pricing(where: PricingWhereUniqueInput!): Pricing
  views(where: ViewsWhereUniqueInput!): Views
  amenities(where: AmenitiesWhereUniqueInput!): Amenities
  review(where: ReviewWhereUniqueInput!): Review
  booking(where: BookingWhereUniqueInput!): Booking
  house_Favorited(where: House_FavoritedWhereUniqueInput!): House_Favorited
  negotiation(where: NegotiationWhereUniqueInput!): Negotiation
  paymentHouse(where: PaymentHouseWhereUniqueInput!): PaymentHouse
  paymentAccount(where: PaymentAccountWhereUniqueInput!): PaymentAccount
  paypalInformation(where: PaypalInformationWhereUniqueInput!): PaypalInformation
  creditCardInformation(where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  paymentLanlordInfo(where: PaymentLanlordInfoWhereUniqueInput!): PaymentLanlordInfo
  notification(where: NotificationWhereUniqueInput!): Notification
  location(where: LocationWhereUniqueInput!): Location
  commune(where: CommuneWhereUniqueInput!): Commune
  country(where: CountryWhereUniqueInput!): Country
  state(where: StateWhereUniqueInput!): State
  user(where: UserWhereUniqueInput!): User
  house(where: HouseWhereUniqueInput!): House
  city(where: CityWhereUniqueInput!): City
  roomsConnection(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoomConnection!
  pricingsConnection(where: PricingWhereInput, orderBy: PricingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PricingConnection!
  viewsesConnection(where: ViewsWhereInput, orderBy: ViewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ViewsConnection!
  amenitiesesConnection(where: AmenitiesWhereInput, orderBy: AmenitiesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AmenitiesConnection!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  bookingsConnection(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookingConnection!
  house_FavoritedsConnection(where: House_FavoritedWhereInput, orderBy: House_FavoritedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): House_FavoritedConnection!
  negotiationsConnection(where: NegotiationWhereInput, orderBy: NegotiationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NegotiationConnection!
  paymentHousesConnection(where: PaymentHouseWhereInput, orderBy: PaymentHouseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentHouseConnection!
  paymentAccountsConnection(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentAccountConnection!
  paypalInformationsConnection(where: PaypalInformationWhereInput, orderBy: PaypalInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaypalInformationConnection!
  creditCardInformationsConnection(where: CreditCardInformationWhereInput, orderBy: CreditCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CreditCardInformationConnection!
  paymentLanlordInfoesConnection(where: PaymentLanlordInfoWhereInput, orderBy: PaymentLanlordInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentLanlordInfoConnection!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  communesConnection(where: CommuneWhereInput, orderBy: CommuneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommuneConnection!
  countriesConnection(where: CountryWhereInput, orderBy: CountryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CountryConnection!
  statesConnection(where: StateWhereInput, orderBy: StateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StateConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  housesConnection(where: HouseWhereInput, orderBy: HouseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HouseConnection!
  videosConnection(where: VideoWhereInput, orderBy: VideoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VideoConnection!
  picturesConnection(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PictureConnection!
  citiesConnection(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CityConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Review implements Node {
  id: ID!
  createdAt: DateTime!
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  communication: Int!
  House(where: HouseWhereInput): House!
}

"""A connection to a list of items."""
type ReviewConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  communication: Int!
  House: HouseCreateOneWithoutReviewsInput!
}

input ReviewCreateManyWithoutHouseInput {
  create: [ReviewCreateWithoutHouseInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateWithoutHouseInput {
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  communication: Int!
}

"""An edge in a connection."""
type ReviewEdge {
  """The item at the end of the edge."""
  node: Review!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
  stars_ASC
  stars_DESC
  accuracy_ASC
  accuracy_DESC
  location_ASC
  location_DESC
  checkIn_ASC
  checkIn_DESC
  value_ASC
  value_DESC
  communication_ASC
  communication_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReviewPreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  communication: Int!
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
}

input ReviewUpdateInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  communication: Int
  House: HouseUpdateOneWithoutReviewsInput
}

input ReviewUpdateManyWithoutHouseInput {
  create: [ReviewCreateWithoutHouseInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  delete: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutHouseInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutHouseInput!]
}

input ReviewUpdateWithoutHouseDataInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  communication: Int
}

input ReviewUpdateWithWhereUniqueWithoutHouseInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutHouseDataInput!
}

input ReviewUpsertWithWhereUniqueWithoutHouseInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutHouseDataInput!
  create: ReviewCreateWithoutHouseInput!
}

input ReviewWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  stars: Int

  """All values that are not equal to given value."""
  stars_not: Int

  """All values that are contained in given list."""
  stars_in: [Int!]

  """All values that are not contained in given list."""
  stars_not_in: [Int!]

  """All values less than the given value."""
  stars_lt: Int

  """All values less than or equal the given value."""
  stars_lte: Int

  """All values greater than the given value."""
  stars_gt: Int

  """All values greater than or equal the given value."""
  stars_gte: Int
  accuracy: Int

  """All values that are not equal to given value."""
  accuracy_not: Int

  """All values that are contained in given list."""
  accuracy_in: [Int!]

  """All values that are not contained in given list."""
  accuracy_not_in: [Int!]

  """All values less than the given value."""
  accuracy_lt: Int

  """All values less than or equal the given value."""
  accuracy_lte: Int

  """All values greater than the given value."""
  accuracy_gt: Int

  """All values greater than or equal the given value."""
  accuracy_gte: Int
  location: Int

  """All values that are not equal to given value."""
  location_not: Int

  """All values that are contained in given list."""
  location_in: [Int!]

  """All values that are not contained in given list."""
  location_not_in: [Int!]

  """All values less than the given value."""
  location_lt: Int

  """All values less than or equal the given value."""
  location_lte: Int

  """All values greater than the given value."""
  location_gt: Int

  """All values greater than or equal the given value."""
  location_gte: Int
  checkIn: Int

  """All values that are not equal to given value."""
  checkIn_not: Int

  """All values that are contained in given list."""
  checkIn_in: [Int!]

  """All values that are not contained in given list."""
  checkIn_not_in: [Int!]

  """All values less than the given value."""
  checkIn_lt: Int

  """All values less than or equal the given value."""
  checkIn_lte: Int

  """All values greater than the given value."""
  checkIn_gt: Int

  """All values greater than or equal the given value."""
  checkIn_gte: Int
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  communication: Int

  """All values that are not equal to given value."""
  communication_not: Int

  """All values that are contained in given list."""
  communication_in: [Int!]

  """All values that are not contained in given list."""
  communication_not_in: [Int!]

  """All values less than the given value."""
  communication_lt: Int

  """All values less than or equal the given value."""
  communication_lte: Int

  """All values greater than the given value."""
  communication_gt: Int

  """All values greater than or equal the given value."""
  communication_gte: Int
  House: HouseWhereInput
}

input ReviewWhereUniqueInput {
  id: ID
}

type Room implements Node {
  id: ID!
  label: String!
  house(where: HouseWhereInput): House!
  picture_previews(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture!]
  video_previews(where: VideoWhereInput, orderBy: VideoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Video!]
}

"""A connection to a list of items."""
type RoomConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RoomEdge]!
  aggregate: AggregateRoom!
}

input RoomCreateInput {
  label: String!
  house: HouseCreateOneWithoutRoomsInput!
  picture_previews: PictureCreateManyInput
  video_previews: VideoCreateManyInput
}

input RoomCreateManyWithoutHouseInput {
  create: [RoomCreateWithoutHouseInput!]
  connect: [RoomWhereUniqueInput!]
}

input RoomCreateWithoutHouseInput {
  label: String!
  picture_previews: PictureCreateManyInput
  video_previews: VideoCreateManyInput
}

"""An edge in a connection."""
type RoomEdge {
  """The item at the end of the edge."""
  node: Room!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RoomOrderByInput {
  id_ASC
  id_DESC
  label_ASC
  label_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RoomPreviousValues {
  id: ID!
  label: String!
}

type RoomSubscriptionPayload {
  mutation: MutationType!
  node: Room
  updatedFields: [String!]
  previousValues: RoomPreviousValues
}

input RoomSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RoomSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoomSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoomSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RoomWhereInput
}

input RoomUpdateInput {
  label: String
  house: HouseUpdateOneWithoutRoomsInput
  picture_previews: PictureUpdateManyInput
  video_previews: VideoUpdateManyInput
}

input RoomUpdateManyWithoutHouseInput {
  create: [RoomCreateWithoutHouseInput!]
  connect: [RoomWhereUniqueInput!]
  disconnect: [RoomWhereUniqueInput!]
  delete: [RoomWhereUniqueInput!]
  update: [RoomUpdateWithWhereUniqueWithoutHouseInput!]
  upsert: [RoomUpsertWithWhereUniqueWithoutHouseInput!]
}

input RoomUpdateWithoutHouseDataInput {
  label: String
  picture_previews: PictureUpdateManyInput
  video_previews: VideoUpdateManyInput
}

input RoomUpdateWithWhereUniqueWithoutHouseInput {
  where: RoomWhereUniqueInput!
  data: RoomUpdateWithoutHouseDataInput!
}

input RoomUpsertWithWhereUniqueWithoutHouseInput {
  where: RoomWhereUniqueInput!
  update: RoomUpdateWithoutHouseDataInput!
  create: RoomCreateWithoutHouseInput!
}

input RoomWhereInput {
  """Logical AND on all given filters."""
  AND: [RoomWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoomWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoomWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  label: String

  """All values that are not equal to given value."""
  label_not: String

  """All values that are contained in given list."""
  label_in: [String!]

  """All values that are not contained in given list."""
  label_not_in: [String!]

  """All values less than the given value."""
  label_lt: String

  """All values less than or equal the given value."""
  label_lte: String

  """All values greater than the given value."""
  label_gt: String

  """All values greater than or equal the given value."""
  label_gte: String

  """All values containing the given string."""
  label_contains: String

  """All values not containing the given string."""
  label_not_contains: String

  """All values starting with the given string."""
  label_starts_with: String

  """All values not starting with the given string."""
  label_not_starts_with: String

  """All values ending with the given string."""
  label_ends_with: String

  """All values not ending with the given string."""
  label_not_ends_with: String
  house: HouseWhereInput
  picture_previews_every: PictureWhereInput
  picture_previews_some: PictureWhereInput
  picture_previews_none: PictureWhereInput
  video_previews_every: VideoWhereInput
  video_previews_some: VideoWhereInput
  video_previews_none: VideoWhereInput
}

input RoomWhereUniqueInput {
  id: ID
}

type State implements Node {
  id: ID!
  name: String!
  country(where: CountryWhereInput): Country!
}

"""A connection to a list of items."""
type StateConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [StateEdge]!
  aggregate: AggregateState!
}

input StateCreateInput {
  name: String!
  country: CountryCreateOneInput!
}

input StateCreateOneInput {
  create: StateCreateInput
  connect: StateWhereUniqueInput
}

"""An edge in a connection."""
type StateEdge {
  """The item at the end of the edge."""
  node: State!

  """A cursor for use in pagination."""
  cursor: String!
}

enum StateOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type StatePreviousValues {
  id: ID!
  name: String!
}

type StateSubscriptionPayload {
  mutation: MutationType!
  node: State
  updatedFields: [String!]
  previousValues: StatePreviousValues
}

input StateSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [StateSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [StateSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StateSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: StateWhereInput
}

input StateUpdateDataInput {
  name: String
  country: CountryUpdateOneInput
}

input StateUpdateInput {
  name: String
  country: CountryUpdateOneInput
}

input StateUpdateOneInput {
  create: StateCreateInput
  connect: StateWhereUniqueInput
  delete: Boolean
  update: StateUpdateDataInput
  upsert: StateUpsertNestedInput
}

input StateUpsertNestedInput {
  update: StateUpdateDataInput!
  create: StateCreateInput!
}

input StateWhereInput {
  """Logical AND on all given filters."""
  AND: [StateWhereInput!]

  """Logical OR on all given filters."""
  OR: [StateWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StateWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  country: CountryWhereInput
}

input StateWhereUniqueInput {
  id: ID
}

type Subscription {
  room(where: RoomSubscriptionWhereInput): RoomSubscriptionPayload
  pricing(where: PricingSubscriptionWhereInput): PricingSubscriptionPayload
  views(where: ViewsSubscriptionWhereInput): ViewsSubscriptionPayload
  amenities(where: AmenitiesSubscriptionWhereInput): AmenitiesSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  booking(where: BookingSubscriptionWhereInput): BookingSubscriptionPayload
  house_Favorited(where: House_FavoritedSubscriptionWhereInput): House_FavoritedSubscriptionPayload
  negotiation(where: NegotiationSubscriptionWhereInput): NegotiationSubscriptionPayload
  paymentHouse(where: PaymentHouseSubscriptionWhereInput): PaymentHouseSubscriptionPayload
  paymentAccount(where: PaymentAccountSubscriptionWhereInput): PaymentAccountSubscriptionPayload
  paypalInformation(where: PaypalInformationSubscriptionWhereInput): PaypalInformationSubscriptionPayload
  creditCardInformation(where: CreditCardInformationSubscriptionWhereInput): CreditCardInformationSubscriptionPayload
  paymentLanlordInfo(where: PaymentLanlordInfoSubscriptionWhereInput): PaymentLanlordInfoSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  commune(where: CommuneSubscriptionWhereInput): CommuneSubscriptionPayload
  country(where: CountrySubscriptionWhereInput): CountrySubscriptionPayload
  state(where: StateSubscriptionWhereInput): StateSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  house(where: HouseSubscriptionWhereInput): HouseSubscriptionPayload
  video(where: VideoSubscriptionWhereInput): VideoSubscriptionPayload
  picture(where: PictureSubscriptionWhereInput): PictureSubscriptionPayload
  city(where: CitySubscriptionWhereInput): CitySubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: Boolean
  facebookUserId: String
  firstName: String!
  lastName: String!
  email: String
  password: String
  phone1: String
  phone2: String
  primaryPhone: Int!
  responseTime: Int
  isSuperHost: Boolean!
  ownedHouses(where: HouseWhereInput, orderBy: HouseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [House!]
  location(where: LocationWhereInput): Location
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking!]
  paidContacts(where: PaymentLanlordInfoWhereInput, orderBy: PaymentLanlordInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentLanlordInfo!]
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  profilePicture(where: PictureWhereInput): Picture
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  status: Boolean
  facebookUserId: String
  firstName: String!
  lastName: String!
  email: String
  password: String
  phone1: String
  phone2: String
  primaryPhone: Int
  responseTime: Int
  isSuperHost: Boolean
  ownedHouses: HouseCreateManyWithoutHostInput
  location: LocationCreateOneInput
  bookings: BookingCreateManyWithoutBookeeInput
  paidContacts: PaymentLanlordInfoCreateManyWithoutClientInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBookingsInput {
  create: UserCreateWithoutBookingsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedHousesInput {
  create: UserCreateWithoutOwnedHousesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPaidContactsInput {
  create: UserCreateWithoutPaidContactsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBookingsInput {
  status: Boolean
  facebookUserId: String
  firstName: String!
  lastName: String!
  email: String
  password: String
  phone1: String
  phone2: String
  primaryPhone: Int
  responseTime: Int
  isSuperHost: Boolean
  ownedHouses: HouseCreateManyWithoutHostInput
  location: LocationCreateOneInput
  paidContacts: PaymentLanlordInfoCreateManyWithoutClientInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
}

input UserCreateWithoutNotificationsInput {
  status: Boolean
  facebookUserId: String
  firstName: String!
  lastName: String!
  email: String
  password: String
  phone1: String
  phone2: String
  primaryPhone: Int
  responseTime: Int
  isSuperHost: Boolean
  ownedHouses: HouseCreateManyWithoutHostInput
  location: LocationCreateOneInput
  bookings: BookingCreateManyWithoutBookeeInput
  paidContacts: PaymentLanlordInfoCreateManyWithoutClientInput
  profilePicture: PictureCreateOneInput
}

input UserCreateWithoutOwnedHousesInput {
  status: Boolean
  facebookUserId: String
  firstName: String!
  lastName: String!
  email: String
  password: String
  phone1: String
  phone2: String
  primaryPhone: Int
  responseTime: Int
  isSuperHost: Boolean
  location: LocationCreateOneInput
  bookings: BookingCreateManyWithoutBookeeInput
  paidContacts: PaymentLanlordInfoCreateManyWithoutClientInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
}

input UserCreateWithoutPaidContactsInput {
  status: Boolean
  facebookUserId: String
  firstName: String!
  lastName: String!
  email: String
  password: String
  phone1: String
  phone2: String
  primaryPhone: Int
  responseTime: Int
  isSuperHost: Boolean
  ownedHouses: HouseCreateManyWithoutHostInput
  location: LocationCreateOneInput
  bookings: BookingCreateManyWithoutBookeeInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  status_ASC
  status_DESC
  facebookUserId_ASC
  facebookUserId_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  phone1_ASC
  phone1_DESC
  phone2_ASC
  phone2_DESC
  primaryPhone_ASC
  primaryPhone_DESC
  responseTime_ASC
  responseTime_DESC
  isSuperHost_ASC
  isSuperHost_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: Boolean
  facebookUserId: String
  firstName: String!
  lastName: String!
  email: String
  password: String
  phone1: String
  phone2: String
  primaryPhone: Int!
  responseTime: Int
  isSuperHost: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  status: Boolean
  facebookUserId: String
  firstName: String
  lastName: String
  email: String
  password: String
  phone1: String
  phone2: String
  primaryPhone: Int
  responseTime: Int
  isSuperHost: Boolean
  ownedHouses: HouseUpdateManyWithoutHostInput
  location: LocationUpdateOneInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paidContacts: PaymentLanlordInfoUpdateManyWithoutClientInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
}

input UserUpdateInput {
  status: Boolean
  facebookUserId: String
  firstName: String
  lastName: String
  email: String
  password: String
  phone1: String
  phone2: String
  primaryPhone: Int
  responseTime: Int
  isSuperHost: Boolean
  ownedHouses: HouseUpdateManyWithoutHostInput
  location: LocationUpdateOneInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paidContacts: PaymentLanlordInfoUpdateManyWithoutClientInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutBookingsInput {
  create: UserCreateWithoutBookingsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutBookingsDataInput
  upsert: UserUpsertWithoutBookingsInput
}

input UserUpdateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutNotificationsDataInput
  upsert: UserUpsertWithoutNotificationsInput
}

input UserUpdateOneWithoutOwnedHousesInput {
  create: UserCreateWithoutOwnedHousesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutOwnedHousesDataInput
  upsert: UserUpsertWithoutOwnedHousesInput
}

input UserUpdateOneWithoutPaidContactsInput {
  create: UserCreateWithoutPaidContactsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutPaidContactsDataInput
  upsert: UserUpsertWithoutPaidContactsInput
}

input UserUpdateWithoutBookingsDataInput {
  status: Boolean
  facebookUserId: String
  firstName: String
  lastName: String
  email: String
  password: String
  phone1: String
  phone2: String
  primaryPhone: Int
  responseTime: Int
  isSuperHost: Boolean
  ownedHouses: HouseUpdateManyWithoutHostInput
  location: LocationUpdateOneInput
  paidContacts: PaymentLanlordInfoUpdateManyWithoutClientInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
}

input UserUpdateWithoutNotificationsDataInput {
  status: Boolean
  facebookUserId: String
  firstName: String
  lastName: String
  email: String
  password: String
  phone1: String
  phone2: String
  primaryPhone: Int
  responseTime: Int
  isSuperHost: Boolean
  ownedHouses: HouseUpdateManyWithoutHostInput
  location: LocationUpdateOneInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paidContacts: PaymentLanlordInfoUpdateManyWithoutClientInput
  profilePicture: PictureUpdateOneInput
}

input UserUpdateWithoutOwnedHousesDataInput {
  status: Boolean
  facebookUserId: String
  firstName: String
  lastName: String
  email: String
  password: String
  phone1: String
  phone2: String
  primaryPhone: Int
  responseTime: Int
  isSuperHost: Boolean
  location: LocationUpdateOneInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paidContacts: PaymentLanlordInfoUpdateManyWithoutClientInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
}

input UserUpdateWithoutPaidContactsDataInput {
  status: Boolean
  facebookUserId: String
  firstName: String
  lastName: String
  email: String
  password: String
  phone1: String
  phone2: String
  primaryPhone: Int
  responseTime: Int
  isSuperHost: Boolean
  ownedHouses: HouseUpdateManyWithoutHostInput
  location: LocationUpdateOneInput
  bookings: BookingUpdateManyWithoutBookeeInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutBookingsInput {
  update: UserUpdateWithoutBookingsDataInput!
  create: UserCreateWithoutBookingsInput!
}

input UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput!
  create: UserCreateWithoutNotificationsInput!
}

input UserUpsertWithoutOwnedHousesInput {
  update: UserUpdateWithoutOwnedHousesDataInput!
  create: UserCreateWithoutOwnedHousesInput!
}

input UserUpsertWithoutPaidContactsInput {
  update: UserUpdateWithoutPaidContactsDataInput!
  create: UserCreateWithoutPaidContactsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  status: Boolean

  """All values that are not equal to given value."""
  status_not: Boolean
  facebookUserId: String

  """All values that are not equal to given value."""
  facebookUserId_not: String

  """All values that are contained in given list."""
  facebookUserId_in: [String!]

  """All values that are not contained in given list."""
  facebookUserId_not_in: [String!]

  """All values less than the given value."""
  facebookUserId_lt: String

  """All values less than or equal the given value."""
  facebookUserId_lte: String

  """All values greater than the given value."""
  facebookUserId_gt: String

  """All values greater than or equal the given value."""
  facebookUserId_gte: String

  """All values containing the given string."""
  facebookUserId_contains: String

  """All values not containing the given string."""
  facebookUserId_not_contains: String

  """All values starting with the given string."""
  facebookUserId_starts_with: String

  """All values not starting with the given string."""
  facebookUserId_not_starts_with: String

  """All values ending with the given string."""
  facebookUserId_ends_with: String

  """All values not ending with the given string."""
  facebookUserId_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  phone1: String

  """All values that are not equal to given value."""
  phone1_not: String

  """All values that are contained in given list."""
  phone1_in: [String!]

  """All values that are not contained in given list."""
  phone1_not_in: [String!]

  """All values less than the given value."""
  phone1_lt: String

  """All values less than or equal the given value."""
  phone1_lte: String

  """All values greater than the given value."""
  phone1_gt: String

  """All values greater than or equal the given value."""
  phone1_gte: String

  """All values containing the given string."""
  phone1_contains: String

  """All values not containing the given string."""
  phone1_not_contains: String

  """All values starting with the given string."""
  phone1_starts_with: String

  """All values not starting with the given string."""
  phone1_not_starts_with: String

  """All values ending with the given string."""
  phone1_ends_with: String

  """All values not ending with the given string."""
  phone1_not_ends_with: String
  phone2: String

  """All values that are not equal to given value."""
  phone2_not: String

  """All values that are contained in given list."""
  phone2_in: [String!]

  """All values that are not contained in given list."""
  phone2_not_in: [String!]

  """All values less than the given value."""
  phone2_lt: String

  """All values less than or equal the given value."""
  phone2_lte: String

  """All values greater than the given value."""
  phone2_gt: String

  """All values greater than or equal the given value."""
  phone2_gte: String

  """All values containing the given string."""
  phone2_contains: String

  """All values not containing the given string."""
  phone2_not_contains: String

  """All values starting with the given string."""
  phone2_starts_with: String

  """All values not starting with the given string."""
  phone2_not_starts_with: String

  """All values ending with the given string."""
  phone2_ends_with: String

  """All values not ending with the given string."""
  phone2_not_ends_with: String
  primaryPhone: Int

  """All values that are not equal to given value."""
  primaryPhone_not: Int

  """All values that are contained in given list."""
  primaryPhone_in: [Int!]

  """All values that are not contained in given list."""
  primaryPhone_not_in: [Int!]

  """All values less than the given value."""
  primaryPhone_lt: Int

  """All values less than or equal the given value."""
  primaryPhone_lte: Int

  """All values greater than the given value."""
  primaryPhone_gt: Int

  """All values greater than or equal the given value."""
  primaryPhone_gte: Int
  responseTime: Int

  """All values that are not equal to given value."""
  responseTime_not: Int

  """All values that are contained in given list."""
  responseTime_in: [Int!]

  """All values that are not contained in given list."""
  responseTime_not_in: [Int!]

  """All values less than the given value."""
  responseTime_lt: Int

  """All values less than or equal the given value."""
  responseTime_lte: Int

  """All values greater than the given value."""
  responseTime_gt: Int

  """All values greater than or equal the given value."""
  responseTime_gte: Int
  isSuperHost: Boolean

  """All values that are not equal to given value."""
  isSuperHost_not: Boolean
  ownedHouses_every: HouseWhereInput
  ownedHouses_some: HouseWhereInput
  ownedHouses_none: HouseWhereInput
  location: LocationWhereInput
  bookings_every: BookingWhereInput
  bookings_some: BookingWhereInput
  bookings_none: BookingWhereInput
  paidContacts_every: PaymentLanlordInfoWhereInput
  paidContacts_some: PaymentLanlordInfoWhereInput
  paidContacts_none: PaymentLanlordInfoWhereInput
  notifications_every: NotificationWhereInput
  notifications_some: NotificationWhereInput
  notifications_none: NotificationWhereInput
  profilePicture: PictureWhereInput
}

input UserWhereUniqueInput {
  id: ID
  facebookUserId: String
  email: String
}

type Video {
  url: String!
}

"""A connection to a list of items."""
type VideoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [VideoEdge]!
  aggregate: AggregateVideo!
}

input VideoCreateInput {
  url: String!
}

input VideoCreateManyInput {
  create: [VideoCreateInput!]
}

"""An edge in a connection."""
type VideoEdge {
  """The item at the end of the edge."""
  node: Video!

  """A cursor for use in pagination."""
  cursor: String!
}

enum VideoOrderByInput {
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type VideoPreviousValues {
  url: String!
}

type VideoSubscriptionPayload {
  mutation: MutationType!
  node: Video
  updatedFields: [String!]
  previousValues: VideoPreviousValues
}

input VideoSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [VideoSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [VideoSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VideoSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: VideoWhereInput
}

input VideoUpdateInput {
  url: String
}

input VideoUpdateManyInput {
  create: [VideoCreateInput!]
}

input VideoWhereInput {
  """Logical AND on all given filters."""
  AND: [VideoWhereInput!]

  """Logical OR on all given filters."""
  OR: [VideoWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VideoWhereInput!]
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
}

type Views implements Node {
  id: ID!
  lastWeek: Int!
  House(where: HouseWhereInput): House!
}

"""A connection to a list of items."""
type ViewsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ViewsEdge]!
  aggregate: AggregateViews!
}

input ViewsCreateInput {
  lastWeek: Int!
  House: HouseCreateOneWithoutViewsInput!
}

input ViewsCreateOneWithoutHouseInput {
  create: ViewsCreateWithoutHouseInput
  connect: ViewsWhereUniqueInput
}

input ViewsCreateWithoutHouseInput {
  lastWeek: Int!
}

"""An edge in a connection."""
type ViewsEdge {
  """The item at the end of the edge."""
  node: Views!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ViewsOrderByInput {
  id_ASC
  id_DESC
  lastWeek_ASC
  lastWeek_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ViewsPreviousValues {
  id: ID!
  lastWeek: Int!
}

type ViewsSubscriptionPayload {
  mutation: MutationType!
  node: Views
  updatedFields: [String!]
  previousValues: ViewsPreviousValues
}

input ViewsSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ViewsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ViewsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ViewsSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ViewsWhereInput
}

input ViewsUpdateInput {
  lastWeek: Int
  House: HouseUpdateOneWithoutViewsInput
}

input ViewsUpdateOneWithoutHouseInput {
  create: ViewsCreateWithoutHouseInput
  connect: ViewsWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ViewsUpdateWithoutHouseDataInput
  upsert: ViewsUpsertWithoutHouseInput
}

input ViewsUpdateWithoutHouseDataInput {
  lastWeek: Int
}

input ViewsUpsertWithoutHouseInput {
  update: ViewsUpdateWithoutHouseDataInput!
  create: ViewsCreateWithoutHouseInput!
}

input ViewsWhereInput {
  """Logical AND on all given filters."""
  AND: [ViewsWhereInput!]

  """Logical OR on all given filters."""
  OR: [ViewsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ViewsWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  lastWeek: Int

  """All values that are not equal to given value."""
  lastWeek_not: Int

  """All values that are contained in given list."""
  lastWeek_in: [Int!]

  """All values that are not contained in given list."""
  lastWeek_not_in: [Int!]

  """All values less than the given value."""
  lastWeek_lt: Int

  """All values less than or equal the given value."""
  lastWeek_lte: Int

  """All values greater than the given value."""
  lastWeek_gt: Int

  """All values greater than or equal the given value."""
  lastWeek_gte: Int
  House: HouseWhereInput
}

input ViewsWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type NEGOTIATION_TYPE =   'PENDING' |
  'ACCEPTED' |
  'REFUSED'

export type RoomOrderByInput =   'id_ASC' |
  'id_DESC' |
  'label_ASC' |
  'label_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type House_FavoritedOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type CityOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AmenitiesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'electricity_ASC' |
  'electricity_DESC' |
  'electricity_frequency_ASC' |
  'electricity_frequency_DESC' |
  'elevator_ASC' |
  'elevator_DESC' |
  'petsAllowed_ASC' |
  'petsAllowed_DESC' |
  'internet_ASC' |
  'internet_DESC' |
  'kitchen_ASC' |
  'kitchen_DESC' |
  'wirelessInternet_ASC' |
  'wirelessInternet_DESC' |
  'familyKidFriendly_ASC' |
  'familyKidFriendly_DESC' |
  'freeParkingOnPremises_ASC' |
  'freeParkingOnPremises_DESC' |
  'hotTub_ASC' |
  'hotTub_DESC' |
  'pool_ASC' |
  'pool_DESC' |
  'smokingAllowed_ASC' |
  'smokingAllowed_DESC' |
  'wheelchairAccessible_ASC' |
  'wheelchairAccessible_DESC' |
  'cableTv_ASC' |
  'cableTv_DESC' |
  'suitableForEvents_ASC' |
  'suitableForEvents_DESC' |
  'dryer_ASC' |
  'dryer_DESC' |
  'washer_ASC' |
  'washer_DESC' |
  'indoorFireHouse_ASC' |
  'indoorFireHouse_DESC' |
  'tv_ASC' |
  'tv_DESC' |
  'heating_ASC' |
  'heating_DESC' |
  'hangers_ASC' |
  'hangers_DESC' |
  'iron_ASC' |
  'iron_DESC' |
  'hairDryer_ASC' |
  'hairDryer_DESC' |
  'doorman_ASC' |
  'doorman_DESC' |
  'paidParkingOffPremises_ASC' |
  'paidParkingOffPremises_DESC' |
  'freeParkingOnStreet_ASC' |
  'freeParkingOnStreet_DESC' |
  'gym_ASC' |
  'gym_DESC' |
  'airConditioning_ASC' |
  'airConditioning_DESC' |
  'shampoo_ASC' |
  'shampoo_DESC' |
  'essentials_ASC' |
  'essentials_DESC' |
  'laptopFriendlyWorkspace_ASC' |
  'laptopFriendlyWorkspace_DESC' |
  'privateEntrance_ASC' |
  'privateEntrance_DESC' |
  'buzzerWirelessIntercom_ASC' |
  'buzzerWirelessIntercom_DESC' |
  'bathtub_ASC' |
  'bathtub_DESC' |
  'crib_ASC' |
  'crib_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type HOUSE_LEASE_TYPE =   'WEEKLY' |
  'MONTHLY' |
  'YEARLY'

export type ViewsOrderByInput =   'id_ASC' |
  'id_DESC' |
  'lastWeek_ASC' |
  'lastWeek_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type HOUSE_TYPES =   'APARTMENT' |
  'VILLA' |
  'STUDIO'

export type PricingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'basePrice_ASC' |
  'basePrice_DESC' |
  'highestPrice_ASC' |
  'highestPrice_DESC' |
  'currency_ASC' |
  'currency_DESC' |
  'income_ASC' |
  'income_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CountryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type VideoOrderByInput =   'url_ASC' |
  'url_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LocationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'lat_ASC' |
  'lat_DESC' |
  'lng_ASC' |
  'lng_DESC' |
  'address_ASC' |
  'address_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PAYMENT_PROVIDER =   'PAYPAL' |
  'CREDIT_CARD'

export type CreditCardInformationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'cardNumber_ASC' |
  'cardNumber_DESC' |
  'expiresOnMonth_ASC' |
  'expiresOnMonth_DESC' |
  'expiresOnYear_ASC' |
  'expiresOnYear_DESC' |
  'securityCode_ASC' |
  'securityCode_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'postalCode_ASC' |
  'postalCode_DESC' |
  'country_ASC' |
  'country_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type PictureOrderByInput =   'url_ASC' |
  'url_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PaymentAccountOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type NotificationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'link_ASC' |
  'link_DESC' |
  'readDate_ASC' |
  'readDate_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PaymentLanlordInfoOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'totalPrice_ASC' |
  'totalPrice_DESC' |
  'moncashTransactId_ASC' |
  'moncashTransactId_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type StateOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PaymentHouseOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'totalPrice_ASC' |
  'totalPrice_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type CommuneOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type NOTIFICATION_TYPE =   'OFFER' |
  'INSTANT_BOOK' |
  'RESPONSIVENESS' |
  'NEW_AMENITIES' |
  'HOUSE_RULES'

export type PaypalInformationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ReviewOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'text_ASC' |
  'text_DESC' |
  'stars_ASC' |
  'stars_DESC' |
  'accuracy_ASC' |
  'accuracy_DESC' |
  'location_ASC' |
  'location_DESC' |
  'checkIn_ASC' |
  'checkIn_DESC' |
  'value_ASC' |
  'value_DESC' |
  'communication_ASC' |
  'communication_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type CURRENCY =   'HTG' |
  'USD'

export type HouseOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'area_ASC' |
  'area_DESC' |
  'age_ASC' |
  'age_DESC' |
  'shortDescription_ASC' |
  'shortDescription_DESC' |
  'description_ASC' |
  'description_DESC' |
  'maxGuests_ASC' |
  'maxGuests_DESC' |
  'numBedrooms_ASC' |
  'numBedrooms_DESC' |
  'numBaths_ASC' |
  'numBaths_DESC' |
  'leaseType_ASC' |
  'leaseType_DESC' |
  'verified_ASC' |
  'verified_DESC' |
  'type_ASC' |
  'type_DESC' |
  'residency_ASC' |
  'residency_DESC' |
  'lease_ASC' |
  'lease_DESC' |
  'popularity_ASC' |
  'popularity_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BookingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'startDate_ASC' |
  'startDate_DESC' |
  'endDate_ASC' |
  'endDate_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type NegotiationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'offer_ASC' |
  'offer_DESC' |
  'status_ASC' |
  'status_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type FREQUENCY =   'NEVER' |
  'SOMETIMES' |
  'OFTEN' |
  'ALWAYS'

export type House_RESIDENCY =   'BUSINESS' |
  'RESIDENCE'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'status_ASC' |
  'status_DESC' |
  'facebookUserId_ASC' |
  'facebookUserId_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'phone1_ASC' |
  'phone1_DESC' |
  'phone2_ASC' |
  'phone2_DESC' |
  'primaryPhone_ASC' |
  'primaryPhone_DESC' |
  'responseTime_ASC' |
  'responseTime_DESC' |
  'isSuperHost_ASC' |
  'isSuperHost_DESC'

export interface ReviewCreateInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  communication: Int
  House: HouseCreateOneWithoutReviewsInput
}

export interface RoomWhereInput {
  AND?: RoomWhereInput[] | RoomWhereInput
  OR?: RoomWhereInput[] | RoomWhereInput
  NOT?: RoomWhereInput[] | RoomWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  label?: String
  label_not?: String
  label_in?: String[] | String
  label_not_in?: String[] | String
  label_lt?: String
  label_lte?: String
  label_gt?: String
  label_gte?: String
  label_contains?: String
  label_not_contains?: String
  label_starts_with?: String
  label_not_starts_with?: String
  label_ends_with?: String
  label_not_ends_with?: String
  house?: HouseWhereInput
  picture_previews_every?: PictureWhereInput
  picture_previews_some?: PictureWhereInput
  picture_previews_none?: PictureWhereInput
  video_previews_every?: VideoWhereInput
  video_previews_some?: VideoWhereInput
  video_previews_none?: VideoWhereInput
}

export interface CreditCardInformationCreateInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount?: PaymentAccountCreateOneWithoutCreditcardInput
}

export interface VideoWhereInput {
  AND?: VideoWhereInput[] | VideoWhereInput
  OR?: VideoWhereInput[] | VideoWhereInput
  NOT?: VideoWhereInput[] | VideoWhereInput
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
}

export interface CityCreateInput {
  name: String
  state: StateCreateOneInput
}

export interface PaymentHouseUpdateOneWithoutBookingInput {
  create?: PaymentHouseCreateWithoutBookingInput
  connect?: PaymentHouseWhereUniqueInput
  delete?: Boolean
  update?: PaymentHouseUpdateWithoutBookingDataInput
  upsert?: PaymentHouseUpsertWithoutBookingInput
}

export interface StateCreateOneInput {
  create?: StateCreateInput
  connect?: StateWhereUniqueInput
}

export interface PaymentAccountCreateOneWithoutCreditcardInput {
  create?: PaymentAccountCreateWithoutCreditcardInput
  connect?: PaymentAccountWhereUniqueInput
}

export interface StateCreateInput {
  name: String
  country: CountryCreateOneInput
}

export interface CitySubscriptionWhereInput {
  AND?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput
  OR?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput
  NOT?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CityWhereInput
}

export interface CountryCreateOneInput {
  create?: CountryCreateInput
  connect?: CountryWhereUniqueInput
}

export interface VideoSubscriptionWhereInput {
  AND?: VideoSubscriptionWhereInput[] | VideoSubscriptionWhereInput
  OR?: VideoSubscriptionWhereInput[] | VideoSubscriptionWhereInput
  NOT?: VideoSubscriptionWhereInput[] | VideoSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: VideoWhereInput
}

export interface CountryCreateInput {
  name: String
}

export interface HouseSubscriptionWhereInput {
  AND?: HouseSubscriptionWhereInput[] | HouseSubscriptionWhereInput
  OR?: HouseSubscriptionWhereInput[] | HouseSubscriptionWhereInput
  NOT?: HouseSubscriptionWhereInput[] | HouseSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: HouseWhereInput
}

export interface BookingCreateManyWithoutBookeeInput {
  create?: BookingCreateWithoutBookeeInput[] | BookingCreateWithoutBookeeInput
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
}

export interface StateSubscriptionWhereInput {
  AND?: StateSubscriptionWhereInput[] | StateSubscriptionWhereInput
  OR?: StateSubscriptionWhereInput[] | StateSubscriptionWhereInput
  NOT?: StateSubscriptionWhereInput[] | StateSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: StateWhereInput
}

export interface BookingCreateWithoutBookeeInput {
  startDate: DateTime
  endDate: DateTime
  House: HouseCreateOneWithoutBookingsInput
  payment: PaymentHouseCreateOneWithoutBookingInput
}

export interface CommuneSubscriptionWhereInput {
  AND?: CommuneSubscriptionWhereInput[] | CommuneSubscriptionWhereInput
  OR?: CommuneSubscriptionWhereInput[] | CommuneSubscriptionWhereInput
  NOT?: CommuneSubscriptionWhereInput[] | CommuneSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CommuneWhereInput
}

export interface HouseCreateOneWithoutBookingsInput {
  create?: HouseCreateWithoutBookingsInput
  connect?: HouseWhereUniqueInput
}

export interface LocationSubscriptionWhereInput {
  AND?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  OR?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  NOT?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LocationWhereInput
}

export interface HouseCreateWithoutBookingsInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease: Int
  popularity?: Int
  reviews?: ReviewCreateManyWithoutHouseInput
  amenities: AmenitiesCreateOneWithoutHouseInput
  host: UserCreateOneWithoutOwnedHousesInput
  pricing: PricingCreateOneWithoutHouseInput
  location: LocationCreateOneInput
  rooms?: RoomCreateManyWithoutHouseInput
  views?: ViewsCreateOneWithoutHouseInput
  pictures?: PictureCreateManyInput
  contactInfoPayments?: PaymentLanlordInfoCreateManyWithoutHouseInput
}

export interface PaymentLanlordInfoSubscriptionWhereInput {
  AND?: PaymentLanlordInfoSubscriptionWhereInput[] | PaymentLanlordInfoSubscriptionWhereInput
  OR?: PaymentLanlordInfoSubscriptionWhereInput[] | PaymentLanlordInfoSubscriptionWhereInput
  NOT?: PaymentLanlordInfoSubscriptionWhereInput[] | PaymentLanlordInfoSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PaymentLanlordInfoWhereInput
}

export interface PricingCreateOneWithoutHouseInput {
  create?: PricingCreateWithoutHouseInput
  connect?: PricingWhereUniqueInput
}

export interface CreditCardInformationSubscriptionWhereInput {
  AND?: CreditCardInformationSubscriptionWhereInput[] | CreditCardInformationSubscriptionWhereInput
  OR?: CreditCardInformationSubscriptionWhereInput[] | CreditCardInformationSubscriptionWhereInput
  NOT?: CreditCardInformationSubscriptionWhereInput[] | CreditCardInformationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CreditCardInformationWhereInput
}

export interface PricingCreateWithoutHouseInput {
  basePrice: Int
  highestPrice: Int
  currency?: CURRENCY
  income: Int
}

export interface PaymentLanlordInfoWhereInput {
  AND?: PaymentLanlordInfoWhereInput[] | PaymentLanlordInfoWhereInput
  OR?: PaymentLanlordInfoWhereInput[] | PaymentLanlordInfoWhereInput
  NOT?: PaymentLanlordInfoWhereInput[] | PaymentLanlordInfoWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  totalPrice?: Float
  totalPrice_not?: Float
  totalPrice_in?: Float[] | Float
  totalPrice_not_in?: Float[] | Float
  totalPrice_lt?: Float
  totalPrice_lte?: Float
  totalPrice_gt?: Float
  totalPrice_gte?: Float
  moncashTransactId?: String
  moncashTransactId_not?: String
  moncashTransactId_in?: String[] | String
  moncashTransactId_not_in?: String[] | String
  moncashTransactId_lt?: String
  moncashTransactId_lte?: String
  moncashTransactId_gt?: String
  moncashTransactId_gte?: String
  moncashTransactId_contains?: String
  moncashTransactId_not_contains?: String
  moncashTransactId_starts_with?: String
  moncashTransactId_not_starts_with?: String
  moncashTransactId_ends_with?: String
  moncashTransactId_not_ends_with?: String
  client?: UserWhereInput
  House?: HouseWhereInput
}

export interface RoomCreateManyWithoutHouseInput {
  create?: RoomCreateWithoutHouseInput[] | RoomCreateWithoutHouseInput
  connect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
}

export interface CreditCardInformationWhereInput {
  AND?: CreditCardInformationWhereInput[] | CreditCardInformationWhereInput
  OR?: CreditCardInformationWhereInput[] | CreditCardInformationWhereInput
  NOT?: CreditCardInformationWhereInput[] | CreditCardInformationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  cardNumber?: String
  cardNumber_not?: String
  cardNumber_in?: String[] | String
  cardNumber_not_in?: String[] | String
  cardNumber_lt?: String
  cardNumber_lte?: String
  cardNumber_gt?: String
  cardNumber_gte?: String
  cardNumber_contains?: String
  cardNumber_not_contains?: String
  cardNumber_starts_with?: String
  cardNumber_not_starts_with?: String
  cardNumber_ends_with?: String
  cardNumber_not_ends_with?: String
  expiresOnMonth?: Int
  expiresOnMonth_not?: Int
  expiresOnMonth_in?: Int[] | Int
  expiresOnMonth_not_in?: Int[] | Int
  expiresOnMonth_lt?: Int
  expiresOnMonth_lte?: Int
  expiresOnMonth_gt?: Int
  expiresOnMonth_gte?: Int
  expiresOnYear?: Int
  expiresOnYear_not?: Int
  expiresOnYear_in?: Int[] | Int
  expiresOnYear_not_in?: Int[] | Int
  expiresOnYear_lt?: Int
  expiresOnYear_lte?: Int
  expiresOnYear_gt?: Int
  expiresOnYear_gte?: Int
  securityCode?: String
  securityCode_not?: String
  securityCode_in?: String[] | String
  securityCode_not_in?: String[] | String
  securityCode_lt?: String
  securityCode_lte?: String
  securityCode_gt?: String
  securityCode_gte?: String
  securityCode_contains?: String
  securityCode_not_contains?: String
  securityCode_starts_with?: String
  securityCode_not_starts_with?: String
  securityCode_ends_with?: String
  securityCode_not_ends_with?: String
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  postalCode?: String
  postalCode_not?: String
  postalCode_in?: String[] | String
  postalCode_not_in?: String[] | String
  postalCode_lt?: String
  postalCode_lte?: String
  postalCode_gt?: String
  postalCode_gte?: String
  postalCode_contains?: String
  postalCode_not_contains?: String
  postalCode_starts_with?: String
  postalCode_not_starts_with?: String
  postalCode_ends_with?: String
  postalCode_not_ends_with?: String
  country?: String
  country_not?: String
  country_in?: String[] | String
  country_not_in?: String[] | String
  country_lt?: String
  country_lte?: String
  country_gt?: String
  country_gte?: String
  country_contains?: String
  country_not_contains?: String
  country_starts_with?: String
  country_not_starts_with?: String
  country_ends_with?: String
  country_not_ends_with?: String
  paymentAccount?: PaymentAccountWhereInput
}

export interface RoomCreateWithoutHouseInput {
  label: String
  picture_previews?: PictureCreateManyInput
  video_previews?: VideoCreateManyInput
}

export interface NegotiationSubscriptionWhereInput {
  AND?: NegotiationSubscriptionWhereInput[] | NegotiationSubscriptionWhereInput
  OR?: NegotiationSubscriptionWhereInput[] | NegotiationSubscriptionWhereInput
  NOT?: NegotiationSubscriptionWhereInput[] | NegotiationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NegotiationWhereInput
}

export interface PictureCreateManyInput {
  create?: PictureCreateInput[] | PictureCreateInput
}

export interface BookingSubscriptionWhereInput {
  AND?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput
  OR?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput
  NOT?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BookingWhereInput
}

export interface PictureCreateInput {
  url: String
}

export interface PaymentAccountWhereInput {
  AND?: PaymentAccountWhereInput[] | PaymentAccountWhereInput
  OR?: PaymentAccountWhereInput[] | PaymentAccountWhereInput
  NOT?: PaymentAccountWhereInput[] | PaymentAccountWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  type?: PAYMENT_PROVIDER
  type_not?: PAYMENT_PROVIDER
  type_in?: PAYMENT_PROVIDER[] | PAYMENT_PROVIDER
  type_not_in?: PAYMENT_PROVIDER[] | PAYMENT_PROVIDER
  user?: UserWhereInput
  payments_every?: PaymentHouseWhereInput
  payments_some?: PaymentHouseWhereInput
  payments_none?: PaymentHouseWhereInput
  paypal?: PaypalInformationWhereInput
  creditcard?: CreditCardInformationWhereInput
}

export interface VideoCreateManyInput {
  create?: VideoCreateInput[] | VideoCreateInput
}

export interface PaymentHouseWhereInput {
  AND?: PaymentHouseWhereInput[] | PaymentHouseWhereInput
  OR?: PaymentHouseWhereInput[] | PaymentHouseWhereInput
  NOT?: PaymentHouseWhereInput[] | PaymentHouseWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  totalPrice?: Float
  totalPrice_not?: Float
  totalPrice_in?: Float[] | Float
  totalPrice_not_in?: Float[] | Float
  totalPrice_lt?: Float
  totalPrice_lte?: Float
  totalPrice_gt?: Float
  totalPrice_gte?: Float
  booking?: BookingWhereInput
  paymentMethod?: PaymentAccountWhereInput
}

export interface VideoCreateInput {
  url: String
}

export interface CountryWhereInput {
  AND?: CountryWhereInput[] | CountryWhereInput
  OR?: CountryWhereInput[] | CountryWhereInput
  NOT?: CountryWhereInput[] | CountryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface ViewsCreateOneWithoutHouseInput {
  create?: ViewsCreateWithoutHouseInput
  connect?: ViewsWhereUniqueInput
}

export interface StateWhereInput {
  AND?: StateWhereInput[] | StateWhereInput
  OR?: StateWhereInput[] | StateWhereInput
  NOT?: StateWhereInput[] | StateWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  country?: CountryWhereInput
}

export interface ViewsCreateWithoutHouseInput {
  lastWeek: Int
}

export interface NegotiationWhereInput {
  AND?: NegotiationWhereInput[] | NegotiationWhereInput
  OR?: NegotiationWhereInput[] | NegotiationWhereInput
  NOT?: NegotiationWhereInput[] | NegotiationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  offer?: Float
  offer_not?: Float
  offer_in?: Float[] | Float
  offer_not_in?: Float[] | Float
  offer_lt?: Float
  offer_lte?: Float
  offer_gt?: Float
  offer_gte?: Float
  status?: NEGOTIATION_TYPE
  status_not?: NEGOTIATION_TYPE
  status_in?: NEGOTIATION_TYPE[] | NEGOTIATION_TYPE
  status_not_in?: NEGOTIATION_TYPE[] | NEGOTIATION_TYPE
  negotiator?: UserWhereInput
  House?: HouseWhereInput
}

export interface PaymentLanlordInfoCreateManyWithoutHouseInput {
  create?: PaymentLanlordInfoCreateWithoutHouseInput[] | PaymentLanlordInfoCreateWithoutHouseInput
  connect?: PaymentLanlordInfoWhereUniqueInput[] | PaymentLanlordInfoWhereUniqueInput
}

export interface CommuneWhereInput {
  AND?: CommuneWhereInput[] | CommuneWhereInput
  OR?: CommuneWhereInput[] | CommuneWhereInput
  NOT?: CommuneWhereInput[] | CommuneWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  city?: CityWhereInput
}

export interface PaymentLanlordInfoCreateWithoutHouseInput {
  totalPrice: Float
  moncashTransactId: String
  client: UserCreateOneWithoutPaidContactsInput
}

export interface PricingSubscriptionWhereInput {
  AND?: PricingSubscriptionWhereInput[] | PricingSubscriptionWhereInput
  OR?: PricingSubscriptionWhereInput[] | PricingSubscriptionWhereInput
  NOT?: PricingSubscriptionWhereInput[] | PricingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PricingWhereInput
}

export interface UserCreateOneWithoutPaidContactsInput {
  create?: UserCreateWithoutPaidContactsInput
  connect?: UserWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  status?: Boolean
  status_not?: Boolean
  facebookUserId?: String
  facebookUserId_not?: String
  facebookUserId_in?: String[] | String
  facebookUserId_not_in?: String[] | String
  facebookUserId_lt?: String
  facebookUserId_lte?: String
  facebookUserId_gt?: String
  facebookUserId_gte?: String
  facebookUserId_contains?: String
  facebookUserId_not_contains?: String
  facebookUserId_starts_with?: String
  facebookUserId_not_starts_with?: String
  facebookUserId_ends_with?: String
  facebookUserId_not_ends_with?: String
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  phone1?: String
  phone1_not?: String
  phone1_in?: String[] | String
  phone1_not_in?: String[] | String
  phone1_lt?: String
  phone1_lte?: String
  phone1_gt?: String
  phone1_gte?: String
  phone1_contains?: String
  phone1_not_contains?: String
  phone1_starts_with?: String
  phone1_not_starts_with?: String
  phone1_ends_with?: String
  phone1_not_ends_with?: String
  phone2?: String
  phone2_not?: String
  phone2_in?: String[] | String
  phone2_not_in?: String[] | String
  phone2_lt?: String
  phone2_lte?: String
  phone2_gt?: String
  phone2_gte?: String
  phone2_contains?: String
  phone2_not_contains?: String
  phone2_starts_with?: String
  phone2_not_starts_with?: String
  phone2_ends_with?: String
  phone2_not_ends_with?: String
  primaryPhone?: Int
  primaryPhone_not?: Int
  primaryPhone_in?: Int[] | Int
  primaryPhone_not_in?: Int[] | Int
  primaryPhone_lt?: Int
  primaryPhone_lte?: Int
  primaryPhone_gt?: Int
  primaryPhone_gte?: Int
  responseTime?: Int
  responseTime_not?: Int
  responseTime_in?: Int[] | Int
  responseTime_not_in?: Int[] | Int
  responseTime_lt?: Int
  responseTime_lte?: Int
  responseTime_gt?: Int
  responseTime_gte?: Int
  isSuperHost?: Boolean
  isSuperHost_not?: Boolean
  ownedHouses_every?: HouseWhereInput
  ownedHouses_some?: HouseWhereInput
  ownedHouses_none?: HouseWhereInput
  location?: LocationWhereInput
  bookings_every?: BookingWhereInput
  bookings_some?: BookingWhereInput
  bookings_none?: BookingWhereInput
  paidContacts_every?: PaymentLanlordInfoWhereInput
  paidContacts_some?: PaymentLanlordInfoWhereInput
  paidContacts_none?: PaymentLanlordInfoWhereInput
  notifications_every?: NotificationWhereInput
  notifications_some?: NotificationWhereInput
  notifications_none?: NotificationWhereInput
  profilePicture?: PictureWhereInput
}

export interface UserCreateWithoutPaidContactsInput {
  status?: Boolean
  facebookUserId?: String
  firstName: String
  lastName: String
  email?: String
  password?: String
  phone1?: String
  phone2?: String
  primaryPhone?: Int
  responseTime?: Int
  isSuperHost?: Boolean
  ownedHouses?: HouseCreateManyWithoutHostInput
  location?: LocationCreateOneInput
  bookings?: BookingCreateManyWithoutBookeeInput
  notifications?: NotificationCreateManyWithoutUserInput
  profilePicture?: PictureCreateOneInput
}

export interface RoomSubscriptionWhereInput {
  AND?: RoomSubscriptionWhereInput[] | RoomSubscriptionWhereInput
  OR?: RoomSubscriptionWhereInput[] | RoomSubscriptionWhereInput
  NOT?: RoomSubscriptionWhereInput[] | RoomSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RoomWhereInput
}

export interface HouseCreateManyWithoutHostInput {
  create?: HouseCreateWithoutHostInput[] | HouseCreateWithoutHostInput
  connect?: HouseWhereUniqueInput[] | HouseWhereUniqueInput
}

export interface PictureUpdateInput {
  url?: String
}

export interface HouseCreateWithoutHostInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease: Int
  popularity?: Int
  reviews?: ReviewCreateManyWithoutHouseInput
  amenities: AmenitiesCreateOneWithoutHouseInput
  pricing: PricingCreateOneWithoutHouseInput
  location: LocationCreateOneInput
  rooms?: RoomCreateManyWithoutHouseInput
  views?: ViewsCreateOneWithoutHouseInput
  bookings?: BookingCreateManyWithoutHouseInput
  pictures?: PictureCreateManyInput
  contactInfoPayments?: PaymentLanlordInfoCreateManyWithoutHouseInput
}

export interface HouseWhereInput {
  AND?: HouseWhereInput[] | HouseWhereInput
  OR?: HouseWhereInput[] | HouseWhereInput
  NOT?: HouseWhereInput[] | HouseWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  area?: Int
  area_not?: Int
  area_in?: Int[] | Int
  area_not_in?: Int[] | Int
  area_lt?: Int
  area_lte?: Int
  area_gt?: Int
  area_gte?: Int
  age?: Int
  age_not?: Int
  age_in?: Int[] | Int
  age_not_in?: Int[] | Int
  age_lt?: Int
  age_lte?: Int
  age_gt?: Int
  age_gte?: Int
  shortDescription?: String
  shortDescription_not?: String
  shortDescription_in?: String[] | String
  shortDescription_not_in?: String[] | String
  shortDescription_lt?: String
  shortDescription_lte?: String
  shortDescription_gt?: String
  shortDescription_gte?: String
  shortDescription_contains?: String
  shortDescription_not_contains?: String
  shortDescription_starts_with?: String
  shortDescription_not_starts_with?: String
  shortDescription_ends_with?: String
  shortDescription_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  maxGuests?: Int
  maxGuests_not?: Int
  maxGuests_in?: Int[] | Int
  maxGuests_not_in?: Int[] | Int
  maxGuests_lt?: Int
  maxGuests_lte?: Int
  maxGuests_gt?: Int
  maxGuests_gte?: Int
  numBedrooms?: Int
  numBedrooms_not?: Int
  numBedrooms_in?: Int[] | Int
  numBedrooms_not_in?: Int[] | Int
  numBedrooms_lt?: Int
  numBedrooms_lte?: Int
  numBedrooms_gt?: Int
  numBedrooms_gte?: Int
  numBaths?: Int
  numBaths_not?: Int
  numBaths_in?: Int[] | Int
  numBaths_not_in?: Int[] | Int
  numBaths_lt?: Int
  numBaths_lte?: Int
  numBaths_gt?: Int
  numBaths_gte?: Int
  leaseType?: HOUSE_LEASE_TYPE
  leaseType_not?: HOUSE_LEASE_TYPE
  leaseType_in?: HOUSE_LEASE_TYPE[] | HOUSE_LEASE_TYPE
  leaseType_not_in?: HOUSE_LEASE_TYPE[] | HOUSE_LEASE_TYPE
  verified?: Boolean
  verified_not?: Boolean
  type?: HOUSE_TYPES
  type_not?: HOUSE_TYPES
  type_in?: HOUSE_TYPES[] | HOUSE_TYPES
  type_not_in?: HOUSE_TYPES[] | HOUSE_TYPES
  residency?: House_RESIDENCY
  residency_not?: House_RESIDENCY
  residency_in?: House_RESIDENCY[] | House_RESIDENCY
  residency_not_in?: House_RESIDENCY[] | House_RESIDENCY
  lease?: Int
  lease_not?: Int
  lease_in?: Int[] | Int
  lease_not_in?: Int[] | Int
  lease_lt?: Int
  lease_lte?: Int
  lease_gt?: Int
  lease_gte?: Int
  popularity?: Int
  popularity_not?: Int
  popularity_in?: Int[] | Int
  popularity_not_in?: Int[] | Int
  popularity_lt?: Int
  popularity_lte?: Int
  popularity_gt?: Int
  popularity_gte?: Int
  reviews_every?: ReviewWhereInput
  reviews_some?: ReviewWhereInput
  reviews_none?: ReviewWhereInput
  amenities?: AmenitiesWhereInput
  host?: UserWhereInput
  pricing?: PricingWhereInput
  location?: LocationWhereInput
  rooms_every?: RoomWhereInput
  rooms_some?: RoomWhereInput
  rooms_none?: RoomWhereInput
  views?: ViewsWhereInput
  bookings_every?: BookingWhereInput
  bookings_some?: BookingWhereInput
  bookings_none?: BookingWhereInput
  pictures_every?: PictureWhereInput
  pictures_some?: PictureWhereInput
  pictures_none?: PictureWhereInput
  contactInfoPayments_every?: PaymentLanlordInfoWhereInput
  contactInfoPayments_some?: PaymentLanlordInfoWhereInput
  contactInfoPayments_none?: PaymentLanlordInfoWhereInput
}

export interface BookingCreateManyWithoutHouseInput {
  create?: BookingCreateWithoutHouseInput[] | BookingCreateWithoutHouseInput
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
}

export interface PricingWhereUniqueInput {
  id?: ID_Input
}

export interface BookingCreateWithoutHouseInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserCreateOneWithoutBookingsInput
  payment: PaymentHouseCreateOneWithoutBookingInput
}

export interface AmenitiesWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateOneWithoutBookingsInput {
  create?: UserCreateWithoutBookingsInput
  connect?: UserWhereUniqueInput
}

export interface BookingWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateWithoutBookingsInput {
  status?: Boolean
  facebookUserId?: String
  firstName: String
  lastName: String
  email?: String
  password?: String
  phone1?: String
  phone2?: String
  primaryPhone?: Int
  responseTime?: Int
  isSuperHost?: Boolean
  ownedHouses?: HouseCreateManyWithoutHostInput
  location?: LocationCreateOneInput
  paidContacts?: PaymentLanlordInfoCreateManyWithoutClientInput
  notifications?: NotificationCreateManyWithoutUserInput
  profilePicture?: PictureCreateOneInput
}

export interface NegotiationWhereUniqueInput {
  id?: ID_Input
}

export interface PaymentLanlordInfoCreateManyWithoutClientInput {
  create?: PaymentLanlordInfoCreateWithoutClientInput[] | PaymentLanlordInfoCreateWithoutClientInput
  connect?: PaymentLanlordInfoWhereUniqueInput[] | PaymentLanlordInfoWhereUniqueInput
}

export interface PaymentAccountWhereUniqueInput {
  id?: ID_Input
}

export interface PaymentLanlordInfoCreateWithoutClientInput {
  totalPrice: Float
  moncashTransactId: String
  House: HouseCreateOneWithoutContactInfoPaymentsInput
}

export interface CreditCardInformationWhereUniqueInput {
  id?: ID_Input
}

export interface HouseCreateOneWithoutContactInfoPaymentsInput {
  create?: HouseCreateWithoutContactInfoPaymentsInput
  connect?: HouseWhereUniqueInput
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface HouseCreateWithoutContactInfoPaymentsInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease: Int
  popularity?: Int
  reviews?: ReviewCreateManyWithoutHouseInput
  amenities: AmenitiesCreateOneWithoutHouseInput
  host: UserCreateOneWithoutOwnedHousesInput
  pricing: PricingCreateOneWithoutHouseInput
  location: LocationCreateOneInput
  rooms?: RoomCreateManyWithoutHouseInput
  views?: ViewsCreateOneWithoutHouseInput
  bookings?: BookingCreateManyWithoutHouseInput
  pictures?: PictureCreateManyInput
}

export interface CommuneWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationCreateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
}

export interface StateWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationCreateWithoutUserInput {
  type?: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
}

export interface HouseWhereUniqueInput {
  id?: ID_Input
}

export interface PictureCreateOneInput {
  create?: PictureCreateInput
}

export interface CityUpdateInput {
  name?: String
  state?: StateUpdateOneInput
}

export interface PaymentHouseCreateOneWithoutBookingInput {
  create?: PaymentHouseCreateWithoutBookingInput
  connect?: PaymentHouseWhereUniqueInput
}

export interface UserUpdateInput {
  status?: Boolean
  facebookUserId?: String
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone1?: String
  phone2?: String
  primaryPhone?: Int
  responseTime?: Int
  isSuperHost?: Boolean
  ownedHouses?: HouseUpdateManyWithoutHostInput
  location?: LocationUpdateOneInput
  bookings?: BookingUpdateManyWithoutBookeeInput
  paidContacts?: PaymentLanlordInfoUpdateManyWithoutClientInput
  notifications?: NotificationUpdateManyWithoutUserInput
  profilePicture?: PictureUpdateOneInput
}

export interface PaymentHouseCreateWithoutBookingInput {
  totalPrice: Float
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput
}

export interface CountryUpdateInput {
  name?: String
}

export interface PaymentAccountCreateOneWithoutPaymentsInput {
  create?: PaymentAccountCreateWithoutPaymentsInput
  connect?: PaymentAccountWhereUniqueInput
}

export interface LocationUpdateInput {
  lat?: Float
  lng?: Float
  address?: String
  commune?: CommuneUpdateOneInput
}

export interface PaymentAccountCreateWithoutPaymentsInput {
  type?: PAYMENT_PROVIDER
  user: UserCreateOneInput
  paypal?: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard?: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

export interface UserUpdateWithoutNotificationsDataInput {
  status?: Boolean
  facebookUserId?: String
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone1?: String
  phone2?: String
  primaryPhone?: Int
  responseTime?: Int
  isSuperHost?: Boolean
  ownedHouses?: HouseUpdateManyWithoutHostInput
  location?: LocationUpdateOneInput
  bookings?: BookingUpdateManyWithoutBookeeInput
  paidContacts?: PaymentLanlordInfoUpdateManyWithoutClientInput
  profilePicture?: PictureUpdateOneInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface NotificationUpdateInput {
  type?: NOTIFICATION_TYPE
  link?: String
  readDate?: DateTime
  user?: UserUpdateOneWithoutNotificationsInput
}

export interface UserCreateInput {
  status?: Boolean
  facebookUserId?: String
  firstName: String
  lastName: String
  email?: String
  password?: String
  phone1?: String
  phone2?: String
  primaryPhone?: Int
  responseTime?: Int
  isSuperHost?: Boolean
  ownedHouses?: HouseCreateManyWithoutHostInput
  location?: LocationCreateOneInput
  bookings?: BookingCreateManyWithoutBookeeInput
  paidContacts?: PaymentLanlordInfoCreateManyWithoutClientInput
  notifications?: NotificationCreateManyWithoutUserInput
  profilePicture?: PictureCreateOneInput
}

export interface PaymentAccountUpsertWithoutCreditcardInput {
  update: PaymentAccountUpdateWithoutCreditcardDataInput
  create: PaymentAccountCreateWithoutCreditcardInput
}

export interface PaypalInformationCreateOneWithoutPaymentAccountInput {
  create?: PaypalInformationCreateWithoutPaymentAccountInput
  connect?: PaypalInformationWhereUniqueInput
}

export interface PaymentAccountUpdateOneWithoutCreditcardInput {
  create?: PaymentAccountCreateWithoutCreditcardInput
  connect?: PaymentAccountWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PaymentAccountUpdateWithoutCreditcardDataInput
  upsert?: PaymentAccountUpsertWithoutCreditcardInput
}

export interface PaypalInformationCreateWithoutPaymentAccountInput {
  email: String
}

export interface PaymentAccountUpsertWithoutPaypalInput {
  update: PaymentAccountUpdateWithoutPaypalDataInput
  create: PaymentAccountCreateWithoutPaypalInput
}

export interface CreditCardInformationCreateOneWithoutPaymentAccountInput {
  create?: CreditCardInformationCreateWithoutPaymentAccountInput
  connect?: CreditCardInformationWhereUniqueInput
}

export interface PaymentAccountUpdateOneWithoutPaypalInput {
  create?: PaymentAccountCreateWithoutPaypalInput
  connect?: PaymentAccountWhereUniqueInput
  delete?: Boolean
  update?: PaymentAccountUpdateWithoutPaypalDataInput
  upsert?: PaymentAccountUpsertWithoutPaypalInput
}

export interface CreditCardInformationCreateWithoutPaymentAccountInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

export interface PaymentHouseUpsertWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentHouseWhereUniqueInput
  update: PaymentHouseUpdateWithoutPaymentMethodDataInput
  create: PaymentHouseCreateWithoutPaymentMethodInput
}

export interface PricingCreateInput {
  basePrice: Int
  highestPrice: Int
  currency?: CURRENCY
  income: Int
  House: HouseCreateOneWithoutPricingInput
}

export interface PaymentHouseUpdateWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentHouseWhereUniqueInput
  data: PaymentHouseUpdateWithoutPaymentMethodDataInput
}

export interface HouseCreateOneWithoutPricingInput {
  create?: HouseCreateWithoutPricingInput
  connect?: HouseWhereUniqueInput
}

export interface PaymentAccountUpdateInput {
  type?: PAYMENT_PROVIDER
  user?: UserUpdateOneInput
  payments?: PaymentHouseUpdateManyWithoutPaymentMethodInput
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

export interface HouseCreateWithoutPricingInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease: Int
  popularity?: Int
  reviews?: ReviewCreateManyWithoutHouseInput
  amenities: AmenitiesCreateOneWithoutHouseInput
  host: UserCreateOneWithoutOwnedHousesInput
  location: LocationCreateOneInput
  rooms?: RoomCreateManyWithoutHouseInput
  views?: ViewsCreateOneWithoutHouseInput
  bookings?: BookingCreateManyWithoutHouseInput
  pictures?: PictureCreateManyInput
  contactInfoPayments?: PaymentLanlordInfoCreateManyWithoutHouseInput
}

export interface BookingUpdateWithoutPaymentDataInput {
  startDate?: DateTime
  endDate?: DateTime
  bookee?: UserUpdateOneWithoutBookingsInput
  House?: HouseUpdateOneWithoutBookingsInput
}

export interface ViewsCreateInput {
  lastWeek: Int
  House: HouseCreateOneWithoutViewsInput
}

export interface PaymentHouseUpdateInput {
  totalPrice?: Float
  booking?: BookingUpdateOneWithoutPaymentInput
  paymentMethod?: PaymentAccountUpdateOneWithoutPaymentsInput
}

export interface HouseCreateOneWithoutViewsInput {
  create?: HouseCreateWithoutViewsInput
  connect?: HouseWhereUniqueInput
}

export interface HouseUpsertNestedInput {
  update: HouseUpdateDataInput
  create: HouseCreateInput
}

export interface HouseCreateWithoutViewsInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease: Int
  popularity?: Int
  reviews?: ReviewCreateManyWithoutHouseInput
  amenities: AmenitiesCreateOneWithoutHouseInput
  host: UserCreateOneWithoutOwnedHousesInput
  pricing: PricingCreateOneWithoutHouseInput
  location: LocationCreateOneInput
  rooms?: RoomCreateManyWithoutHouseInput
  bookings?: BookingCreateManyWithoutHouseInput
  pictures?: PictureCreateManyInput
  contactInfoPayments?: PaymentLanlordInfoCreateManyWithoutHouseInput
}

export interface HouseUpdateOneInput {
  create?: HouseCreateInput
  connect?: HouseWhereUniqueInput
  delete?: Boolean
  update?: HouseUpdateDataInput
  upsert?: HouseUpsertNestedInput
}

export interface AmenitiesCreateInput {
  electricity?: Boolean
  electricity_frequency?: FREQUENCY
  elevator?: Boolean
  petsAllowed?: Boolean
  internet?: Boolean
  kitchen?: Boolean
  wirelessInternet?: Boolean
  familyKidFriendly?: Boolean
  freeParkingOnPremises?: Boolean
  hotTub?: Boolean
  pool?: Boolean
  smokingAllowed?: Boolean
  wheelchairAccessible?: Boolean
  cableTv?: Boolean
  suitableForEvents?: Boolean
  dryer?: Boolean
  washer?: Boolean
  indoorFireHouse?: Boolean
  tv?: Boolean
  heating?: Boolean
  hangers?: Boolean
  iron?: Boolean
  hairDryer?: Boolean
  doorman?: Boolean
  paidParkingOffPremises?: Boolean
  freeParkingOnStreet?: Boolean
  gym?: Boolean
  airConditioning?: Boolean
  shampoo?: Boolean
  essentials?: Boolean
  laptopFriendlyWorkspace?: Boolean
  privateEntrance?: Boolean
  buzzerWirelessIntercom?: Boolean
  bathtub?: Boolean
  crib?: Boolean
  House: HouseCreateOneWithoutAmenitiesInput
}

export interface BookingUpdateInput {
  startDate?: DateTime
  endDate?: DateTime
  bookee?: UserUpdateOneWithoutBookingsInput
  House?: HouseUpdateOneWithoutBookingsInput
  payment?: PaymentHouseUpdateOneWithoutBookingInput
}

export interface HouseCreateOneWithoutAmenitiesInput {
  create?: HouseCreateWithoutAmenitiesInput
  connect?: HouseWhereUniqueInput
}

export interface HouseUpdateWithoutReviewsDataInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription?: String
  description?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBaths?: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease?: Int
  popularity?: Int
  amenities?: AmenitiesUpdateOneWithoutHouseInput
  host?: UserUpdateOneWithoutOwnedHousesInput
  pricing?: PricingUpdateOneWithoutHouseInput
  location?: LocationUpdateOneInput
  rooms?: RoomUpdateManyWithoutHouseInput
  views?: ViewsUpdateOneWithoutHouseInput
  bookings?: BookingUpdateManyWithoutHouseInput
  pictures?: PictureUpdateManyInput
  contactInfoPayments?: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

export interface HouseCreateWithoutAmenitiesInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease: Int
  popularity?: Int
  reviews?: ReviewCreateManyWithoutHouseInput
  host: UserCreateOneWithoutOwnedHousesInput
  pricing: PricingCreateOneWithoutHouseInput
  location: LocationCreateOneInput
  rooms?: RoomCreateManyWithoutHouseInput
  views?: ViewsCreateOneWithoutHouseInput
  bookings?: BookingCreateManyWithoutHouseInput
  pictures?: PictureCreateManyInput
  contactInfoPayments?: PaymentLanlordInfoCreateManyWithoutHouseInput
}

export interface ReviewUpdateInput {
  text?: String
  stars?: Int
  accuracy?: Int
  location?: Int
  checkIn?: Int
  value?: Int
  communication?: Int
  House?: HouseUpdateOneWithoutReviewsInput
}

export interface PaymentAccountUpdateWithoutPaymentsDataInput {
  type?: PAYMENT_PROVIDER
  user?: UserUpdateOneInput
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

export interface HouseUpdateWithoutAmenitiesDataInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription?: String
  description?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBaths?: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutHouseInput
  host?: UserUpdateOneWithoutOwnedHousesInput
  pricing?: PricingUpdateOneWithoutHouseInput
  location?: LocationUpdateOneInput
  rooms?: RoomUpdateManyWithoutHouseInput
  views?: ViewsUpdateOneWithoutHouseInput
  bookings?: BookingUpdateManyWithoutHouseInput
  pictures?: PictureUpdateManyInput
  contactInfoPayments?: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

export interface HouseCreateOneWithoutReviewsInput {
  create?: HouseCreateWithoutReviewsInput
  connect?: HouseWhereUniqueInput
}

export interface AmenitiesUpdateInput {
  electricity?: Boolean
  electricity_frequency?: FREQUENCY
  elevator?: Boolean
  petsAllowed?: Boolean
  internet?: Boolean
  kitchen?: Boolean
  wirelessInternet?: Boolean
  familyKidFriendly?: Boolean
  freeParkingOnPremises?: Boolean
  hotTub?: Boolean
  pool?: Boolean
  smokingAllowed?: Boolean
  wheelchairAccessible?: Boolean
  cableTv?: Boolean
  suitableForEvents?: Boolean
  dryer?: Boolean
  washer?: Boolean
  indoorFireHouse?: Boolean
  tv?: Boolean
  heating?: Boolean
  hangers?: Boolean
  iron?: Boolean
  hairDryer?: Boolean
  doorman?: Boolean
  paidParkingOffPremises?: Boolean
  freeParkingOnStreet?: Boolean
  gym?: Boolean
  airConditioning?: Boolean
  shampoo?: Boolean
  essentials?: Boolean
  laptopFriendlyWorkspace?: Boolean
  privateEntrance?: Boolean
  buzzerWirelessIntercom?: Boolean
  bathtub?: Boolean
  crib?: Boolean
  House?: HouseUpdateOneWithoutAmenitiesInput
}

export interface HouseCreateWithoutReviewsInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease: Int
  popularity?: Int
  amenities: AmenitiesCreateOneWithoutHouseInput
  host: UserCreateOneWithoutOwnedHousesInput
  pricing: PricingCreateOneWithoutHouseInput
  location: LocationCreateOneInput
  rooms?: RoomCreateManyWithoutHouseInput
  views?: ViewsCreateOneWithoutHouseInput
  bookings?: BookingCreateManyWithoutHouseInput
  pictures?: PictureCreateManyInput
  contactInfoPayments?: PaymentLanlordInfoCreateManyWithoutHouseInput
}

export interface HouseUpdateWithoutViewsDataInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription?: String
  description?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBaths?: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutHouseInput
  amenities?: AmenitiesUpdateOneWithoutHouseInput
  host?: UserUpdateOneWithoutOwnedHousesInput
  pricing?: PricingUpdateOneWithoutHouseInput
  location?: LocationUpdateOneInput
  rooms?: RoomUpdateManyWithoutHouseInput
  bookings?: BookingUpdateManyWithoutHouseInput
  pictures?: PictureUpdateManyInput
  contactInfoPayments?: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

export interface BookingCreateInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserCreateOneWithoutBookingsInput
  House: HouseCreateOneWithoutBookingsInput
  payment: PaymentHouseCreateOneWithoutBookingInput
}

export interface ViewsUpdateInput {
  lastWeek?: Int
  House?: HouseUpdateOneWithoutViewsInput
}

export interface House_FavoritedCreateInput {
  user: UserCreateOneInput
  house: HouseCreateOneInput
}

export interface HouseUpdateWithoutPricingDataInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription?: String
  description?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBaths?: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutHouseInput
  amenities?: AmenitiesUpdateOneWithoutHouseInput
  host?: UserUpdateOneWithoutOwnedHousesInput
  location?: LocationUpdateOneInput
  rooms?: RoomUpdateManyWithoutHouseInput
  views?: ViewsUpdateOneWithoutHouseInput
  bookings?: BookingUpdateManyWithoutHouseInput
  pictures?: PictureUpdateManyInput
  contactInfoPayments?: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

export interface HouseCreateOneInput {
  create?: HouseCreateInput
  connect?: HouseWhereUniqueInput
}

export interface PricingUpdateInput {
  basePrice?: Int
  highestPrice?: Int
  currency?: CURRENCY
  income?: Int
  House?: HouseUpdateOneWithoutPricingInput
}

export interface HouseCreateInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease: Int
  popularity?: Int
  reviews?: ReviewCreateManyWithoutHouseInput
  amenities: AmenitiesCreateOneWithoutHouseInput
  host: UserCreateOneWithoutOwnedHousesInput
  pricing: PricingCreateOneWithoutHouseInput
  location: LocationCreateOneInput
  rooms?: RoomCreateManyWithoutHouseInput
  views?: ViewsCreateOneWithoutHouseInput
  bookings?: BookingCreateManyWithoutHouseInput
  pictures?: PictureCreateManyInput
  contactInfoPayments?: PaymentLanlordInfoCreateManyWithoutHouseInput
}

export interface UserUpsertWithoutOwnedHousesInput {
  update: UserUpdateWithoutOwnedHousesDataInput
  create: UserCreateWithoutOwnedHousesInput
}

export interface NegotiationCreateInput {
  offer: Float
  status?: NEGOTIATION_TYPE
  negotiator: UserCreateOneInput
  House: HouseCreateOneInput
}

export interface HouseUpsertWithoutBookingsInput {
  update: HouseUpdateWithoutBookingsDataInput
  create: HouseCreateWithoutBookingsInput
}

export interface PaymentHouseCreateInput {
  totalPrice: Float
  booking: BookingCreateOneWithoutPaymentInput
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput
}

export interface UserUpsertWithoutPaidContactsInput {
  update: UserUpdateWithoutPaidContactsDataInput
  create: UserCreateWithoutPaidContactsInput
}

export interface BookingCreateOneWithoutPaymentInput {
  create?: BookingCreateWithoutPaymentInput
  connect?: BookingWhereUniqueInput
}

export interface BookingUpsertWithWhereUniqueWithoutHouseInput {
  where: BookingWhereUniqueInput
  update: BookingUpdateWithoutHouseDataInput
  create: BookingCreateWithoutHouseInput
}

export interface BookingCreateWithoutPaymentInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserCreateOneWithoutBookingsInput
  House: HouseCreateOneWithoutBookingsInput
}

export interface PaymentAccountUpsertWithoutPaymentsInput {
  update: PaymentAccountUpdateWithoutPaymentsDataInput
  create: PaymentAccountCreateWithoutPaymentsInput
}

export interface PaymentAccountCreateInput {
  type?: PAYMENT_PROVIDER
  user: UserCreateOneInput
  payments?: PaymentHouseCreateManyWithoutPaymentMethodInput
  paypal?: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard?: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

export interface CreditCardInformationUpdateWithoutPaymentAccountDataInput {
  cardNumber?: String
  expiresOnMonth?: Int
  expiresOnYear?: Int
  securityCode?: String
  firstName?: String
  lastName?: String
  postalCode?: String
  country?: String
}

export interface PaymentHouseCreateManyWithoutPaymentMethodInput {
  create?: PaymentHouseCreateWithoutPaymentMethodInput[] | PaymentHouseCreateWithoutPaymentMethodInput
  connect?: PaymentHouseWhereUniqueInput[] | PaymentHouseWhereUniqueInput
}

export interface PaypalInformationUpsertWithoutPaymentAccountInput {
  update: PaypalInformationUpdateWithoutPaymentAccountDataInput
  create: PaypalInformationCreateWithoutPaymentAccountInput
}

export interface PaymentHouseCreateWithoutPaymentMethodInput {
  totalPrice: Float
  booking: BookingCreateOneWithoutPaymentInput
}

export interface PaypalInformationUpdateOneWithoutPaymentAccountInput {
  create?: PaypalInformationCreateWithoutPaymentAccountInput
  connect?: PaypalInformationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PaypalInformationUpdateWithoutPaymentAccountDataInput
  upsert?: PaypalInformationUpsertWithoutPaymentAccountInput
}

export interface PaypalInformationCreateInput {
  email: String
  paymentAccount: PaymentAccountCreateOneWithoutPaypalInput
}

export interface UserUpdateDataInput {
  status?: Boolean
  facebookUserId?: String
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone1?: String
  phone2?: String
  primaryPhone?: Int
  responseTime?: Int
  isSuperHost?: Boolean
  ownedHouses?: HouseUpdateManyWithoutHostInput
  location?: LocationUpdateOneInput
  bookings?: BookingUpdateManyWithoutBookeeInput
  paidContacts?: PaymentLanlordInfoUpdateManyWithoutClientInput
  notifications?: NotificationUpdateManyWithoutUserInput
  profilePicture?: PictureUpdateOneInput
}

export interface PaymentAccountCreateOneWithoutPaypalInput {
  create?: PaymentAccountCreateWithoutPaypalInput
  connect?: PaymentAccountWhereUniqueInput
}

export interface RoomCreateInput {
  label: String
  house: HouseCreateOneWithoutRoomsInput
  picture_previews?: PictureCreateManyInput
  video_previews?: VideoCreateManyInput
}

export interface PaymentAccountCreateWithoutPaypalInput {
  type?: PAYMENT_PROVIDER
  user: UserCreateOneInput
  payments?: PaymentHouseCreateManyWithoutPaymentMethodInput
  creditcard?: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

export interface HouseCreateWithoutRoomsInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease: Int
  popularity?: Int
  reviews?: ReviewCreateManyWithoutHouseInput
  amenities: AmenitiesCreateOneWithoutHouseInput
  host: UserCreateOneWithoutOwnedHousesInput
  pricing: PricingCreateOneWithoutHouseInput
  location: LocationCreateOneInput
  views?: ViewsCreateOneWithoutHouseInput
  bookings?: BookingCreateManyWithoutHouseInput
  pictures?: PictureCreateManyInput
  contactInfoPayments?: PaymentLanlordInfoCreateManyWithoutHouseInput
}

export interface PaymentAccountUpdateOneWithoutPaymentsInput {
  create?: PaymentAccountCreateWithoutPaymentsInput
  connect?: PaymentAccountWhereUniqueInput
  delete?: Boolean
  update?: PaymentAccountUpdateWithoutPaymentsDataInput
  upsert?: PaymentAccountUpsertWithoutPaymentsInput
}

export interface ReviewCreateWithoutHouseInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  communication: Int
}

export interface PaymentHouseUpdateWithoutBookingDataInput {
  totalPrice?: Float
  paymentMethod?: PaymentAccountUpdateOneWithoutPaymentsInput
}

export interface AmenitiesCreateWithoutHouseInput {
  electricity?: Boolean
  electricity_frequency?: FREQUENCY
  elevator?: Boolean
  petsAllowed?: Boolean
  internet?: Boolean
  kitchen?: Boolean
  wirelessInternet?: Boolean
  familyKidFriendly?: Boolean
  freeParkingOnPremises?: Boolean
  hotTub?: Boolean
  pool?: Boolean
  smokingAllowed?: Boolean
  wheelchairAccessible?: Boolean
  cableTv?: Boolean
  suitableForEvents?: Boolean
  dryer?: Boolean
  washer?: Boolean
  indoorFireHouse?: Boolean
  tv?: Boolean
  heating?: Boolean
  hangers?: Boolean
  iron?: Boolean
  hairDryer?: Boolean
  doorman?: Boolean
  paidParkingOffPremises?: Boolean
  freeParkingOnStreet?: Boolean
  gym?: Boolean
  airConditioning?: Boolean
  shampoo?: Boolean
  essentials?: Boolean
  laptopFriendlyWorkspace?: Boolean
  privateEntrance?: Boolean
  buzzerWirelessIntercom?: Boolean
  bathtub?: Boolean
  crib?: Boolean
}

export interface PaymentAccountCreateWithoutCreditcardInput {
  type?: PAYMENT_PROVIDER
  user: UserCreateOneInput
  payments?: PaymentHouseCreateManyWithoutPaymentMethodInput
  paypal?: PaypalInformationCreateOneWithoutPaymentAccountInput
}

export interface UserCreateWithoutOwnedHousesInput {
  status?: Boolean
  facebookUserId?: String
  firstName: String
  lastName: String
  email?: String
  password?: String
  phone1?: String
  phone2?: String
  primaryPhone?: Int
  responseTime?: Int
  isSuperHost?: Boolean
  location?: LocationCreateOneInput
  bookings?: BookingCreateManyWithoutBookeeInput
  paidContacts?: PaymentLanlordInfoCreateManyWithoutClientInput
  notifications?: NotificationCreateManyWithoutUserInput
  profilePicture?: PictureCreateOneInput
}

export interface PaymentLanlordInfoCreateInput {
  totalPrice: Float
  moncashTransactId: String
  client: UserCreateOneWithoutPaidContactsInput
  House: HouseCreateOneWithoutContactInfoPaymentsInput
}

export interface LocationCreateInput {
  lat?: Float
  lng?: Float
  address?: String
  commune?: CommuneCreateOneInput
}

export interface NotificationCreateInput {
  type?: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
  user: UserCreateOneWithoutNotificationsInput
}

export interface CommuneCreateInput {
  name: String
  city: CityCreateOneInput
}

export interface UserCreateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
}

export interface ViewsWhereInput {
  AND?: ViewsWhereInput[] | ViewsWhereInput
  OR?: ViewsWhereInput[] | ViewsWhereInput
  NOT?: ViewsWhereInput[] | ViewsWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  lastWeek?: Int
  lastWeek_not?: Int
  lastWeek_in?: Int[] | Int
  lastWeek_not_in?: Int[] | Int
  lastWeek_lt?: Int
  lastWeek_lte?: Int
  lastWeek_gt?: Int
  lastWeek_gte?: Int
  House?: HouseWhereInput
}

export interface UserCreateWithoutNotificationsInput {
  status?: Boolean
  facebookUserId?: String
  firstName: String
  lastName: String
  email?: String
  password?: String
  phone1?: String
  phone2?: String
  primaryPhone?: Int
  responseTime?: Int
  isSuperHost?: Boolean
  ownedHouses?: HouseCreateManyWithoutHostInput
  location?: LocationCreateOneInput
  bookings?: BookingCreateManyWithoutBookeeInput
  paidContacts?: PaymentLanlordInfoCreateManyWithoutClientInput
  profilePicture?: PictureCreateOneInput
}

export interface PricingWhereInput {
  AND?: PricingWhereInput[] | PricingWhereInput
  OR?: PricingWhereInput[] | PricingWhereInput
  NOT?: PricingWhereInput[] | PricingWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  basePrice?: Int
  basePrice_not?: Int
  basePrice_in?: Int[] | Int
  basePrice_not_in?: Int[] | Int
  basePrice_lt?: Int
  basePrice_lte?: Int
  basePrice_gt?: Int
  basePrice_gte?: Int
  highestPrice?: Int
  highestPrice_not?: Int
  highestPrice_in?: Int[] | Int
  highestPrice_not_in?: Int[] | Int
  highestPrice_lt?: Int
  highestPrice_lte?: Int
  highestPrice_gt?: Int
  highestPrice_gte?: Int
  currency?: CURRENCY
  currency_not?: CURRENCY
  currency_in?: CURRENCY[] | CURRENCY
  currency_not_in?: CURRENCY[] | CURRENCY
  income?: Int
  income_not?: Int
  income_in?: Int[] | Int
  income_not_in?: Int[] | Int
  income_lt?: Int
  income_lte?: Int
  income_gt?: Int
  income_gte?: Int
  House?: HouseWhereInput
}

export interface RoomUpdateInput {
  label?: String
  house?: HouseUpdateOneWithoutRoomsInput
  picture_previews?: PictureUpdateManyInput
  video_previews?: VideoUpdateManyInput
}

export interface CountrySubscriptionWhereInput {
  AND?: CountrySubscriptionWhereInput[] | CountrySubscriptionWhereInput
  OR?: CountrySubscriptionWhereInput[] | CountrySubscriptionWhereInput
  NOT?: CountrySubscriptionWhereInput[] | CountrySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CountryWhereInput
}

export interface HouseUpdateOneWithoutRoomsInput {
  create?: HouseCreateWithoutRoomsInput
  connect?: HouseWhereUniqueInput
  delete?: Boolean
  update?: HouseUpdateWithoutRoomsDataInput
  upsert?: HouseUpsertWithoutRoomsInput
}

export interface NotificationSubscriptionWhereInput {
  AND?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  OR?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  NOT?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NotificationWhereInput
}

export interface HouseUpdateWithoutRoomsDataInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription?: String
  description?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBaths?: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutHouseInput
  amenities?: AmenitiesUpdateOneWithoutHouseInput
  host?: UserUpdateOneWithoutOwnedHousesInput
  pricing?: PricingUpdateOneWithoutHouseInput
  location?: LocationUpdateOneInput
  views?: ViewsUpdateOneWithoutHouseInput
  bookings?: BookingUpdateManyWithoutHouseInput
  pictures?: PictureUpdateManyInput
  contactInfoPayments?: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

export interface PaypalInformationSubscriptionWhereInput {
  AND?: PaypalInformationSubscriptionWhereInput[] | PaypalInformationSubscriptionWhereInput
  OR?: PaypalInformationSubscriptionWhereInput[] | PaypalInformationSubscriptionWhereInput
  NOT?: PaypalInformationSubscriptionWhereInput[] | PaypalInformationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PaypalInformationWhereInput
}

export interface ReviewUpdateManyWithoutHouseInput {
  create?: ReviewCreateWithoutHouseInput[] | ReviewCreateWithoutHouseInput
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  disconnect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  delete?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  update?: ReviewUpdateWithWhereUniqueWithoutHouseInput[] | ReviewUpdateWithWhereUniqueWithoutHouseInput
  upsert?: ReviewUpsertWithWhereUniqueWithoutHouseInput[] | ReviewUpsertWithWhereUniqueWithoutHouseInput
}

export interface PaymentHouseSubscriptionWhereInput {
  AND?: PaymentHouseSubscriptionWhereInput[] | PaymentHouseSubscriptionWhereInput
  OR?: PaymentHouseSubscriptionWhereInput[] | PaymentHouseSubscriptionWhereInput
  NOT?: PaymentHouseSubscriptionWhereInput[] | PaymentHouseSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PaymentHouseWhereInput
}

export interface ReviewUpdateWithWhereUniqueWithoutHouseInput {
  where: ReviewWhereUniqueInput
  data: ReviewUpdateWithoutHouseDataInput
}

export interface PaypalInformationWhereInput {
  AND?: PaypalInformationWhereInput[] | PaypalInformationWhereInput
  OR?: PaypalInformationWhereInput[] | PaypalInformationWhereInput
  NOT?: PaypalInformationWhereInput[] | PaypalInformationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  paymentAccount?: PaymentAccountWhereInput
}

export interface ReviewUpdateWithoutHouseDataInput {
  text?: String
  stars?: Int
  accuracy?: Int
  location?: Int
  checkIn?: Int
  value?: Int
  communication?: Int
}

export interface BookingWhereInput {
  AND?: BookingWhereInput[] | BookingWhereInput
  OR?: BookingWhereInput[] | BookingWhereInput
  NOT?: BookingWhereInput[] | BookingWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  startDate?: DateTime
  startDate_not?: DateTime
  startDate_in?: DateTime[] | DateTime
  startDate_not_in?: DateTime[] | DateTime
  startDate_lt?: DateTime
  startDate_lte?: DateTime
  startDate_gt?: DateTime
  startDate_gte?: DateTime
  endDate?: DateTime
  endDate_not?: DateTime
  endDate_in?: DateTime[] | DateTime
  endDate_not_in?: DateTime[] | DateTime
  endDate_lt?: DateTime
  endDate_lte?: DateTime
  endDate_gt?: DateTime
  endDate_gte?: DateTime
  bookee?: UserWhereInput
  House?: HouseWhereInput
  payment?: PaymentHouseWhereInput
}

export interface ReviewUpsertWithWhereUniqueWithoutHouseInput {
  where: ReviewWhereUniqueInput
  update: ReviewUpdateWithoutHouseDataInput
  create: ReviewCreateWithoutHouseInput
}

export interface AmenitiesSubscriptionWhereInput {
  AND?: AmenitiesSubscriptionWhereInput[] | AmenitiesSubscriptionWhereInput
  OR?: AmenitiesSubscriptionWhereInput[] | AmenitiesSubscriptionWhereInput
  NOT?: AmenitiesSubscriptionWhereInput[] | AmenitiesSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AmenitiesWhereInput
}

export interface AmenitiesUpdateOneWithoutHouseInput {
  create?: AmenitiesCreateWithoutHouseInput
  connect?: AmenitiesWhereUniqueInput
  delete?: Boolean
  update?: AmenitiesUpdateWithoutHouseDataInput
  upsert?: AmenitiesUpsertWithoutHouseInput
}

export interface ViewsSubscriptionWhereInput {
  AND?: ViewsSubscriptionWhereInput[] | ViewsSubscriptionWhereInput
  OR?: ViewsSubscriptionWhereInput[] | ViewsSubscriptionWhereInput
  NOT?: ViewsSubscriptionWhereInput[] | ViewsSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ViewsWhereInput
}

export interface AmenitiesUpdateWithoutHouseDataInput {
  electricity?: Boolean
  electricity_frequency?: FREQUENCY
  elevator?: Boolean
  petsAllowed?: Boolean
  internet?: Boolean
  kitchen?: Boolean
  wirelessInternet?: Boolean
  familyKidFriendly?: Boolean
  freeParkingOnPremises?: Boolean
  hotTub?: Boolean
  pool?: Boolean
  smokingAllowed?: Boolean
  wheelchairAccessible?: Boolean
  cableTv?: Boolean
  suitableForEvents?: Boolean
  dryer?: Boolean
  washer?: Boolean
  indoorFireHouse?: Boolean
  tv?: Boolean
  heating?: Boolean
  hangers?: Boolean
  iron?: Boolean
  hairDryer?: Boolean
  doorman?: Boolean
  paidParkingOffPremises?: Boolean
  freeParkingOnStreet?: Boolean
  gym?: Boolean
  airConditioning?: Boolean
  shampoo?: Boolean
  essentials?: Boolean
  laptopFriendlyWorkspace?: Boolean
  privateEntrance?: Boolean
  buzzerWirelessIntercom?: Boolean
  bathtub?: Boolean
  crib?: Boolean
}

export interface AmenitiesWhereInput {
  AND?: AmenitiesWhereInput[] | AmenitiesWhereInput
  OR?: AmenitiesWhereInput[] | AmenitiesWhereInput
  NOT?: AmenitiesWhereInput[] | AmenitiesWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  electricity?: Boolean
  electricity_not?: Boolean
  electricity_frequency?: FREQUENCY
  electricity_frequency_not?: FREQUENCY
  electricity_frequency_in?: FREQUENCY[] | FREQUENCY
  electricity_frequency_not_in?: FREQUENCY[] | FREQUENCY
  elevator?: Boolean
  elevator_not?: Boolean
  petsAllowed?: Boolean
  petsAllowed_not?: Boolean
  internet?: Boolean
  internet_not?: Boolean
  kitchen?: Boolean
  kitchen_not?: Boolean
  wirelessInternet?: Boolean
  wirelessInternet_not?: Boolean
  familyKidFriendly?: Boolean
  familyKidFriendly_not?: Boolean
  freeParkingOnPremises?: Boolean
  freeParkingOnPremises_not?: Boolean
  hotTub?: Boolean
  hotTub_not?: Boolean
  pool?: Boolean
  pool_not?: Boolean
  smokingAllowed?: Boolean
  smokingAllowed_not?: Boolean
  wheelchairAccessible?: Boolean
  wheelchairAccessible_not?: Boolean
  cableTv?: Boolean
  cableTv_not?: Boolean
  suitableForEvents?: Boolean
  suitableForEvents_not?: Boolean
  dryer?: Boolean
  dryer_not?: Boolean
  washer?: Boolean
  washer_not?: Boolean
  indoorFireHouse?: Boolean
  indoorFireHouse_not?: Boolean
  tv?: Boolean
  tv_not?: Boolean
  heating?: Boolean
  heating_not?: Boolean
  hangers?: Boolean
  hangers_not?: Boolean
  iron?: Boolean
  iron_not?: Boolean
  hairDryer?: Boolean
  hairDryer_not?: Boolean
  doorman?: Boolean
  doorman_not?: Boolean
  paidParkingOffPremises?: Boolean
  paidParkingOffPremises_not?: Boolean
  freeParkingOnStreet?: Boolean
  freeParkingOnStreet_not?: Boolean
  gym?: Boolean
  gym_not?: Boolean
  airConditioning?: Boolean
  airConditioning_not?: Boolean
  shampoo?: Boolean
  shampoo_not?: Boolean
  essentials?: Boolean
  essentials_not?: Boolean
  laptopFriendlyWorkspace?: Boolean
  laptopFriendlyWorkspace_not?: Boolean
  privateEntrance?: Boolean
  privateEntrance_not?: Boolean
  buzzerWirelessIntercom?: Boolean
  buzzerWirelessIntercom_not?: Boolean
  bathtub?: Boolean
  bathtub_not?: Boolean
  crib?: Boolean
  crib_not?: Boolean
  House?: HouseWhereInput
}

export interface AmenitiesUpsertWithoutHouseInput {
  update: AmenitiesUpdateWithoutHouseDataInput
  create: AmenitiesCreateWithoutHouseInput
}

export interface VideoUpdateInput {
  url?: String
}

export interface UserUpdateOneWithoutOwnedHousesInput {
  create?: UserCreateWithoutOwnedHousesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutOwnedHousesDataInput
  upsert?: UserUpsertWithoutOwnedHousesInput
}

export interface ViewsWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithoutOwnedHousesDataInput {
  status?: Boolean
  facebookUserId?: String
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone1?: String
  phone2?: String
  primaryPhone?: Int
  responseTime?: Int
  isSuperHost?: Boolean
  location?: LocationUpdateOneInput
  bookings?: BookingUpdateManyWithoutBookeeInput
  paidContacts?: PaymentLanlordInfoUpdateManyWithoutClientInput
  notifications?: NotificationUpdateManyWithoutUserInput
  profilePicture?: PictureUpdateOneInput
}

export interface House_FavoritedWhereUniqueInput {
  id?: ID_Input
}

export interface LocationUpdateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LocationUpdateDataInput
  upsert?: LocationUpsertNestedInput
}

export interface PaypalInformationWhereUniqueInput {
  id?: ID_Input
}

export interface LocationUpdateDataInput {
  lat?: Float
  lng?: Float
  address?: String
  commune?: CommuneUpdateOneInput
}

export interface LocationWhereUniqueInput {
  id?: ID_Input
}

export interface CommuneUpdateOneInput {
  create?: CommuneCreateInput
  connect?: CommuneWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CommuneUpdateDataInput
  upsert?: CommuneUpsertNestedInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  facebookUserId?: String
  email?: String
}

export interface CommuneUpdateDataInput {
  name?: String
  city?: CityUpdateOneInput
}

export interface HouseUpdateInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription?: String
  description?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBaths?: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutHouseInput
  amenities?: AmenitiesUpdateOneWithoutHouseInput
  host?: UserUpdateOneWithoutOwnedHousesInput
  pricing?: PricingUpdateOneWithoutHouseInput
  location?: LocationUpdateOneInput
  rooms?: RoomUpdateManyWithoutHouseInput
  views?: ViewsUpdateOneWithoutHouseInput
  bookings?: BookingUpdateManyWithoutHouseInput
  pictures?: PictureUpdateManyInput
  contactInfoPayments?: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

export interface CityUpdateOneInput {
  create?: CityCreateInput
  connect?: CityWhereUniqueInput
  delete?: Boolean
  update?: CityUpdateDataInput
  upsert?: CityUpsertNestedInput
}

export interface CommuneUpdateInput {
  name?: String
  city?: CityUpdateOneInput
}

export interface CityUpdateDataInput {
  name?: String
  state?: StateUpdateOneInput
}

export interface UserUpdateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutNotificationsDataInput
  upsert?: UserUpsertWithoutNotificationsInput
}

export interface StateUpdateOneInput {
  create?: StateCreateInput
  connect?: StateWhereUniqueInput
  delete?: Boolean
  update?: StateUpdateDataInput
  upsert?: StateUpsertNestedInput
}

export interface PaymentAccountUpdateWithoutCreditcardDataInput {
  type?: PAYMENT_PROVIDER
  user?: UserUpdateOneInput
  payments?: PaymentHouseUpdateManyWithoutPaymentMethodInput
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput
}

export interface StateUpdateDataInput {
  name?: String
  country?: CountryUpdateOneInput
}

export interface PaymentAccountUpdateWithoutPaypalDataInput {
  type?: PAYMENT_PROVIDER
  user?: UserUpdateOneInput
  payments?: PaymentHouseUpdateManyWithoutPaymentMethodInput
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

export interface CountryUpdateOneInput {
  create?: CountryCreateInput
  connect?: CountryWhereUniqueInput
  delete?: Boolean
  update?: CountryUpdateDataInput
  upsert?: CountryUpsertNestedInput
}

export interface PaymentHouseUpdateWithoutPaymentMethodDataInput {
  totalPrice?: Float
  booking?: BookingUpdateOneWithoutPaymentInput
}

export interface CountryUpdateDataInput {
  name?: String
}

export interface BookingUpsertWithoutPaymentInput {
  update: BookingUpdateWithoutPaymentDataInput
  create: BookingCreateWithoutPaymentInput
}

export interface CountryUpsertNestedInput {
  update: CountryUpdateDataInput
  create: CountryCreateInput
}

export interface NegotiationUpdateInput {
  offer?: Float
  status?: NEGOTIATION_TYPE
  negotiator?: UserUpdateOneInput
  House?: HouseUpdateOneInput
}

export interface StateUpsertNestedInput {
  update: StateUpdateDataInput
  create: StateCreateInput
}

export interface House_FavoritedUpdateInput {
  user?: UserUpdateOneInput
  house?: HouseUpdateOneInput
}

export interface CityUpsertNestedInput {
  update: CityUpdateDataInput
  create: CityCreateInput
}

export interface HouseUpdateOneWithoutReviewsInput {
  create?: HouseCreateWithoutReviewsInput
  connect?: HouseWhereUniqueInput
  delete?: Boolean
  update?: HouseUpdateWithoutReviewsDataInput
  upsert?: HouseUpsertWithoutReviewsInput
}

export interface CommuneUpsertNestedInput {
  update: CommuneUpdateDataInput
  create: CommuneCreateInput
}

export interface HouseUpdateOneWithoutAmenitiesInput {
  create?: HouseCreateWithoutAmenitiesInput
  connect?: HouseWhereUniqueInput
  delete?: Boolean
  update?: HouseUpdateWithoutAmenitiesDataInput
  upsert?: HouseUpsertWithoutAmenitiesInput
}

export interface LocationUpsertNestedInput {
  update: LocationUpdateDataInput
  create: LocationCreateInput
}

export interface HouseUpdateOneWithoutViewsInput {
  create?: HouseCreateWithoutViewsInput
  connect?: HouseWhereUniqueInput
  delete?: Boolean
  update?: HouseUpdateWithoutViewsDataInput
  upsert?: HouseUpsertWithoutViewsInput
}

export interface BookingUpdateManyWithoutBookeeInput {
  create?: BookingCreateWithoutBookeeInput[] | BookingCreateWithoutBookeeInput
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  disconnect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  delete?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  update?: BookingUpdateWithWhereUniqueWithoutBookeeInput[] | BookingUpdateWithWhereUniqueWithoutBookeeInput
  upsert?: BookingUpsertWithWhereUniqueWithoutBookeeInput[] | BookingUpsertWithWhereUniqueWithoutBookeeInput
}

export interface HouseUpdateOneWithoutPricingInput {
  create?: HouseCreateWithoutPricingInput
  connect?: HouseWhereUniqueInput
  delete?: Boolean
  update?: HouseUpdateWithoutPricingDataInput
  upsert?: HouseUpsertWithoutPricingInput
}

export interface BookingUpdateWithWhereUniqueWithoutBookeeInput {
  where: BookingWhereUniqueInput
  data: BookingUpdateWithoutBookeeDataInput
}

export interface BookingUpsertWithWhereUniqueWithoutBookeeInput {
  where: BookingWhereUniqueInput
  update: BookingUpdateWithoutBookeeDataInput
  create: BookingCreateWithoutBookeeInput
}

export interface BookingUpdateWithoutBookeeDataInput {
  startDate?: DateTime
  endDate?: DateTime
  House?: HouseUpdateOneWithoutBookingsInput
  payment?: PaymentHouseUpdateOneWithoutBookingInput
}

export interface HouseUpsertWithWhereUniqueWithoutHostInput {
  where: HouseWhereUniqueInput
  update: HouseUpdateWithoutHostDataInput
  create: HouseCreateWithoutHostInput
}

export interface HouseUpdateOneWithoutBookingsInput {
  create?: HouseCreateWithoutBookingsInput
  connect?: HouseWhereUniqueInput
  delete?: Boolean
  update?: HouseUpdateWithoutBookingsDataInput
  upsert?: HouseUpsertWithoutBookingsInput
}

export interface CreditCardInformationUpsertWithoutPaymentAccountInput {
  update: CreditCardInformationUpdateWithoutPaymentAccountDataInput
  create: CreditCardInformationCreateWithoutPaymentAccountInput
}

export interface HouseUpdateWithoutBookingsDataInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription?: String
  description?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBaths?: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutHouseInput
  amenities?: AmenitiesUpdateOneWithoutHouseInput
  host?: UserUpdateOneWithoutOwnedHousesInput
  pricing?: PricingUpdateOneWithoutHouseInput
  location?: LocationUpdateOneInput
  rooms?: RoomUpdateManyWithoutHouseInput
  views?: ViewsUpdateOneWithoutHouseInput
  pictures?: PictureUpdateManyInput
  contactInfoPayments?: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

export interface PaypalInformationUpdateWithoutPaymentAccountDataInput {
  email?: String
}

export interface PricingUpdateOneWithoutHouseInput {
  create?: PricingCreateWithoutHouseInput
  connect?: PricingWhereUniqueInput
  delete?: Boolean
  update?: PricingUpdateWithoutHouseDataInput
  upsert?: PricingUpsertWithoutHouseInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface PricingUpdateWithoutHouseDataInput {
  basePrice?: Int
  highestPrice?: Int
  currency?: CURRENCY
  income?: Int
}

export interface ReviewCreateManyWithoutHouseInput {
  create?: ReviewCreateWithoutHouseInput[] | ReviewCreateWithoutHouseInput
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
}

export interface PricingUpsertWithoutHouseInput {
  update: PricingUpdateWithoutHouseDataInput
  create: PricingCreateWithoutHouseInput
}

export interface UserCreateOneWithoutOwnedHousesInput {
  create?: UserCreateWithoutOwnedHousesInput
  connect?: UserWhereUniqueInput
}

export interface RoomUpdateManyWithoutHouseInput {
  create?: RoomCreateWithoutHouseInput[] | RoomCreateWithoutHouseInput
  connect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  disconnect?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  delete?: RoomWhereUniqueInput[] | RoomWhereUniqueInput
  update?: RoomUpdateWithWhereUniqueWithoutHouseInput[] | RoomUpdateWithWhereUniqueWithoutHouseInput
  upsert?: RoomUpsertWithWhereUniqueWithoutHouseInput[] | RoomUpsertWithWhereUniqueWithoutHouseInput
}

export interface CommuneCreateOneInput {
  create?: CommuneCreateInput
  connect?: CommuneWhereUniqueInput
}

export interface RoomUpdateWithWhereUniqueWithoutHouseInput {
  where: RoomWhereUniqueInput
  data: RoomUpdateWithoutHouseDataInput
}

export interface PictureSubscriptionWhereInput {
  AND?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput
  OR?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput
  NOT?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PictureWhereInput
}

export interface RoomUpdateWithoutHouseDataInput {
  label?: String
  picture_previews?: PictureUpdateManyInput
  video_previews?: VideoUpdateManyInput
}

export interface PictureWhereInput {
  AND?: PictureWhereInput[] | PictureWhereInput
  OR?: PictureWhereInput[] | PictureWhereInput
  NOT?: PictureWhereInput[] | PictureWhereInput
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
}

export interface PictureUpdateManyInput {
  create?: PictureCreateInput[] | PictureCreateInput
}

export interface PaymentAccountSubscriptionWhereInput {
  AND?: PaymentAccountSubscriptionWhereInput[] | PaymentAccountSubscriptionWhereInput
  OR?: PaymentAccountSubscriptionWhereInput[] | PaymentAccountSubscriptionWhereInput
  NOT?: PaymentAccountSubscriptionWhereInput[] | PaymentAccountSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PaymentAccountWhereInput
}

export interface VideoUpdateManyInput {
  create?: VideoCreateInput[] | VideoCreateInput
}

export interface ReviewSubscriptionWhereInput {
  AND?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput
  OR?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput
  NOT?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ReviewWhereInput
}

export interface RoomUpsertWithWhereUniqueWithoutHouseInput {
  where: RoomWhereUniqueInput
  update: RoomUpdateWithoutHouseDataInput
  create: RoomCreateWithoutHouseInput
}

export interface CityWhereInput {
  AND?: CityWhereInput[] | CityWhereInput
  OR?: CityWhereInput[] | CityWhereInput
  NOT?: CityWhereInput[] | CityWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  state?: StateWhereInput
}

export interface ViewsUpdateOneWithoutHouseInput {
  create?: ViewsCreateWithoutHouseInput
  connect?: ViewsWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ViewsUpdateWithoutHouseDataInput
  upsert?: ViewsUpsertWithoutHouseInput
}

export interface ReviewWhereInput {
  AND?: ReviewWhereInput[] | ReviewWhereInput
  OR?: ReviewWhereInput[] | ReviewWhereInput
  NOT?: ReviewWhereInput[] | ReviewWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  stars?: Int
  stars_not?: Int
  stars_in?: Int[] | Int
  stars_not_in?: Int[] | Int
  stars_lt?: Int
  stars_lte?: Int
  stars_gt?: Int
  stars_gte?: Int
  accuracy?: Int
  accuracy_not?: Int
  accuracy_in?: Int[] | Int
  accuracy_not_in?: Int[] | Int
  accuracy_lt?: Int
  accuracy_lte?: Int
  accuracy_gt?: Int
  accuracy_gte?: Int
  location?: Int
  location_not?: Int
  location_in?: Int[] | Int
  location_not_in?: Int[] | Int
  location_lt?: Int
  location_lte?: Int
  location_gt?: Int
  location_gte?: Int
  checkIn?: Int
  checkIn_not?: Int
  checkIn_in?: Int[] | Int
  checkIn_not_in?: Int[] | Int
  checkIn_lt?: Int
  checkIn_lte?: Int
  checkIn_gt?: Int
  checkIn_gte?: Int
  value?: Int
  value_not?: Int
  value_in?: Int[] | Int
  value_not_in?: Int[] | Int
  value_lt?: Int
  value_lte?: Int
  value_gt?: Int
  value_gte?: Int
  communication?: Int
  communication_not?: Int
  communication_in?: Int[] | Int
  communication_not_in?: Int[] | Int
  communication_lt?: Int
  communication_lte?: Int
  communication_gt?: Int
  communication_gte?: Int
  House?: HouseWhereInput
}

export interface ViewsUpdateWithoutHouseDataInput {
  lastWeek?: Int
}

export interface ReviewWhereUniqueInput {
  id?: ID_Input
}

export interface ViewsUpsertWithoutHouseInput {
  update: ViewsUpdateWithoutHouseDataInput
  create: ViewsCreateWithoutHouseInput
}

export interface PaymentLanlordInfoWhereUniqueInput {
  id?: ID_Input
}

export interface PaymentLanlordInfoUpdateManyWithoutHouseInput {
  create?: PaymentLanlordInfoCreateWithoutHouseInput[] | PaymentLanlordInfoCreateWithoutHouseInput
  connect?: PaymentLanlordInfoWhereUniqueInput[] | PaymentLanlordInfoWhereUniqueInput
  disconnect?: PaymentLanlordInfoWhereUniqueInput[] | PaymentLanlordInfoWhereUniqueInput
  delete?: PaymentLanlordInfoWhereUniqueInput[] | PaymentLanlordInfoWhereUniqueInput
  update?: PaymentLanlordInfoUpdateWithWhereUniqueWithoutHouseInput[] | PaymentLanlordInfoUpdateWithWhereUniqueWithoutHouseInput
  upsert?: PaymentLanlordInfoUpsertWithWhereUniqueWithoutHouseInput[] | PaymentLanlordInfoUpsertWithWhereUniqueWithoutHouseInput
}

export interface CityWhereUniqueInput {
  id?: ID_Input
}

export interface PaymentLanlordInfoUpdateWithWhereUniqueWithoutHouseInput {
  where: PaymentLanlordInfoWhereUniqueInput
  data: PaymentLanlordInfoUpdateWithoutHouseDataInput
}

export interface UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput
  create: UserCreateWithoutNotificationsInput
}

export interface PaymentLanlordInfoUpdateWithoutHouseDataInput {
  totalPrice?: Float
  moncashTransactId?: String
  client?: UserUpdateOneWithoutPaidContactsInput
}

export interface CreditCardInformationUpdateInput {
  cardNumber?: String
  expiresOnMonth?: Int
  expiresOnYear?: Int
  securityCode?: String
  firstName?: String
  lastName?: String
  postalCode?: String
  country?: String
  paymentAccount?: PaymentAccountUpdateOneWithoutCreditcardInput
}

export interface UserUpdateOneWithoutPaidContactsInput {
  create?: UserCreateWithoutPaidContactsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutPaidContactsDataInput
  upsert?: UserUpsertWithoutPaidContactsInput
}

export interface PaymentHouseUpdateManyWithoutPaymentMethodInput {
  create?: PaymentHouseCreateWithoutPaymentMethodInput[] | PaymentHouseCreateWithoutPaymentMethodInput
  connect?: PaymentHouseWhereUniqueInput[] | PaymentHouseWhereUniqueInput
  disconnect?: PaymentHouseWhereUniqueInput[] | PaymentHouseWhereUniqueInput
  delete?: PaymentHouseWhereUniqueInput[] | PaymentHouseWhereUniqueInput
  update?: PaymentHouseUpdateWithWhereUniqueWithoutPaymentMethodInput[] | PaymentHouseUpdateWithWhereUniqueWithoutPaymentMethodInput
  upsert?: PaymentHouseUpsertWithWhereUniqueWithoutPaymentMethodInput[] | PaymentHouseUpsertWithWhereUniqueWithoutPaymentMethodInput
}

export interface UserUpdateWithoutPaidContactsDataInput {
  status?: Boolean
  facebookUserId?: String
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone1?: String
  phone2?: String
  primaryPhone?: Int
  responseTime?: Int
  isSuperHost?: Boolean
  ownedHouses?: HouseUpdateManyWithoutHostInput
  location?: LocationUpdateOneInput
  bookings?: BookingUpdateManyWithoutBookeeInput
  notifications?: NotificationUpdateManyWithoutUserInput
  profilePicture?: PictureUpdateOneInput
}

export interface HouseUpdateDataInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription?: String
  description?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBaths?: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutHouseInput
  amenities?: AmenitiesUpdateOneWithoutHouseInput
  host?: UserUpdateOneWithoutOwnedHousesInput
  pricing?: PricingUpdateOneWithoutHouseInput
  location?: LocationUpdateOneInput
  rooms?: RoomUpdateManyWithoutHouseInput
  views?: ViewsUpdateOneWithoutHouseInput
  bookings?: BookingUpdateManyWithoutHouseInput
  pictures?: PictureUpdateManyInput
  contactInfoPayments?: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

export interface HouseUpdateManyWithoutHostInput {
  create?: HouseCreateWithoutHostInput[] | HouseCreateWithoutHostInput
  connect?: HouseWhereUniqueInput[] | HouseWhereUniqueInput
  disconnect?: HouseWhereUniqueInput[] | HouseWhereUniqueInput
  delete?: HouseWhereUniqueInput[] | HouseWhereUniqueInput
  update?: HouseUpdateWithWhereUniqueWithoutHostInput[] | HouseUpdateWithWhereUniqueWithoutHostInput
  upsert?: HouseUpsertWithWhereUniqueWithoutHostInput[] | HouseUpsertWithWhereUniqueWithoutHostInput
}

export interface HouseUpsertWithoutAmenitiesInput {
  update: HouseUpdateWithoutAmenitiesDataInput
  create: HouseCreateWithoutAmenitiesInput
}

export interface HouseUpdateWithWhereUniqueWithoutHostInput {
  where: HouseWhereUniqueInput
  data: HouseUpdateWithoutHostDataInput
}

export interface HouseUpsertWithoutPricingInput {
  update: HouseUpdateWithoutPricingDataInput
  create: HouseCreateWithoutPricingInput
}

export interface HouseUpdateWithoutHostDataInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription?: String
  description?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBaths?: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutHouseInput
  amenities?: AmenitiesUpdateOneWithoutHouseInput
  pricing?: PricingUpdateOneWithoutHouseInput
  location?: LocationUpdateOneInput
  rooms?: RoomUpdateManyWithoutHouseInput
  views?: ViewsUpdateOneWithoutHouseInput
  bookings?: BookingUpdateManyWithoutHouseInput
  pictures?: PictureUpdateManyInput
  contactInfoPayments?: PaymentLanlordInfoUpdateManyWithoutHouseInput
}

export interface PaymentLanlordInfoUpsertWithWhereUniqueWithoutHouseInput {
  where: PaymentLanlordInfoWhereUniqueInput
  update: PaymentLanlordInfoUpdateWithoutHouseDataInput
  create: PaymentLanlordInfoCreateWithoutHouseInput
}

export interface BookingUpdateManyWithoutHouseInput {
  create?: BookingCreateWithoutHouseInput[] | BookingCreateWithoutHouseInput
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  disconnect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  delete?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  update?: BookingUpdateWithWhereUniqueWithoutHouseInput[] | BookingUpdateWithWhereUniqueWithoutHouseInput
  upsert?: BookingUpsertWithWhereUniqueWithoutHouseInput[] | BookingUpsertWithWhereUniqueWithoutHouseInput
}

export interface CreditCardInformationUpdateOneWithoutPaymentAccountInput {
  create?: CreditCardInformationCreateWithoutPaymentAccountInput
  connect?: CreditCardInformationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CreditCardInformationUpdateWithoutPaymentAccountDataInput
  upsert?: CreditCardInformationUpsertWithoutPaymentAccountInput
}

export interface BookingUpdateWithWhereUniqueWithoutHouseInput {
  where: BookingWhereUniqueInput
  data: BookingUpdateWithoutHouseDataInput
}

export interface HouseCreateOneWithoutRoomsInput {
  create?: HouseCreateWithoutRoomsInput
  connect?: HouseWhereUniqueInput
}

export interface BookingUpdateWithoutHouseDataInput {
  startDate?: DateTime
  endDate?: DateTime
  bookee?: UserUpdateOneWithoutBookingsInput
  payment?: PaymentHouseUpdateOneWithoutBookingInput
}

export interface LocationCreateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
}

export interface UserUpdateOneWithoutBookingsInput {
  create?: UserCreateWithoutBookingsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutBookingsDataInput
  upsert?: UserUpsertWithoutBookingsInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpdateWithoutBookingsDataInput {
  status?: Boolean
  facebookUserId?: String
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone1?: String
  phone2?: String
  primaryPhone?: Int
  responseTime?: Int
  isSuperHost?: Boolean
  ownedHouses?: HouseUpdateManyWithoutHostInput
  location?: LocationUpdateOneInput
  paidContacts?: PaymentLanlordInfoUpdateManyWithoutClientInput
  notifications?: NotificationUpdateManyWithoutUserInput
  profilePicture?: PictureUpdateOneInput
}

export interface House_FavoritedSubscriptionWhereInput {
  AND?: House_FavoritedSubscriptionWhereInput[] | House_FavoritedSubscriptionWhereInput
  OR?: House_FavoritedSubscriptionWhereInput[] | House_FavoritedSubscriptionWhereInput
  NOT?: House_FavoritedSubscriptionWhereInput[] | House_FavoritedSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: House_FavoritedWhereInput
}

export interface PaymentLanlordInfoUpdateManyWithoutClientInput {
  create?: PaymentLanlordInfoCreateWithoutClientInput[] | PaymentLanlordInfoCreateWithoutClientInput
  connect?: PaymentLanlordInfoWhereUniqueInput[] | PaymentLanlordInfoWhereUniqueInput
  disconnect?: PaymentLanlordInfoWhereUniqueInput[] | PaymentLanlordInfoWhereUniqueInput
  delete?: PaymentLanlordInfoWhereUniqueInput[] | PaymentLanlordInfoWhereUniqueInput
  update?: PaymentLanlordInfoUpdateWithWhereUniqueWithoutClientInput[] | PaymentLanlordInfoUpdateWithWhereUniqueWithoutClientInput
  upsert?: PaymentLanlordInfoUpsertWithWhereUniqueWithoutClientInput[] | PaymentLanlordInfoUpsertWithWhereUniqueWithoutClientInput
}

export interface LocationWhereInput {
  AND?: LocationWhereInput[] | LocationWhereInput
  OR?: LocationWhereInput[] | LocationWhereInput
  NOT?: LocationWhereInput[] | LocationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  lat?: Float
  lat_not?: Float
  lat_in?: Float[] | Float
  lat_not_in?: Float[] | Float
  lat_lt?: Float
  lat_lte?: Float
  lat_gt?: Float
  lat_gte?: Float
  lng?: Float
  lng_not?: Float
  lng_in?: Float[] | Float
  lng_not_in?: Float[] | Float
  lng_lt?: Float
  lng_lte?: Float
  lng_gt?: Float
  lng_gte?: Float
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  commune?: CommuneWhereInput
}

export interface PaymentLanlordInfoUpdateWithWhereUniqueWithoutClientInput {
  where: PaymentLanlordInfoWhereUniqueInput
  data: PaymentLanlordInfoUpdateWithoutClientDataInput
}

export interface PaymentHouseWhereUniqueInput {
  id?: ID_Input
}

export interface PaymentLanlordInfoUpdateWithoutClientDataInput {
  totalPrice?: Float
  moncashTransactId?: String
  House?: HouseUpdateOneWithoutContactInfoPaymentsInput
}

export interface StateUpdateInput {
  name?: String
  country?: CountryUpdateOneInput
}

export interface HouseUpdateOneWithoutContactInfoPaymentsInput {
  create?: HouseCreateWithoutContactInfoPaymentsInput
  connect?: HouseWhereUniqueInput
  delete?: Boolean
  update?: HouseUpdateWithoutContactInfoPaymentsDataInput
  upsert?: HouseUpsertWithoutContactInfoPaymentsInput
}

export interface PaypalInformationUpdateInput {
  email?: String
  paymentAccount?: PaymentAccountUpdateOneWithoutPaypalInput
}

export interface HouseUpdateWithoutContactInfoPaymentsDataInput {
  name?: String
  area?: Int
  age?: Int
  shortDescription?: String
  description?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBaths?: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified?: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutHouseInput
  amenities?: AmenitiesUpdateOneWithoutHouseInput
  host?: UserUpdateOneWithoutOwnedHousesInput
  pricing?: PricingUpdateOneWithoutHouseInput
  location?: LocationUpdateOneInput
  rooms?: RoomUpdateManyWithoutHouseInput
  views?: ViewsUpdateOneWithoutHouseInput
  bookings?: BookingUpdateManyWithoutHouseInput
  pictures?: PictureUpdateManyInput
}

export interface HouseUpsertWithoutReviewsInput {
  update: HouseUpdateWithoutReviewsDataInput
  create: HouseCreateWithoutReviewsInput
}

export interface HouseUpsertWithoutContactInfoPaymentsInput {
  update: HouseUpdateWithoutContactInfoPaymentsDataInput
  create: HouseCreateWithoutContactInfoPaymentsInput
}

export interface HouseUpsertWithoutRoomsInput {
  update: HouseUpdateWithoutRoomsDataInput
  create: HouseCreateWithoutRoomsInput
}

export interface PaymentLanlordInfoUpsertWithWhereUniqueWithoutClientInput {
  where: PaymentLanlordInfoWhereUniqueInput
  update: PaymentLanlordInfoUpdateWithoutClientDataInput
  create: PaymentLanlordInfoCreateWithoutClientInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface NotificationUpdateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  update?: NotificationUpdateWithWhereUniqueWithoutUserInput[] | NotificationUpdateWithWhereUniqueWithoutUserInput
  upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[] | NotificationUpsertWithWhereUniqueWithoutUserInput
}

export interface CityCreateOneInput {
  create?: CityCreateInput
  connect?: CityWhereUniqueInput
}

export interface NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutUserDataInput
}

export interface House_FavoritedWhereInput {
  AND?: House_FavoritedWhereInput[] | House_FavoritedWhereInput
  OR?: House_FavoritedWhereInput[] | House_FavoritedWhereInput
  NOT?: House_FavoritedWhereInput[] | House_FavoritedWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  user?: UserWhereInput
  house?: HouseWhereInput
}

export interface NotificationUpdateWithoutUserDataInput {
  type?: NOTIFICATION_TYPE
  link?: String
  readDate?: DateTime
}

export interface CountryWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutUserDataInput
  create: NotificationCreateWithoutUserInput
}

export interface BookingUpdateOneWithoutPaymentInput {
  create?: BookingCreateWithoutPaymentInput
  connect?: BookingWhereUniqueInput
  delete?: Boolean
  update?: BookingUpdateWithoutPaymentDataInput
  upsert?: BookingUpsertWithoutPaymentInput
}

export interface PaymentHouseUpsertWithoutBookingInput {
  update: PaymentHouseUpdateWithoutBookingDataInput
  create: PaymentHouseCreateWithoutBookingInput
}

export interface UserUpsertWithoutBookingsInput {
  update: UserUpdateWithoutBookingsDataInput
  create: UserCreateWithoutBookingsInput
}

export interface PictureUpsertNestedInput {
  update: PictureUpdateDataInput
  create: PictureCreateInput
}

export interface PictureUpdateDataInput {
  url?: String
}

export interface PictureUpdateOneInput {
  create?: PictureCreateInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PictureUpdateDataInput
  upsert?: PictureUpsertNestedInput
}

export interface AmenitiesCreateOneWithoutHouseInput {
  create?: AmenitiesCreateWithoutHouseInput
  connect?: AmenitiesWhereUniqueInput
}

export interface HouseUpsertWithoutViewsInput {
  update: HouseUpdateWithoutViewsDataInput
  create: HouseCreateWithoutViewsInput
}

export interface PaymentLanlordInfoUpdateInput {
  totalPrice?: Float
  moncashTransactId?: String
  client?: UserUpdateOneWithoutPaidContactsInput
  House?: HouseUpdateOneWithoutContactInfoPaymentsInput
}

export interface RoomWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationWhereInput {
  AND?: NotificationWhereInput[] | NotificationWhereInput
  OR?: NotificationWhereInput[] | NotificationWhereInput
  NOT?: NotificationWhereInput[] | NotificationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  type?: NOTIFICATION_TYPE
  type_not?: NOTIFICATION_TYPE
  type_in?: NOTIFICATION_TYPE[] | NOTIFICATION_TYPE
  type_not_in?: NOTIFICATION_TYPE[] | NOTIFICATION_TYPE
  link?: String
  link_not?: String
  link_in?: String[] | String
  link_not_in?: String[] | String
  link_lt?: String
  link_lte?: String
  link_gt?: String
  link_gte?: String
  link_contains?: String
  link_not_contains?: String
  link_starts_with?: String
  link_not_starts_with?: String
  link_ends_with?: String
  link_not_ends_with?: String
  readDate?: DateTime
  readDate_not?: DateTime
  readDate_in?: DateTime[] | DateTime
  readDate_not_in?: DateTime[] | DateTime
  readDate_lt?: DateTime
  readDate_lte?: DateTime
  readDate_gt?: DateTime
  readDate_gte?: DateTime
  user?: UserWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface BatchPayload {
  count: Long
}

export interface CityPreviousValues {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface RoomConnection {
  pageInfo: PageInfo
  edges: RoomEdge[]
  aggregate: AggregateRoom
}

export interface VideoPreviousValues {
  url: String
}

export interface Room extends Node {
  id: ID_Output
  label: String
  house: House
  picture_previews?: Picture[]
  video_previews?: Video[]
}

export interface House extends Node {
  id: ID_Output
  name?: String
  area?: Int
  age: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  reviews?: Review[]
  amenities: Amenities
  host: User
  pricing: Pricing
  location: Location
  leaseType?: HOUSE_LEASE_TYPE
  verified: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease: Int
  rooms?: Room[]
  views?: Views
  bookings?: Booking[]
  pictures?: Picture[]
  contactInfoPayments?: PaymentLanlordInfo[]
  popularity: Int
}

export interface AggregateCity {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface CityConnection {
  pageInfo: PageInfo
  edges: CityEdge[]
  aggregate: AggregateCity
}

export interface CitySubscriptionPayload {
  mutation: MutationType
  node?: City
  updatedFields?: String[]
  previousValues?: CityPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PictureEdge {
  node: Picture
  cursor: String
}

export interface Review extends Node {
  id: ID_Output
  createdAt: DateTime
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  communication: Int
  House: House
}

export interface AggregateVideo {
  count: Int
}

export interface PicturePreviousValues {
  url: String
}

/*
 * A connection to a list of items.

 */
export interface VideoConnection {
  pageInfo: PageInfo
  edges: VideoEdge[]
  aggregate: AggregateVideo
}

export interface PictureSubscriptionPayload {
  mutation: MutationType
  node?: Picture
  updatedFields?: String[]
  previousValues?: PicturePreviousValues
}

/*
 * An edge in a connection.

 */
export interface HouseEdge {
  node: House
  cursor: String
}

export interface RoomSubscriptionPayload {
  mutation: MutationType
  node?: Room
  updatedFields?: String[]
  previousValues?: RoomPreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface RoomPreviousValues {
  id: ID_Output
  label: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface Amenities extends Node {
  id: ID_Output
  House: House
  electricity: Boolean
  electricity_frequency?: FREQUENCY
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireHouse: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  bathtub: Boolean
  crib: Boolean
}

/*
 * An edge in a connection.

 */
export interface StateEdge {
  node: State
  cursor: String
}

export interface PricingSubscriptionPayload {
  mutation: MutationType
  node?: Pricing
  updatedFields?: String[]
  previousValues?: PricingPreviousValues
}

export interface AggregateCountry {
  count: Int
}

export interface PricingPreviousValues {
  id: ID_Output
  basePrice: Int
  highestPrice: Int
  currency?: CURRENCY
  income: Int
}

/*
 * A connection to a list of items.

 */
export interface CountryConnection {
  pageInfo: PageInfo
  edges: CountryEdge[]
  aggregate: AggregateCountry
}

export interface Negotiation extends Node {
  id: ID_Output
  createdAt: DateTime
  negotiator: User
  House: House
  offer: Float
  status?: NEGOTIATION_TYPE
}

/*
 * An edge in a connection.

 */
export interface CommuneEdge {
  node: Commune
  cursor: String
}

export interface ViewsSubscriptionPayload {
  mutation: MutationType
  node?: Views
  updatedFields?: String[]
  previousValues?: ViewsPreviousValues
}

export interface AggregateLocation {
  count: Int
}

export interface ViewsPreviousValues {
  id: ID_Output
  lastWeek: Int
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo
  edges: LocationEdge[]
  aggregate: AggregateLocation
}

export interface House_Favorited extends Node {
  id: ID_Output
  createdAt: DateTime
  user: User
  house: House
}

/*
 * An edge in a connection.

 */
export interface NotificationEdge {
  node: Notification
  cursor: String
}

export interface AmenitiesSubscriptionPayload {
  mutation: MutationType
  node?: Amenities
  updatedFields?: String[]
  previousValues?: AmenitiesPreviousValues
}

export interface AggregatePaymentLanlordInfo {
  count: Int
}

export interface AmenitiesPreviousValues {
  id: ID_Output
  electricity: Boolean
  electricity_frequency?: FREQUENCY
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireHouse: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  bathtub: Boolean
  crib: Boolean
}

/*
 * A connection to a list of items.

 */
export interface PaymentLanlordInfoConnection {
  pageInfo: PageInfo
  edges: PaymentLanlordInfoEdge[]
  aggregate: AggregatePaymentLanlordInfo
}

export interface Video {
  url: String
}

/*
 * An edge in a connection.

 */
export interface CreditCardInformationEdge {
  node: CreditCardInformation
  cursor: String
}

export interface ReviewSubscriptionPayload {
  mutation: MutationType
  node?: Review
  updatedFields?: String[]
  previousValues?: ReviewPreviousValues
}

export interface AggregatePaypalInformation {
  count: Int
}

export interface ReviewPreviousValues {
  id: ID_Output
  createdAt: DateTime
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  communication: Int
}

/*
 * A connection to a list of items.

 */
export interface PaypalInformationConnection {
  pageInfo: PageInfo
  edges: PaypalInformationEdge[]
  aggregate: AggregatePaypalInformation
}

export interface Views extends Node {
  id: ID_Output
  lastWeek: Int
  House: House
}

/*
 * An edge in a connection.

 */
export interface PaymentAccountEdge {
  node: PaymentAccount
  cursor: String
}

export interface BookingSubscriptionPayload {
  mutation: MutationType
  node?: Booking
  updatedFields?: String[]
  previousValues?: BookingPreviousValues
}

export interface AggregatePaymentHouse {
  count: Int
}

export interface BookingPreviousValues {
  id: ID_Output
  createdAt: DateTime
  startDate: DateTime
  endDate: DateTime
}

/*
 * A connection to a list of items.

 */
export interface PaymentHouseConnection {
  pageInfo: PageInfo
  edges: PaymentHouseEdge[]
  aggregate: AggregatePaymentHouse
}

export interface Pricing extends Node {
  id: ID_Output
  House: House
  basePrice: Int
  highestPrice: Int
  currency?: CURRENCY
  income: Int
}

/*
 * An edge in a connection.

 */
export interface NegotiationEdge {
  node: Negotiation
  cursor: String
}

export interface House_FavoritedSubscriptionPayload {
  mutation: MutationType
  node?: House_Favorited
  updatedFields?: String[]
  previousValues?: House_FavoritedPreviousValues
}

export interface AggregateHouse_Favorited {
  count: Int
}

export interface House_FavoritedPreviousValues {
  id: ID_Output
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface House_FavoritedConnection {
  pageInfo: PageInfo
  edges: House_FavoritedEdge[]
  aggregate: AggregateHouse_Favorited
}

export interface Picture {
  url: String
}

/*
 * An edge in a connection.

 */
export interface BookingEdge {
  node: Booking
  cursor: String
}

export interface NegotiationSubscriptionPayload {
  mutation: MutationType
  node?: Negotiation
  updatedFields?: String[]
  previousValues?: NegotiationPreviousValues
}

export interface AggregateReview {
  count: Int
}

export interface NegotiationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  offer: Float
  status?: NEGOTIATION_TYPE
}

/*
 * A connection to a list of items.

 */
export interface ReviewConnection {
  pageInfo: PageInfo
  edges: ReviewEdge[]
  aggregate: AggregateReview
}

export interface Notification extends Node {
  id: ID_Output
  createdAt: DateTime
  type?: NOTIFICATION_TYPE
  user: User
  link: String
  readDate: DateTime
}

/*
 * An edge in a connection.

 */
export interface AmenitiesEdge {
  node: Amenities
  cursor: String
}

export interface PaymentHouseSubscriptionPayload {
  mutation: MutationType
  node?: PaymentHouse
  updatedFields?: String[]
  previousValues?: PaymentHousePreviousValues
}

export interface AggregateViews {
  count: Int
}

export interface PaymentHousePreviousValues {
  id: ID_Output
  createdAt: DateTime
  totalPrice: Float
}

/*
 * A connection to a list of items.

 */
export interface ViewsConnection {
  pageInfo: PageInfo
  edges: ViewsEdge[]
  aggregate: AggregateViews
}

export interface PaymentLanlordInfo extends Node {
  id: ID_Output
  createdAt: DateTime
  totalPrice: Float
  client: User
  House: House
  moncashTransactId: String
}

/*
 * An edge in a connection.

 */
export interface PricingEdge {
  node: Pricing
  cursor: String
}

export interface PaymentAccountSubscriptionPayload {
  mutation: MutationType
  node?: PaymentAccount
  updatedFields?: String[]
  previousValues?: PaymentAccountPreviousValues
}

export interface AggregateRoom {
  count: Int
}

export interface PaymentAccountPreviousValues {
  id: ID_Output
  createdAt: DateTime
  type?: PAYMENT_PROVIDER
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface CreditCardInformation extends Node {
  id: ID_Output
  createdAt: DateTime
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount?: PaymentAccount
}

export interface AggregatePicture {
  count: Int
}

export interface PaypalInformationSubscriptionPayload {
  mutation: MutationType
  node?: PaypalInformation
  updatedFields?: String[]
  previousValues?: PaypalInformationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface VideoEdge {
  node: Video
  cursor: String
}

export interface PaypalInformationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  email: String
}

/*
 * A connection to a list of items.

 */
export interface HouseConnection {
  pageInfo: PageInfo
  edges: HouseEdge[]
  aggregate: AggregateHouse
}

export interface PaypalInformation extends Node {
  id: ID_Output
  createdAt: DateTime
  email: String
  paymentAccount: PaymentAccount
}

export interface AggregateState {
  count: Int
}

export interface CreditCardInformationSubscriptionPayload {
  mutation: MutationType
  node?: CreditCardInformation
  updatedFields?: String[]
  previousValues?: CreditCardInformationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CountryEdge {
  node: Country
  cursor: String
}

export interface CreditCardInformationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

/*
 * A connection to a list of items.

 */
export interface CommuneConnection {
  pageInfo: PageInfo
  edges: CommuneEdge[]
  aggregate: AggregateCommune
}

export interface PaymentAccount extends Node {
  id: ID_Output
  createdAt: DateTime
  type?: PAYMENT_PROVIDER
  user: User
  payments?: PaymentHouse[]
  paypal?: PaypalInformation
  creditcard?: CreditCardInformation
}

export interface AggregateNotification {
  count: Int
}

export interface PaymentLanlordInfoSubscriptionPayload {
  mutation: MutationType
  node?: PaymentLanlordInfo
  updatedFields?: String[]
  previousValues?: PaymentLanlordInfoPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PaymentLanlordInfoEdge {
  node: PaymentLanlordInfo
  cursor: String
}

export interface PaymentLanlordInfoPreviousValues {
  id: ID_Output
  createdAt: DateTime
  totalPrice: Float
  moncashTransactId: String
}

/*
 * A connection to a list of items.

 */
export interface CreditCardInformationConnection {
  pageInfo: PageInfo
  edges: CreditCardInformationEdge[]
  aggregate: AggregateCreditCardInformation
}

export interface PaymentHouse extends Node {
  id: ID_Output
  createdAt: DateTime
  totalPrice: Float
  booking: Booking
  paymentMethod: PaymentAccount
}

export interface AggregatePaymentAccount {
  count: Int
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification
  updatedFields?: String[]
  previousValues?: NotificationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PaymentHouseEdge {
  node: PaymentHouse
  cursor: String
}

export interface NotificationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  type?: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
}

/*
 * A connection to a list of items.

 */
export interface NegotiationConnection {
  pageInfo: PageInfo
  edges: NegotiationEdge[]
  aggregate: AggregateNegotiation
}

export interface Booking extends Node {
  id: ID_Output
  createdAt: DateTime
  bookee: User
  House: House
  startDate: DateTime
  endDate: DateTime
  payment: PaymentHouse
}

export interface AggregateBooking {
  count: Int
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location
  updatedFields?: String[]
  previousValues?: LocationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ReviewEdge {
  node: Review
  cursor: String
}

export interface LocationPreviousValues {
  id: ID_Output
  lat?: Float
  lng?: Float
  address?: String
}

/*
 * A connection to a list of items.

 */
export interface AmenitiesConnection {
  pageInfo: PageInfo
  edges: AmenitiesEdge[]
  aggregate: AggregateAmenities
}

export interface Country extends Node {
  id: ID_Output
  name: String
}

export interface AggregatePricing {
  count: Int
}

export interface CommuneSubscriptionPayload {
  mutation: MutationType
  node?: Commune
  updatedFields?: String[]
  previousValues?: CommunePreviousValues
}

/*
 * An edge in a connection.

 */
export interface RoomEdge {
  node: Room
  cursor: String
}

export interface CommunePreviousValues {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface PictureConnection {
  pageInfo: PageInfo
  edges: PictureEdge[]
  aggregate: AggregatePicture
}

export interface State extends Node {
  id: ID_Output
  name: String
  country: Country
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface CountrySubscriptionPayload {
  mutation: MutationType
  node?: Country
  updatedFields?: String[]
  previousValues?: CountryPreviousValues
}

export interface AggregateCommune {
  count: Int
}

export interface CountryPreviousValues {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface NotificationConnection {
  pageInfo: PageInfo
  edges: NotificationEdge[]
  aggregate: AggregateNotification
}

export interface City extends Node {
  id: ID_Output
  name: String
  state: State
}

/*
 * An edge in a connection.

 */
export interface PaypalInformationEdge {
  node: PaypalInformation
  cursor: String
}

export interface StateSubscriptionPayload {
  mutation: MutationType
  node?: State
  updatedFields?: String[]
  previousValues?: StatePreviousValues
}

export interface AggregateNegotiation {
  count: Int
}

export interface StatePreviousValues {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface BookingConnection {
  pageInfo: PageInfo
  edges: BookingEdge[]
  aggregate: AggregateBooking
}

export interface Commune extends Node {
  id: ID_Output
  name: String
  city: City
}

/*
 * An edge in a connection.

 */
export interface ViewsEdge {
  node: Views
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CityEdge {
  node: City
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  status?: Boolean
  facebookUserId?: String
  firstName: String
  lastName: String
  email?: String
  password?: String
  phone1?: String
  phone2?: String
  primaryPhone: Int
  responseTime?: Int
  isSuperHost: Boolean
}

/*
 * A connection to a list of items.

 */
export interface StateConnection {
  pageInfo: PageInfo
  edges: StateEdge[]
  aggregate: AggregateState
}

export interface Location extends Node {
  id: ID_Output
  lat?: Float
  lng?: Float
  address?: String
  commune?: Commune
}

export interface AggregateCreditCardInformation {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface House_FavoritedEdge {
  node: House_Favorited
  cursor: String
}

export interface VideoSubscriptionPayload {
  mutation: MutationType
  node?: Video
  updatedFields?: String[]
  previousValues?: VideoPreviousValues
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  status?: Boolean
  facebookUserId?: String
  firstName: String
  lastName: String
  email?: String
  password?: String
  phone1?: String
  phone2?: String
  primaryPhone: Int
  responseTime?: Int
  isSuperHost: Boolean
  ownedHouses?: House[]
  location?: Location
  bookings?: Booking[]
  paidContacts?: PaymentLanlordInfo[]
  notifications?: Notification[]
  profilePicture?: Picture
}

export interface HousePreviousValues {
  id: ID_Output
  name?: String
  area?: Int
  age: Int
  shortDescription: String
  description: String
  maxGuests: Int
  numBedrooms: Int
  numBaths: Int
  leaseType?: HOUSE_LEASE_TYPE
  verified: Boolean
  type?: HOUSE_TYPES
  residency?: House_RESIDENCY
  lease: Int
  popularity: Int
}

export interface HouseSubscriptionPayload {
  mutation: MutationType
  node?: House
  updatedFields?: String[]
  previousValues?: HousePreviousValues
}

export interface AggregateAmenities {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface PaymentAccountConnection {
  pageInfo: PageInfo
  edges: PaymentAccountEdge[]
  aggregate: AggregatePaymentAccount
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface AggregateHouse {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface PricingConnection {
  pageInfo: PageInfo
  edges: PricingEdge[]
  aggregate: AggregatePricing
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number