import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 5.3985715,
  lng: -3.9611462,
};

function MyMap() {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:import.meta.env.REACT_APP_API_KEY
  })

  const [map, setMap] = React.useState(null)
 console.log("MYMAP",map)
  const onLoad = React.useCallback((map)=>{
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback((map)=>{
    console.log(map)
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker 
      
        position={
          {
            lat:5.3985715,
            lng: -3.9611462,
          }
        }
        icon={{
          url:"../src/assets/react.svg",
          // anchor:new window.google.maps.Point(5,85)
        }
        }
        />
      </GoogleMap>
  ) : <>
  </>
}

export default React.memo(MyMap)