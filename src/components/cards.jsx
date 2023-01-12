import '../style/customisedStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

const Cards = () => {

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

    return(
        <div className="Body container">
            <div className='row gx-5'>
                <div className='col-sm'>
                    <div className='card bg-danger text-white ml-3 cardS'>
                        Cases
                    </div>
                </div>
                <div className='col-sm'>
                    <div className='card bg-dark text-white ml-3 cardS'>
                        Deaths
                    </div>
                </div>
                <div className='col-sm'>
                    <div className='card bg-success text-white ml-3 cardS'>
                        Hospitalization
                    </div>
                </div>
                <div className='col-sm'>
                    <div className='card bg-light ml-3 cardL'>
                        Vaccine coverage dose 1
                    </div>
                </div>
                <div className='col-sm'>
                    <div className="card bg-light ml-3 cardL">
                        Vaccine coverage dose 2
                    </div>
                </div>
                <div className='col-sm'>
                    <div className="card bg-light ml-3 cardL">
                        Vaccine coverage dose 3
                    </div>
                </div>
            </div>
            <div className="posts-container">
                {
                posts.data.map((post) => {
                    return (
                        <div className="post-card" key={post.id}>
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-body">{post.body}</p>
                        <div className="button">
                        <div className="delete-btn">Delete</div>
                        </div>
                        </div>
                    );
                })
                }
            </div>
        </div>

        
    )
}

export default Cards;