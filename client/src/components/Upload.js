    import React from 'react';

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      images:[]
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    
    console.log(event.target.files.length+" files exist");
    
    let imagesCopy=this.state.images

    for(var i=0;i<event.target.files.length;i++){
        imagesCopy.push(URL.createObjectURL(event.target.files[i]))
    }

    this.setState({
      images:imagesCopy
    })
  }

  render() {
    const {images}=this.state; 
    // let imagesTags;
    // if(images==[]){
      let  imagesTags=images.map((file)=>{return <img className="add-house-card__house-preview" src={file}/>})
    // }
    return (
      <div>
            {imagesTags}
            <input className="add-house-card__upload-button" 
            type="file" accept="image/*" onChange={this.handleChange}
            multiple={true}
            />
            <i className="fas fa-camera"></i>
      </div>
    );
  }
}

export default Upload