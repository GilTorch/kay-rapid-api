    import React from 'react';

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      images:[],
      warningMessage:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.removePhoto=this.removePhoto.bind(this)
  }

  handleChange(event) {
    
    if(this.state.images.length<this.props.lengthLimit)
    {
        let imagesCopy=this.state.images
        for(var i=0;i<event.target.files.length;i++){
            imagesCopy.push(URL.createObjectURL(event.target.files[i]))
        }
        this.setState({
          images:imagesCopy
        })
    }else{
        this.setState({
            warningMessage:"Ou pa ka met plis foto ke 10."
        })
    }
  }

  removePhoto(){
      let imagesCopy=this.state.images;
      imagesCopy.pop();
      this.setState({
          images:imagesCopy
      })
  }


  render() {
    const {images,warningMessage}=this.state; 
    let  imagesTags=images.map((file,index)=>{
        return <img 
                className="add-house-card__house-preview clip-circle" 
                src={file} 
                key={index}
                />
    })
    return (
      <div>
            {imagesTags}
            {
                warningMessage==""?
                <input 
                className="add-house-card__upload-button" 
                type="file" accept="image/*" 
                onChange={this.handleChange}
                multiple={true}
                style={{display:"inline-block"}}
            />:warningMessage
            }
            <i className="fas fa-camera"></i>
            <input type="button" value="EFASE" onClick={this.removePhoto}/>
      </div>
    );
  }
}

export default Upload