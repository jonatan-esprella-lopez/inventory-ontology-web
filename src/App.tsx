"use client"

import { useState } from "react"
import SearchForm from "./components/SearchForm"
import SearchResults from "./components/SearchResults"
import ThemeToggle from "./components/ThemeToggle"
import type { SearchResult } from "./types/search"
import { searchDBpedia, searchOntology } from "./services/search-service"
import { Database } from "lucide-react"
import "./App.css"

function App() {
  const [results, setResults] = useState<SearchResult[]>([])
  const [resultDBpedia, setResultDBpedia] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (query: string) => {
    if (!query.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const [ontologyRes, dbpediaRes] = await Promise.all([
        searchOntology(query),
        searchDBpedia(query),
      ]);

      setResultDBpedia(dbpediaRes)
      setResults(ontologyRes)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Error al buscar. Por favor intente nuevamente."
      setError(errorMessage)
      console.error(err)
      setResultDBpedia([])
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
            <h1 className="search-page__title">Ontology Search Engine</h1>
          </div>
          <ThemeToggle />
        </header>

        <SearchForm onSearch={handleSearch} isLoading={isLoading} />

        {error && <div className="search-page__error">{error}</div>}

        <SearchResults results={results} resultDBpedia={resultDBpedia} isLoading={isLoading} />
      </div>
    </main>
  )
}

export default App
