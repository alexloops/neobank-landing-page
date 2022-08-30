import { classNames } from "lib/classNames";
import Link from "next/link";
import React, { useState } from "react";
import { BiReceipt } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { MdOutlineDashboard, MdOutlinePhonelink } from "react-icons/md";
import * as Slider from "@radix-ui/react-slider";
var Finance = require("tvm-financejs");

export default function DigitalWallet({ page }: { page: string }) {
  return (
    <section>
      {/* First Part (with gradient) */}
      <div className="flex flex-col justify-between items-center pt-24 w-full min-h-[540px] bg-gradient-to-br from-brand-light to-brand-dark">
        {page === "home" && <LoanSimulator />}
        {page === "investors" && <LoanInfo />}
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
      <div className="relative border-b">
        {" "}
        <img
          src="/simulate-app.png"
          className={classNames(
            "absolute left-1/2 -translate-x-1/2 z-0",
            "ml-8 md:ml-12 lg:ml-14 -mt-2",
            "w-[210px] sm:w-[33%] max-w-[380px]"
          )}
          alt="app"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto px-6 pb-20 lg:pb-32">
          {/* Explanation 1 */}
          <div className="col-span-1 pt-[300px] sm:pt-20 flex flex-col items-center lg:items-start">
            <div className="text-xl mb-8 md:self-start border border-brand-light text-gray-700 rounded-full p-3 md:mr-7">
              <FaMoneyBillAlt />
            </div>
            <span className="font-soleil-bold text-brand-dark sm:text-3xl mb-4 text-center lg:text-left">
              Internet Banking <span className="inline-block">& App</span>
            </span>
            <p className="text-zinc-500 max-w-[250px] sm:max-w-none text-sm mb-8 text-center md:text-left">
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
          <div className="z-10 hidden sm:block col-span-1 pt-24 sm:pt-32">
            <div className="space-y-4 flex flex-col items-center">
              {/* First item */}
              <div
                className={classNames(
                  "flex flex-col sm:flex-row items-center sm:items-start",
                  "border-b-neutral-300 border-b pb-4 border-opacity-30"
                )}
              >
                <span className="text-brand-light text-2xl sm:mr-5 mb-3 sm:mb-0">
                  <MdOutlinePhonelink />
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
                  "border-b-neutral-300 border-b pb-4 border-opacity-30"
                )}
              >
                <span className="text-brand-light text-2xl sm:mr-5 mb-3 sm:mb-0">
                  <BiReceipt />
                </span>
                <div>
                  <div className="text-brand-dark font-soleil-bold mb-1 w-full text-center sm:text-left">
                    Complete Digital Wallet
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
                <span className="text-brand-light text-2xl sm:mr-5 mb-3 sm:mb-0">
                  <MdOutlineDashboard />
                </span>
                <div>
                  <div className="text-brand-dark font-soleil-bold mb-1 w-full text-center sm:text-left">
                    Dashboard for tracking
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

