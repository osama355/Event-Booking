import { Route, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Booking from "../pages/Booking";

function PrivateBook() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if(!user){
        navigate("/login");
    }
  }, [navigate,user]);

  return user ? <Booking /> : null;
}

export default PrivateBook;
