"use client";

import React, { useState } from "react";
import Link from "next/link";

type NameAndContactType = {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  address: string;
  phone: string;
};

const NameAndContact: React.FC = () => {
  // Initialize local state
  const [user, setUser] = useState<NameAndContactType>({
    name: "",
    email: "",
    linkedin: "",
    github: "",
    website: "",
    address: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for handling the submission can go here
    // For this example, let's log the user data to the console
    console.log("Submitted Data:", user);
  };

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
                value={user[key as keyof NameAndContactType] ?? ""}
                onChange={(e) =>
                  setUser({
                    ...user,
                    [key as keyof NameAndContactType]: e.target.value,
                  })
                }
                placeholder={placeholder as string}
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
                value={user[key as keyof NameAndContactType] ?? ""}
                onChange={(e) =>
                  setUser({
                    ...user,
                    [key as keyof NameAndContactType]: e.target.value,
                  })
                }
                placeholder={placeholder as string}
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
