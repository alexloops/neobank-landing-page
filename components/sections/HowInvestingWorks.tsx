import React from "react";
import { FaMoneyBillAlt, FaUserEdit } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdShare } from "react-icons/md";
import { FiPercent } from "react-icons/fi";

export default function HowInvestingWorks() {
  return (
    <section className="relative py-28 px-6 sm:px-12 md:px-20 bg-white">
      <img
        src="/p2p.png"
        className="absolute w-[80px] right-8 sm:right-16 md:right-24 top-6 sm:top-12 md:top-20"
        alt="p2p investing"
      />
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        <span className="text-lg self-center mb-8 border border-brand-light text-gray-700 rounded-full p-2">
          <MdShare />
        </span>
        {/* Title */}
        <span className="mt-1 mb-20 block text-3xl text-center tracking-tight font-soleil-bold text-brand-dark sm:text-4xl">
          How Investing with Neo works
        </span>
        {/* Grid Part */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
          {/* Item 1 */}
          <div className="col-span-1 flex flex-col md:flex-row items-center md:items-start">
            <span className="text-xl mb-3 self-center border border-brand-light text-gray-700 rounded-full p-3 md:mr-7">
              <FaUserEdit />
            </span>
            <div className="max-w-[300px]">
              <div className="text-brand-dark font-soleil-bold mb-1 w-full text-center sm:text-left">
                1. Sign up to the platform
              </div>
              <p className="text-zinc-500 text-sm text-center sm:text-left">
                Complete your registration in our website and check which
                companies are raising at moment.
              </p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="col-span-1 flex flex-col md:flex-row items-center md:items-start">
            <span className="text-xl mb-3 self-center border border-brand-light text-gray-700 rounded-full p-3 md:mr-7">
              <FaMoneyBillAlt />
            </span>
            <div className="max-w-[300px]">
              <div className="text-brand-dark font-soleil-bold mb-1 w-full text-center sm:text-left">
                2. Enter an investiment round
              </div>
              <p className="text-zinc-500 text-sm text-center sm:text-left">
                Complete your registration in our website and check which
                companies are raising at moment.
              </p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="col-span-1 flex flex-col md:flex-row items-center md:items-start">
            <span className="text-xl mb-3 self-center border border-brand-light text-gray-700 rounded-full p-3 md:mr-7">
              <GiReceiveMoney />
            </span>
            <div className="max-w-[300px]">
              <div className="text-brand-dark font-soleil-bold mb-1 w-full text-center sm:text-left">
                3. Companies get the funding
              </div>
              <p className="text-zinc-500 text-sm text-center sm:text-left">
                Complete your registration in our website and check which
                companies are raising at moment.
              </p>
            </div>
          </div>
          {/* Item 4 */}
          <div className="col-span-1 flex flex-col md:flex-row items-center md:items-start">
            <span className="text-xl mb-3 self-center border border-brand-light text-gray-700 rounded-full p-3 md:mr-7">
              <FiPercent />
            </span>
            <div className="max-w-[300px]">
              <div className="text-brand-dark font-soleil-bold mb-1 w-full text-center sm:text-left">
                4. Sign up in the platform
              </div>
              <p className="text-zinc-500 text-sm text-center sm:text-left">
                Complete your registration in our website and check which
                companies are raising at moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
