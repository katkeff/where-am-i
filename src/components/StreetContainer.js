import React, { Component } from "react";
import ReactStreetview from "react-streetview";
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import APIKey from '../googleAPIKey'

const StreetContainer = () => { {

  const streetViewPanoramaOptions = {
    position: { lat: 27.289821, lng: -82.481325 },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
    addressControl: false,
    showRoadLabels: false,
    zoomControl: false
  };

    return (
      <LoadScript
      googleMapsApiKey={APIKey}>
      <div
        style={{
          width: "50%",
          height: "75vh",
        }}
      >
        <ReactStreetview
          apiKey={APIKey}
          streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
      </div>
      </LoadScript>
    );
  }
}

export default StreetContainer;
