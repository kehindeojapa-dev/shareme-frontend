// @ts-nocheck
import React from "react";
import { Circles } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Circles color="#e879f9" height={50} width={50} className="m-5" />
      <p className="text-lg text-center px-2 mt-3">{message}</p>
    </div>
  );
};

export default Spinner;
