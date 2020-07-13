import Geocode from "react-geocode";

const getCoordinates = async (address) => {
    console.log(address)
    Geocode.setApiKey("AIzaSyBGnPllE-HDwXma7Q-uySoKBxw8Kyz2-Go");
    return Geocode.fromAddress(address).then(
        response => {
            console.log(response.results[0].geometry.location)
            return response.results[0].geometry.location;
        }
    );
};

export {
    getCoordinates
}