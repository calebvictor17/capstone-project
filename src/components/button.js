import React from "react";

const Button = ({ primaryButton }) => {
  return (
    <>
      {primaryButton ? (
        <button className="btn bg-red-600 text-white px-6 py-2 rounded-full  tracking-wider font-bold mt-4 w-55 h-10 mx-80">Elevate Your Game</button>
      ) : (
        <button className="btn bg-red-400 text-white px-6 py-2 rounded-b-4xl tracking-wider font-bold mt-4 w-55 h-10 mx-80">Learn More</button>
      )}
    </>
  );
};

export default Button;
