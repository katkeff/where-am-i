import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import APIKey from "../googleAPIKey";
import mapStyling from "../assets/mapStyling";
import places from "../assets/coordinates";

const MapContainer = () => {

  let currentPlace = places[Math.floor(Math.random() * (places.length))]
  let coordinates = currentPlace[0]

  const [latLng, setLatLng] = useState({ lat: null, lng: null });
  const [defaultCenter, setDefaultCenter] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setDefaultCenter({ lat: latitude, lng: longitude });
        },
        error => setErrorMessage(error.message)
      );
    } else {
      setErrorMessage("Geolocation is not supported by this browser.");
    }
  }, []);

  const mapStyles = {
    height: "75vh",
    width: "50%",
  };

  const handleMapClick = (event) => {
    event.stop();
    setLatLng({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
    setDefaultCenter({
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
        {latLng.lat && latLng.lng
          ? `Latitude: ${latLng.lat}, Longitude: ${latLng.lng}`
          : "Make a guess!"}
      </div>
    </>
  );
};

export default MapContainer;

