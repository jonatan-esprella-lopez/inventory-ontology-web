import type { SearchResult } from "../types/search"
import SearchResultItem from "./SearchResultItem"
import { Loader2, FileSearch } from "lucide-react"
import "./SearchResults.css"

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
        <p>Loading results...</p>
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="search-results__empty">
        <FileSearch className="search-results__empty-icon" />
        <p>No results found. Please try another search.</p>
      </div>
    )
  }

  return (
    <div className="search-results">
      <h2 className="search-results__title">Results ({results.length})</h2>
      <div className="search-results__list">
          <div className="search-results__item">
          <div>
            {results.map((result, index) => (
              <SearchResultItem key={index} result={result} />
            ))}
          </div>
          <div>
            {resultDBpedia.map((resultDBpedia, index) => (
              <SearchResultItem key={index} result={resultDBpedia} />
            ))}
          </div>
        </div>    
      </div>
    </div>
  )
}
