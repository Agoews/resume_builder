"use client";

import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";

const Education: React.FC = () => {
  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      year: "",
    },
  ]);

  type EducationType = {
    school: string;
    degree: string;
    year: string;
  };

  type EducationKey = keyof EducationType;

  // Handle changes in the education fields
  const handleEducationChange = (
    index: number,
    key: EducationKey,
    value: string
  ) => {
    const newEducation = [...education];
    newEducation[index][key] = value;
    setEducation(newEducation);
  };

  // Add new education field
  const addEducation = () => {
    setEducation([...education, { school: "", degree: "", year: "" }]);
  };

  // Submit education data to Postgres DB
  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/saveEducation", { education });
      console.log("Data saved:", response.data);
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">Education & Certificates</h3>
      {/* Education & Certificates */}
      {education.map((edu, index) => (
        <div key={index} className="mb-2">
          {[
            ["school", "School"],
            ["degree", "Degree/Certificate"],
            ["year", "Graduation Year"],
          ].map(([key, placeholder]) => (
            <input
              key={key}
              type="text"
              value={edu[key as EducationKey] ?? ""}
              onChange={(e) =>
                handleEducationChange(
                  index,
                  key as EducationKey,
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
        onClick={addEducation}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mr-2"
      >
        Add More Education
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

export default Education;
