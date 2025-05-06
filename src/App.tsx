import { useState } from 'react'
import { SearchBar } from '@components/search-bar/search-bar'
import { SearchResults } from '@components/search-results/search-results'
import './App.css'
import { searchFetch } from '@services/search-engine'

interface SearchResult {
  sujeto: string
  predicado: string
  objeto: string
}

function App() {
  const [query, setQuery] = useState<string>('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await searchFetch(query)
      setResults(data.results)
    } catch (err) {
      console.error('Error fetching search results:', err)
      setError('Failed to fetch results. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <h1 className="title">Ontologies Searcher</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <SearchResults results={results} loading={loading} error={error} />
    </div>
  )
}

export default App
