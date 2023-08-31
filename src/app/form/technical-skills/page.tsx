"use client"

import React, { useState } from "react";
import Link from "next/link";

const TechnicalSkills: React.FC = () => {
  // Manage state locally
  const [technicalSkills, setTechnicalSkills] = useState({
    frontend: "",
    backend: "",
    testDeploy: "",
    devTools: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle submission, such as sending data to the server
  };

  const handleChange = (key: string, value: string) => {
    setTechnicalSkills({
      ...technicalSkills,
      [key]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Technical Skills</h3>
        {[
          ["frontend", "Frontend Skills"],
          ["backend", "Backend Skills"],
          ["testDeploy", "Test & Deployment Tools"],
          ["devTools", "Dev Tools"],
        ].map(([key, placeholder]) => (
          <input
            key={key}
            type="text"
            value={technicalSkills[key as keyof typeof technicalSkills] || ""}
            onChange={(e) => handleChange(key, e.target.value)}
            placeholder={placeholder}
            className="mb-2 p-2 w-full border rounded"
          />
        ))}
      </div>
      <button
        type="submit"
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
    </form>
  );
};

export default TechnicalSkills;
