import React,{ Component } from 'react';
import HeaderBar from './HeaderBar';
import '../css/add-house.css';
import { 
    Submit,
    HouseImages,Price,MaxGuests,WhenToPayHouse,NumberOfRooms,NumberOfBathrooms,
    Localisation,HouseCity,HouseAddress,Amenities,NextQuestion,PreviousQuestion 
} from './AddHouseFormGroups';

const options=[
    {value:'p-au-p',label:"Pòtoprens"},
    {value:'',label:"Fò Libète"},
    {value:'',label:"Jakmèl"},
    {value:'',label:"Gonayiv"},
    {value:'',label:"Okap"},
    {value:'',label:"Okay"},
    {value:'',label:"Jeremi"},
    {value:'',label:"Pòdepè"},
    {value:'',label:"Ench"}
]

class AddHouse extends Component{
    constructor(){
        super()
        this.getCurrentPosition=this.getCurrentPosition.bind(this)

        this.state={
            longitude:null,
            latitude:null,
            negotiable:false,
            currentQuestion:0,
            numberOfQuestions:0
        }

        this.displayNext=this.displayNext.bind(this);
        this.displayPrevious=this.displayPrevious.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
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

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    displayNext(event){
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

    displayPrevious(event){
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

    getCurrentPosition(event){
        event.preventDefault();
        const that=this
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
                console.log("Longitude:"+position.coords.longitude+","+"Latitude:"+position.coords.latitude);
                that.setState({
                    longitude:position.coords.longitude,
                    latitude:position.coords.latitude
                })
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }


    onSubmit(event){
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
                                <HouseImages numberLimit={10}/>
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
                                    handleChange={this.handleChange}
                                    getCurrentPosition={this.getCurrentPosition}
                                />
                                <HouseCity options={options} handleChange={this.handleChange}/>
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



