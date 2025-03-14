import React from "react";
import Button from "./button";

const Matches = () => {
  return (
    <>
      <section className="bg-gray-200 py-12">
        <div className="items-center flex justify-center gap-12 mt-6 mx-auto">
          <div className="text-gray-900 bg-white shadow-lg w-95 h-50 mt-15">
            <div className="flex justify-center items-center w-20 mx-40 bg-red-500 text-white">
              <p>CUP</p>
            </div>
          </div>

          <div className="text-gray-900 bg-white w-95 h-50 mt-15">
            <div className="flex justify-center items-center w-20 mx-40 bg-red-500 text-white">
              <p>CUP</p>
            </div>
          </div>
          <div className="text-gray-900 bg-white w-95 h-50 mt-15">
            <div className="flex justify-center items-center w-20 mx-40 bg-red-500 text-white">
              <p>CUP</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-12">
          <Button />
        </div>
      </section>
    </>
  );
};

export default Matches;
