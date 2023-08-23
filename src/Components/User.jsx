import React from "react";
import { useLocation, useParams } from "react-router-dom";

function User() {
  const location =useLocation()
  console.warn(location)
  const param = useParams();
  const { name } = param;
  console.warn(name);
  return (
    <>
      <h1>{name}'s page</h1>
    </>
  );
}

export default User;
