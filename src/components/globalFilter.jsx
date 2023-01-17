
const GlobalFilter = ({
    filter,
    setFilter
}) =>
    <span>
        Search:{' '}
        <input value={filter || ''} onChange={e => setFilter(e.target.value)}/>
    </span>


export default GlobalFilter;