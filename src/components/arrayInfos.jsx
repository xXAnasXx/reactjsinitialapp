import '../style/customisedStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useMemo } from 'react';
import { render } from 'react-dom';
import { useTable } from 'react-table'

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
                accessor: 'vc_dose_1'
            },
            {
                Header: 'VC dose 1 daily',
                accessor: 'vc_dose_1_daily'
            },
            {
                Header: 'VC dose 2',
                accessor: 'vc_dose_2'
            },
            {
                Header: 'VC dose 2 daily',
                accessor: 'vc_dose_2_daily'
            },
            {
                Header: 'VC dose 3',
                accessor: 'vc_dose_3'
            },
            {
                Header: 'VC dose 3 daily',
                accessor: 'vc_dose_3_daily'
            },
        ]
    )

    
    const tableInstance = covidData == undefined ? [] : useTable({ columns, covidData });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance
    
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
        <div className='mt-5'>
            <table {...getTableProps()} className='table table-sm table-striped'>
                <thead>
                    { // loop over the header rows
                    headerGroups.map( headerGroup => (
                        // Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            { // loop over the headers in each row
                            headerGroup.headers.map(column => (
                                // Apply the header cell props
                                <th {...column.getHeaderProps()}>
                                    { // Render the header
                                    column.render('Header')
                                    }
                                </th>
                            ))
                            }
                            <th></th>
                        </tr>
                    ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {// Loop over the table rows
                    rows.map(row => {
                        // Prepare the row for display
                        prepareRow(row)
                        return (
                            // Apply the row props
                            <tr {...row.getRowProps()}>
                                {// loop over the rows cells
                                row.cells.map(cell => {
                                    // Apply the cell props
                                    return(
                                        <td {...cell.getCellProps()}>
                                            {// Render the cell contents
                                            cell.render('Cell')
                                            }
                                        </td>
                                    )
                                })
                                }
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ArrayInfos;