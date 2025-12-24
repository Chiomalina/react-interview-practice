# 🔍 Debounced User Search with useEffect

This exercise demonstrates how to implement a **debounced search mechanism** in React using `useEffect`, `AbortController`, and controlled inputs.

The goal is to safely fetch data from an external API while:

- avoiding unnecessary requests
- preventing race conditions
- handling component unmounts correctly
- providing clean user feedback (loading, empty state, errors)

---

## 🎯 Learning Objectives

By completing this exercise, you will understand:

- How `useEffect` handles **side effects**
- Why debouncing belongs inside `useEffect`
- How to prevent **infinite re-renders**
- How to cancel in-flight requests with `AbortController`
- How to handle empty input and UI edge cases
- How to build interview-grade async logic in React

---

## 🧠 Key Concepts Used

- **Controlled input**
- **Debouncing with `setTimeout`**
- **Effect cleanup**
- **AbortController**
- **Derived state**
- **Conditional rendering**
- **Safe async/await inside `useEffect`**

---

## 🧪 Exercise Description

The component allows users to search through a list of users fetched from the JSONPlaceholder API.

### Behavior:

- API calls are delayed by **400ms** after typing stops
- Requests are **cancelled** if the query changes
- Empty input clears results and resets state
- Loading, error, and empty states are handled gracefully

---

## 📡 API Used

- **Endpoint:** `https://jsonplaceholder.typicode.com/users`
- **Data:** List of mock user objects

---

## 🧩 Component Logic Breakdown

### 1️⃣ Controlled Input

The input field updates local state on every change.

```js
<input value={query} onChange={handleChange} />
```

### 2️⃣ Debounced Effect

The API call is delayed using setTimeout inside useEffect.

```js
setTimeout(() => {
  runSearch();
}, 400);
```

### 3️⃣ AbortController

Cancels any ongoing request when:

- the query changes
- the component unmounts

```js
const controller = new AbortController();
return () => controller.abort();
```

### 4️⃣ Early Exit for Empty Input

Prevents unnecessary requests and resets UI state.

```js
if (!trimmedQuery) {
  setResults([]);
  setHasSearched(false);
  return;
}
```

### 5️⃣ Safe Async Handling

Async logic is wrapped inside the effect using async/await with try/catch/finally.
