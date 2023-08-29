// import { SoftwareApp } from "@prisma/client";
import React, { useState } from "react";
import NameAndContact from "./components/nameAndContact";
import TechnicalSkills from "./components/technicalSkills";
import SoftwareApps from "./components/softwareApps";
import Education from "./components/education";
import ProfessionalExperience from "./components/professionalExperience";

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
      <ProfessionalExperience
        professionalExperience={professionalExperience}
        handleProfessionalExperience={handleProfessionalExperience}
        addProfessionalExperience={addProfessionalExperience}
      />

      <Education
        education={education}
        handleEducationChange={handleEducationChange}
        addEducation={addEducation}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}
