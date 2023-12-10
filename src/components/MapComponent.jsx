// MapComponent.js
import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import 'leaflet/dist/leaflet.css'

const MapComponent = ({ userLocation, routePolyline }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer 
        center={[21.2787, 81.8661]} 
        zoom={5} 
        scrollWheelZoom={false}
        style={{ width:"100%", height:"100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker
         position={[21.2787, 81.8661]}
         alt="marker"
         >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
