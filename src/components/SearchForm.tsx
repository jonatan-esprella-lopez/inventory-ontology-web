"use client"

import { useState, type FormEvent } from "react"
import { Search, Loader2 } from "lucide-react"
import "./SearchForm.css"

interface SearchFormProps {
  onSearch: (query: string) => Promise<void>
  isLoading: boolean
}

export default function SearchForm({ onSearch, isLoading }: SearchFormProps) {
  const [query, setQuery] = useState<string>("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__input-group">
        <div className="search-form__input-wrapper">
          <Search className="search-form__icon" />
          <input
            type="text"
            className="search-form__input"
            placeholder="Ingrese término de búsqueda..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <button type="submit" className="search-form__button" disabled={isLoading || !query.trim()}>
          {isLoading ? (
            <>
              <Loader2 className="search-form__spinner" />
              <span>Searching...</span>
            </>
          ) : (
            <span>Search</span>
          )}
        </button>
      </div>
    </form>
  )
}
