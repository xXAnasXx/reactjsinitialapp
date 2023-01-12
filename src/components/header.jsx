import '../style/customisedStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react';

const Header = () => {
    const [date, setDate] = useState("");

    return(
        <div className="Header row justify-content-between">
            <div className="col-10">
                <i>Date : </i>
                <i>{date}</i>
            </div>
            <div className="col-2">
                <i>Country : </i>
                <button disabled className='btn btn-outline-light'>Canada</button>
            </div>
        </div>
    )

}


export default Header