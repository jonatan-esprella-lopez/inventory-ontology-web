import type { SearchResult } from "../types/search"
import SearchResultItem from "./SearchResultItem"
import { Loader2, FileSearch } from "lucide-react"
import "./SearchResults.css"
import SearchDBpedia from "./SearchDBpedia"

interface SearchResultsProps {
  results: SearchResult[]
  resultDBpedia: SearchResult[]
  isLoading: boolean
}

export default function SearchResults({ results, resultDBpedia , isLoading }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="search-results__loading">
        <Loader2 className="search-results__loading-icon" />
        <p>Cargando resultados...</p>
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="search-results__empty">
        <FileSearch className="search-results__empty-icon" />
        <p>No se encontraron resultados. Intente con otra búsqueda.</p>
      </div>
    )
  }

  return (
    <div className="search-results">
      <h2 className="search-results__title">Resultados ({results.length})</h2>
      <div className="search-results__list">
          <div className="search-results__item">
          <div>
            {results.map((result, index) => (
              <SearchResultItem key={index} result={result} />
            ))}
          </div>
          <div>
            {resultDBpedia.map((resultDBpedia, index) => (
              <SearchDBpedia key={index} resultDBpedia={resultDBpedia} />
            ))}
          </div>
        </div>    
      </div>
    </div>
  )
}
