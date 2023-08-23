"use client";

import { useEffect } from "react";

const Error = (error, reset) => {
  useEffect(() => {
    console.log(error.message);
  }, [error]);

  return (
    <div>
      {error.message} <button onClick={() => reset}>Try Again!</button>
    </div>
  );
};

export default Error;
