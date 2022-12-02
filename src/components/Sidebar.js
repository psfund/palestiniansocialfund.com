import { Fragment } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Dialog, Transition } from "@headlessui/react";
import {
  // NewspaperIcon,
  LightBulbIcon,
  HomeIcon,
  ScaleIcon,
  // FolderOpenIcon,
  LightningBoltIcon,
  XIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";

const navigation = [
  { name: "home", href: "/", icon: HomeIcon, current: false },
  // {
  //   name: "philosophy",
  //   href: "/philosophy",
  //   icon: LightBulbIcon,
  //   current: false,
  // },
  // { name: "News", href: "#", icon: NewspaperIcon, current: false },
  { name: "track_fund", href: "/fund", icon: ScaleIcon, current: false },
  {
    name: "support_fund",
    href: "/support",
    icon: LightningBoltIcon,
    current: false,
  },
  // { name: "Open Projects", href: "#", icon: FolderOpenIcon, current: false },
];
const secondaryNavigation = [
  {
    name: "A Resistance Economy: What is it and can it provide an alternative? (PDF)",
    href: "https://www.rosalux.de/fileadmin/rls_uploads/pdfs/sonst_publikationen/A_Resistance_Economy.pdf",
  },
  {
    name: "Localising the Economy as a Resistance Response (PDF)",
    href: "https://www.academia.edu/43145566/Localising_the_Economy_as_a_Resistance_Response_A_Contribution_to_the_Resistance_Economy_Debate_in_the_Occupied_Palestinian_Territories",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar(props) {
  const { pathname } = useRouter();
  const { t } = useTranslation();
  const { sidebarOpen, setSidebarOpen } = props;

  const isActive = (url) => pathname === url;

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-40 flex md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -me-14 p-1">
                  <button
                    className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:bg-gray-600"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 px-4 flex items-center">
                <img
                  className="h-10 w-auto"
                  src="/logo.svg"
                  alt="Palestinian Social Fund"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="h-full flex flex-col">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        className={classNames(
                          isActive(item.href)
                            ? "bg-green-50 border-green-600 text-green-600"
                            : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group border-l-4 py-2 px-3 flex items-center text-base font-medium"
                        )}
                        key={item.name}
                        href={item.href}
                      >
                        <item.icon
                          className="text-gray-400 group-hover:text-gray-500 me-4 h-6 w-6"
                          aria-hidden="true"
                        />
                        {t(item.name)}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-auto pt-10 space-y-1">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        className="group border-l-4 border-transparent py-2 px-3 flex items-center text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="w-64 flex flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <nav className="pb-4 flex flex-col flex-grow overflow-y-auto">
            <div className="flex-shrink-0 px-4 flex items-center absolute t-0 bg-white h-20">
              <Link href="/">
                <img
                  className="h-10 w-auto"
                  src="/logo.svg"
                  alt="Palestinian Social Fund"
                />
              </Link>
            </div>
            <div className="flex flex-col pt-28 pb-10 lg:pb-14">
              <div className="flex-1 space-y-1">
                {navigation.map((item) => (
                  <Link
                    className={classNames(
                      isActive(item.href)
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-900",
                      "group py-2 px-4 flex items-center text-sm font-medium transition-colors duration-200"
                    )}
                    key={item.name}
                    href={item.href}
                  >
                    <div className="me-3 p-1 rounded-md bg-gradient-to-br from-gray-200 to-gray-200">
                      <item.icon
                        className="h-4 w-4 text-gray-600"
                        aria-hidden="true"
                      />
                    </div>
                    {t(item.name)}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 flex-grow block w-full text-sm">
              <h3 className="px-4 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
                {t("resources")}
              </h3>
              {secondaryNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="px-4 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
