"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";



  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">SEAL</span>
          </h1>
          <p className="text-center text-lg">
            <span className="block mb-2">Can add a register as a freelancer button here.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
