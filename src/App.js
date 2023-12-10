// App.js
import React, { useState } from "react";
import "./App.css";
import './components/component.css'
import MapComponent from "./components/MapComponent";
import POIComponent from "./components/POIComponent";
import RouteComponent from "./components/RouteComponent";
import TripCostComponent from "./components/TripCostComponent";
import CustomInput from "./components/CustomInput";
import CustomSelect from "./components/CustomSelect";

const App = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedPOI, setSelectedPOI] = useState(null);
  const [routePolyline, setRoutePolyline] = useState(null);
  const [tripCost, setTripCost] = useState(null);

  const handlePOIClick = (poi) => {
    setSelectedPOI(poi);
    // Call OSRM API to get route polyline
    // Update routePolyline state
    // Call TollGuru API to get trip cost
    // Update tripCost state
  };

  return (
    <div>
      <main id="mainContainer">
        <section className="mainSection">
          <h2>Calculate Cost of your trip </h2>
          <CustomInput/>
          <CustomInput/>
           <CustomSelect/>
        </section>
        <section className="mainSection" style={{overflow:"hidden"}} >
          <MapComponent/>
        </section>
      </main>
    </div>
  );
};

export default App;
