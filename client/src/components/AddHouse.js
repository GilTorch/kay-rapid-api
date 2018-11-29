import React,{ Component } from 'react';
import HeaderBar from './HeaderBar';
import '../css/add-house.css';
import { 
HouseImages,Price,MaxGuests,WhenToPayHouse,NumberOfRooms,NumberOfBathrooms,
Localisation,HouseCity,HouseAddress,Amenities,NextQuestion,PreviousQuestion 
} from './AddHouseFormGroups';


const options=[
    {value:'',label:"Pòtoprens"},
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

        this.toggleNegotiation=this.toggleNegotiation.bind(this);
        this.displayNext=this.displayNext.bind(this);
        this.displayPrevious=this.displayPrevious.bind(this);
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

    toggleNegotiation(){
        this.setState({
            negotiable:!this.state.negotiable
        })
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
        console.log("This is called!")
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

    render(){
        const { currentQuestion,numberOfQuestions }=this.state;        

        return (
            <div>
            <HeaderBar title="Ajoute Kay Ou" hasBack={true}/>
                <div className="card add-house-screen">
                    <div className="add-house-card">
                        <form>
                            <HouseImages numberLimit={10}/>
                            <Price negotiable={this.state.negotiable} toggleNegotiation={this.toggleNegotiation}/>
                            <MaxGuests/>
                            <WhenToPayHouse/>
                            <NumberOfRooms/>
                            <NumberOfBathrooms/>  
                            <Localisation 
                                longitude={this.state.longitude} 
                                latitude={this.state.latitude}
                                getCurrentPosition={this.getCurrentPosition}
                            />
                            <HouseCity options={options}/>
                            <HouseAddress/>
                            <Amenities/>
                            <NextQuestion 
                                currentQuestion={currentQuestion} 
                                numberOfQuestions={numberOfQuestions}
                                handleNextQuestion={this.displayNext}
                            />
                            <PreviousQuestion currentQuestion={currentQuestion} handlePreviousQuestion={this.displayPrevious}/>
                        </form>
                    </div>
                </div>
            </div>
            )
    }
}

export default AddHouse;