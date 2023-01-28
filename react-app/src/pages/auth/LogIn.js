import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Popup from "reactjs-popup";
import { toast } from "react-toastify";
import 'reactjs-popup/dist/index.css';
import "../../firebase/config";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function success(){
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>Sign Up Successful</div>
    </Popup>
  }
  function noSuccess(){
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>Sign Up Unuccessful</div>
    </Popup>
  }

  const logUser = (e) => {
    e.preventDefault();
    console.log(email, password);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Log In Successful");
        navigate("/Success");
        success();
      })
      .catch((error) => {
        alert("Log In Unuccessful");
        toast.error = "Log In Unsuccessful";
        noSuccess();
      });
  };

  const provider = new GoogleAuthProvider();
  const signInWGoogle = () => {
    
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        toast.success("Login Successful");
        navigate("/Success");
        success();
      })
      .catch((error) => {
        toast.error("Log In Unsuccesful");
        noSuccess();
      });
    
  };
  
  return (
    <section className="log-in-container form-buttons">
      <div>
        <h3>Log in to your account</h3>

        <form className=".login-signup-container" onSubmit={logUser}>
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
          <div className="authdiv">
            <label for="Password" className="auth-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
            />
          </div>

          <button type="submit" className="loginbutton">
            {" "}
            Log in{" "}
          </button>
          <div>
            <h5 className="form_help_text">
              Forgot your Password? <Link to="/Reset">Reset Password </Link>
            </h5>
          </div>
        </form>
        <button className="google-log-in form-buttons" onClick={signInWGoogle}><FcGoogle /> Login with Google </button>
      </div>

      <h5 className="form_help_text">
        New to Weather App? <Link to="/SignUp">Sign Up</Link>
      </h5>
    </section>
  );
};

export default LogIn;
