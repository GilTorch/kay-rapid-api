import React,{ Component } from 'react';
import HeaderBar from './HeaderBar';
import '../css/add-house.css';
import { 
    Submit,
    HouseImages,Price,MaxGuests,WhenToPayHouse,NumberOfRooms,NumberOfBathrooms,
    Localisation,HouseCity,HouseAddress,Amenities,NextQuestion,PreviousQuestion 
} from './AddHouseFormGroups';

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
    bedRoomImages:false,
    livingRoomImages:false,
    diningRoomImages:false,
    bathRoomgImages:false,
    negotiable:true,
    basePrice:true,
    minPrice:false,
    maxPrice:false,
    maxGuests:true,
    whenToPay:true,
    numberOfBedRooms:true,
    numberOfBathRooms:true,
    longitude:false,
    latitude:false,
    city:true,
    address:true,
    electricity:true,
    electricityFrequency:true,
    waterTank:true,
    parking:true
}

class AddHouse extends Component{

    state={
        longitude:null,
        latitude:null,
        zoom:1,
        haveUsersLocation:false,
        negotiable:false,
        city:null,
        currentQuestion:0,
        numberOfQuestions:0
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
        //console.log(event.target);
        if(!event.target.files){
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
        
            this.setState({
              [name]: value
            });
        }else{
            console.log("image uploaded: "+event.target.files.length);
        }
      }

    displayNext=(event)=>{
        event.preventDefault();
        const formGroups=document.querySelectorAll('.add-house-card__form-group');

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
              longitude:position.coords.longitude,
              latitude:position.coords.latitude,
              haveUsersLocation:true,
              zoom:13
            })
            // do_something(position.coords.latitude, position.coords.longitude);
          },()=>{
            console.log("Location not given")
            fetch("https://ipapi.co/json")
              .then(res => res.json())
              .then((location)=>{
                that.setState({
                  longitude:location.longitude,
                  latitude:location.latitude,
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
                                    negotiable={this.state.negotiable} 
                                    toggleNegotiation={this.toggleNegotiation}
                                    handleChange={this.handleChange}
                                />
                                <MaxGuests handleChange={this.handleChange}/>
                                <WhenToPayHouse 
                                    handleChange={this.handleChange}
                                />
                                <NumberOfRooms handleChange={this.handleChange}/>
                                <NumberOfBathrooms handleChange={this.handleChange}/>  
                                <Localisation 
                                    longitude={this.state.longitude} 
                                    latitude={this.state.latitude}
                                    zoom={this.state.zoom}
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



