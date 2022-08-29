import { classNames } from "lib/classNames";
import Link from "next/link";
import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";

export default function SimulateLoan() {
  return (
    <section>
      {/* First Part (with gradient) */}
      <div className="flex flex-col justify-between items-center pt-24 w-full min-h-[540px] bg-gradient-to-br from-brand-light to-brand-dark">
        <div>~placeholder~</div>
        <p
          className={classNames(
            "text-[32px] 2xs:text-[40px] xs:text-[54px] sm:text-[72px] md:text-[87px] lg:text-[118px]",
            "-mb-4 2xs:-mb-5 xs:-mb-8 sm:-mb-10 md:-mb-12  lg:-mb-16",
            "bg-clip-text bg-gradient-to-b from-white to-transparent",
            "font-soleil-bold text-transparent overflow-hidden whitespace-nowrap"
          )}
        >
          Neo Digital Wallet
        </p>
      </div>
      {/* Second part (with app ) */}
      <div className="relative">
        {" "}
        <img
          src="/simulate-app.png"
          className={classNames(
            "absolute left-1/2 -translate-x-1/2",
            "ml-9 -mt-2",
            "w-[210px] sm:w-[33%] max-w-[380px]"
          )}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto border-b px-6 pb-20 lg:pb-32">
          {/* Explanation 1 */}
          <div className="col-span-1 pt-[300px] sm:pt-20 flex flex-col items-center lg:items-start">
            <span className="text-xl mb-8 self-center border border-brand-light text-gray-700 rounded-full p-3 md:mr-7">
              <FaMoneyBillAlt />
            </span>
            <span className="font-soleil-bold text-brand-dark sm:text-4xl mb-4 text-center lg:text-left">
              Internet Banking <span className="inline-block">& App</span>
            </span>
            <p className="text-zinc-500 max-w-[250px] sm:max-w-none text-sm mb-8 text-center lg:text-left">
              Complete your registration in our website and check which
              companies are raising at moment. Complete your registration in our
              website and check which companies are raising at moment.
            </p>
            <Link href="/">
              <a className="text-brand-dark flex items-center underline font-soleil-bold">
                <HiOutlineLightningBolt className="mr-2 text-xl text-brand-light" />{" "}
                Request Loan
              </a>
            </Link>
          </div>
          {/* Empty grid item, to give space to the phone */}
          <div className="col-span-1 h-5" />
          {/* Explanation 2   */}
          <div className="col-span-1 pt-20">
            <div className="space-y-8 flex flex-col items-center">
              {/* First item */}
              <div
                className={classNames(
                  "flex flex-col sm:flex-row items-center sm:items-start",
                  "border-b-neutral-300 border-b pb-8 border-opacity-30"
                )}
              >
                <span className="text-cyan-500 text-2xl sm:mr-5 mb-3 sm:mb-0">
                  <FaMoneyBillAlt />
                </span>
                <div>
                  <div className="text-brand-dark font-soleil-bold mb-1 w-full text-center sm:text-left">
                    Internet Banking & App
                  </div>
                  <p className="text-zinc-500 text-sm text-center sm:text-left">
                    Multiples ways of accessing to suit your needs
                  </p>
                </div>
              </div>
              {/* Second item */}
              <div
                className={classNames(
                  "flex flex-col sm:flex-row items-center sm:items-start",
                  "border-b-neutral-300 border-b pb-8 border-opacity-30"
                )}
              >
                <span className="text-cyan-500 text-2xl sm:mr-5 mb-3 sm:mb-0">
                  <FaMoneyBillAlt />
                </span>
                <div>
                  <div className="text-brand-dark font-soleil-bold mb-1 w-full text-center sm:text-left">
                    Internet Banking & App
                  </div>
                  <p className="text-zinc-500 text-sm text-center sm:text-left">
                    Multiples ways of accessing to suit your needs
                  </p>
                </div>
              </div>
              {/* Third item */}
              <div
                className={classNames(
                  "flex flex-col sm:flex-row items-center sm:items-start"
                )}
              >
                <span className="text-cyan-500 text-2xl sm:mr-5 mb-3 sm:mb-0">
                  <FaMoneyBillAlt />
                </span>
                <div>
                  <div className="text-brand-dark font-soleil-bold mb-1 w-full text-center sm:text-left">
                    Internet Banking & App
                  </div>
                  <p className="text-zinc-500 text-sm text-center sm:text-left">
                    Multiples ways of accessing to suit your needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
