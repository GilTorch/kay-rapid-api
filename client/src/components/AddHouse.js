import React,{ Component } from 'react';
import HeaderBar from './HeaderBar';
import '../css/add-house.css';
import { 
    Submit,
    Age,
    HouseImages,Price,MaxGuests,WhenToPayHouse,NumberOfBedRooms,NumberOfBathrooms,NumberOfDiningRooms,NumberOfLivingRooms,
    Localisation,HouseCity,HouseAddress,Amenities,NextQuestion,PreviousQuestion 
} from './AddHouseFormGroups';
import notify from '../utils/notify';
import { toast } from 'react-toastify';

import { Mutation } from 'react-apollo';
import { HOUSE_CREATION } from '../queries/queries';
import Loading from './Loading';

const options=[
    {value:'cjk5081nkqbic0b02estuemao',label:"Pòtoprens"},
    {value:'',label:"Fò Libète"},
    {value:'',label:"Jakmèl"},
    {value:'',label:"Gonayiv"},
    {value:'',label:"Okap"},
    {value:'',label:"Okay"},
    {value:'',label:"Jeremi"},
    {value:'',label:"Pòdepè"},
    {value:'',label:"Ench"}
]

const areRequired={
    area:false,
    age:true,
    shortDescription:false,
    description:false,
    maxGuests:true,
    numBedrooms:true,
    numBaths:true,
    basePrice:true,
    numLivingrooms:true,
    numDiningrooms:true,
    highestPrice:true,
    currency:false,
    income:true,
    lat:false,
    lng:false,
    address:false,
    communeId:false,
    leaseType:false,
    type:false,
    residency:false,
    electricity:false,
    electricity_frequency:false,
    water_pipe:false,
    water_tank:false,
    water_frequency:false,
    elevator:false,
    petsAllowed:false,
    internet:false,
    kitchen:false,
    wirelessInternet:false,
    familyKidFriendly:false,
    freeParkingOnPremises:false,
    hotTub:false,
    pool:false,
    smokingAllowed:false,
    wheelchairAccessible:false,
    cableTv:false,
    suitableForEvents:false,
    dryer:false,
    washer:false,
    indoorFireHouse:false,
    tv:false,
    hangers:false,
    iron:false,
    hairDryer:false,
    doorman:false,
    paidParkingOffPremises:false,
    freeParkingOnStreet:false,
    gym:false,
    airConditioning:false,
    shampoo:false,
    essentials:false,
    laptopFriendlyWorkspace:false,
    privateEntrance:false,
    buzzerWirelessIntercom:false,
    bathtub:false,
    crib:false 
}

class AddHouse extends Component{

    state={
        zoom:1,
        haveUsersLocation:false,
        negotiable:false,
        currentQuestion:0,
        numberOfQuestions:0,
        cityLabel:null,
        payload:{
            area:null,
            age:null,
            shortDescription:null,
            description:null,
            maxGuests:null,
            numBedrooms:null,
            numBaths:null,
            basePrice:null,
            numLivingrooms:null,
            numDiningrooms:null,
            highestPrice:null,
            currency:"USD",
            income:10,
            lat:null,
            lng:null,
            address:null,
            communeId:null,
            leaseType:null,
            type:null,
            residency:null,
            electricity:null,
            electricity_frequency:"NEVER",
            water_pipe:false,
            water_tank:false,
            water_frequency:"NEVER",
            elevator:false,
            petsAllowed:false,
            internet:false,
            kitchen:false,
            wirelessInternet:false,
            familyKidFriendly:false,
            freeParkingOnPremises:false,
            hotTub:false,
            pool:false,
            smokingAllowed:false,
            wheelchairAccessible:false,
            cableTv:false,
            suitableForEvents:false,
            dryer:false,
            washer:false,
            indoorFireHouse:false,
            tv:false,
            hangers:false,
            iron:false,
            hairDryer:false,
            doorman:false,
            paidParkingOffPremises:false,
            freeParkingOnStreet:false,
            gym:false,
            airConditioning:false,
            shampoo:false,
            essentials:false,
            laptopFriendlyWorkspace:false,
            privateEntrance:false,
            buzzerWirelessIntercom:false,
            bathtub:false,
            crib:false
        }
    }

