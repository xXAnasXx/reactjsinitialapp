import { useState, useAsyncDebounce } from "react"

const CharFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) => {

    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            Search:{' '}
            <input 
                value={value || ""} 
            />
        </span>
    )
}