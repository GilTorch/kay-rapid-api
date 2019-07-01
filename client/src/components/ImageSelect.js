import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImagePreview from './ImagePreview';
import "../css/house-images-container.css"

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      numberOfImagesAllowed:0,
      images:[],
      eventsForExport:[]
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

    let { images }=this.state;

    let { eventsForExport }=this.state;

    const that=this;
    
    for(var i=0;i<numberOfImagesSelected;i++){
        eventsForExport.push(event.target.files[i])
        images.push(URL.createObjectURL(new Blob([event.target.files[i]],{type:"application/zip"})))
    }
    this.setState({
        images,
        eventsForExport
    })

    if(this.props.handleImage){
        this.props.handleImage(eventsForExport,that.props.name);
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
    
    const { images,numberOfImagesAllowed }=this.state; 
    let  imagesTags=images.map((file,index)=>{
        return <ImagePreview url={file} key={index} removePhoto={this.handleRemove}/>
    })

    return (
      <div>
            <div className="house-images-container">
                {imagesTags}
            </div>
            {
                (images.length<numberOfImagesAllowed)?
                <label style={{display:"inline"}}>
                    {/* <i className="upload-icon fas fa-camera add-house-card__upload-button"></i> */}
                    <div className="upload-icon add-house-card__upload-button">
                      <FontAwesomeIcon icon="plus"/>
                    </div>
                    <input 
                        name={this.props.name}
                        style={{display:"none"}}
                        type="file" accept="image/*" 
                        onChange={this.handleChange}
                        multiple={numberOfImagesAllowed>1}
                    />
                </label>
                :<p className="add-house-card__photo-upload-warning">Ou pa ka met plis foto ke {numberOfImagesAllowed}</p>
            }

      </div>
    );
  }
}

export default Upload