    componentDidMount(){
      
       const formGroups=document.querySelectorAll('.add-house-card__form-group');
       const numberOfQuestions=formGroups.length-1;

       formGroups.forEach((formGroup)=>{
        formGroup.style.display="none";
       })
       formGroups[0].style.display="block";

       this.setState({
           numberOfQuestions
       })
    }

    handleChange=(event)=>{
        let value="";
        const name=event.target.name;
        if(!event.target.files){
            const target = event.target;
            value = target.type === 'checkbox' ? target.checked : target.value;
        }else{
           value=event.target.files 
        }

        if(event.name){
            const value=event.name;
            const name="communeId"
            this.setState({
                payload:{
                    ...this.state.payload,
                    [name]: value,
                }
              });
        }

        if(name!=="negotiable"){

            this.setState({
                payload:{
                    ...this.state.payload,
                    [name]: value,
                }
              });
        }else{
            this.setState({
                negotiable:value
            })
        }
        
      }



    checkIfInputsAreValid=()=>{
        const formGroups=document.querySelectorAll('.add-house-card__form-group');
        const { currentQuestion }=this.state;
        const currentFormGroup=formGroups[currentQuestion];
        let areValid=true;
        const inputs=currentFormGroup.getElementsByTagName('input');

        for(var i=0;i<inputs.length;i++){
            const inputName=inputs[i].name;
            if(this.state.payload[inputName]==null && areRequired[inputName]==true){
                areValid=false;
                break;
            }
        }

        return areValid;
    }

    displayNext=(event)=>{
        event.preventDefault();
        const inputsAreValid=this.checkIfInputsAreValid();
        const formGroups=document.querySelectorAll('.add-house-card__form-group');

        if(!inputsAreValid){
            notify('BYEN RANTRE TOUT ENFOMASYON YO ANVAN OU KONTINYE.','error')
        }else{
            event.preventDefault();
            let { currentQuestion }=this.state;

            this.setState({
                previousButtonVisible:true
            })

            if(currentQuestion<formGroups.length){
                formGroups[currentQuestion].style.display="none";
                currentQuestion++;
                formGroups[currentQuestion].style.display="block";
                this.setState({
                    currentQuestion
                })
            }else{
                this.setState({
                    nextButtonVisible:false,
                })
            }
        }
        
    }

    displayPrevious=(event)=>{
        event.preventDefault();
        const formGroups=document.querySelectorAll('.add-house-card__form-group');
        let { currentQuestion }=this.state;
        if(currentQuestion>0){
            formGroups[currentQuestion].style.display="none";
            currentQuestion--;

            formGroups[currentQuestion].style.display="block";
            this.setState({
                currentQuestion
            })
        }else{
            this.setState({
                previousButtonVisible:false,
                nextButtonVisible:true
            })
        }     
        
    }

    getCurrentPosition=(event)=>{
        event.preventDefault();
        const that=this

        navigator.geolocation.getCurrentPosition(function(position) {
            that.setState({
                haveUsersLocation:true,
                zoom:13,
                payload:{
                    ...that.state.payload,
                    lng:position.coords.longitude,
                    lat:position.coords.latitude,
                },
            })
            // do_something(position.coords.latitude, position.coords.longitude);
          },()=>{
            toast.warn('NOU PAKA WE KI BO OU YE. ACTIVE GPS TELEFON OU EPI VERIFYE ENTENET OU.',{
                autoClose:3000,
                position:toast.POSITION.BOTTOM_CENTER
            })
            fetch("https://ipapi.co/json")
              .then(res => res.json())
              .then((location)=>{
                console.log(location);
                that.setState({
                    payload:{
                        ...this.state.payload,
                        lng:0,
                        lat:0
                    },
                  haveUsersLocation:true,
                  zoom:13
                })
              })
          },{enableHighAccuracy: true, maximumAge: 10000});
    }


