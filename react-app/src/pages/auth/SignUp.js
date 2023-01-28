import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { /*ToastContainer,*/ toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../firebase/config";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const navigate = useNavigate();
  let text;
  let text1;
  const signUser = (e) => {
    e.preventDefault();
    
    console.log(username, email, password, confirmpassword);

    function text2() {
      window.value= "Email is already in use"
    };
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
  
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        success();
        toast.success = "Sign Up Successful";
        navigate("/LogIn");
        alert("Sign Up Successful");
      })
      .catch((error) => {
        var errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          text2();
        }

        noSuccess();
        alert("Sign Up Unuccessful");
        toast.error = "Sign Up Unsuccessful";
      });
      console.log(window.value);

  };
  const notify = () => {
    if (password.length < 6) {
      text1 = "Use at least 6 characters";
    }
    if (password !== confirmpassword) {
      text = "Passwords must match";
    }
  };
  notify();

  return (
    <>
    
      <section className="log-in-container form-buttons">
        <div>
          <h3>Create an account</h3>

          <form className="login-signup-container" onSubmit={signUser}>
            <div className="authdiv">
              <label for="Username" className="auth-label">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="auth-input"
              />
            </div>
            

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
              <p className="errormessage">{window.value}</p>
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
              <p className="errormessage"> {text1} </p>
            </div>
            <div className="authdiv">
              <label for="Confirm Password" className="auth-label">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
                className="auth-input"
              />
              <p className="errormessage"> {text} </p>
            </div>

            <button type="submit" className="loginbutton">
              Sign Up
            </button>
          </form>
          <button className="google-log-in form-buttons">
            <FcGoogle /> Login with Google</button>
        </div>
        <h5 className="form_help_text">
          Already have an account? <Link to="/LogIn">Log In</Link>
        </h5>
      </section>
    </>
  );
};

export default SignUp;
