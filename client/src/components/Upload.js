    import React from 'react';

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      files: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    
    console.log(event.target.files.length+" files exist");

    let files=[];
    
    for(var i=0;i<event.target.files.length;i++){
        files.push(URL.createObjectURL(event.target.files[i]))
    }

    this.setState({
      files
    })
  }

  render() {
    const {files}=this.state; 
    let images=[]
    if(files!=null){
        images=files.map((file)=>{return <img className="add-house-card__house-preview" src={file}/>})
    }
    return (
      <div>
            {images}
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