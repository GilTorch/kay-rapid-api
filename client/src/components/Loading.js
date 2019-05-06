import React from 'react';


class Loading extends React.Component{
    
    state={
        animation:null,
        numberOfDots:0
    }

    animateDots=()=>{
        let numberOfDots=this.state.numberOfDots;
        this.setState({
            numberOfDots:numberOfDots+1
        },()=>{
            console.log(this.state.numberOfDots)
        })
    }


    componentDidMount(){
        console.log("animation started")
       this.interval=setInterval(this.animateDots,300) 
    }

    componentWillUnmount(){
        console.log("animation finished")
        clearInterval(this.interval)
    }

    renderDots=()=>{
        let points=[]
        for(let i=0;i<this.state.numberOfDots;i++){
            points.push(".")
            if(points.length===10){
                points=[];
            }
        }

        return points.join("")
    }
    
    render(){

        return(
            <div className="loading">
                Pran on ti pasyans {this.renderDots()}
            </div>
        )
    }
}

export default Loading;