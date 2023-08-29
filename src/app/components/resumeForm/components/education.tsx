import React from "react";
import { EducationKey, EducationType } from "./types";

type EducationProps = {
  education: EducationType[];
  handleEducationChange: (
    index: number,
    key: EducationKey,
    value: string
  ) => void;
  addEducation: () => void;
};

const Education: React.FC<EducationProps> = ({
  education,
  handleEducationChange,
  addEducation,
}) => {
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
              value={edu[key as EducationKey]}
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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add More Education
      </button>
    </div>
  );
};

export default Education;
