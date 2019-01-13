import gql from "graphql-tag";

// export const ACCOUNT_CREATION = gql`
//  mutation signup($email: String!,$password: String!,$firstName: String!, $lastName: String!, $phone1: String!,$profilePicture:String){
//   signup (email:$email,password:$password,firstName:$firstName,lastName:$lastName,phone1:$phone1,profilePicture:$profilePicture){
//     token
//     user{
//       id
//     }
//   }
// }
export const ACCOUNT_CREATION = gql`
mutation signup($email:String!,$password:String!,$firstName:String!,$lastName:String!,$phone1:String!,$profilePicture:String!){
  signup(email:$email,password:$password,firstName:$firstName,lastName:$lastName,phone1:$phone1,profilePicture:$profilePicture){
  token
  user{
    id
  }
  }
}
` 

export const REQUEST_PASSWORD_TOKEN=gql`
  mutation requestPWResetToken($email:String!){
    requestPWResetToken(email:$email){
      message
    }
  }
`

export const RESET_PASSWORD=gql`
mutation resetPassword($resetToken:String!,$password:String!,$passwordConfirm:String!){
  resetPassword(resetToken:$resetToken,password:$password,passwordConfirm:$passwordConfirm){
    token
    user{
      id
    }
  }
}
`

export const AUTH_WITHOUT_SOCIAL_MEDIA=gql`
mutation login($email:String!,$password:String!) {
  login(email:$email,password:$password) {
    token 
    user{
      id
      firstName
      lastName
      email
      profilePicture{
        url
      }
    }
  }
}
`

// export const HOUSE_CREATION_2=gql`
// mutation createHouse(
//     age:10,
//     basePrice:2000,
//     currency:USD,
//     communeId:"cjk5081nkqbic0b02estuemao",
//     highestPrice:4000,
//     maxGuests:8,
//     lease:12,
//     leaseType:YEARLY,
//     numBedrooms:3,
//     numBaths:2,
//     lng:39,
//     lat:140,
//     address:"Fermathe 52, rue Puzot #2",
//     numDiningrooms:1,
//     numLivingrooms:1,
//     electricity:true,
//     electricity_frequency:OFTEN,
//     water_tank:true,
//     freeParkingOnPremises:true,
//     water_pipe:true,
//     income:10
//   ){

//     createHouse()
//     {
//       id,
//     maxGuests,
//     numBedrooms,
//     numBaths
//     }
//   }
// }
// `


// export const HOUSE_CREATION=gql`
// mutation createHouse(
//     $age:Int,
//     $basePrice:Number,
//     $currency:String,
//     $communeId:String,
//     $highestPrice:Number,
//     $maxGuests:Int,
//     $lease:Int,
//     $leaseType:String,
//     $numBedrooms:Int,
//     $numBaths:Int,
//     $lng:Number,
//     $lat:Number,
//     $address:String,
//     $numDiningrooms:Int,
//     $numLivingrooms:Int,
//     $electricity:Boolean,
//     $electricity_frequency:String,
//     $water_tank:Boolean,
//     $freeParkingOnPremises:Boolean,
//     $water_pipe:Boolean,
//     $income:Int
//   ){
//     createHouse(
//       age:$age,
//       basePrice:$basePrice,
//       currency:$currency,
//       communeId:$communeId,
//       highestPrice:$highestPrice,
//       maxGuest:$maxGuests,
//       lease:$lease,
//       leaseType:$leaseType,
//       numBedrooms:$numBedrooms,
//       numBaths:$numBaths,
//       lng:$lng,
//       lat:$lat,
//       address:$address,
//       numDiningrooms:$numDiningrooms,
//       numLivingrooms:$numLivingrooms,
//       electricity:$electricity,
//       electricity_frequency:$electricity_frequency,
//       water_tank:$water_tank,
//       freeParkingOnPremises:$freeParkingOnPremises,
//       water_pipe:$water_pipe,
//       income:$income
//     ){
//       id,
//       maxGuests,
//       numBedrooms,
//       numBaths
//     }
//   }
// `

export const HOUSE_CREATION=gql`
  mutation createHouse($age:Int!,$maxGuests:Int!,$numBedrooms:Int!,$numBaths:Int!,$basePrice:Int!,$numLivingrooms:Int!,$numDiningrooms:Int!,$highestPrice:Int!,$income:Int!,$lease:Int!,$communeId:String, $currency:CURRENCY){
    createHouse(age:$age,maxGuests:$maxGuests,numBedrooms:$mBedrooms,numBaths:$numBaths,basePrice:$basePrice,numLivingrooms:$numLivingrooms,numDiningrooms:$numDiningrooms,highestPrice:$highestPrice,income:$income,lease:$lease,communeId:$communeId,currency:$currency){
      id
    }
  }
`

