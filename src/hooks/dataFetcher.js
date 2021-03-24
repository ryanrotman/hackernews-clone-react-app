import { useState, useEffect } from 'react';
import { getStories } from '../utils/apis';

const useDataFetcher = (type) => {
    const [stories, setStories] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        setisLoading(true);
        getStories(type)
            .then((stories) => {
                setStories(stories);
                setisLoading(false);
            })
            .catch(() => {
                setisLoading(false);
            });
    }, [type]);

    return { isLoading, stories };
};

export default useDataFetcher;