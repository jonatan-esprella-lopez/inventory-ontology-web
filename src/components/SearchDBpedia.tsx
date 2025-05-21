import type { SearchResult } from "../types/search"
import { User, Tag, FileText } from "lucide-react"
import "./SearchResultItem.css"

interface SearchResultItemProps {
  resultDBpedia: SearchResult
}

export default function SearchDBpedia({ resultDBpedia }: SearchResultItemProps) {
  return (
    <div className="search-result-item">
      <div className="search-result-item__field">
        <div className="search-result-item__label">
          <User className="search-result-item__icon" />
          <span>Sujeto:</span>
        </div>
        <span className="search-result-item__value">{resultDBpedia.sujeto}</span>
      </div>
      <div className="search-result-item__field">
        <div className="search-result-item__label">
          <Tag className="search-result-item__icon" />
          <span>Predicado:</span>
        </div>
        <span className="search-result-item__value">{resultDBpedia.predicado}</span>
      </div>
      <div className="search-result-item__field">
        <div className="search-result-item__label">
          <FileText className="search-result-item__icon" />
          <span>Objeto:</span>
        </div>
        <span className="search-result-item__value">{resultDBpedia.objeto}</span>
      </div>
    </div>
  )
}
