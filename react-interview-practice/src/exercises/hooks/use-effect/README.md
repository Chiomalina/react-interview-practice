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

```
src/
├── exercises/
│   └── hooks/
│       └── use-effect/
│           ├── UseEffectFetchOnMount.jsx
│           └── README.md
│
├── App.jsx
├── main.jsx
└── index.css
```

## UseEffectFetchOnMount.jsx

---

## ⚙️ How It Works

### 1. State Management

```js
const [users, setUsers] = useState([]);
const [Loading, setLoading] = useState(false);
const [error, setError] = useState("");
```

- users -> stores fetched data
- Loading -> tracks API request state
- error -> stores error messages

### 2. Fetch on Component Mount

```js
useEffect(() => {
  ...
}, []);
;
```

- Empty dependency array ensures the effect runs once
- Equivalent to componenetDidMount

### 3. AbortController for Cleanup

```js
const controller = new AbortController();
```

- Prevents memory leaks
- Avoids setting state on unmounted components

## Cleanup function:

```js
return () => controller.abort();
```

### 4. Async Fetch Logic

```js
const response = await fetch(url, {
  signal: controller.signal,
});
```

- Uses try/catch/finally
- Validates HTTP response
- Safely parses JSON

### 5. Error Handling

```js
catch (error) {
  if (error.name === "AbortError") return;
  setError(error.message);
}
```

- Ignores intentional abort errors
- Displays meaningful error messages

## 🌐 API Used

```js
https://jsonplaceholder.typicode.com/users
```

A free fake REST API for testing and prtotyping