    handleSelect=(selectedOption)=>{
        const communeId=selectedOption.value;
        const cityLabel=selectedOption.name;

        this.setState({
            cityLabel
        });

        const payload=this.state.payload 
        payload["communeId"]=communeId

        this.setState({
            payload
        })
    }

    onSubmit=(event)=>{
        event.preventDefault();
        console.log(event);
    }


    render(){

        const { currentQuestion,numberOfQuestions }=this.state;      
    
            return (
                <Mutation mutation={HOUSE_CREATION}>
                  {(createHouse,{loading,error})=>(
                      <div>
                      {(loading)?<Loading/>:""}
                      {(error)?toast.error(error.toString(),{
                            autoClose:3000,
                            position:toast.POSITION.BOTTOM_CENTER
                      }):""}
                      <HeaderBar title="Ajoute Kay Ou" hasBack={true}/>
                          <div className="card add-house-screen">
                              <div className="add-house-card">
                                  <form onSubmit={(e)=>{
                                      e.preventDefault();
                                      var txt;
                                      var r = window.confirm("Peze ok si ou dako anrejistre kay sa a. Osinon peze \"cancel\"");
                                      if (r == true) {
                                        let {
                                            area,
                                            age,
                                            shortDescription,
                                            description,
                                            maxGuests,
                                            numBedrooms,
                                            numBaths,
                                            basePrice,
                                            numLivingrooms,
                                            numDiningrooms,
                                            highestPrice,
                                            currency,
                                            income,
                                            lat,
                                            lng,
                                            address,
                                            communeId,
                                            leaseType,
                                            type,
                                            residency,
                                            electricity,
                                            electricity_frequency,
                                            water_pipe,
                                            water_tank,
                                            water_frequency,
                                            elevator,
                                            petsAllowed,
                                            internet,
                                            kitchen,
                                            wirelessInternet,
                                            familyKidFriendly,
                                            freeParkingOnPremises,
                                            hotTub,
                                            pool,
                                            smokingAllowed,
                                            wheelchairAccessible,
                                            cableTv,
                                            suitableForEvents,
                                            dryer,
                                            washer,
                                            indoorFireHouse,
                                            tv,
                                            hangers,
                                            iron,
                                            hairDryer,
                                            doorman,
                                            paidParkingOffPremises,
                                            freeParkingOnStreet,
                                            gym,
                                            airConditioning,
                                            shampoo,
                                            essentials,
                                            laptopFriendlyWorkspace,
                                            privateEntrance,
                                            buzzerWirelessIntercom,
                                            bathtub,
                                            crib
                                                                        }=this.state.payload

                                          let lease=""
                                          lng=parseFloat(lng)
                                          lat=parseFloat(lat)

                                          switch(leaseType){
                                            case "YEARLY":
                                                lease=12;
                                                break;
                                            case "MONTHLY":
                                                lease=1;
                                            break;
                                          }
                                         
                                        
                                          const obj={
                                            area,
                                            age,
                                            shortDescription,
                                            description,
                                            maxGuests,
                                            numBedrooms,
                                            numBaths,
                                            basePrice,
                                            numLivingrooms,
                                            numDiningrooms,
                                            highestPrice,
                                            currency,
                                            income,
                                            lat,
                                            lng,
                                            address,
                                            communeId,
                                            leaseType,
                                            type,
                                            residency,
                                            lease,
                                            electricity,
                                            electricity_frequency,
                                            water_tank,
                                            water_frequency,
                                            elevator,
                                            petsAllowed,
                                            internet,
                                            kitchen,
                                            wirelessInternet,
                                            familyKidFriendly,
                                            freeParkingOnPremises,
                                            hotTub,
                                            pool,
                                            smokingAllowed,
                                            wheelchairAccessible,
                                            cableTv,
                                            suitableForEvents,
                                            dryer,
                                            washer,
                                            indoorFireHouse,
                                            tv,
                                            hangers,
                                            iron,
                                            hairDryer,
                                            doorman,
                                            paidParkingOffPremises,
                                            freeParkingOnStreet,
                                            gym,
                                            airConditioning,
                                            shampoo,
                                            essentials,
                                            laptopFriendlyWorkspace,
                                            privateEntrance,
                                            buzzerWirelessIntercom,
                                            bathtub,
                                            crib
                                          }

                                          console.log(JSON.stringify(obj));

                                          
                                        
                                          createHouse({variables:{
                                            area,
                                            age,
                                            shortDescription,
                                            description,
                                            maxGuests,
                                            numBedrooms,
                                            numBaths,
                                            basePrice,
                                            numLivingrooms,
                                            numDiningrooms,
                                            highestPrice,
                                            currency,
                                            income,
                                            lat,
                                            lng,
                                            address,
                                            communeId,
                                            leaseType,
                                            type,
                                            residency,
                                            lease,
                                            electricity,
                                            electricity_frequency,
                                            water_pipe,
                                            water_tank,
                                            water_frequency,
                                            elevator,
                                            petsAllowed,
                                            internet,
                                            kitchen,
                                            wirelessInternet,
                                            familyKidFriendly,
                                            freeParkingOnPremises,
                                            hotTub,
                                            pool,
                                            smokingAllowed,
                                            wheelchairAccessible,
                                            cableTv,
                                            suitableForEvents,
                                            dryer,
                                            washer,
                                            indoorFireHouse,
                                            tv,
                                            hangers,
                                            iron,
                                            hairDryer,
                                            doorman,
                                            paidParkingOffPremises,
                                            freeParkingOnStreet,
                                            gym,
                                            airConditioning,
                                            shampoo,
                                            essentials,
                                            laptopFriendlyWorkspace,
                                            privateEntrance,
                                            buzzerWirelessIntercom,
                                            bathtub,
                                            crib
                                            },
                                          update:()=>{
                                              toast.success("KAY OU A AJOUTE SAN PWOBLEM.",{
                                              autoClose:1500
                                          });
                                          this.props.history.push("/profile")
                                        }
                                        }

                                            )
                                      } 
                                     
                                  }}>
                                      <HouseImages numberLimit={10} handleChange={this.handleChange}/>
                                      <Age handleChange={this.handleChange}/>
                                      <Price 
                                          negotiable={this.state.negotiable} 
                                          toggleNegotiation={this.toggleNegotiation}
                                          handleChange={this.handleChange}
                                      />
                                      <MaxGuests handleChange={this.handleChange}/>
                                      <WhenToPayHouse 
                                          handleChange={this.handleChange}
                                      />
                                      <NumberOfBedRooms handleChange={this.handleChange}/>
                                      <NumberOfBathrooms handleChange={this.handleChange}/>  
                                      <NumberOfLivingRooms handleChange={this.handleChange}/>  
                                      <NumberOfDiningRooms handleChange={this.handleChange}/>
                                      <Localisation 
                                          longitude={this.state.payload.lng} 
                                          latitude={this.state.payload.lat}
                                          zoom={this.state.payload.zoom}
                                          haveUsersLocation={this.state.haveUsersLocation}
                                          handleChange={this.handleChange}
                                          getCurrentPosition={this.getCurrentPosition}
                                      />
                                      <HouseCity value={this.state.cityLabel} options={options} handleChange={this.handleSelect}/>
                                      <HouseAddress handleChange={this.handleChange}/>
                                      <Amenities
                                          handleChange={this.handleChange}
                                      />
                                      <Submit/>
                                      <div className="add-house-card__question-management">
                                          <p><b>{currentQuestion+1}/{numberOfQuestions+1}</b> Kesyon</p>
                                          <PreviousQuestion currentQuestion={currentQuestion} handlePreviousQuestion={this.displayPrevious}/>
                                          <NextQuestion 
                                              currentQuestion={currentQuestion} 
                                              numberOfQuestions={numberOfQuestions}
                                              handleNextQuestion={this.displayNext}
                                          /> 
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  )}
                </Mutation>
                )
    }
}


export default AddHouse;



