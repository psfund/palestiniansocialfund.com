import Link from "next/link";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [currentTab, setCurrentTab] = useState("home");
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (pathname.includes("fund")) {
      setCurrentTab("fund");
    } else if (pathname.includes("support")) {
      setCurrentTab("support");
    } else {
      setCurrentTab("home");
    }
  }, [pathname]);

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center cursor-pointer">
                  <Link href="/">
                    <div>
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="/logo-compact.svg"
                        alt="Workflow"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="/logo.svg"
                        alt="Workflow"
                      />
                    </div>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-gray-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/fund"
                    className={classNames(
                      currentTab === "fund"
                        ? "border-gray-900 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    )}
                  >
                    Track fund
                  </a>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1ge-Yg_FrUOwh38ftHkuJEowjZepxKJFO1XpF7bF5x1c/edit?usp=sharing"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Milestones
                  </a>
                  <a
                    href="mailto:psfund@pm.me"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <div>
                  <LocaleSwitch />
                </div> */}
                <Link href="/support">
                  <a className="flex items-center bg-black py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
                    Support
                    <ArrowRightIcon className="ms-2 h-4 w-4" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-gray-50 border-gray-500 text-gray-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className={classNames(
                  currentTab === "home"
                    ? "bg-gray-50 border-gray-500 text-gray-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700",
                  "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                )}
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/fund"
                className={classNames(
                  currentTab === "fund"
                    ? "bg-gray-50 border-gray-500 text-gray-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700",
                  "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                )}
              >
                Track fund
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://psfund.notion.site/35b1c59f568c4e68bb64fe38d0508c01?v=1d71309e31a64436901f756750e082bf"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Milestones
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/support"
                className={classNames(
                  currentTab === "support"
                    ? "bg-gray-50 border-gray-500 text-gray-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700",
                  "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                )}
              >
                Support fund
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="mailto:psfund@pm.me"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Get in touch
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
  return (
    <header>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b lg:border-none">
          <div className="flex items-center">
            <div>
              <span className="sr-only">Palestinian Social Fund</span>
              <div className="flex-shrink-0 pe-3 flex items-center">
                <Link href="/">
                  <a>
                    <img
                      className="h-10 w-auto"
                      src="/logo.svg"
                      alt="Palestinian Social Fund"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden ms-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link className="md:me-2" key={link.name} href={link.href}>
                  <a className="text-base underline font-medium hover:opacity-75">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="ms-10 flex items-center space-s-4">
            {/* <div>
              <LocaleSwitch />
            </div> */}
            <Link href="/support">
              <a className="inline-block bg-black py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
                Support Fund
              </a>
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 border-b lg:hidden">
          {navigation.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className="text-base underline font-medium hover:opacity-75">
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
