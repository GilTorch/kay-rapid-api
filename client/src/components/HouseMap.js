import React from 'react'
import ReactDOM from 'react-dom'
// import mapboxgl from 'mapbox-gl'

// mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

// class HouseMap extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       lng: 5,
//       lat: 34,
//       zoom: 1.5
//     };
//   }

//   componentDidMount() {
//     const { lng, lat, zoom } = this.props;

//     console.log("Longitude: "+lng+" Latitude: "+lat);

//     const map = new mapboxgl.Map({
//       container: this.mapContainer,
//       style: 'mapbox://styles/mapbox/streets-v9',
//       center: [lng, lat],
//       zoom
//     });

//     map.on('move', () => {
//       const { lng, lat } = map.getCenter();

//       this.setState({
//         lng: lng.toFixed(4),
//         lat: lat.toFixed(4),
//         zoom: map.getZoom().toFixed(2)
//       });
//     });
//   }

//   render() {
//     const { lng, lat, zoom } = this.state;

//     return (
//       <div>
//         <div style={{top:0,left:0}}>
//         </div>
//         <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
//       </div>
//     );
//   }
// }

// export default HouseMap;
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