import React from "react";
import { RiLuggageDepositFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOndemandVideo } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";

export default function Feature() {
  return (
    <div className="pt-20 pb-8 flex justify-center items-center gap-8 md:gap-10 flex-wrap px-2">
      <div className={`stats shadow bg-orange-300 max-w-[300px]`}>
        <div className="stat flex items-center gap-5">
          <div className="text-4xl">
            <MdOndemandVideo />
          </div>
          <div>
            <div className="stat-value text-2xl">Extra Class</div>
            <div className="text-xs">
              We Provide Extra class support for everyone
            </div>
          </div>
        </div>
      </div>

      <div className={`stats shadow bg-sky-300 max-w-[300px]`}>
        <div className="stat flex items-center gap-5">
          <div className="text-4xl">
            <GiReceiveMoney />
          </div>
          <div>
            <div className="stat-value text-2xl">Money Back</div>
            <div className="text-xs">
              We Provide Money Back Guarantee student who enrolls
            </div>
          </div>
        </div>
      </div>

      <div className={`stats shadow bg-indigo-300 max-w-[300px]`}>
        <div className="stat flex items-center gap-5">
          <div className="text-4xl">
            <GrCertificate />
          </div>
          <div>
            <div className="stat-value text-2xl"> Certificate</div>
            <div className="text-xs">
              We Provide Completion Certificate student who enrolls
            </div>
          </div>
        </div>
      </div>

      <div className={`stats shadow bg-rose-300 max-w-[300px]`}>
        <div className="stat flex items-center gap-5">
          <div className="text-4xl">
            <RiLuggageDepositFill />
          </div>
          <div>
            <div className="stat-value text-2xl">Job Support</div>
            <div className="text-xs">
              We Provide Job support for student who enrolls
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
