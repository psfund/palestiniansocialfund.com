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
    console.log(pathname);
    if (pathname.includes("fund")) {
      setCurrentTab("fund");
    } else if (pathname.includes("support")) {
      setCurrentTab("support");
    } else if (pathname.includes("milestones")) {
      setCurrentTab("milestones");
    } else if (pathname.includes("about")) {
      setCurrentTab("about");
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
                    href="/about"
                    className={classNames(
                      currentTab === "about"
                        ? "border-gray-900 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    )}
                  >
                    About
                  </a>
                  <a
                    href="/milestones"
                    className={classNames(
                      currentTab === "milestones"
                        ? "border-gray-900 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    )}
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
                <Link
                  className="flex items-center bg-black py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                  href="/support"
                >
                  Support
                  <ArrowRightIcon className="ms-2 h-4 w-4" />
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
                href="/about"
                className={classNames(
                  currentTab === "about"
                    ? "bg-gray-50 border-gray-500 text-gray-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700",
                  "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                )}
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/milestones"
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
}
