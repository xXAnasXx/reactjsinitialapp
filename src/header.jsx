import './customisedStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Header = () => {
    const [date, setDate] = useState("");

    return(
        <div className="Header d-flex justify-content-between">
            <div>
                <i>Date : </i>
                <i>{date}</i>
            </div>
            <div>
                <i>Mode : </i>
                <button disabled className='bg-primary text-white'>Global</button>
            </div>
        </div>
    )

}


export default Header