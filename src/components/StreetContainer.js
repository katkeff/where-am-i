import React from "react";
import ReactStreetview from "react-streetview";
import { LoadScript } from "@react-google-maps/api";
import APIKey from "../googleAPIKey";
import places from "../assets/coordinates.js"

const StreetContainer = () => {

  let currentPlace = places[Math.floor(Math.random() * (places.length))]
  let coordinates = currentPlace[0]
  let area = currentPlace[1].location

  const streetViewPanoramaOptions = {
    position: coordinates ,
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
    addressControl: false,
    showRoadLabels: false,
    zoomControl: false,
  };

  return (
    <LoadScript googleMapsApiKey={APIKey}>
      <div
        style={{
          width: "50%",
          height: "75vh",
        }}>
        <ReactStreetview
          apiKey={APIKey}
          streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
      </div>
    </LoadScript>
  );
};

export default StreetContainer;
