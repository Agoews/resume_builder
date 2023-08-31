"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

type SoftwareAppType = {
  name: string;
  technologies: string;
  year: string;
  description: string;
};

type SoftwareAppKey = keyof SoftwareAppType;

const SoftwareApps: React.FC = () => {
  const [softwareApps, setSoftwareApps] = useState<SoftwareAppType[]>([
    { name: "", technologies: "", year: "", description: "" },
  ]);

  const handleSoftwareAppChange = (
    index: number,
    key: SoftwareAppKey,
    value: string
  ) => {
    const newSoftwareApps = [...softwareApps];
    newSoftwareApps[index][key] = value;
    setSoftwareApps(newSoftwareApps);
  };

  const addSoftwareApp = () => {
    setSoftwareApps([
      ...softwareApps,
      { name: "", technologies: "", year: "", description: "" },
    ]);
  };

  const handleSubmit = async () => {
    try {
      // Replace with your API endpoint
      await axios.post("/api/softwareApps", { softwareApps });
      alert("Successfully submitted");
    } catch (error) {
      alert("Error submitting data");
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">Software Applications</h3>
      {softwareApps.map((softwareApp, index) => (
        <div key={index} className="mb-2">
          {[
            ["name", "Software Name"],
            ["technologies", "Technologies"],
            ["year", "Year"],
            ["description", "Description"],
          ].map(([key, placeholder]) => (
            <input
              key={key}
              type={key === "year" ? "number" : "text"}
              value={softwareApp[key as SoftwareAppKey]}
              onChange={(e) =>
                handleSoftwareAppChange(
                  index,
                  key as SoftwareAppKey,
                  e.target.value
                )
              }
              placeholder={placeholder as string}
              className="mb-2 p-2 w-full border rounded"
            />
          ))}
        </div>
      ))}
      <button
        type="button"
        onClick={addSoftwareApp}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mr-2"
      >
        Add More Software Apps
      </button>
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 mr-2"
      >
        Submit
      </button>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mr-2"
      >
        <Link href="/form">Back to Form</Link>
      </button>
    </div>
  );
};

export default SoftwareApps;
