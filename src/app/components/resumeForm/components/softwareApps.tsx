import React from 'react';

type SoftwareAppsProps = {
  softwareApps: SoftwareAppType[];
  setSoftwareApps: React.Dispatch<React.SetStateAction<SoftwareAppType[]>>;
  handleSoftwareAppChange: (index: number, key: SoftwareAppKey, value: string) => void;
  addSoftwareApp: () => void;
};

type SoftwareAppType = {
  name: string;
  technologies: string;
  year: string;
  description: string;
};

type SoftwareAppKey = keyof SoftwareAppType;

const SoftwareApps: React.FC<SoftwareAppsProps> = ({ softwareApps, setSoftwareApps, handleSoftwareAppChange, addSoftwareApp }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">Software Applications</h3>
      {softwareApps.map((softwareApp, index) => (
        <div key={index} className="mb-2">
          {[
            ["name", "Software Name"],
            ["technologies", "Technologies"],
            ["year", "Year"],
            ["description", "Description"]
          ].map(([key, placeholder]) => (
            <input
              key={key}
              type={key === "year" ? "number" : "text"}
              value={softwareApp[key as SoftwareAppKey]}
              onChange={(e) => handleSoftwareAppChange(index, key as SoftwareAppKey, e.target.value)}
              placeholder={placeholder as string}
              className="mb-2 p-2 w-full border rounded"
            />
          ))}
        </div>
      ))}
      <button type="button" onClick={addSoftwareApp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add More Software Apps
      </button>
    </div>
  );
};

export default SoftwareApps;
