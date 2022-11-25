import React, { useEffect, useState } from "react";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";

function DartToLight() {
  const [theme, setTheme] = useState(false);

  const handleClick = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("dark");
      document.body.classList.remove("home-container");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("home-container");
    }
  });

  return (
    <button onClick={handleClick} className="light-to-dark">
      {theme ? <MdOutlineLightMode size={30} /> : <MdLightMode size={30} />}
    </button>
  );
}

export default DartToLight;
