import React from 'react';

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lengthLimit:0,
      images:[],
    }
    this.handleChange = this.handleChange.bind(this)
    this.removePhoto=this.removePhoto.bind(this)
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

  removePhoto(){
      let imagesCopy=this.state.images;
      imagesCopy.pop();
      this.setState({
          images:imagesCopy,
          warningMessage:""
      })
  }


  render() {
    const {images,lengthLimit}=this.state; 
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
                :<p className="add-house-card__photo-upload-warning">Ou pa ka met plis foto ke 10</p>
            }
            {
                images.length>0?
                    <button className="add-house-card__delete-button" type="button" onClick={this.removePhoto}>
                        <i className="upload-icon fas fa-trash"></i>
                    </button>
                :""
            }

      </div>
    );
  }
}

export default Upload