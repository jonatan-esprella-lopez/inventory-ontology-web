export const searchFetch = async (query: string) => {
  const API_URL = import.meta.env.VITE_API_URL
  if (query.length < 1) {
    return { results: [] }
  }
  const response = await fetch(`${API_URL}search?query=${query}`)
  const data = await response.json()
  return data
}
