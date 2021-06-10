import LocaleSwitch from "src/components/LocaleSwitch";
import { MenuAlt2Icon } from "@heroicons/react/outline";

export default function Navbar(props) {
  const { setSidebarOpen } = props;

  return (
    <div className="w-full mx-auto md:px-8">
      <div className="relative z-10 flex-shrink-0 h-20 bg-white border-b border-gray-200 flex">
        <button
          className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 flex justify-between px-4 md:px-0">
          <div className="ms-auto flex items-center space-s-2">
            <LocaleSwitch />
          </div>
        </div>
      </div>
    </div>
  );
}
