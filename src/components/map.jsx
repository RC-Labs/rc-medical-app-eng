// import { useState } from 'react';
// import ReactMapGL, { Source, Layer } from 'react-map-gl';


import MapMarker from '../assets/images/icons/marker.svg'
import { Component } from 'react';
import { Map, Marker, Overlay } from 'pigeon-maps'

const map = (
  <Map defaultCenter={[50.0887, 19.9127]} defaultZoom={12} boxClassname='tiles' >
    <Marker anchor={[50.0887, 19.9127]} payload={2} onClick={({ event, anchor, payload }) => { }} />
    <Marker anchor={[50.1163, 19.8376]} payload={1} onClick={({ event, anchor, payload }) => { }} />

    <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
      {MapMarker}
    </Overlay>
  </Map>
)

export class MapSection extends Component {
  render() {
    return (
      <section className="map-section">
        {map}
      </section>
    )
  }
}

// const biuro = {
//   type: 'FeatureCollection',
//   features: [
//     { type: 'Feature', geometry: { type: 'Point', coordinates: [19.9127, 50.0887] } }
//   ]
// };

// const layerStyle = {
//   id: 'point',
//   type: 'circle',
//   paint: {
//     'circle-radius': 5,
//     'circle-color': '#007cbf'
//   }
// };

// function Map() {
//   const [viewport] = useState({
//     width: "100%",
//     height: "100%",
//     latitude: 50.1020,
//     longitude: 19.9130,
//     zoom: 11,
//     mapboxApiAccessToken: 'pk.eyJ1IjoibWljaGFsZHppZWNoY2lhcnoiLCJhIjoiY2toYzIzdmNtMDBwMzJybnVzNnp0ajdrcCJ9.cZyu39ZuA2HWEkn2Z4fMmA',
//   });

//   return (
//     <section className="map-section">
//       <div className="map">

//         <ReactMapGL {...viewport}>

//           <Source id="my-data" type="geojson" data={biuro}>
//             <Layer {...layerStyle} />
//           </Source>

//         </ReactMapGL>
//       </div>
//     </section>
//   );
// }

// export { Map };