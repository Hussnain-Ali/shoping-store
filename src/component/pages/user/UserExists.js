import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const UserExists = () => {
  return (
    <>
      <div>User Already Exists with this Account</div>
      <Button>
        <Link to={"/login"}>Sign Up</Link>
      </Button>
    </>
  );
};

export default UserExists;
