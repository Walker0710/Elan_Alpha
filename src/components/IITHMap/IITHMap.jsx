// src/components/Map.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const IITHMap = () => {
  const position = [17.592275100000002, 78.12218906710919]; // Default coordinates (latitude, longitude)

  return (

      <MapContainer
        center={position}
        zoom={14}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/*
        <Marker position={position}>
          <Popup>
            IIT Hyderabad 
          </Popup>
        </Marker>

        <Marker position={[17.595275100000002, 78.12218906710919]}>
          <Popup>
            IIT Hyderabad 
          </Popup>
        </Marker>
        
        */}
        
      </MapContainer>

  );
};

export default IITHMap;
