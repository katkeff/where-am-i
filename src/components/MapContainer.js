import {React, useState} from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import APIKey from "../googleAPIKey";
import mapStyling from "../assets/mapStyling";

const MapContainer = () => {

  const mapStyles = {
    height: "75vh",
    width: "50%",
  };

  const defaultCenter = {
    lat: 43.0511,
    lng: -76.1436,
  };


  return (
    <LoadScript googleMapsApiKey={APIKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={6}
        center={defaultCenter}
        options={{ styles: mapStyling, streetViewControl: false }}
      />
    </LoadScript>
  );
};

export default MapContainer;

