import React, { useEffect, useState } from "react";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";

function DartToLight() {
  const [theme, setTheme] = useState(false);

  const handleClick = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    const root = document.getElementById("root");
    if (theme === false) {
      root.classList.add("home-container");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("home-container");
    }
  });

  // return (
  //   <>
  //     <button onClick={handleClick} className="light-to-dark">
  //       {theme ? (
  //         <MdOutlineLightMode size={30} style={{ color: "white" }} />
  //       ) : (
  //         <MdLightMode size={30} style={{ color: "white" }} />
  //       )}
  //     </button>
  //   </>
  // );
}

export default DartToLight;
