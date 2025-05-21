import type { SearchResult } from "../types/search"
import { User, Tag, FileText } from "lucide-react"
import "./SearchResultItem.css"

interface SearchResultItemProps {
  result: SearchResult
}

export default function SearchResultItem({ result }: SearchResultItemProps) {
  return (
    <div className="search-result-item">
      <div className="search-result-item__field">
        <div className="search-result-item__label">
          <User className="search-result-item__icon" />
          <span>Subject:</span>
        </div>
        <span className="search-result-item__value">{result.sujeto}</span>
      </div>
      <div className="search-result-item__field">
        <div className="search-result-item__label">
          <Tag className="search-result-item__icon" />
          <span>Predicate:</span>
        </div>
        <span className="search-result-item__value">{result.predicado}</span>
      </div>
      <div className="search-result-item__field">
        <div className="search-result-item__label">
          <FileText className="search-result-item__icon" />
          <span>Object:</span>
        </div>
        <span className="search-result-item__value">{result.objeto}</span>
      </div>
    </div>
  )
}
