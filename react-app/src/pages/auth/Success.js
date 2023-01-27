import React from "react";
import weathertest from "../../assets/weather-test.gif";
import { useNavigate } from "react-router-dom";
import "../../firebase/config";
import { getAuth, signOut } from "firebase/auth";

const Success = () => {
  const navigate = useNavigate();

  const userOuth = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/LogIn");
        alert("Log Out Successful");
        console.log("here");
      })
      .catch((error) => {
        console.log("here");
        alert("Log Out Unuccessful");
      });
  };

  return (
    <section className="success">
      <div>
        <h1> Success! </h1>
        <img
          className="imgsuccess"
          src={weathertest}
          alt="gif of the sun and clouds"
        />
      </div>
      <button onClick={userOuth} className="loginbutton">
        {" "}
        Log Out{" "}
      </button>
    </section>
  );
};

export default Success;
