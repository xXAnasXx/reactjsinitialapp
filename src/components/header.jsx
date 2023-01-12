import '../style/customisedStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from 'react';

const Header = () => {
    const [date, setDate] = useState([]);

    useEffect(() => {
        fetch('https://api.opencovid.ca/version')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDate(data.summary);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return(
        <div className="Header row justify-content-between">
            <div className="col-10">
                <i>Date : {date} </i>
            </div>
            <div className="col-2">
                <i>Country : </i>
                <button disabled className='btn btn-outline-dark'>Canada</button>
            </div>
        </div>
    )

}


export default Header