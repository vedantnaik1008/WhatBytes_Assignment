import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get(url);
            setResponse(res.data);
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return { response, loading, setResponse };
};