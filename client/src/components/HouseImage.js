import React from 'react';

class HouseImage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selected:false
        }
        this.handleSelected=this.handleSelected.bind(this);
    }


    handleSelected(){
        let { selected }=this.state;
        selected=!selected;

        this.setState({
            selected
        })
    }

    render(){
        
        const { selected } = this.state;

        const styleObj=selected?{backgroundColor:"rgba(255,0,0,0.2)"}:{};

        const imageStyle=selected?{border:"1px dashed red"}:{}

        return(
        <div style={styleObj}>
            <div>
            <img style={imageStyle} onClick={this.handleSelected}
                className="add-house-card__house-preview clip-circle" 
                src={this.props.url} 
            />
            {selected?
            <label className="checkbox-container add-house-card__house-image-checkbox">
                    <input type="checkbox" checked readOnly/>
                    <span className="checkmark"></span>
            </label>:""}
            </div>
            {selected? 
            <button className="add-house-card__delete-button" type="button" onClick={this.props.removePhoto}>
                <i className="upload-icon fas fa-trash"></i>
            </button>:""}
        </div>
        )
    }
}

export default HouseImage;