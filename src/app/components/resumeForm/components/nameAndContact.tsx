import React from 'react';
import { UserKey } from './types';

type NameAndContactProps = {
  user: {
    [key in UserKey]: string;
  };
  setUser: React.Dispatch<React.SetStateAction<{ [key in UserKey]: string }>>;
};

const NameAndContact: React.FC<NameAndContactProps> = ({ user, setUser }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">Name and Contact Information</h3>
      <div className="flex flex-wrap">
        {/* First Column */}
        <div className="w-1/2">
          {[
            ["name", "Name"],
            ["email", "Email"],
            ["linkedin", "LinkedIn"],
            ["website", "Other Website"],
          ].map(([key, placeholder]) => (
            <input
              key={key}
              type="text"
              value={user[key as UserKey]}
              onChange={(e) =>
                setUser({ ...user, [key as UserKey]: e.target.value })
              }
              placeholder={placeholder}
              className="mb-2 p-2 w-full border rounded"
            />
          ))}
        </div>

        {/* Second Column */}
        <div className="w-1/2 pl-4">
          {[
            ["address", "Address"],
            ["phone", "Phone #"],
            ["github", "GitHub"],
          ].map(([key, placeholder]) => (
            <input
              key={key}
              type="text"
              value={user[key as UserKey]}
              onChange={(e) =>
                setUser({ ...user, [key as UserKey]: e.target.value })
              }
              placeholder={placeholder}
              className="mb-2 p-2 w-full border rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NameAndContact;
