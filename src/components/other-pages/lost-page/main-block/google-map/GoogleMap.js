import React, {useEffect, useState} from "react";
import GoogleMapReact from "google-map-react";

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
    const { posts } = props;
    const [lat, setLat] = useState(32.1074941);
    const [long, setLong] = useState(34.7992586);
    const [coordinates, setCoordinates] = useState([{
        lat: 0.0,
        lng: 0.0
    }]);

    useEffect(() => {
        const arrTmp = [];
        posts.forEach(post => {
           arrTmp.push({
               lat: post.location.lat,
               lng: post.location.lon
           });
        });
        setCoordinates(arrTmp);
    }, [posts]);

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

    const arrForLocationComponent = [];
    coordinates.forEach(coordinate => {
        arrForLocationComponent.push(<AnyReactComponent lat={coordinate.lat} lng={coordinate.lng}/>)
    });

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBGnPllE-HDwXma7Q-uySoKBxw8Kyz2-Go" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                {arrForLocationComponent}
            </GoogleMapReact>
        </div>
    )
};

export default GoogleMap;