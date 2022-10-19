import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
function ButtonLogin() {
  const ctx = useContext(UserContext);
  console.log(ctx);
  const { user, setUser } = ctx;
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Button
        className="buttonlogin"
        variant="contained"
        onClick={() => {
          if (user.loggedIn) return;

          setUser({ loggedIn: true });

          if (location.state?.from) {
            navigate(location.state.from);
          }
          console.log("true", user);
        }}
      >
        Log In
      </Button>
      <Button
        className="buttonlogin"
        variant="contained"
        onClick={() => {
          if (!user.loggedIn) return;

          setUser({ loggedIn: false });
          console.log("true", user);
        }}
      >
        Log out
      </Button>
    </>
  );
}

export default ButtonLogin;
