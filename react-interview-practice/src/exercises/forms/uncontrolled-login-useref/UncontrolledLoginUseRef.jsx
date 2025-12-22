import React, { useRef } from "react";

function UncontrolledLoginUseRef() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Input validation
    if (!email || !password) {
      alert("Please enter your email address and password");
      return;
    }

    console.log({ email, password });
    alert("Form submitted sucessfull, check console");
  }

  return (
    <div>
      <h2>Uncontrolled Form (useRef)</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} placeholder="Email" />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            placeholder="password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UncontrolledLoginUseRef;
