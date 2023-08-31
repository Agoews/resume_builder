"use client";

import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";

type ProfessionalExperienceType = {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

type ProfessionalExperienceKey = keyof ProfessionalExperienceType;

const ProfessionalExperience: React.FC = () => {
  const [professionalExperience, setProfessionalExperience] = useState<
    ProfessionalExperienceType[]
  >([
    {
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleProfessionalExperience = (
    index: number,
    key: ProfessionalExperienceKey,
    value: string
  ) => {
    const newExperience = [...professionalExperience];
    newExperience[index][key] = value;
    setProfessionalExperience(newExperience);
  };

  const addProfessionalExperience = () => {
    setProfessionalExperience([
      ...professionalExperience,
      {
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/saveProfessionalExperience", {
        professionalExperience,
      });
      console.log("Data saved:", response.data);
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">
        Non Software Professional Experience
      </h3>
      {professionalExperience.map((experience, index) => (
        <div key={index} className="mb-2">
          {[
            ["position", "Position"],
            ["company", "Company"],
            ["startDate", "Start Date"],
            ["endDate", "End Date"],
            ["description", "Description"],
          ].map(([key, placeholder]) => (
            <input
              key={key}
              type={key === "startDate" || key === "endDate" ? "date" : "text"}
              value={experience[key as ProfessionalExperienceKey]}
              onChange={(e) =>
                handleProfessionalExperience(
                  index,
                  key as ProfessionalExperienceKey,
                  e.target.value
                )
              }
              placeholder={placeholder}
              className="mb-2 p-2 w-full border rounded"
            />
          ))}
        </div>
      ))}
      <button
        type="button"
        onClick={addProfessionalExperience}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mr-2"
      >
        Add More Experience
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

export default ProfessionalExperience;
