import { useState, useEffect } from "react";

function FetchOnMount() {
  const [users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(` Error Message: ${response.status}`);
        }
        console.log("API call was sucessfull");

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        if (error.name === "AbortError") return;
        setError(` Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
    return () => controller.abort();
  }, []);

  return (
    <div style={{ marginTop: 12 }}>
      <h2>Users Details Extracted from API</h2>

      {Loading && <p>Loading ......</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              Username is: {user.name}
              User E-Mail address is: {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FetchOnMount;
