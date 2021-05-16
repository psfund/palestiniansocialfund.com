import { useState } from "react";
import { useTranslation } from "next-i18next";
import { MainLayout } from "src/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import phoneFormatter from "phone-formatter";

import countries from "src/utils/countries.json";

const people = [
  {
    name: "Saba Abbas 🇵🇸",
    role: "Venture Analyst",
  },
  {
    name: "Sami Fuller 🇵🇸 🇺🇸",
    role: "Social Content Producer",
  },
  {
    name: "Youcef Rahmani 🇩🇿 🇫🇷",
    role: "Lawyer",
  },
  {
    name: "Imad Dodin 🇵🇸",
    role: "Software Developer",
  },
  {
    name: "Adam Albarghouthi 🇵🇸",
    role: "Software Developer",
  },
  {
    name: "You",
    role: "How can you contribute?",
  },
];

const announcements = [
  {
    id: 1,
    title: "Social Fund",
    preview:
      "A tool to pool our capital and resources to build an economic foundation in Palestine independent of monopolies and the occupation.",
  },
  {
    id: 2,
    title: "Fund Tracker",
    preview:
      "A tool to track the source and destination of each transaction the Social Fund undertakes.",
  },
  {
    id: 3,
    title: "Open Projects",
    preview:
      "A tool where volunteers can readily contribute to the projects the fund is undertaking.",
  },
];

const Home = () => {
  const { t } = useTranslation();

  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  return (
    <MainLayout>
      <div className="pb-12">
        <h1 className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">
          {t("psf")}
        </h1>
        <p className="text-2xl tracking-tight text-gray-500">
          A volunteer-based non-profit building software for uniting Palestinian
          efforts across the globe.
        </p>
      </div>

      <div className="mx-auto py-12 max-w-7xl">
        <div className="space-y-5 sm:space-y-4 mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            First project
          </h2>
          <p className="text-xl text-gray-500">
            A central database of Palestinians and friends of Palestine in the
            diaspora by phone number and city to synchronize mobilization and
            organization.
          </p>
        </div>
        <div className="max-w-sm">
          <div className="mb-3">
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="focus:ring-green-500 focus:border-green-500 h-full py-0 pl-3 pr-4 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                >
                  {countries.map((country) => (
                    <option value={country.dial_code}>
                      {country.code} {country.dial_code}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                name="phone_number"
                id="phone_number"
                className="focus:ring-green-500 focus:border-green-500 block w-full pl-24 sm:text-sm border-gray-300 rounded-md"
                placeholder="(555) 987-6543"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <select
              id="location"
              name="location"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
              defaultValue="Canada"
            >
              <option>Montreal</option>
              <option>Chicago</option>
              <option>Dallas</option>
            </select>
          </div>
          <div className="mt-3">
            <p className="text-gray-500 text-xs">
              <span className="font-bold">Guaranteed no spam.</span> You will
              only receive text messages when the Palestinian community in your
              city is needed to unite for an event or action (e.x. a rally).
            </p>
          </div>
          <button
            type="button"
            className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="mx-auto py-12 max-w-7xl">
        <div className="space-y-5 sm:space-y-4 mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Upcoming projects
          </h2>
        </div>
        <div>
          <div className="flow-root mt-6">
            <ul className="-my-5 divide-y divide-gray-200">
              {announcements.map((announcement) => (
                <li key={announcement.id} className="py-5">
                  <div className="relative focus-within:ring-2 focus-within:ring-green-500">
                    <h3 className="text-sm font-semibold text-gray-800">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {announcement.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      {announcement.preview}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto py-12 max-w-7xl">
        <div className="space-y-5 sm:space-y-4 mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Current members
          </h2>
          <p className="text-xl text-gray-500">
            We're all volunteers dedicating our time to unite the efforts of the
            Palestinian cause. Join us!
          </p>
        </div>
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <div className="font-medium text-lg leading-6 space-y-1">
                  <h3>{person.name}</h3>
                  <p className="text-gray-500">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
