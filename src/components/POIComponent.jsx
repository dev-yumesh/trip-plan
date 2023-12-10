// POIComponent.js
import React, { useState, useEffect } from 'react';

const POIComponent = ({ onPOIClick }) => {
  const [pois, setPOIs] = useState([]);

  useEffect(() => {
    // Fetch POIs from Overpass turbo API and update state
    // Example: fetch('OVERPASS_API_URL').then(response => response.json()).then(data => setPOIs(data));
  }, []);

  return (
    <div>
      <h2>Points of Interest</h2>
      <ul>
        {pois.slice(0, 5).map((poi) => (
          <li key={poi.id} onClick={() => onPOIClick(poi)}>
            {poi.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default POIComponent;
