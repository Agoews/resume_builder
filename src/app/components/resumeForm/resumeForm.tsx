// import { SoftwareApp } from "@prisma/client";
import React, { useState } from "react";
import NameAndContact from "./components/nameAndContact";
import TechnicalSkills from "./components/technicalSkills";
import SoftwareApps from "./components/softwareApps";

export default function ResumeForm() {
  const [user, setUser] = useState({
    name: "",
    address: "",
    linkedin: "",
    github: "",
    website: "",
    email: "",
    phone: "",
  });
  const [technicalSkills, setTechnicalSkills] = useState({
    frontend: "",
    backend: "",
    testDeploy: "",
    devTools: "",
  });
  const [softwareApps, setSoftwareApps] = useState<SoftwareAppType[]>([
    {
      name: "",
      technologies: "",
      year: "",
      description: "",
    },
  ]);
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

  const [education, setEducation] = useState<EducationType[]>([
    {
      school: "",
      degree: "",
      year: "",
    },
  ]);

  type SoftwareAppType = {
    name: string;
    technologies: string;
    year: string;
    description: string;
  };

  type SoftwareAppKey = keyof SoftwareAppType;

  type ProfessionalExperienceType = {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  };

  type ProfessionalExperienceKey = keyof ProfessionalExperienceType;

  type EducationType = {
    school: string;
    degree: string;
    year: string;
  };

  type EducationKey = keyof EducationType;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Logic to handle submission, such as sending data to the server
  };

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

  const handleProfessionalExperience = (
    index: number,
    key: ProfessionalExperienceKey,
    value: string
  ) => {
    const newProfessionalExperience = [...professionalExperience];
    newProfessionalExperience[index][key] = value;
    setProfessionalExperience(newProfessionalExperience);
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

  const handleEducationChange = (
    index: number,
    key: EducationKey,
    value: string
  ) => {
    const newEducation = [...education];
    newEducation[index][key] = value;
    setEducation(newEducation);
  };

  const addEducation = () => {
    setEducation([...education, { school: "", degree: "", year: "" }]);
  };

  // type UserKey =
  //   | "name"
  //   | "address"
  //   | "linkedin"
  //   | "github"
  //   | "website"
  //   | "email"
  //   | "phone";
  // type TechnicalSkillsKey = "frontend" | "backend" | "testDeploy" | "devTools";

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <NameAndContact user={user} setUser={setUser} />
      <TechnicalSkills
        technicalSkills={technicalSkills}
        setTechnicalSkills={setTechnicalSkills}
      />
      <SoftwareApps
        softwareApps={softwareApps}
        setSoftwareApps={setSoftwareApps}
        handleSoftwareAppChange={handleSoftwareAppChange}
        addSoftwareApp={addSoftwareApp}
      />
      <div className="mb-6">
        {/* Software Applications */}
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
                placeholder={placeholder}
                className="mb-2 p-2 w-full border rounded"
              />
            ))}
          </div>
        ))}
        <button
          type="button"
          onClick={addSoftwareApp}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add More Software Apps
        </button>
      </div>

      <div className="mb-6">
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
                type={
                  key === "startDate" || key === "endDate" ? "number" : "text"
                }
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add More Experience
        </button>
      </div>
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
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}
