## Uncontrolled Login Form with useRef

**Concept:** Uncontrolled component (DOM is the source of truth)

### Key points

- Inputs are accessed via `ref.current.value` on submit
- No re-renders on typing
- Useful for simple forms or when integrating with non-React code
