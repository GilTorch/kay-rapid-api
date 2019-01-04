import React,{ Component } from 'react';
import HeaderBar from './HeaderBar';
import '../css/add-house.css';
import { 
    Submit,
    HouseImages,Price,MaxGuests,WhenToPayHouse,NumberOfBedRooms,NumberOfBathrooms,NumberOfDiningRooms,NumberOfLivingRooms,
    Localisation,HouseCity,HouseAddress,Amenities,NextQuestion,PreviousQuestion 
} from './AddHouseFormGroups';
import notify from '../utils/notify';

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
    previewImage:true,
    bedRoomImages:true,
    livingRoomImages:false,
    diningRoomImages:false,
    bathRoomImages:false,
    negotiable:true,
    basePrice:true,
    minPrice:false,
    maxPrice:false,
    maxGuests:true,
    whenToPay:true,
    numberOfBedRooms:true,
    numberOfBathRooms:true,
    lng:true,
    lat:true,
    city:true,
    address:true,
    electricity:true,
    electricityFrequency:true,
    waterTank:true,
    parking:true
}

class AddHouse extends Component{

    state={
        zoom:1,
        haveUsersLocation:false,
        negotiable:false,
        city:null,
        currentQuestion:0,
        numberOfQuestions:0,
        payload:{
            previewImage:null,
            bedRoomImages:null,
            livingRoomImages:null,
            diningRoomImages:null,
            bathRoomImages:null,
            age:null,
            basePrice:null,
            highestPrice:null,
            currency:'USD',
            communeId:null,
            maxGuests:null,
            lease:null,
            leaseType:null,
            numBedrooms:null,
            numBaths:null,
            lng:null,
            lat:null,
            address:null,
            numDiningrooms:null,
            numLivingrooms:null,
            electricity:null,
            electricity_frequency:null,
            water_tank:null,
            freeParkingOnPremises:null,
            water_pipe:null,
            income:null
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
                    ...this.state.payload,
                    lng:position.coords.longitude,
                    lat:position.coords.latitude,
                },
            })
            // do_something(position.coords.latitude, position.coords.longitude);
          },()=>{
            console.log("Location not given")
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


    onSubmit=(event)=>{
        event.preventDefault();
        console.log(event);
    }


    render(){

        const { currentQuestion,numberOfQuestions }=this.state;      
    
            return (
                <div>
                <HeaderBar title="Ajoute Kay Ou" hasBack={true}/>
                    <div className="card add-house-screen">
                        <div className="add-house-card">
                            <form>
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
                                <HouseCity value={this.state.city} options={options} handleChange={this.handleChange}/>
                                <HouseAddress handleChange={this.handleChange}/>
                                <Amenities
                                    handleChange={this.handleChange}
                                />
                                <Submit handleSubmit={this.onSubmit}/>
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
                )
    }
}


export default AddHouse;



