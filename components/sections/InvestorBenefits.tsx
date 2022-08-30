import { FaGem } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { RiScissorsCutLine } from "react-icons/ri";
import { MdComputer, MdOutlineCorporateFare } from "react-icons/md";
import { BiPieChartAlt2 } from "react-icons/bi";
import { TbFileSearch } from "react-icons/tb";

const data = [
  {
    description: "Inform the value your company needs.",
    icon: <MdComputer />,
  },
  {
    description:
      "Inform the value your company needs and sign up in our platform.",
    icon: <BiPieChartAlt2 />,
  },
  {
    description: "Inform a value and sign up in our platform.",
    icon: <BsCashStack />,
  },
  {
    description: "Inform the value your company needs.",
    icon: <TbFileSearch />,
  },
  {
    description:
      "Inform the value your company needs and sign up in our platform.",
    icon: <RiScissorsCutLine />,
  },
  {
    description: "Inform a value and sign up in our platform.",
    icon: <FaGem />,
  },
];

export default function InvestorBenefits() {
  return (
    <section className="bg-gray-50 border-b px-2 sm:px-12 py-16 sm:py-20 lg:py-32">
      <div className="relative mx-auto max-w-4xl">
        <div className="md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
          {/* Image Part */}
          <div className="flex flex-col justify-end lg:justify-between items-start px-4 mt-12 sm:max-w-lg sm:mx-auto md:mt-0 md:max-w-none md:mx-0">
            <span className="text-lg mb-8 border border-brand-light text-gray-700 rounded-full p-2">
              <MdOutlineCorporateFare />
            </span>
            <span className="mt-1 mb-6 block text-3xl tracking-tight font-soleil-bold text-brand-dark sm:text-4xl">
              Benefits of investing with Neo
            </span>
            <img
              className="w-full mx-auto pl-8 md:pl-0 mb-12 md:mb-0 max-w-sm md:max-w-full"
              src="/woman-using-phone.png"
              alt=""
            />
          </div>
          {/* Explanation Part */}
          <div className="text-center mt-8 md:mt-0 px-4 sm:px-16 md:px-1 md:max-w-2xl md:mx-auto md:text-left">
            <div className="grid grid-cols-2 gap-y-12 gap-x-6 md:gap-y-12 md:gap-x-6">
              {data.map((item, index) => {
                return (
                  <div key={index}>
                    <span className="text-cyan-500 text-xl">{item.icon}</span>
                    <p className="text-zinc-500 mt-6 text-sm text-left">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <button className="bg-brand-light font-soleil-bold w-[220px] sm:w-[280px] h-14 sm:h-16 hover:opacity-90 mt-12 rounded-md">
              Invest Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
