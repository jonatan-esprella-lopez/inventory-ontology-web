import { searchFetch } from "./services/search-engine";
import "./App.css";
import { useState } from "react";

interface SearchResult {
  sujeto: string;
  predicado: string;
  objeto: string;
}

function App() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await searchFetch(query);
      setResults(data.results);
    } catch (err) {
      console.error("Error fetching search results:", err);
      setError("Failed to fetch results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Ontologies Searcher</h1>
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Enter your query"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <input type="button" onClick={handleSearch} value="Search" />
      </div>

      <div className="search-results">
        <h2>Search Results</h2>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <ul>
          {results.length === 0 && !loading && <li>No results found.</li>}
          {results.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
