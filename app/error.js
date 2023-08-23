"use client";

const Error = (error, reset) => {
  return (
    <div>
      {error.message} <button onClick={() => reset}>Try Again!</button>
    </div>
  );
};

export default Error;
