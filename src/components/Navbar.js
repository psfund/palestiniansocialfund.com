import { BellIcon, MenuAlt2Icon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";

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
          <div className="flex-1 flex">
            <form className="w-full flex md:ml-0" action="#" method="GET">
              <label htmlFor="search_field" className="sr-only">
                Search
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                  <SearchIcon
                    className="flex-shrink-0 h-5 w-5"
                    aria-hidden="true"
                  />
                </div>
                <input
                  name="search_field"
                  id="search_field"
                  className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
                  placeholder="Search"
                  type="search"
                />
                <input
                  name="search_field"
                  id="search_field"
                  className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <button className="bg-white rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              <BellIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">View notifications</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
