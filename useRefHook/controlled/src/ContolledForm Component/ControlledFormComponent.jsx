import React, { useRef } from "react";

function ControlledFormComponent() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function HandleSubmit(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email);
    console.log(password);

    if (!email || !password) {
      alert("Please your E-Mail address and Password");
      return;
    }

    alert("Form submitted sucessfully.");
  }

  return (
    <div>
      <h2>Controlled Form Component</h2>

      <form onSubmit={HandleSubmit}>
        <label type="email">E-Mail Address</label>
        <input type="email" ref={emailRef} placeholder="Email address" />

        <label type="password">Password</label>
        <input type="text" ref={passwordRef} placeholder="Email address" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default ControlledFormComponent;
