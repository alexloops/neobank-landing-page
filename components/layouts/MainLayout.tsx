import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";

export default function MainLayout({
  children,
  title,
  meta,
  isNoIndex = false,
}: {
  children: React.ReactNode;
  title: string;
  meta: string;
  isNoIndex?: boolean;
}) {
  return (
    <div className="flex flex-col items-center h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={meta} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {/* The padding top of this div has to be the same height of the navbar */}
      <div className="flex-1 min-h-full w-full pt-[128px]">{children}</div>
      <Footer />
    </div>
  );
}

const Navbar = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsScrolled(position > 25);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed z-50 bg-white w-full flex flex-col items-center">
      <div
        className={classNames(
          "bg-neutral-100 w-full flex items-center justify-center transition-all duration-100",
          isScrolled ? "h-0" : "h-10"
        )}
      >
        {" "}
        <span className="text-xl mr-3 transition duration-200">👋</span> Loan
        for businesses. Fast, safe and 100% online!
      </div>
      <nav className="bg-white w-full text-sm max-w-7xl">
        <Popover className="relative">
          <div
            className={classNames(
              "flex justify-between items-center px-4 md:justify-start md:space-x-10 transition-all duration-80",
              isScrolled ? "py-3" : "py-6"
            )}
          >
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a>
                  <span className="sr-only">Neobank</span>
                  <img
                    className={classNames(
                      "h-8 w-auto sm:h-10",
                      isScrolled ? "sm:h-8" : "sm:h-10"
                    )}
                    src="/logo1.png"
                    alt="Logo"
                  />
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-3 inline-flex items-center justify-center text-brand-dark hover:text-gray-600">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-7 w-7" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Link href="#howitworks">
              <a className="text-slate-900 hover:text-gray-900 hidden md:block py-2">
                How it works
              </a>
            </Link>
            <Link href="/investors">
              <a className="text-slate-900 hover:text-gray-900 hidden md:block py-2">
                Investors
              </a>
            </Link>
            <Link href="#about">
              <a className="text-slate-900 hover:text-gray-900 hidden md:block py-2">
                About us
              </a>
            </Link>
            <Link href="#faq">
              <a className="text-slate-900 hover:text-gray-900 hidden lg:block py-2">
                FAQ
              </a>
            </Link>
            <Link href="#testimonials">
              <a className="text-slate-900 hover:text-gray-900 hidden lg:block py-2">
                Testimonials
              </a>
            </Link>
            <Link href="#contact">
              <a className="text-slate-900 hover:text-gray-900 hidden lg:block py-2">
                Contact
              </a>
            </Link>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className={classNames(
                  "whitespace-nowrap inline-flex items-center justify-center px-4  border border-transparent rounded-md font-soleil-bold text-brand-dark hover:opacity-90 border-brand-light",
                  isScrolled ? "py-1" : "py-2"
                )}
              >
                Get a Loan
              </a>
              <a
                href="#"
                className={classNames(
                  "ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md font-soleil-bold text-brand-dark bg-brand-light hover:opacity-90",
                  isScrolled ? "py-1" : "py-2"
                )}
              >
                Become Investor
              </a>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="#howitworks">
                      <a className="text-slate-900 hover:text-gray-900">
                        How it works
                      </a>
                    </Link>
                    <Link href="/investors">
                      <a className="text-slate-900 hover:text-gray-900">
                        Investors
                      </a>
                    </Link>
                    <Link href="#about">
                      <a className="text-slate-900 hover:text-gray-900">
                        About us
                      </a>
                    </Link>
                    <Link href="#faq">
                      <a className="text-slate-900 hover:text-gray-900">FAQ</a>
                    </Link>
                    <Link href="#testimonials">
                      <a className="text-slate-900 hover:text-gray-900">
                        Testimonials
                      </a>
                    </Link>
                    <Link href="#contact">
                      <a className="text-slate-900 hover:text-gray-900">
                        Contact
                      </a>
                    </Link>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm  font-medium text-brand-dark  bg-brand-light hover:opacity-90 font-soleil-bold"
                    >
                      Become Investor
                    </a>
                    <a
                      href="#"
                      className="w-full mt-4 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm  font-medium text-brand-dark  hover:opacity-90 border-brand-light font-soleil-bold"
                    >
                      Get a Loan
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 w-full flex flex-col items-center">
      <div className="w-full h-0.5 bg-gradient-to-r from-[#F6BC4D] to-brand-light" />
      <div className="w-full h-[550px] text-sm max-w-7xl pt-28 px-8 flex flex-col justify-between divide-y divide-slate-200">
        <div className="h-5 px-4 flex">
          <div className="flex flex-col max-w-xs mr-20">
            <img className="w-32 mb-6" src="/logo2.png" alt="logo" />
            <p className="text-zinc-500 mb-10">
              Praesent vel velit mi. Nam semper faucibus orci, nec scelerisque
              lectus ullamcorper non. Pellentesque auctor, dolor et porta
              molestie, lacus sem.
            </p>
            <p className="font-soleil-bold text-base text-zinc-500 mb-4">
              FOLLOW US
            </p>
            <div className="flex text-brand-light items-center">
              <a
                href="https://github.com/remembertohydrate/neobank-landing-page"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="mr-4 text-lg" />
              </a>

              <a
                href="https://github.com/remembertohydrate/neobank-landing-page"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="mr-4 text-lg" />
              </a>

              <a
                href="https://github.com/remembertohydrate/neobank-landing-page"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="mr-4 text-lg" />
              </a>

              <a
                href="https://github.com/remembertohydrate/neobank-landing-page"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-lg" />
              </a>
            </div>
          </div>

          <div className="flex flex-1">
            <div className="flex-1">
              <div className="font-soleil-bold text-base text-zinc-500 mb-5">
                COMPANY
              </div>
              <Link href="/">
                <a className="block mb-4 text-zinc-500">I want a loan</a>
              </Link>
              <Link href="/">
                <a className="block mb-4 text-zinc-500">I want to invest</a>
              </Link>
              <Link href="/">
                <a className="block mb-4 text-zinc-500">Digital Account</a>
              </Link>
              <Link href="/">
                <a className="block mb-4 text-zinc-500">FAQ</a>
              </Link>
            </div>
            <div className="flex-1">
              <div className="font-soleil-bold text-base text-zinc-500 mb-5">
                LEGAL
              </div>
              <Link href="/">
                <a className="block mb-4 text-zinc-500">Terms and Conditions</a>
              </Link>
              <Link href="/">
                <a className="block mb-4 text-zinc-500">Privacy Policy</a>
              </Link>
              <Link href="/">
                <a className="block mb-4 text-zinc-500">Cookie Policy</a>
              </Link>
            </div>
            <div className="flex-1">
              <div className="font-soleil-bold text-base text-zinc-500 mb-5">
                CONTACT
              </div>
              <Link href="/">
                <a className="block mb-4 text-zinc-500">Talk to a specialist</a>
              </Link>
              <Link href="/">
                <a className="block mb-4 text-zinc-500">(555) 555-1234</a>
              </Link>
              <Link href="/">
                <a className="block mb-4 text-zinc-500">(555) 555-1234</a>
              </Link>
              <Link href="/">
                <a
                  href="#"
                  className="whitespace-nowrap p-0.25 overflow-hidden inline-flex bg-gradient-to-r from-[#F6BC4D] to-brand-light  border border-transparent rounded-md font-soleil-bold text-brand-light hover:opacity-90"
                >
                  <span className="flex items-center justify-center px-5 py-3 bg-slate-50 transition-all ease-in duration-75 rounded-sm group-hover:bg-opacity-0">
                    <HiOutlineLightningBolt className="mr-2" /> Login to Digital
                    Account
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-16 text-zinc-500 flex items-center px-4 ">
          {new Date().getFullYear()} Neo - All rights reserved.
        </div>
      </div>
    </footer>
  );
};
