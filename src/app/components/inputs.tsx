import React, { useState } from "react";

export default function Inputs() {
  const [nameFirst, setNameFirst] = useState("");
  const [nameLast, setNameLast] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nameFirst"
          >
            First Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="text"
            id="nameFirst"
            value={nameFirst}
            onChange={(e) => setNameFirst(e.target.value)}
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nameLast"
          >
            Last Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="text"
            id="nameLast"
            value={nameLast}
            onChange={(e) => setNameLast(e.target.value)}
          />
        </div>
      </div>

      <label
        className="block text-gray-700 text-sm font-bold mb-2 mt-4"
        htmlFor="address"
      >
        Address:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <label
        className="block text-gray-700 text-sm font-bold mb-2 mt-4"
        htmlFor="phone-number"
      >
        Phone Number:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        type="tel"
        id="phone-number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </div>
  );
}
