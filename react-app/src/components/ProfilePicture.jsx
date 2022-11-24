import React from "react";
import { Avatar } from "antd";
import { useAuthContext } from "../utilities/AuthContext";

const ProfilePicture = () => {
  const { user } = useAuthContext();
  return (
    <div className="signup-login-buttons">
      {user ? (
        <>
          <Avatar
            size={100}
            style={{
              backgroundColor: "black",
              color: "white",
              backgroundImage: `url(https://res.cloudinary.com/dembmmjyq/image/upload/v1669288623/icon_scrxpk.png)`,
              backgroundSize: "90px 90px",
              backgroundRepeat: "no-repeat",
            }}
          >
            {user.username}
          </Avatar>
        </>
      ) : (
        <>
          <Avatar
            size={100}
            src="https://res.cloudinary.com/dembmmjyq/image/upload/v1669289115/3721881_pwgyie.png"
          >
            USER
          </Avatar>
        </>
      )}
    </div>
  );
};

export default ProfilePicture;
