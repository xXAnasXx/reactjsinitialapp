import '../style/customisedStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Cards = () => {

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
        </div>
    )
}

export default Cards;