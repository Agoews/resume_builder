import React from "react";
import { ProfessionalExperienceType, ProfessionalExperienceKey } from "./types";

type ProfessionalProps = {
  professionalExperience: ProfessionalExperienceType[];
  handleProfessionalExperience: (
    index: number,
    key: ProfessionalExperienceKey,
    value: string
  ) => void;
  addProfessionalExperience: () => void;
};

const ProfessionalExperience: React.FC<ProfessionalProps> = ({
  professionalExperience,
  handleProfessionalExperience,
  addProfessionalExperience,
}) => {
  return <div className="mb-6">
    <h3 className="text-xl font-bold mb-2">
      Non Software Professional Experience
    </h3>
    {/* Non Software Professional Experience */}
    {professionalExperience.map((experience, index) => (
      <div key={index} className="mb-2">
        {[
          ["position", "Position"],
          ["company", "Company Name"],
          ["startDate", "Start Date"],
          ["endDate", "End Date"],
          ["description", "Description"],
        ].map(([key, placeholder]) => (
          <input
            key={key}
            type={key === "startDate" || key === "endDate" ? "number" : "text"}
            value={experience[key as ProfessionalExperienceKey]}
            onChange={(e) => handleProfessionalExperience(
              index,
              key as ProfessionalExperienceKey,
              e.target.value
            )}
            placeholder={placeholder}
            className="mb-2 p-2 w-full border rounded" />
        ))}
      </div>
    ))}
    <button
      type="button"
      onClick={addProfessionalExperience}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add More Experience
    </button>
  </div>;
};

export default ProfessionalExperience;
