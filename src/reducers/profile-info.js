import { FETCH_PROFILE_INFO_FAILURE, FETCH_PROFILE_INFO_REQUEST, FETCH_PROFILE_INFO_SUCCESS } from "../constants/Constants";

const updateProfileInfo = (state, action) => {
    if(state === undefined) {
        return {
            user: {},
            error: ''
        }
    }
    switch (action.type) {
        case FETCH_PROFILE_INFO_REQUEST:
            return {
                user: {},
                error: ''
            };
        case FETCH_PROFILE_INFO_SUCCESS:
            return {
                user: action.payload,
                error: ''
            };
        case FETCH_PROFILE_INFO_FAILURE:
            return {
                user: {},
                error: action.payload
            };
        default: return state.profileInfo;
    }
};

export default updateProfileInfo;