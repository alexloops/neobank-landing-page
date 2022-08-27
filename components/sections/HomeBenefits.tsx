import { FaUserEdit } from "react-icons/fa";
import { FiPercent } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import { IoIosCash } from "react-icons/io";
import { RiBarcodeFill } from "react-icons/ri";
import { MdOutlineCorporateFare } from "react-icons/md";
import { BiLock } from "react-icons/bi";

const data = [
  {
    title: "Make your request",
    description: "Inform the value your company needs.",
    icon: <FaUserEdit />,
  },
  {
    title: "Make your request",
    description:
      "Inform the value your company needs and sign up in our platform.",
    icon: <IoIosCash />,
  },
  {
    title: "Make your request",
    description: "Inform a value and sign up in our platform.",
    icon: <RiBarcodeFill />,
  },
  {
    title: "Make your request",
    description: "Inform the value your company needs.",
    icon: <MdOutlineCorporateFare />,
  },
  {
    title: "Make your request",
    description:
      "Inform the value your company needs and sign up in our platform.",
    icon: <FiPercent />,
  },
  {
    title: "Make your request",
    description: "Inform a value and sign up in our platform.",
    icon: <BiLock />,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeBenefits() {
  return (
    <section className="bg-white border-b px-2 sm:px-12 py-16 sm:py-20 lg:py-32">
      <div className="relative mx-auto max-w-4xl">
        <div className="md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
          {/* Image Part */}
          <div className="mt-12 sm:max-w-lg sm:mx-auto md:mt-0 md:max-w-none md:mx-0 flex flex-col justify-between items-start">
            <span className="text-lg mb-8 border border-brand-light rounded-full p-2">
              <GiReceiveMoney />
            </span>
            <span className="mt-1 mb-6 block text-3xl tracking-tight font-soleil-bold text-brand-dark sm:text-4xl">
              A new path for your company
            </span>
            <img
              className="w-full mx-auto pl-8 md:pl-0 mb-12 md:mb-0 max-w-sm md:max-w-full"
              src="/smilling-guy.png"
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
            <button className="bg-brand-light font-soleil-bold w-[280px] h-16 mt-12 rounded-md">
              Get a Loan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
