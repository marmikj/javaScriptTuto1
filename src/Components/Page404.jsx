import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <>
      <h1>Page404</h1>
      <h2>This URL Not Present </h2>
      <Link to="/">Go to Home Page </Link>
    </>
  );
}

export default Page404;
