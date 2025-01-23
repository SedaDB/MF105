import axios from 'axios';
import { useEffect, useState } from 'react'

export const api = axios.create({
    baseURL: 'http://localhost:4001/',
    headers: {
        'Content-Type': 'application/json'
    }
})

function useAxios(url: string, options = {}) {
    const [state, setState] = useState({
        loading: false,
        data: {},
        error: null
    });

    const fetchData = async () => {
        try {
            setState({
                ...state,
                loading: true
            })
            const response = await api.request({ url, ...options, });
            console.log("response",response?.data)
            setState({
                ...state,
                data: response.data,
                loading: false
            })
        } catch (error) {
            setState({
                ...state,
                error: error?.message,
                loading: false
            })
        }
        finally {
            // setState({
            //     ...state,
            //     loading: false
            // })
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return {
        ...state
    }

}
export default useAxios