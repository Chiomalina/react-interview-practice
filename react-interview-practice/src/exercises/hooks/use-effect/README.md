# FetchOnMount – React Data Fetching with `useEffect`

This component demonstrates how to **fetch data when a React component mounts** using `useEffect`, while correctly handling **loading state**, **error state**, and **request cleanup** with `AbortController`.

It follows a **clean, interview-ready pattern** commonly expected in frontend roles.

---

## 📌 What This Component Does

- Fetches user data from an external API on initial render
- Displays a loading indicator while fetching
- Handles network and HTTP errors gracefully
- Cancels the request if the component unmounts
- Renders a list of users after a successful fetch

---

## 🧠 Key Concepts Demonstrated

- `useEffect` for side effects
- Async logic inside `useEffect`
- `AbortController` for cleanup
- Loading and error state management
- Safe API fetching pattern

---

## 📂 File Structure

## FetchOnMount.jsx

---

## ⚙️ How It Works

### 1. State Management

```js
const [users, setUsers] = useState([]);
const [Loading, setLoading] = useState(false);
const [error, setError] = useState("");
````
- users

