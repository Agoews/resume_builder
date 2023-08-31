"use client";

import React, { useState } from "react";
import Link from "next/link";
import prisma from "../../lib/prisma";

export default function Home() {
  return (
    <div className="m-auto bg-white w-[80vw] h-[90vh] border p-4">
      <Link href="/form" className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded mr-4">
        Show Form
      </Link>
      <Link href="/resume" className="bg-green-400 hover:bg-green-300 text-white font-bold py-2 px-4 rounded">
        Show Resume
      </Link>
    </div>
  );
}
