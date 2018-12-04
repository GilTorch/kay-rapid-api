import React from 'react';

import HouseImage from './HouseImage';

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lengthLimit:0,
      images:[],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove=this.handleRemove.bind(this)
  }

  componentDidMount(){
    const { lengthLimit }=this.props;
    this.setState({
        lengthLimit
    })
  }

  handleChange(event) {

    let { images }=this.state;

    for(var i=0;i<event.target.files.length;i++){
        images.push(URL.createObjectURL(event.target.files[i]))
    }
    this.setState({
        images
    })
  }

 handleRemove(who){
     let { images }=this.state; 

     images.splice(who.key,1);
     this.setState({
         images
     })
  }


  render() {
    const {images,lengthLimit}=this.state; 
    let  imagesTags=images.map((file,index)=>{
        return <HouseImage url={file} key={index} removePhoto={this.handleRemove}/>
    })
    return (
      <div>
            {imagesTags}
            {
                (images.length<lengthLimit)?
                <label style={{display:"inline"}}>
                    <i className="upload-icon fas fa-camera add-house-card__upload-button"></i>
                    <input 
                        style={{display:"none"}}
                        type="file" accept="image/*" 
                        onChange={this.handleChange}
                        multiple={true}
                    />
                </label>
                :<p className="add-house-card__photo-upload-warning">Ou pa ka met plis foto ke {lengthLimit}</p>
            }

      </div>
    );
  }
}

export default Upload