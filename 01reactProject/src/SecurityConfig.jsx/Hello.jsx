import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Hello() {
  const navigate = useNavigate(); // should be inside the component

  const handleClick = () => {
    navigate("/signup"); // navigate to /dashboard route
  };

  return (
    <>
      <h1>Hola, Nikhil Tiwari</h1>
      <button onClick={handleClick}>
        Click to go to Dashboard
      </button>
    </>
  );
}
