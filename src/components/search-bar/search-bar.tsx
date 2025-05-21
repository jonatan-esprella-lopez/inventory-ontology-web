import './search-bar.css'

interface Props {
  query: string
  setQuery: (value: string) => void
  onSearch: () => void
}

export const SearchBar = ({ query, setQuery, onSearch }: Props) => {
  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Ingrese término de búsqueda..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSearch()
          }}
        />
        <button onClick={onSearch}>Buscar</button>
      </div>
    </div>
  )
}
