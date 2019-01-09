import React,{ Component } from 'react';
import HeaderBar from './HeaderBar';
import '../css/add-house.css';
import { 
    Submit,
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
    previewImage:false,
    bedRoomImages:false,
    livingRoomImages:false,
    diningRoomImages:false,
    bathRoomImages:false,
    negotiable:false,
    basePrice:false,
    minPrice:false,
    maxPrice:false,
    maxGuests:false,
    whenToPay:false,
    numLivingrooms:false,
    numberOfBedrooms:false,
    numberOfBathrooms:false,
    lng:false,
    lat:false,
    communeId:false,
    address:false,
    electricity:false,
    electricity_frequency:false,
    water_tank:false,
    water_pipe:false,
    parking:false
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
            previewImage:null,
            bedRoomImages:null,
            livingRoomImages:null,
            diningRoomImages:null,
            bathRoomImages:null,
            age:null,
            communeId:null,
            basePrice:null,
            highestPrice:null,
            currency:'USD',
            communeId:null,
            maxGuests:null,
            leaseType:null,
            numBedrooms:null,
            numBaths:null,
            lng:null,
            lat:null,
            address:null,
            numDiningrooms:null,
            numLivingrooms:null,
            electricity:false,
            electricity_frequency:false,
            water_tank:false,
            freeParkingOnPremises:false,
            water_pipe:false,
            income:100
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

        this.setState({
            payload:{
                ...this.state.payload,
                [name]: value,
            }
          });
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
            cityLabel,
            payload:{
                ...this.state.payload,
                communeId
            }
          });
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
                      {(error)? toast.error('GEN ON ERE KI PASE. REESEYE YON LOT FWA',{
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
                                        const {
                                            age,
                                            basePrice,
                                            currency,
                                            communeId,
                                            highestPrice,
                                            maxGuests,
                                            leaseType,
                                            numBedrooms,
                                            numBaths,
                                            lng,
                                            lat,
                                            address,
                                            numDiningrooms,
                                            numLivingrooms,
                                            electricity,
                                            electricity_frequency,
                                            water_tank,
                                            freeParkingOnPremises,
                                            water_pipe,
                                            income
                                          }=this.state.payload

                                          const lease=12;

                                          const obj={
                                            age:20,
                                            basePrice:parseInt(basePrice),
                                            currency,
                                            communeId,
                                            highestPrice:parseInt(highestPrice),
                                            maxGuests:parseInt(maxGuests),
                                            lease,
                                            leaseType,
                                            numBedrooms:parseInt(numBedrooms),
                                            numBaths:parseInt(numBaths),
                                            lng,
                                            lat,
                                            address,
                                            numDiningrooms:parseInt(numDiningrooms),
                                            numLivingrooms:parseInt(numLivingrooms),
                                            electricity,
                                            electricity_frequency,
                                            water_tank,
                                            freeParkingOnPremises,
                                            water_pipe,
                                            income
                                          }

                                          console.log(JSON.stringify(obj));
                                            
                                          createHouse({variables:{
                                            age:parseInt(age),
                                            basePrice:parseInt(basePrice),
                                            currency,
                                            communeId,
                                            highestPrice:parseInt(highestPrice),
                                            maxGuests:parseInt(maxGuests),
                                            lease,
                                            leaseType,
                                            numBedrooms:parseInt(numBedrooms),
                                            numBaths:parseInt(numBaths),
                                            lng,
                                            lat,
                                            address,
                                            numDiningrooms:parseInt(numDiningrooms),
                                            numLivingrooms:parseInt(numLivingrooms),
                                            electricity,
                                            electricity_frequency,
                                            water_tank,
                                            freeParkingOnPremises,
                                            water_pipe,
                                            income
                                          },
                                          update:()=>{
                                              console.log('house has been added')
                                          }
                                        })
                                      } 
                                     
                                  }}>
                                      <HouseImages numberLimit={10} handleChange={this.handleChange}/>
                                      <Price 
                                          negotiable={this.state.payload.negotiable} 
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
                                      <HouseAddress handleChange={this.handleSelect}/>
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



