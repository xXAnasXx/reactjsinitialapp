import '../style/customisedStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

const Cards = () => {

    const [cases, setCases] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [hospitalizations, setHospitalizations] = useState([]);
    const [vaccine_coverage_dose_1, setVaccine_coverage_dose_1] = useState([])
    const [vaccine_coverage_dose_2, setVaccine_coverage_dose_2] = useState([])
    const [vaccine_coverage_dose_3, setVaccine_coverage_dose_3] = useState([])

    useEffect(() => {
        fetch('https://api.opencovid.ca/timeseries?stat=cases&date=1&geo=can')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCases(data.data.cases);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        fetch('https://api.opencovid.ca/timeseries?stat=deaths&date=1&geo=can')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDeaths(data.data.deaths);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        fetch('https://api.opencovid.ca/timeseries?stat=hospitalizations&date=1&geo=can')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setHospitalizations(data.data.hospitalizations);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        fetch('https://api.opencovid.ca/timeseries?stat=vaccine_coverage_dose_1&date=1&geo=can')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setVaccine_coverage_dose_1(data.data.vaccine_coverage_dose_1);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        fetch('https://api.opencovid.ca/timeseries?stat=vaccine_coverage_dose_2&date=1&geo=can')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setVaccine_coverage_dose_2(data.data.vaccine_coverage_dose_2);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        fetch('https://api.opencovid.ca/timeseries?stat=vaccine_coverage_dose_3&date=1&geo=can')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setVaccine_coverage_dose_3(data.data.vaccine_coverage_dose_3);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    
    function errorHandling(val){
        try{
            return(
                <i>{val.value}</i>
            )
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div className="Body container">
            <div className='row gx-4'>
                <div className='col-sm'>
                    <div className='card bg-danger text-white ml-3 cardS'>
                        Cases : {
                            errorHandling(cases[0])
                        }
                    </div>
                </div>
                <div className='col-sm'>
                    <div className='card bg-dark text-white ml-3 cardS'>
                        Deaths : { errorHandling(deaths[0]) }
                    </div>
                </div>
                <div className='col-sm'>
                    <div className='card bg-success text-white ml-3 cardS'>
                        Hospitalization : {
                            errorHandling(hospitalizations[0])
                        }
                    </div>
                </div>
                <div className='col-sm'>
                    <div className='card bg-light ml-3 cardL'>
                        Vaccine coverage dose 1 : {
                            errorHandling(vaccine_coverage_dose_1[0])
                        }
                    </div>
                </div>
                <div className='col-sm'>
                    <div className="card bg-light ml-3 cardL">
                        Vaccine coverage dose 2 : {
                            errorHandling(vaccine_coverage_dose_2[0])
                        }
                    </div>
                </div>
                <div className='col-sm'>
                    <div className="card bg-light ml-3 cardL">
                        Vaccine coverage dose 3 : {
                            errorHandling(vaccine_coverage_dose_3[0])
                        }
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Cards;