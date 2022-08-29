import { FaMoneyBill } from "react-icons/fa";
import { CgLoadbarDoc } from "react-icons/cg";
import { TbFileSearch } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";

const data = [
  {
    title: "Make your request",
    description:
      "Inform the value your company needs and sign up in our platform.",
    icon: <CgLoadbarDoc />,
  },
  {
    title: "Make your request2",
    description:
      "Inform the value your company needs and sign up in our platform.",
    icon: <TbFileSearch />,
  },
  {
    title: "Make your request3",
    description:
      "Inform the value your company needs and sign up in our platform.",
    icon: <GiReceiveMoney />,
  },
  {
    title: "Make your request4",
    description:
      "Inform the value your company needs and sign up in our platform.",
    icon: <FaMoneyBill />,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeHowItWorks() {
  return (
    <section
      id="howitworks"
      className="bg-gray-100 px-2 sm:px-12 py-16 sm:py-24 lg:py-32"
    >
      <div className="relative mx-auto max-w-4xl">
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:gap-8">
          {/* Image Part */}
          <div className="mt-12 sm:max-w-lg sm:mx-auto md:mt-0 md:max-w-none md:mx-0">
            <img
              className="w-full mx-auto pl-8 md:pl-0 mb-12 md:mb-0 max-w-sm md:max-w-full"
              src="/guy-using-app.png"
              alt=""
            />
          </div>
          {/* Explanation Part */}
          <div className="text-center px-4 sm:px-16 md:px-1 md:max-w-2xl md:mx-auto md:text-left">
            <span className="mt-1 block text-3xl tracking-tight font-soleil-bold text-brand-dark sm:text-4xl">
              How does it work?
            </span>
            <p className="mt-3 mb-10 text-lg text-zinc-500">
              We connect companies in need of credit with people willing to
              invest in them.
            </p>
            <div className="space-y-8 flex flex-col items-center">
              {data.map((item, index) => {
                return (
                  <div
                    key={item.title}
                    className={classNames(
                      "flex items-start pl-3",
                      index + 1 < data.length
                        ? "border-b-neutral-300 border-b pb-8 border-opacity-30"
                        : ""
                    )}
                  >
                    <span className="text-cyan-500 text-2xl mr-7">
                      {item.icon}
                    </span>
                    <div>
                      <div className="text-brand-dark font-soleil-bold mb-1 w-full text-left">
                        {index + 1 + ". "}
                        {item.title}
                      </div>
                      <p className="text-zinc-500 text-sm text-left">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
