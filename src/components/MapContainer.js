import {React, useState} from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import APIKey from "../googleAPIKey";
import mapStyling from "../assets/mapStyling";

const MapContainer = () => {
  const [latLng, setLatLng] = useState({lat: null, lng: null});
  const mapStyles = {
    height: "75vh",
    width: "50%",
  };

  const defaultCenter = {
    lat: 43.0511,
    lng: -76.1436,
  };

  const handleMapClick = (event) => {
    setLatLng({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  };

  return (
    <>
    <LoadScript googleMapsApiKey={APIKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={6}
        center={defaultCenter}
        options={{ styles: mapStyling, streetViewControl: false }}
        onClick={handleMapClick}
      />
    </LoadScript>
    <div>
      { latLng.lat && latLng.lng
        ? `Latitude: ${latLng.lat}, Longitude: ${latLng.lng}`
        : "No Location Selected"}
    </div>
    </>
  );
};

export default MapContainer;

