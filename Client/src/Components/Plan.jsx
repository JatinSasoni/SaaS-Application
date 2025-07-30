import { PricingTable } from "@clerk/clerk-react";
const Plan = ({ pricingRef }) => {
  return (
    <div
      className="max-w-2xl mx-auto z-20 max-sm:my-10 sm:my-24"
      ref={pricingRef}
    >
      <div className="text-center">
        <h2 className="text-slate-700 max-sm:text-[30px] text-[42px] font-semibold">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Start for free and scale up as you grow. Find the perfect plan for
          your content creation needs
        </p>
      </div>

      <div className="mt-14 max-sm:mx-8">
        <PricingTable />
      </div>
    </div>
  );
};

export default Plan;
