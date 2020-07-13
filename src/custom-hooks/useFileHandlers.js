import React, {useCallback, useEffect, useReducer, useRef} from "react";
import reducer from "../reducers/reducer";
import {logUploadedFile} from "../utils";
import {useDispatch, useSelector} from "react-redux";

const initialState = {
    files: [],
    pending: [],
    next: null,
    uploading: false,
    uploaded: {},
    status: 'idle'
};

const useFileHandlers = () => {
    const state = useSelector(state => state.fileUploader);
    const dispatch = useDispatch();
    //const [state, dispatch] = useReducer(reducer, initialState);
    const countRef = useRef(0);

    useEffect(() => {
        if(state.pending.length && state.next == null) {
            const next = state.pending[0];
            dispatch({ type: 'NEXT', next });
        }
    }, [state.next, state.pending]);

    useEffect(() => {
        if(state.pending.length && state.next) {
            const { next } = state;
            const prev = next;
            logUploadedFile(++countRef.current);
            const pending = state.pending.slice(1);
            dispatch({ type: 'FILE_UPLOADED', prev, pending })
        }
    }, [state]);

    useEffect(() => {
        if(!state.pending.length && state.uploading) {
            dispatch({ type: 'FILES_UPLOADED' });
        }
    }, [state.pending.length, state.uploading]);

    const onChange = (event) => {
        if(event.target.files.length) {
            const arrFiles = Array.from(event.target.files);
            const files = arrFiles.map((file, index) => {
                const src = window.URL.createObjectURL(file);
                return {
                    file,
                    id: index,
                    src
                }
            });
            dispatch({ type: 'LOAD', files });
        }
    };

    const onSubmit = useCallback(() => {
       // event.preventDefault();
        if(state.files.length) {
            dispatch({ type: 'SUBMIT' });
        } else {
            window.alert("You don't have any files loaded");
        }
    }, [state.files.length]);

    return {
        ...state,
        onChange,
        onSubmit
    }
};

export default useFileHandlers;