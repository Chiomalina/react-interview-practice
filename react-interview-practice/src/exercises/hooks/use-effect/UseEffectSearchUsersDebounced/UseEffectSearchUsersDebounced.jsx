import { useEffect, useState } from "react";

function UseEffectSearchUsersDebounced() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setError("");
      setResults([]);
      setHasSearched(false);
      setLoading(false);
      return;
    }
    const controller = new AbortController();

    const timeOutId = setTimeout(() => {
      setHasSearched(true);

      async function runSearch() {
        setError("");
        setLoading(true);

        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
              signal: controller.signal,
            }
          );

          if (!response.ok) {
            throw new Error(` Error message: ${response.status}`);
          }

          const data = await response.json();

          const filteredData = data.filter((user_collection) =>
            user_collection.name.toLowerCase().includes(query.toLowerCase())
          );

          setResults(filteredData);
        } catch (error) {
          if (error.name === "AbortError") return;
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }

      runSearch();
    }, 400);

    return () => {
      clearTimeout(timeOutId);
      controller.abort();
    };
  }, [query]);

  return (
    <div>
      <h2>User Debounced Search Mechanism</h2>

      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter your search word"
      />

      {loading && <p>Loading ....</p>}
      {error && <p style={{ color: "red" }}>Error Message: {error}</p>}

      <ul>
        {results.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {hasSearched && !loading && !error && results.length === 0 && (
        <p>No result matches the input you provided</p>
      )}
    </div>
  );
}

export default UseEffectSearchUsersDebounced;
