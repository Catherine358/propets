import React, {useEffect, useState} from "react";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";

const getCoordinates = (address, setCoordinates) => {
    Geocode.setApiKey("AIzaSyBGnPllE-HDwXma7Q-uySoKBxw8Kyz2-Go");
    Geocode.fromAddress(address).then(
        response => {
            const {lat, lng} = response.results[0].geometry.location;
            console.log(lat, lng);
            setCoordinates({lat, lng});
        }
    );
}

const AnyReactComponent = ( ) => {
    return (
        <div>
            <i className="fas fa-map-marker">
                <i className="fas fa-paw"/>
            </i>
        </div>
    )
};

const GoogleMap = (props) => {
    const { address } = props;
    const [lat, setLat] = useState(32.1074941);
    const [long, setLong] = useState(34.7992586);
    const [coordinates, setCoordinates] = useState({
        lat: 0.0,
        lng: 0.0
    });

    useEffect(() => {
        getCoordinates(address, setCoordinates);
    }, [address]);

    navigator.geolocation.getCurrentPosition(showPosition);

    function showPosition(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
    }

    function handleApiLoaded(map, maps) {
        let marker = new maps.Marker({
            position: {
                lat: lat,
                lng: long
            },
            map,
            title: 'You are here'
        });
    }

    const defaultProps = {
        center: {
            lat: lat,
            lng: long
        },
        zoom: 11
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBGnPllE-HDwXma7Q-uySoKBxw8Kyz2-Go" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                <AnyReactComponent
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                />
            </GoogleMapReact>
        </div>
    )
};

export default GoogleMap;