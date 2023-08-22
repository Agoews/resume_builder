"use client"

import React, { useState } from 'react'
import Resume from "./components/resume";
import Inputs from "./components/inputs";

export default function Home() {
  const [toggleInputs, setToggleInputs] = useState(true)

  return (
    <div >
      <button onClick={() => setToggleInputs(!toggleInputs)}>
        {toggleInputs ? 'Show Resume' : 'Show Inputs'}
      </button>
      {toggleInputs ? <Inputs /> : <Resume />}
    </div>
  );
}
