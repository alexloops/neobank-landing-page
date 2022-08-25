import Head from "next/head";
import Link from "next/link";
import React from "react";
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
import { ChevronDownIcon } from "@heroicons/react/solid";

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
      <div className="flex-1">{children}</div>
      <footer className="bg-slate-100 w-full py-4 flex justify-center">
        This is the footer.
      </footer>
    </div>
  );
}

const Navbar = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-white w-full flex flex-col items-center">
      <div className="h-10 bg-neutral-100 w-full flex items-center justify-center">
        {" "}
        <span className="text-xl mr-3">👋</span> Loan for businesses. Fast, safe
        and 100% online!
      </div>
      <div className="bg-white w-full text-sm max-w-7xl">
        <Popover className="relative">
          <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a>
                  <span className="sr-only">Neobank</span>
                  <img className="h-8 w-auto sm:h-10" src="/logo1.png" alt="" />
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
              <a className="text-slate-900 hover:text-gray-900 hidden md:block">
                How it works
              </a>
            </Link>
            <Link href="/investors">
              <a className="text-slate-900 hover:text-gray-900 hidden md:block">
                Investors
              </a>
            </Link>
            <Link href="#about">
              <a className="text-slate-900 hover:text-gray-900 hidden md:block">
                About us
              </a>
            </Link>
            <Link href="#faq">
              <a className="text-slate-900 hover:text-gray-900 hidden lg:block">
                FAQ
              </a>
            </Link>
            <Link href="#testimonials">
              <a className="text-slate-900 hover:text-gray-900 hidden lg:block">
                Testimonials
              </a>
            </Link>
            <Link href="#contact">
              <a className="text-slate-900 hover:text-gray-900 hidden lg:block">
                Contact
              </a>
            </Link>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md font-soleil-bold text-brand-dark hover:opacity-90 border-brand-light"
              >
                Get a Loan
              </a>
              <a
                href="#"
                className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md font-soleil-bold text-brand-dark bg-brand-light hover:opacity-90"
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
      </div>
    </div>
  );
};

const Footer = () => {};
