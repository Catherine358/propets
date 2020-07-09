import Geocode from "react-geocode";

const getCoordinates = (address) => {
    Geocode.setApiKey("AIzaSyBGnPllE-HDwXma7Q-uySoKBxw8Kyz2-Go");
    Geocode.fromAddress(address).then(
        response => {
            return response.results[0].geometry.location;
        }
    );
};

export {
    getCoordinates
}