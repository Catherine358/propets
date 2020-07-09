import { FETCH_PROFILE_INFO_FAILURE, FETCH_PROFILE_INFO_SUCCESS, FETCH_PROFILE_INFO_REQUEST } from "../constants/Constants";
import { getUserInfo } from "../services";

// fetching profile info

const profileInfoRequest = () => {
    return {
        type: FETCH_PROFILE_INFO_REQUEST
    }
};

const profileInfoLoaded = (user) => {
  return {
      type: FETCH_PROFILE_INFO_SUCCESS,
      payload: user
  }
};

const profileInfoFailed = (error) => {
    return {
        type: FETCH_PROFILE_INFO_FAILURE,
        payload: error
    }
};

const fetchProfileInfo = (dispatch, email) => {
    dispatch(profileInfoRequest());
    getUserInfo(email)
        .then(data => {
            console.log(data)
            dispatch(profileInfoLoaded(data));
        })
        .catch(error => {
            console.log(error)
            dispatch(profileInfoFailed(error));
        })
};

export {
    fetchProfileInfo
}