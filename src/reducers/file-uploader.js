import { LOADED, INIT, PENDING, FILES_UPLOADED } from "../constants/Constants";

const uploadFiles = (state, action) => {
    if(state === undefined) {
        return {
            files: [],
            pending: [],
            next: null,
            uploading: false,
            uploaded: {},
            status: 'idle'
        };
    }
    switch (action.type) {
        case 'LOAD':
            return {
                ...state.fileUploader,
                files: action.files,
                status: LOADED
            };
        case 'SUBMIT':
            return {
                ...state.fileUploader,
                uploading: true,
                pending: state.fileUploader.files,
                status: INIT
            };
        case 'NEXT':
            return {
                ...state.fileUploader,
                next: action.next,
                status: PENDING
            };
        case 'FILE_UPLOADED':
            return {
                ...state.fileUploader,
                next: null,
                pending: action.pending,
                uploaded: {
                    ...state.fileUploader.uploaded,
                    [action.prev.id]: action.prev.file
                }
            };
        case 'FILES_UPLOADED':
            return {
                ...state.fileUploader,
                uploading: false,
                status: FILES_UPLOADED
            };
        default: return state.fileUploader;
    }
};

export default uploadFiles;