import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Loader } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../firebase/config";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  let text;
  let text1;
  var text2;
  const signUser = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      toast.error = "Passwords must match";
      alert("Passwords must match");
    }

    console.log(username, email, password, confirmpassword);

    setIsLoading(true);

    console.log(text, text2);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("hi");
        const user = userCredential.user;
        toast.success = "Sign Up Successful";
        navigate("/LogIn");
        alert("Sign Up Successful");
        setIsLoading(false);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          alert("Email is already in use");
          text2 = "Email is already in use";
        }
        console.log(error);
        alert("Sign Up Unuccessful");
        toast.error = "Sign Up Unsuccessful";
        setIsLoading(false);
      });
  };
  const notify = () => {
    if (password.length < 6) {
      text1 = "Password has to be at least 6 characters";
    }
    if (password !== confirmpassword) {
      text = "Passwords must match";
    }
  };
  notify();

  return (
    <>
      {
        //<ToastContainer/>//
      }
      {isLoading && <Loader />}
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
              <p className="errormessage">{text2}</p>
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
              {" "}
              Sign Up{" "}
            </button>
          </form>
          <button className="google-log-in form-buttons">
            {" "}
            <FcGoogle /> Login with Google{" "}
          </button>
        </div>
        <h5 className="form_help_text">
          Already have an account? <Link to="/LogIn">Log In</Link>
        </h5>
      </section>
    </>
  );
};

export default SignUp;
