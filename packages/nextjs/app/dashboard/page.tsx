import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "SEAL",
  description: "Hire a trusted Freelancer",
});

const Debug: NextPage = () => {
  return (
    <>
      {" "}
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">All the transection will be shown here</h1>
        <p className="text-neutral">all invoices will be shown here if you are alloted the project it will be here</p>
      </div>
    </>
  );
};

export default Debug;
