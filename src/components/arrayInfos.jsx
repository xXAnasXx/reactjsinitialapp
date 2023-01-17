import '../style/customisedStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useMemo } from 'react';
import Table from './table';
import { ProgressBar } from 'react-bootstrap';

const ArrayInfos = () => {
    const [covidData, setCovidData] = useState([]);
    const columns = useMemo(
        () => [
            {
                Header: 'Region',
                accessor: 'region', // the 'key'
            },
            {
                Header: 'Cases',
                accessor: 'cases_daily'
            },
            {
                Header: 'Deaths',
                accessor: 'deaths'
            },
            {
                Header: 'Deaths Daily',
                accessor: 'deaths_daily'
            },
            {
                Header: 'Hospitalizations',
                accessor: 'hospitalizations'
            },
            {
                Header: 'Hospitalizations Daily',
                accessor: 'hospitalizations_daily'
            },
            {
                Header: 'ICU',
                accessor: 'icu'
            },
            {
                Header: 'ICU Daily',
                accessor: 'icu_daily'
            },
            {
                Header: 'Tests Completed',
                accessor: 'tests_completed'
            },
            {
                Header: 'Tests Completed Daily',
                accessor: 'tests_completed_daily'
            },
            {
                Header: 'VC dose 1',
                accessor: 'vaccine_coverage_dose_1',
                Cell: ({value}) => (
                    <ProgressBar now={value} label={value + "%"}/>
                )
            },
            {
                Header: 'VC dose 1 daily',
                accessor: 'vaccine_coverage_dose_1_daily'
            },
            {
                Header: 'VC dose 2',
                accessor: 'vaccine_coverage_dose_2'
            },
            {
                Header: 'VC dose 2 daily',
                accessor: 'vaccine_coverage_dose_2_daily'
            },
            {
                Header: 'VC dose 3',
                accessor: 'vaccine_coverage_dose_3'
            },
            {
                Header: 'VC dose 3 daily',
                accessor: 'vaccine_coverage_dose_3_daily'
            },
        ],
        []
    )

    
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

   
    return (
            covidData.length != 0 ? <Table columns = {columns} covidData = {covidData}/> : null
    )
    
}

export default ArrayInfos;