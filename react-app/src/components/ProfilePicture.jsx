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
            size={108}
            style={{
              backgroundColor: "transparent",
              color: "white",
              backgroundImage: `url(https://res.cloudinary.com/dembmmjyq/image/upload/v1669323108/icon_zt0qm6.png)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {user.username}
          </Avatar>
        </>
      ) : (
        <>
          <Avatar
            size={108}
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
