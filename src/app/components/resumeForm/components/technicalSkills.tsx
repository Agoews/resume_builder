import React from 'react';
import { TechnicalSkillsType, TechnicalSkillsKey } from './types';  // Importing types from the 'types.ts' file

type TechnicalSkillsProps = {
  technicalSkills: TechnicalSkillsType;
  setTechnicalSkills: React.Dispatch<React.SetStateAction<TechnicalSkillsType>>;
};

const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ technicalSkills, setTechnicalSkills }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">Technical Skills</h3>
      {[
        ['frontend', 'Frontend Skills'],
        ['backend', 'Backend Skills'],
        ['testDeploy', 'Test & Deployment Tools'],
        ['devTools', 'Dev Tools']
      ].map(([key, placeholder]) => (
        <input
          key={key as string}
          type="text"
          value={technicalSkills[key as TechnicalSkillsKey]}
          onChange={(e) => setTechnicalSkills({ ...technicalSkills, [key as TechnicalSkillsKey]: e.target.value })}
          placeholder={placeholder as string}
          className="mb-2 p-2 w-full border rounded"
        />
      ))}
    </div>
  );
};

export default TechnicalSkills;
