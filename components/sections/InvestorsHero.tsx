import React from "react";
import { CgPlayButtonR } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdRestaurant } from "react-icons/md";
import { TbBuildingFactory2 } from "react-icons/tb";

export default function InvestorsHero() {
  return (
    <section className="bg-white">
      <div className="flex flex-col justify-center w-full h-36 px-28 bg-gradient-to-br from-brand-dark to-brand-light">
        <span className="uppercase mb-4 text-brand-light text-sm font-soleil-bold">
          Invest Today
        </span>
        <span className="text-white font-soleil-bold text-5xl">
          Become a Neo Investor
        </span>
      </div>
      <div className="w-full flex justify-center px-2 sm:px-12">
        <div className="max-w-5xl py-10 sm:py-12 lg:py-16">
          {/* Header Part */}
          <div className="flex flex-col lg:flex-row items-center mt-12 mb-12 lg:mb-0 sm:max-w-lg sm:mx-auto md:mt-0 md:max-w-none md:mx-0">
            <div className="mr-8">
              <span className="uppercase mb-2 text-brand-light text-sm font-soleil-bold">
                Start Investing
              </span>
              <span className="mt-1 mb-6 block text-3xl text-center lg:text-left tracking-tight font-soleil-bold text-brand-dark sm:text-4xl">
                Companies from different{" "}
                <span className="inline-block">sectors and sizes</span>
              </span>
            </div>
            <div className="text-brand-dark text-sm">
              In our investiments, the yielding are calculated based on MTIR,
              and go up to 60%/year
            </div>
          </div>
          {/* Image and Explanation Part */}
          <div className="grid grid-cols-10 items-end">
            <img
              className="col-span-10 md:col-span-6 md:pl-0 mb-12 md:mb-0 mx-auto"
              src="/computer.png"
              alt=""
            />
            <div className="col-span-10 md:col-span-4 flex flex-col justify-end items-center md:items-start h-full ml-8">
              <div>
                <span className="uppercase mb-4 font-soleil-bold text-brand-dark">
                  Companes raising
                </span>

                <span className="w-full py-4 flex items-center text-zinc-500 border-b border-zinc-500 border-opacity-10">
                  <CgPlayButtonR className="text-brand-light mr-3" /> Media
                </span>
                <span className="w-full py-4 flex items-center text-zinc-500 border-b border-zinc-500 border-opacity-10">
                  <MdRestaurant className="text-brand-light mr-3" /> Food
                </span>
                <span className="w-full py-4 flex items-center text-zinc-500 border-b border-zinc-500 border-opacity-10">
                  <HiOutlineShoppingBag className="text-brand-light mr-3" />{" "}
                  Retail
                </span>
                <span className="w-full py-4 flex items-center text-zinc-500">
                  <TbBuildingFactory2 className="text-brand-light mr-3" />{" "}
                  Industry
                </span>
                <button className="bg-brand-light font-soleil-bold w-[220px] md:w-[260px] h-14 md:h-16 mb-16 hover:opacity-90 mt-12 rounded-md">
                  Invest Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
