"use client";

import React, { useState } from "react";
import prisma from "../../lib/prisma";
import Resume from "./components/resume";
import Inputs from "./components/resume_form";

export default function Home() {
  const [toggleInputs, setToggleInputs] = useState(true);

  return (
    <div className="m-auto bg-white w-[80vw] h-[90vh] border p-4">
      <button
        className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
        onClick={() => setToggleInputs(!toggleInputs)}
      >
        {toggleInputs ? "Show Resume" : "Show Inputs"}
      </button>

      {toggleInputs ? <Inputs /> : <Resume />}
    </div>
  );
}
