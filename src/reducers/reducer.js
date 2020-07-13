import updateProfileInfo from "./profile-info";
import uploadFiles from "./file-uploader";


const reducer = (state, action) => {
    return {
        profileInfo: updateProfileInfo(state, action),
        fileUploader: uploadFiles(state, action)
    }
};

export default reducer;