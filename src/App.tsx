"use client"

import { useState } from "react"
import SearchForm from "./components/SearchForm"
import SearchResults from "./components/SearchResults"
import ThemeToggle from "./components/ThemeToggle"
import type { SearchResult } from "./types/search"
import { searchOntology } from "./services/search-service"
import { Database } from "lucide-react"
import "./App.css"

function App() {
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (query: string) => {
    if (!query.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const searchResults = await searchOntology(query)
      setResults(searchResults)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Error al buscar. Por favor intente nuevamente."
      setError(errorMessage)
      console.error(err)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="search-page">
      <div className="search-page__container">
        <header className="search-page__header">
          <div className="search-page__logo">
            <Database className="search-page__logo-icon" />
            <h1 className="search-page__title">Buscador de Ontología</h1>
          </div>
          <ThemeToggle />
        </header>

        <SearchForm onSearch={handleSearch} isLoading={isLoading} />

        {error && <div className="search-page__error">{error}</div>}

        <SearchResults results={results} isLoading={isLoading} />
      </div>
    </main>
  )
}

export default App
