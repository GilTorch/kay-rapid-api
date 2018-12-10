import React from 'react'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZ2lsYmVydDIwMTciLCJhIjoiY2pwNXBoZ29tMDFwNDNxbjBtMWx4anZlaiJ9.b-dHwZmP1l7-w6DEfSkORA"
});

// in render()


export default class HouseMap extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { longitude,latitude}=this.props;
    return(
      <Map
  style="mapbox://styles/mapbox/streets-v9"
  
  center={[-72.3017728 ,18.5532416]}
  zoom={[15.2]}
  containerStyle={{
    display:"block",
    height:"400px",
    width:"100vh",
  }}>
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[-72.3017728 ,18.5532416]}/>
    </Layer>
</Map>


    )
  }
}