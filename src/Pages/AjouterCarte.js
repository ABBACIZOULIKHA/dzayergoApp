import logo from "../Images/Icons/logo_long.png"
import { Link } from 'react-router-dom';
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "86%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function AjouterCarte() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyABIm5uNLd57S9l_MRbwpEIl6hXI8lzjMg",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const position = {
    lat: 37.772,
    lng: 3,
  };

  return isLoaded ? (
    <div className=" w-full h-screen">
    <div className="h-[14%] bg-violet w-full flex flex-row justify-between items-center py-3 px-2">
          <Link to='/'>  <img src={logo} className=" ml-10  w-46 h-16" alt="" /> </Link> 
          <p> NomPrenom </p>
          <div className="flex flex-row justify-between ">
          <button className="bg-tchini px-12 "> hiiiiiiiiiii </button>
          <button className="bg-beige px-12  "> hello </button>
          </div>
         

         </div>
         <div className="bg-tchini">

         </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        onClick={(e) => {
          console.log(e.latLng.lat(), "  ", e.latLng.lng());
        }}
        center={center}
        zoom={100}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Add the Marker component */}
        <Marker
          icon={{
            path: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            scale: 100,
            fillColor: "yellow",
            fillOpacity: 0.9,
            strokeColor: "gold",
            strokeWeight: 2,
          }}
          position={position}
        />
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <>
      <h1></h1>
    </>
  );
}

export default AjouterCarte;
