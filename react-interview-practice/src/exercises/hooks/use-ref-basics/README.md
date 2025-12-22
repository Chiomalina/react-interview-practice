## useRef Basics

### Focus Input
- Demonstrates accessing DOM elements using `useRef`
- Uses imperative DOM methods without re-rendering

### Render Counter
- Tracks number of component renders
- Shows that updating `ref.current` does NOT trigger a re-render

### Takeaway
`useRef` is useful for DOM access and mutable values that should persist across renders without affecting UI updates.
