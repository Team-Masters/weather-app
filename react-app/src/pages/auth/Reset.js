import React from "react";
import {useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Reset = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const passwordReset = (e) => {
    e.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password Reset Successful");
        navigate("/Login");
      })
      .catch((error) => {
        alert("Reset Unuccessful");
      });
  };

  return (
    <section className="log-in-container form-buttons">
      <div>
        <h3>Reset Password</h3>

        <form className=".login-signup-container">
          <div className="authdiv">
            <label for="Email" className="auth-label">
              Email
            </label>
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
            />
          </div>
          <button onClick={passwordReset} className="loginbutton">
            {" "}
            Reset{" "}
          </button>
          <div></div>
        </form>
      </div>
    </section>
  );
};

export default Reset;
