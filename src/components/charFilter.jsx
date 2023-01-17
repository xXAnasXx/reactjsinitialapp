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
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`} 
            />
        </span>
    )
}

export default CharFilter;