/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MinusIcon,
  MinusSmIcon,
  PlusIcon,
  PlusSmIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

const faqLoans = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];
const faqInvesting = [
  {
    question: "What's the best thing about Sweden?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Sweden?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Sweden?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Sweden?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQ() {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl font-soleil-bold tracking-tight mb-16 font-bold text-brand-dark sm:text-4xl">
            Frequently asked questions
          </h2>
          {/* Buttons to change Questions subject */}
          <div className="flex w-full mb-8">
            <button
              className={classNames(
                "flex-1 mr-4 sm:mr-6 font-soleil-bold py-2.5 sm:py-3 px-2 rounded-md text-sm sm:text-base",
                activeButton === 1
                  ? "bg-brand-light text-white"
                  : "bg-neutral-100 text-neutral-500"
              )}
              onClick={() => {
                setActiveButton(1);
              }}
            >
              FAQ about Loans
            </button>
            <button
              className={classNames(
                "flex-1 mr-4 sm:mr-6 font-soleil-bold py-2.5 sm:py-3 px-2 rounded-md text-sm sm:text-base",
                activeButton === 2
                  ? "bg-brand-light text-white"
                  : "bg-neutral-100 text-neutral-500"
              )}
              onClick={() => {
                setActiveButton(2);
              }}
            >
              FAQ about Investing
            </button>
          </div>
          {/* Actual FAQ */}
          <dl className="divide-y divide-gray-100 mb-14">
            {activeButton === 1 &&
              faqLoans.map((faq, index) => (
                <Disclosure as="div" key={faq.question} className="py-2">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left text-base sm:text-lg w-full flex items-start py-4">
                          <span className="mr-4 sm:mr-8 text-brand-light">
                            {"0" + (index + 1) + "."}
                          </span>
                          <div className="flex justify-between items-center w-full">
                            <span className="font-medium text-gray-900">
                              {faq.question}
                            </span>
                            <span className="ml-6 h-7 flex items-center">
                              {open && (
                                <MinusSmIcon
                                  className="h-6 w-6 text-brand-light"
                                  aria-hidden="true"
                                />
                              )}
                              {!open && (
                                <PlusSmIcon
                                  className="h-6 w-6 text-brand-light"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </div>
                        </Disclosure.Button>
                      </dt>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel
                          as="dd"
                          className="mt-2 pr-12 pl-14 pb-10 pt-2"
                        >
                          <p className="text-base text-gray-500">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ))}
            {activeButton === 2 &&
              faqInvesting.map((faq, index) => (
                <Disclosure as="div" key={faq.question} className="py-2">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left text-base sm:text-lg w-full flex items-start py-4">
                          <span className="mr-4 sm:mr-8 text-brand-light">
                            {"0" + (index + 1) + "."}
                          </span>
                          <div className="flex justify-between items-center w-full">
                            <span className="font-medium text-gray-900">
                              {faq.question}
                            </span>
                            <span className="ml-6 h-7 flex items-center">
                              {open && (
                                <MinusSmIcon
                                  className="h-6 w-6 text-brand-light"
                                  aria-hidden="true"
                                />
                              )}
                              {!open && (
                                <PlusSmIcon
                                  className="h-6 w-6 text-brand-light"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </div>
                        </Disclosure.Button>
                      </dt>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel
                          as="dd"
                          className="mt-2 pr-12 pl-14 pb-10 pt-2"
                        >
                          <p className="text-base text-gray-500">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ))}
          </dl>
          {/* Button to ask for a loan */}
          <button className="w-full h-20 sm:h-32 bg-brand-dark font-soleil-bold text-white rounded">
            Ask for a loan
          </button>
        </div>
      </div>
    </section>
  );
}
