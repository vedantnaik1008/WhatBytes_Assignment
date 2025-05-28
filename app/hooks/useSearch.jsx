import { combinedData } from '../../services/api';
import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';
import { useFetch } from './useFetch';
const useSearch = () => {
    const [input, setInput] = useState('');
    const { response, setResponse } = useFetch('/api/fetchData');
    const debouncedSearch = useDebounce(input, 500);

    useEffect(() => {
        if (debouncedSearch) {
            const results = combinedData.filter((item) => {
                return JSON.stringify(item)
                    .toLowerCase()
                    .includes(debouncedSearch.toLowerCase());
            });
            setResponse(results);
        } else {
            setResponse(combinedData);
        }
    }, [debouncedSearch, setResponse]);

    const Search = (e) => {
        setInput(e.target.value);
    };

    const Submit = (e) => {
        e.preventDefault();
    };
    return { Search, Submit, input, setInput, response };
};

export default useSearch;
