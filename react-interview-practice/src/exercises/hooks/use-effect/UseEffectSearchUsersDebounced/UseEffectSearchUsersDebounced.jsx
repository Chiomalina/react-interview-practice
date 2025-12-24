import { useEffect, useState } from 'react'

function UseEffectSearchUsersDebounced() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [hasSearch, setHasSearched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
        setError("");
        setResults([]);
        setHasSearched(false);
    }

    function handleChange(event) {
        setQuery(event.target.value)
    }

    useEffect(() => {
        controller = new AbortController();

        const timeOutId = window.setTimeout(() => {
            setHasSearched(true);

            async function runSearch() {
                const response = await fetch ("https://jsonplaceholder.typicode.com/users", {
                    signal: controller.signal
                })

                if(!response.ok) {
                    throw new Error(` Error message: ${response.status}`)
                }

                const data = await response.json();

                const filteredData = data.filter((user_collection) => 
                    user_collection.collection.toLowerCase().includes(query.toLowerCase())
                )

                setResults(filteredData)
            }

            runSearch();
        }, 400)

        return () => {
            controller.abort();
            window.clearTimeout(timeOutId)
        }
    }, [query])


  return (
    <div>
      <h2>User Debounced Search Mechanism</h2>

      {loading && <p>Loading ....</p>}
      {error && <p style={{ color: "red" }}>Error Message: {error}</p>}

      <ul>
        {
            results.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))
        }
      </ul>

      {hasSearch && !loading && !error && results.length === 0 && 
        <p>No result matches the input you provided</p>
      }
    </div>
  )
}

export default UseEffectSearchUsersDebounced
