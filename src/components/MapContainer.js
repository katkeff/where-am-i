import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import mapStyling from "../assets/mapStyling";
import APIKey from "../googleAPIKey";

const MapContainer = () => {
  const [latLng, setLatLng] = useState({ lat: null, lng: null });
  const [defaultCenter, setDefaultCenter] = useState({});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setDefaultCenter({ lat: latitude, lng: longitude });
        }
      );
    }
  }, []);

  const mapStyles = {
    height: "75vh",
    width: "50%",
  };

  const handleMapClick = (event) => {
    setLatLng(event.latLng.toJSON());
    setDefaultCenter(event.latLng.toJSON());
    console.log(latLng)
  };

  return (
    <>
      <LoadScript googleMapsApiKey={APIKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={2}
          center={defaultCenter}
          options={{ styles: mapStyling, streetViewControl: false }}
          onClick={handleMapClick}
        >
                    {Object.keys(latLng).length !== 0 && <Marker position={latLng} key={latLng.lat} />}
        </GoogleMap>
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

