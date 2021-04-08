import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    useEffect(() => {
        axiosInstance(opts).then(data => {
            setState({
                ...state,
                loading: false,
                data
            });
        })
    }, []);
    if(!opts.url){
        return;
    } else {}
    return state;
}

export default useAxios;