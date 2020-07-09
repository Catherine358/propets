import updateProfileInfo from "./profile-info";


const reducer = (state, action) => {
    return {
        profileInfo: updateProfileInfo(state, action)
    }
};

export default reducer;