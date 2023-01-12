import { useEffect, useState} from 'react';

const ApiConsumer = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://api.opencovid.ca/summary')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPosts(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);
}