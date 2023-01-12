import '../style/customisedStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from 'react';
import { render } from 'react-dom';

const ArrayInfos = () => {
    const [covidData, setCovidData] = useState([]);

    useEffect(() => {
        fetch('https://api.opencovid.ca/summary')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCovidData(data.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return(
        <div className='mt-5'>
            <table className='table table-sm table-striped'>
                <thead>
                    <tr>
                        <th>Region</th>
                        <th>Cases</th>
                        <th>Cases Daily</th>
                        <th>Deaths</th>
                        <th>Deaths Daily</th>
                        <th>Hospitalizations</th>
                        <th>Hospitalizations Daily</th>
                        <th>ICU</th>
                        <th>ICU Daily</th>
                        <th>Tests Completed</th>
                        <th>Tests Completed Daily</th>
                        <th>VC dose 1</th>
                        <th>VC dose 1 daily</th>
                        <th>VC dose 2</th>
                        <th>VC dose 2 daily</th>
                        <th>VC dose 3</th>
                        <th>VC dose 3 daily</th>
                    </tr>
                </thead>
                <tbody>
                    {covidData.map((elem) => {
                        return(
                        <tr key={elem.region}>
                            <td>{elem.region}</td>
                            <td>{elem.cases}</td>
                            <td>{elem.cases_daily}</td>
                            <td>{elem.deaths}</td>
                            <td>{elem.deaths_daily}</td>
                            <td>{elem.hospitalizations}</td>
                            <td>{elem.hospitalizations_daily}</td>
                            <td>{elem.icu}</td>
                            <td>{elem.icu_daily}</td>
                            <td>{elem.tests_completed}</td>
                            <td>{elem.tests_completed_daily}</td>
                            <td>{elem.vaccine_coverage_dose_1}</td>
                            <td>{elem.vaccine_coverage_dose_1_daily}</td>
                            <td>{elem.vaccine_coverage_dose_2}</td>
                            <td>{elem.vaccine_coverage_dose_2_daily}</td>
                            <td>{elem.vaccine_coverage_dose_3}</td>
                            <td>{elem.vaccine_coverage_dose_3_daily}</td>
                        </tr>
                        )
                        
                     })}
                </tbody>
                
            </table>
        </div>
    )
}

export default ArrayInfos;