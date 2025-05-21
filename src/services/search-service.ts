import type { SearchResult } from "../types/search"


const API_URL = import.meta.env.VITE_API_URL;

export async function searchOntology(query: string): Promise<SearchResult[]> {
  try {
    const response = await fetch(`${API_URL}/search?query=${query}`)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || `Error: ${response.status}`)
    }

    const data = await response.json()
    return data.results
  } catch (error) {
    console.error("Error searching ontology:", error)
    throw error
  }
}

export async function searchDBpedia(query: string): Promise<SearchResult[]> {
  try {
    const response = await fetch(`${API_URL}/search-db?query=${query}`)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || `Error: ${response.status}`)
    }

    const data = await response.json()
    return data.results
  } catch (error) {
    console.error("Error searching DBpedia:", error)
    throw error
  }
}