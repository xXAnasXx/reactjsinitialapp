import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import GlobalFilter from './globalFilter';

const Table = ({columns, covidData}) => {


   /* console.log('Columns : ');
    console.log(columns);
    console.log('Covid Data : ');
    console.log(covidData); */
    const tableInstance = useTable(
        { columns, data : covidData },
         useSortBy,
         useGlobalFilter
         );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance

    const {globalFilter} = state ;

    return (
        <div className='mt-5'>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()} className='table table-responsive table-sm table-striped'>
                <thead>
                    { // loop over the header rows
                        headerGroups.map(headerGroup => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                { // loop over the headers in each row
                                    headerGroup.headers.map(column => (
                                        // Apply the header cell props
                                        // Add the sorting props to control sorting. For this example
                                        // we can add them into the header props
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            { // Render the header
                                                column.render('Header')
                                            }
                                            {/* Add a sort direction indicator */}
                                            <span>
                                                {column.isSorted ? ( column.isSortedDesc ? '🔽' : '🔼') : ''}
                                            </span>
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
                                            return (
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


export default Table;