export const HOUSE_CREATION_2=gql`
  mutation createHouse(
    $area:Int,
    $age:Int!,
    $shortDescription:String,
    $description:String,
    $maxGuests:Int!,
    $numBedrooms:Int!,
    $numBaths:Int!,
    $basePrice:Int!,
    $numLivingrooms:Int!,
    $numDiningrooms:Int!,
    $highestPrice:Int!,
    $currency:CURRENCY,
    $income:Int!,
    $lat:Float,
    $lng:Float,
    $address:String,
    $communeId:String,
    $leaseType:String,
    $type:String,
    $residency:String,
    $lease:Int!,
    $electricity:Boolean,
    $electricity_frequency:String,
    $water_pipe:Boolean,
    $water_tank:Boolean,
    $water_frequency:String,
    $elevator:Boolean,
    $petsAllowed:Boolean,
    $internet:Boolean,
    $kitchen:Boolean,
    $wirelessInternet:Boolean,
    $familyKidFriendly:Boolean,
    $freeParkingOnPremises:Boolean,
    $hotTub:Boolean,
    $pool:Boolean,
    $smokingAllowed:Boolean,
    $wheelchairAccessible:Boolean,
    $cableTv:Boolean,
    $suitableForEvents:Boolean,
    $dryer:Boolean,
    $washer:Boolean,
    $indoorFireHouse:Boolean,
    $tv:Boolean,
    $hangers:Boolean,
    $iron:Boolean,
    $hairDryer:Boolean,
    $doorman:Boolean,
    $paidParkingOffPremises:Boolean,
    $freeParkingOnStreet:Boolean,
    $gym:Boolean,
    $airConditioning:Boolean,
    $shampoo:Boolean,
    $essentials:Boolean,
    $laptopFriendlyWorkspace:Boolean,
    $privateEntrance:Boolean,
    $buzzerWirelessIntercom:Boolean,
    $bathtub:Boolean,
    $crib:Boolean){
    createHouse(
    area:$area,
    age:$age,
    shortDescription:$shortDescription,
    description:$description,
    maxGuests:$maxGuests,
    numBedrooms:$numBedrooms,
    numBaths:$numBaths,
    basePrice:$basePrice,
    numLivingrooms:$numLivingrooms,
    numDiningrooms:$numDiningrooms,
    highestPrice:$highestPrice,
    currency:$currency,
    income:$income,
    lat:$lat,
    lng:$lng,
    address:$address,
    communeId:$communeId,
    leaseType:$leaseType,
    type:$type,
    residency:$residency,
    lease:$lease,electricity:$electricity,
    electricity_frequency:$electricity_frequency,
    water_pipe:$water_pipe,
    water_tank:$water_tank,
    water_frequency:$water_frequency,
    elevator:$elevator,
    petAllowed:$petsAllowed,
    internet:$internet,
    kitchen:$kitchen,
    wirelessInternet:$wirelessInternet,
    familyKidFriendly:$familyKidFriendly,
    freeParkingOnPremises:$freeParkingOnPremises,
    hotTub:$hotTub,
    pool:$pool,
    smokingAllowed:$smokingAllowed,
    wheelchairAccessible:$wheelchairAccessible,
    cableTv:$cableTv,
    suitableForEvents:$suitableForEvents,
    dryer:$dryer,
    washer:$washer,
    indoor:$indoorFireHouse,
    tv:$tv,
    hangers:$hangers,
    iron:$iron,
    hairDryer:$hairDryer,
    doorman:$doorman,
    paidParkingOffPremises:$paidParkingOffPremises,
    freeParkingOnPremises:$freeParkingOnStreet,
    gym:$gym,
    airConditioning:$airConditioning,
    shampoo:$shampoo,
    essentials:$essentials,
    laptopFriendlyWorkspace:$laptopFriendlyWorkspace,
    privateEntrance:$privateEntrance,
    buzzerWirelessIntercom:$buzzerWirelessIntercom,
    bathtub:$bathtub,
    crib:$crib){
      id
      
    }
  }
`

export const FB_AUTH = gql`
mutation authenticateFBUser($facebookToken:String!) {
authenticateFBUser(facebookToken:$facebookToken){
  token
  user{
    id
    firstName
    lastName
    email
    profilePicture{
      url
    }
  }
}
}
`

/*area: Int
age: Int!
shortDescription: String
description: String
maxGuests: Int!
numBedrooms: Int!
numBaths: Int!
basePrice: Int!
numLivingrooms: Int!
numDiningrooms: Int!
highestPrice: Int!
currency: CURRENCY
income: Int!
lat: Float
lng: Float
address: String
communeId: String
leaseType: HOUSE_LEASE_TYPE
type: HOUSE_TYPES
residency: House_RESIDENCY
lease: Int!
electricity: Boolean
electricity_frequency: FREQUENCY
water_pipe: Boolean
water_tank: Boolean
water_frequency: FREQUENCY
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
crib: Boolean*/

/**
 * =-=-=-=-=-CLIENT SIDE QUERIES AND MUTATIONS=-=-=-
 */

export const WRITE_AUTH_INFO= gql`
mutation updateAuthInfo($userAuthInfo:Object!){
  updateAuthInfo(userAuthInfo:$userAuthInfo) @client{
    token
    email
    firstName
    lastName
    profilePicture
  }
}
`

export const READ_AUTH_INFO = gql`
  query{
    userAuthInfo @client{
      token
      email
      firstName
      lastName
      profilePicture
    }
  }
`
