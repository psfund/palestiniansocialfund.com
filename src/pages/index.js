import { useState } from "react";
import { useTranslation } from "next-i18next";
import { MainLayout } from "src/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { Line } from "rc-progress";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

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
    title: "Fund Tracker",
    preview:
      "A tool to track the source and destination of each transaction the Social Fund undertakes.",
  },
  {
    id: 2,
    title: "Open Projects",
    preview:
      "A tool where volunteers can readily contribute to the projects the fund is undertaking.",
  },
];

const tiers = [
  {
    name: "Basic",
    href: "#",
    priceMonthly: 11,
    priceYearly: 104,
    description: "Quis suspendisse ut fermentum neque vivamus non tellus.",
  },
  {
    name: "Essential",
    href: "#",
    priceMonthly: 29,
    priceYearly: 310,
    description: "Quis eleifend a tincidunt pellentesque. A tempor in sed.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const { t } = useTranslation();
  const [billing, setBilling] = useState("monthly");

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

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
            Kanaan's Land - 1st Co-op to fund
          </h2>
          <p className="text-xl text-gray-500">
            Founded by 4 freed prisoners in Beit Rima after not, Kanaan's Land
            wishes to become a major producer of organic poultry products.
          </p>
        </div>
        <div>
          <div className="mb-5">
            <dl className="mt-5 grid grid-cols-2 border border-gray-300 rounded bg-white items-center overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                  <div className="flex items-baseline text-2xl font-semibold text-green-600">
                    $34,999
                    <span className="ml-2 text-sm font-medium text-gray-500">
                      raised of $50,000 goal
                    </span>
                  </div>
                </dd>
                <div className="mt-3">
                  <Line
                    percent="69"
                    strokeWidth="2"
                    trailWidth="2"
                    strokeColor="#10B981"
                    trailColor="#D1FAE5"
                    strokeLinecap="square"
                  />
                </div>
              </div>
              <div className="px-4 py-5 sm:p-6 ms-auto">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Track Fund
                </button>
              </div>
            </dl>
          </div>
          <LightGallery
            onInit={onInit}
            speed={500}
            elementClassNames="grid grid-flow-row grid-cols-4 grid-rows-3 gap-4 h-28 md:h-52 mb-8"
            plugins={[lgThumbnail, lgZoom]}
          >
            <a
              className="gallery-item"
              data-src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/163424370_579638806303845_3203778093767521275_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=79nt2JWU3TcAX-ZDQph&_nc_ht=scontent-bos3-1.xx&oh=d470789c4e8f059145719b7ca9004ab6&oe=60DB90C3"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
            >
              <img
                className="img-responsive"
                src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/163424370_579638806303845_3203778093767521275_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=79nt2JWU3TcAX-ZDQph&_nc_ht=scontent-bos3-1.xx&oh=d470789c4e8f059145719b7ca9004ab6&oe=60DB90C3"
              />
            </a>

            <a
              className="gallery-item"
              data-src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/152495406_556678915266501_1967096318194036235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=krRsSnxQDg4AX8zqWQ9&_nc_ht=scontent-bos3-1.xx&oh=0eac719b4cd7438f1db37d849ff28359&oe=60DBC94B"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
            >
              <img
                className="img-responsive"
                src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/152495406_556678915266501_1967096318194036235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=krRsSnxQDg4AX8zqWQ9&_nc_ht=scontent-bos3-1.xx&oh=0eac719b4cd7438f1db37d849ff28359&oe=60DBC94B"
              />
            </a>

            <a
              className="gallery-item"
              data-src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/149348863_548031882797871_6102313069924439608_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Ki9VQQQMr3AAX9VFwzN&_nc_ht=scontent-bos3-1.xx&oh=cbc0eafa524b4de6d5c97fe508256088&oe=60DEE60A"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
            >
              <img
                className="img-responsive"
                src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/149348863_548031882797871_6102313069924439608_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Ki9VQQQMr3AAX9VFwzN&_nc_ht=scontent-bos3-1.xx&oh=cbc0eafa524b4de6d5c97fe508256088&oe=60DEE60A"
              />
            </a>

            <a
              className="gallery-item"
              data-src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/169917505_591129505154775_4763162004250357099_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pNhXIatGUsYAX-uKM1d&_nc_ht=scontent-bos3-1.xx&oh=3ae93c78438ac6b5af33ab0438152136&oe=60DCDE5D"
              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
            >
              <img
                className="img-responsive"
                src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/169917505_591129505154775_4763162004250357099_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pNhXIatGUsYAX-uKM1d&_nc_ht=scontent-bos3-1.xx&oh=3ae93c78438ac6b5af33ab0438152136&oe=60DCDE5D"
              />
            </a>
          </LightGallery>
        </div>
      </div>

      <div className="mx-auto py-12 max-w-7xl">
        <div className="space-y-5 sm:space-y-4 mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Support the fund
          </h2>
          <p className="text-xl text-gray-500">
            A central database of Palestinians and friends of Palestine in the
            diaspora by phone number and city to synchronize mobilization and
            organization.
          </p>
        </div>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto bg-white">
            {/* xs to lg */}
            <div className="max-w-2xl mx-auto space-y-8 lg:hidden">
              <div>
                <label
                  htmlFor="billing"
                  className="block text-sm font-medium text-gray-700"
                >
                  Billing cycle
                </label>
                <select
                  id="billing"
                  name="billing"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                  value={billing}
                  onChange={(e) => setBilling(e.target.value)}
                >
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              {tiers.map((tier) => (
                <section key={tier.name}>
                  <div className="p-4 border rounded mb-8">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">
                      {tier.name}
                    </h2>
                    <p className="mt-4">
                      <span className="text-4xl font-extrabold text-gray-900">
                        $
                        {billing === "monthly"
                          ? tier.priceMonthly
                          : tier.priceYearly}
                      </span>{" "}
                      <span className="text-base font-medium text-gray-500">
                        {billing === "monthly" ? "per month" : "per year"}
                      </span>
                    </p>
                    <a
                      href={tier.href}
                      className="mt-6 block border border-gray-800 rounded-md bg-gray-800 w-full py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                    >
                      Choose
                    </a>
                  </div>
                </section>
              ))}
            </div>

            {/* lg+ */}
            <div className="hidden lg:block">
              <table className="w-full h-px table-fixed">
                <thead>
                  <tr>
                    <th
                      className="pb-4 pe-6 text-sm font-medium text-gray-900 text-left"
                      scope="col"
                    >
                      <span>Billing cycle</span>
                    </th>
                    {tiers.map((tier) => (
                      <th
                        key={tier.name}
                        className="w-1/3 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                        scope="col"
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="border-t border-gray-200 divide-y divide-gray-200">
                  <tr>
                    <th
                      className="py-8 pe-6 text-sm font-medium text-gray-900 text-left align-top"
                      scope="row"
                    >
                      <div>
                        <label
                          htmlFor="billing"
                          className="block text-sm font-medium text-gray-700 hidden"
                        >
                          Billing
                        </label>
                        <select
                          id="billing"
                          name="billing"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                          value={billing}
                          onChange={(e) => setBilling(e.target.value)}
                        >
                          <option value="monthly">Monthly</option>
                          <option value="yearly">Yearly</option>
                        </select>
                      </div>
                    </th>
                    {tiers.map((tier) => (
                      <td
                        key={tier.name}
                        className="h-full py-8 px-6 align-top"
                      >
                        <div className="relative h-full w-full table">
                          <p className="mb-6">
                            <span className="text-4xl font-extrabold text-gray-900">
                              $
                              {billing === "monthly"
                                ? tier.priceMonthly
                                : tier.priceYearly}
                            </span>{" "}
                            <span className="text-base font-medium text-gray-500">
                              {billing === "monthly" ? "per month" : "per year"}
                            </span>
                          </p>
                          <a
                            href={tier.href}
                            className="flex-grow block w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                          >
                            Choose
                          </a>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
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