const LoanSimulator = () => {
  var finance = new Finance();

  const monthlyRate = 0.021;
  const [amount, setAmount] = useState([10000]);
  const [installments, setInstallments] = useState([24]);
  const [finalInstallments, setFinalInstallments] = useState(installments);

  const [pmt, setPmt] = useState(
    finance.PMT(monthlyRate, installments, -amount[0])
  );

  const formatMoney = (value: number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(value);
  };
  const formatRate = (value: number) => {
    value = value * 100;
    const formatter = new Intl.NumberFormat("en-US", {
      maximumSignificantDigits: 2,
    });
    return formatter.format(value);
  };

  const calculatePmt = () => {
    setFinalInstallments(installments);
    setPmt(finance.PMT(monthlyRate, installments, -amount[0]));
  };

  return (
    <div className="flex flex-col items-center w-full px-8 mb-16 xs:mb-0 md:px-12 lg:px-24">
      <span className="mb-7 text-white text-3xl font-soleil-bold">
        Simulate your business loan
      </span>
      <div className="w-full max-w-5xl py-2 px-2 bg-gradient-to-r from-slate-600 to-transparent backdrop-blur-2xl shadow-md opacity-80 rounded">
        <div className="flex itens-center justify-between px-2 text-white mb-1">
          Make your simulation here without any commitment
          <span className="my-auto flex space-x-1.5">
            <div className="rounded-full h-2 w-2 bg-red-500" />
            <div className="rounded-full h-2 w-2 bg-yellow-400" />
            <div className="rounded-full h-2 w-2 bg-neutral-300" />
          </span>
        </div>
        <div className="bg-white rounded grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 p-3 gap-6">
          {/* Amount */}
          <div className="cols-span-1">
            <div className="w-full flex justify-between items-center mb-3">
              <span>Amount</span>{" "}
              <span className="font-soleil-bold text-base">
                {formatMoney(amount[0])}
              </span>
            </div>
            <Slider.Root
              defaultValue={[10000]}
              max={300000}
              min={10000}
              step={1000}
              className="relative flex items-center select-none touch-none w-full h-5"
              onValueChange={(value) => {
                setAmount(value);
              }}
            >
              <Slider.Track className="relative bg-gray-300 grow rounded-full h-1">
                <Slider.Range className="absolute bg-brand-dark bg-opacity-50 rounded-full h-full" />
              </Slider.Track>
              <Slider.Thumb className="block w-5 h-5 bg-brand-dark shadow-sm rounded-[10px]" />
            </Slider.Root>
          </div>
          {/* Installments */}
          <div className="cols-span-1">
            <div className="w-full flex justify-between items-center mb-3">
              <span>Installments</span>{" "}
              <span className="font-soleil-bold text-base">
                {installments[0]}x
              </span>
            </div>
            <Slider.Root
              defaultValue={[24]}
              max={24}
              min={3}
              step={1}
              className="relative flex items-center select-none touch-none w-full h-5"
              onValueChange={(value) => {
                setInstallments(value);
              }}
            >
              <Slider.Track className="relative bg-gray-300 grow rounded-full h-1">
                <Slider.Range className="absolute bg-brand-dark bg-opacity-50 rounded-full h-full" />
              </Slider.Track>
              <Slider.Thumb className="block w-5 h-5 bg-brand-dark shadow-sm rounded-[10px]" />
            </Slider.Root>
          </div>
          {/* Interest Rate */}
          <div className="cols-span-1 border-b">
            <div className="w-full mb-2">Interest Rate</div>
            <span className="font-soleil-bold text-lg">
              {formatRate(monthlyRate)}%
            </span>{" "}
            <span className="font-soleil-bold">/ month</span>
          </div>
          {/* Simulate Button */}
          <div className="cols-span-1 py-1">
            <button
              onClick={calculatePmt}
              className="w-full h-full min-h-[50px] bg-brand-light font-soleil-bold rounded-lg hover:opacity-90"
            >
              Simulate
            </button>
          </div>
          {/* Total */}
          <div className="cols-span-1 border-b">
            <div className="w-full mb-2">Total</div>
            <span className="font-soleil-regular text-base text-brand-light">
              {finalInstallments}x of{" "}
            </span>
            <span className="font-soleil-bold text-lg text-brand-light">
              {formatMoney(pmt)}
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

const LoanInfo = () => {
  return (
    <div className="max-w-5xl grid grid-cols-3 md:grid-cols-10 gap-8 md:gap-16 w-full px-0 xs:px-4 sm:px-12 md:px-16 lg:px-24">
      <div className="col-span-3 flex flex-col mx-auto max-w-[280px]">
        <span className="text-xl mb-4 self-center lg:self-start border border-gray-200 text-gray-700 rounded-full p-2.5">
          <FaMoneyBillAlt />
        </span>
        <span className="font-soleil-bold text-white text-4xl mb-8 text-center lg:text-left">
          Join us!
        </span>
        <p className="text-gray-200 max-w-[250px] sm:max-w-none text-sm mb-8 text-center lg:text-left">
          Invest between $15,000 and $500,000 and earn up to{" "}
          <span className="inline-block">60% / year.</span>
        </p>
        <button className="w-full h-12 font-soleil-bold bg-brand-light hover:opacity-90 rounded-md">
          Become Investor
        </button>
        <div className="text-gray-200 text-sm font-soleil-bold mx-auto mt-6">
          Join + 2000 Neo investors
        </div>
      </div>
      <div className="col-span-3 md:col-span-7 md:pl-12 pt-12 pb-24 md:pb-0 mx-auto">
        <div className="py-2 px-2 w-auto xs:w-[400px] lg:w-[450px] bg-gradient-to-r from-slate-600 to-transparent backdrop-blur-2xl shadow-md opacity-80 rounded">
          <div className="flex itens-center text-xs xs:text-base justify-between ml-2 text-white mb-1">
            Value used to fund companies in Neo so far
            <span className="my-auto space-x-1.5 hidden xs:flex">
              <div className="rounded-full h-2 w-2 bg-red-500" />
              <div className="rounded-full h-2 w-2 bg-yellow-400" />
              <div className="rounded-full h-2 w-2 bg-neutral-300" />
            </span>
          </div>
          <div className="flex items-center justify-center text-brand-dark font-soleil-bold text-3xl xs:text-5xl bg-white rounded h-[100px] xs:h-[140px] lg:h-[150px]">
            $13,471,366.00
          </div>
        </div>
      </div>
    </div>
  );
};
