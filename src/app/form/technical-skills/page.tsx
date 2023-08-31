"use client";

import React from "react";
import Link from "next/link";

type TechnicalSkillsType = {
  frontend: string;
  backend: string;
  testDeploy: string;
  devTools: string;
}

type TechnicalSkillsKey = keyof TechnicalSkillsType

type TechnicalSkillsProps = {
  technicalSkills: TechnicalSkillsType;
  setTechnicalSkills: React.Dispatch<React.SetStateAction<TechnicalSkillsType>>;
};

const handleSubmit = (e: { preventDefault: () => void }) => {
  e.preventDefault();
  // Logic to handle submission, such as sending data to the server
};

const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({
  technicalSkills,
  setTechnicalSkills,
}) => {
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
            key={key as string}
            type="text"
            value={technicalSkills?.[key as TechnicalSkillsKey] ?? ""}
            onChange={(e) =>
              setTechnicalSkills({
                ...technicalSkills,
                [key as TechnicalSkillsKey]: e.target.value,
              })
            }
            placeholder={placeholder as string}
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
