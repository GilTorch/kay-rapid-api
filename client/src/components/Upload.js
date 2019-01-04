import React from 'react';

import HouseImage from './HouseImage';
import "../css/house-images-container.css"

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      numberOfImagesAllowed:0,
      images:[],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove=this.handleRemove.bind(this)
  }

  componentDidMount(){
    const { numberOfImagesAllowed }=this.props;
    this.setState({
        numberOfImagesAllowed
    })
  }

  handleChange(event) {

    let numberOfImagesSelected=event.target.files.length;
    const { numberOfImagesAllowed }=this.props;

    let { images }=this.state;


    for(var i=0;i<numberOfImagesSelected;i++){
        images.push(URL.createObjectURL(new Blob([event.target.files[i]],{type:"application/zip"})))
    }
    this.setState({
        images
    })

    if(this.props.handleImage){
        this.props.handleImage(event);
    }
  }

 handleRemove(who){
     let { images }=this.state; 

     images.splice(who.key,1);
     this.setState({
         images
     })
  }


  render() {
    const {images,numberOfImagesAllowed}=this.state; 
    let  imagesTags=images.map((file,index)=>{
        return <HouseImage url={file} key={index} removePhoto={this.handleRemove}/>
    })
    return (
      <div>
            <div className="house-images-container">
                {imagesTags}
            </div>
            {
                (images.length<numberOfImagesAllowed)?
                <label style={{display:"inline"}}>
                    <i className="upload-icon fas fa-camera add-house-card__upload-button"></i>
                    <input 
                        name={this.props.name}
                        style={{display:"none"}}
                        type="file" accept="image/*" 
                        onChange={this.handleChange}
                        multiple={numberOfImagesAllowed>1?true:false}
                    />
                </label>
                :<p className="add-house-card__photo-upload-warning">Ou pa ka met plis foto ke {numberOfImagesAllowed}</p>
            }

      </div>
    );
  }
}

export default Upload