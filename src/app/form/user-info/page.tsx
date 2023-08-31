"use client";

import React from "react";
import Link from "next/link";

type NameAndContactType = {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  address: string;
  phone: string;
}

type UserKey = keyof NameAndContactType

type NameAndContactProps = {
  user: {
    [key in UserKey]: string;
  };
  setUser: React.Dispatch<React.SetStateAction<{ [key in UserKey]: string }>>;
};

const handleSubmit = (e: { preventDefault: () => void }) => {
  e.preventDefault();
  // Logic to handle submission, such as sending data to the server
};

const NameAndContact: React.FC<NameAndContactProps> = ({ user, setUser }) => {
  return (
    <form onSubmit={handleSubmit} className="p-4">
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
                value={user?.[key as UserKey] ?? ""}
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
                value={user?.[key as UserKey] ?? ""}
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
      <button
        type="submit"
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
    </form>
  );
};

export default NameAndContact;
