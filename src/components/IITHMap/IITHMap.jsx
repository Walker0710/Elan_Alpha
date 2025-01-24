import './IITHMap.css';
import React, { useEffect, useRef } from "react";
import L from "leaflet";

function IITHMap() {
  const mapContainerRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    // Initialize map only once when the component is mounted
    if (mapInstance.current) return; // Prevent re-initializing map

    const map = L.map(mapContainerRef.current).setView([51.505, -0.09], 13); // Coordinates for London, zoom level 13

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker
    L.marker([51.505, -0.09]).addTo(map).bindPopup('A marker in London').openPopup();

    // Store map instance in ref for future use
    mapInstance.current = map;

    // Cleanup on component unmount
    return () => {
      map.remove();
    };
  }, []);

  // Adjust the map when the window is resized or the parent container changes
  useEffect(() => {
    const resizeMap = () => {
      if (mapInstance.current) {
        mapInstance.current.invalidateSize();
      }
    };

    // Resize the map when the window or parent container is resized
    window.addEventListener('resize', resizeMap);
    return () => {
      window.removeEventListener('resize', resizeMap);
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        position: "relative",
        width: "100%",           // Take full width of the parent container
        height: 0,              // Make the height 0, we'll use padding-top to set height
        paddingTop: "100%",     // Ensure it stays square (1:1 aspect ratio)
      }}
    ></div>
  );

}

export default IITHMap;
