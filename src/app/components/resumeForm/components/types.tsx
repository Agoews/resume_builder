// User-related keys and type
export type UserKey = 'name' | 'address' | 'linkedin' | 'github' | 'website' | 'email' | 'phone';
export type UserType = {
  [key in UserKey]: string;
};

// Technical Skills-related keys and type
export type TechnicalSkillsKey = 'frontend' | 'backend' | 'testDeploy' | 'devTools';
export type TechnicalSkillsType = {
  [key in TechnicalSkillsKey]: string;
};

// Software Applications-related keys and type
export type SoftwareAppKey = 'name' | 'technologies' | 'year' | 'description';
export type SoftwareAppType = {
  [key in SoftwareAppKey]: string;
};

// Professional Experience-related keys and type
export type ProfessionalExperienceKey = 'position' | 'company' | 'startDate' | 'endDate' | 'description';
export type ProfessionalExperienceType = {
  [key in ProfessionalExperienceKey]: string;
};

// Education-related keys and type
export type EducationKey = 'school' | 'degree' | 'year';
export type EducationType = {
  [key in EducationKey]: string;
};
