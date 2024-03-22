"use client";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState("");

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-24">
      <h1 className="text-9xl font-bold text-center mt-4">Whatsapp Go</h1>
      <input
        className="border border-gray-400 p-2 text-center text-9xl mt-4 text-black rounded-lg"
        type="text"
        placeholder="type the number eg: 5519991238787"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <a
        className="bg-green-500 text-white p-2 rounded mt-2 block w-96 h-24 text-center text-5xl flex items-center justify-center"
        href={`https://api.whatsapp.com/send?phone=${number}`}
      >
        Send Message
      </a>
    </div>
  );
}
