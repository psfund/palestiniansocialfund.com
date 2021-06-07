import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { Line } from "rc-progress";
import Link from "next/link";
import { useRouter } from "next/router";
import { MainLayout } from "src/layouts";
import { stripe } from "src/clients";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

const people = [
  {
    name: "saba_abbas",
    role: "project_analyst",
  },
  {
    name: "sami_fuller",
    role: "social_content_producer",
  },
  {
    name: "youcef_rahmani",
    role: "lawyer",
  },
  {
    name: "imad_dodin",
    role: "software_developer",
  },
  {
    name: "adam_albarghouthi",
    role: "software_developer",
  },
  {
    name: "you",
    role: "contribute",
  },
];

const tiers = [
  {
    name: "stone",
    priceMonthly: 11,
    hrefMonhtly: "https://buy.stripe.com/4gw4kc9s4fPQ796dQR",
    priceYearly: 104,
    hrefYearly: "https://buy.stripe.com/4gw180cEgfPQdxudQT",
  },
  {
    name: "slingshot",
    priceMonthly: 29,
    hrefMonhtly: "https://buy.stripe.com/8wM2c4dIk334bpmbIK",
    priceYearly: 310,
    hrefYearly: "https://buy.stripe.com/3cs8AsgUwcDE9heaEI",
  },
];

const Home = ({ balance }) => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  const [billing, setBilling] = useState("yearly");

  return (
    <MainLayout>
      <div className="pb-12">
        <h1 className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">
          {t("psf")}
        </h1>
        <p className="text-2xl tracking-tight text-gray-500 mb-3">
          {t("home:subtitle")}
        </p>
      </div>

      <div className="mx-auto py-12 max-w-7xl">
        <div className="space-y-5 sm:space-y-4 mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t("home:section_one_title")}
          </h2>
          <p className="text-xl text-gray-500">
            {t("home:section_one_description")}
          </p>
        </div>
        <div className="mb-5">
          <dl className="mt-5 grid grid-cols-2 border border-gray-300 rounded bg-white items-center overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-green-600">
                  ${balance.amount / 100} {balance.currency.toUpperCase()}
                  <span className="ms-2 text-sm font-medium text-gray-500">
                    {t("home:raised_of", { goal: "10,000" })}
                  </span>
                </div>
              </dd>
              <div
                className={`${locale === "ar" ? "progress-bar-rtl" : ""} mt-3`}
              >
                <Line
                  percent="69"
                  strokeWidth="2"
                  trailWidth="2"
                  strokeColor="#10B981"
                  trailColor="#D1FAE5"
                  strokeLinecap="square"
                  direction="rtl"
                />
              </div>
            </div>
            <div className="px-4 py-5 sm:p-6 ms-auto">
              <Link href="/fund">
                <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  {t("track_fund")}
                </a>
              </Link>
            </div>
          </dl>
        </div>
        <LightGallery
          speed={500}
          elementClassNames="grid grid-flow-row grid-cols-2 md:grid-cols-4 grid-rows-1 gap-4"
          plugins={[lgThumbnail, lgZoom]}
        >
          <a
            className="gallery-item"
            data-src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/149348863_548031882797871_6102313069924439608_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Ki9VQQQMr3AAX9VFwzN&_nc_ht=scontent-bos3-1.xx&oh=cbc0eafa524b4de6d5c97fe508256088&oe=60DEE60A"
            data-sub-html="<h4>Photo by Kanaan's Land</h4><p> The chicken coop building that was constructed by the founders themselves.</p>"
          >
            <img
              className="img-responsive"
              src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/149348863_548031882797871_6102313069924439608_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Ki9VQQQMr3AAX9VFwzN&_nc_ht=scontent-bos3-1.xx&oh=cbc0eafa524b4de6d5c97fe508256088&oe=60DEE60A"
            />
          </a>

          <a
            className="gallery-item"
            data-src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/163424370_579638806303845_3203778093767521275_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=79nt2JWU3TcAX-ZDQph&_nc_ht=scontent-bos3-1.xx&oh=d470789c4e8f059145719b7ca9004ab6&oe=60DB90C3"
            data-sub-html="<h4>Photo by Kanaan's Land</h4><p>The chickens enjoy the outdoors in the surrounding fields around the coop.</p>"
          >
            <img
              className="img-responsive"
              src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/163424370_579638806303845_3203778093767521275_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=79nt2JWU3TcAX-ZDQph&_nc_ht=scontent-bos3-1.xx&oh=d470789c4e8f059145719b7ca9004ab6&oe=60DB90C3"
            />
          </a>

          <a
            className="gallery-item"
            data-src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/152495406_556678915266501_1967096318194036235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=krRsSnxQDg4AX8zqWQ9&_nc_ht=scontent-bos3-1.xx&oh=0eac719b4cd7438f1db37d849ff28359&oe=60DBC94B"
            data-sub-html="<h4>Photo by Kanaan's Land</h4><p>The chickens enjoy the outdoors in the surrounding fields around the coop.</p>"
          >
            <img
              className="img-responsive"
              src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/152495406_556678915266501_1967096318194036235_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=krRsSnxQDg4AX8zqWQ9&_nc_ht=scontent-bos3-1.xx&oh=0eac719b4cd7438f1db37d849ff28359&oe=60DBC94B"
            />
          </a>

          <a
            className="gallery-item"
            data-src="https://scontent.fymq3-1.fna.fbcdn.net/v/t1.6435-9/163733696_579638736303852_8962526549451915618_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=rA3S9oj8dagAX_T4Ql5&_nc_ht=scontent.fymq3-1.fna&oh=4b180a485647ba57bce75460066802dc&oe=60E323D7"
            data-sub-html="<h4>Photo by Kanaan's Land</h4><p>The chickens enjoy the outdoors in the surrounding fields around the coop.</p>"
          >
            <img
              className="img-responsive"
              src="https://scontent.fymq3-1.fna.fbcdn.net/v/t1.6435-9/163733696_579638736303852_8962526549451915618_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=rA3S9oj8dagAX_T4Ql5&_nc_ht=scontent.fymq3-1.fna&oh=4b180a485647ba57bce75460066802dc&oe=60E323D7"
            />
          </a>
        </LightGallery>
        <div className="mt-5">
          <Link href="https://www.facebook.com/ardkanan007/">
            <a
              target="_blank"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#4267B2] hover:bg-[#375695] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              {t("home:visit_fb")}
            </a>
          </Link>
        </div>
      </div>

      <div className="mx-auto py-12 max-w-7xl">
        <div className="space-y-5 sm:space-y-4 mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t("home:section_two_title")}
          </h2>
          <p className="text-xl text-gray-500 mb-2">
            {t("home:section_two_description_1")}
          </p>
          <p className="text-xl text-gray-500">
            {t("home:section_two_description_2")}
          </p>
        </div>
        <div className="bg-white border rounded py-4 px-3">
          <div className="max-w-7xl mx-auto bg-white">
            {/* xs to lg */}
            <div className="max-w-2xl mx-auto space-y-8 lg:hidden">
              <div>
                <label
                  htmlFor="billing"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("common:billing_cycle")}
                </label>
                <select
                  id="billing"
                  name="billing"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                  value={billing}
                  onChange={(e) => setBilling(e.target.value)}
                >
                  <option value="monthly">{t("common:monthly")}</option>
                  <option value="yearly">{t("common:yearly")}</option>
                </select>
              </div>
              {tiers.map((tier) => (
                <section key={tier.name}>
                  <div className="p-4 border rounded mb-8">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">
                      {t(`common:${tier.name}`)}
                    </h2>
                    <p className="mt-4">
                      <span className="text-4xl font-extrabold text-gray-900">
                        $
                        {billing === "monthly"
                          ? tier.priceMonthly
                          : tier.priceYearly}
                      </span>{" "}
                      <span className="text-base font-medium text-gray-500">
                        {billing === "monthly"
                          ? t("common:monthly")
                          : t("common:yearly")}
                      </span>
                    </p>
                    <a
                      href={
                        billing === "monthly"
                          ? tier.hrefMonhtly
                          : tier.hrefYearly
                      }
                      className="mt-6 block border border-gray-800 rounded-md bg-gray-800 w-full py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                    >
                      {t("common:choose")}
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
                      className={`pb-4 pe-6 text-sm font-medium text-gray-900 ${
                        locale === "ar" ? "text-right" : "text-left"
                      }`}
                      scope="col"
                    >
                      <span> {t("common:billing_cycle")}</span>
                    </th>
                    {tiers.map((tier) => (
                      <th
                        key={tier.name}
                        className={`w-1/3 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 ${
                          locale === "ar" ? "text-right" : "text-left"
                        }`}
                        scope="col"
                      >
                        {t(`common:${tier.name}`)}
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
                          <option value="monthly">{t("common:monthly")}</option>
                          <option value="yearly">{t("common:yearly")}</option>
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
                              {billing === "monthly"
                                ? t("common:monthly")
                                : t("common:yearly")}
                            </span>
                          </p>
                          <a
                            href={
                              billing === "monthly"
                                ? tier.hrefMonhtly
                                : tier.hrefYearly
                            }
                            className="flex-grow block w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                          >
                            {t("common:choose")}
                          </a>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded bg-gray-100 text-sm text-gray-500 p-3">
            {t("home:one_time_disclaimer")}{" "}
            <a
              className="underline hover:text-gray-900"
              href="https://buy.stripe.com/3cseYQcEg4783WU7ss"
            >
              {t("common:click_here")}
            </a>
          </div>
        </div>

        <div className="mt-1">
          <p className="text-sm text-gray-400">
            {t("home:processing_disclaimer")}
          </p>
        </div>
      </div>

      <div className="mx-auto py-12 max-w-7xl">
        <div className="space-y-5 sm:space-y-4 mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t("home:section_three_title")}
          </h2>
          <p className="text-xl text-gray-500 mb-2">
            {t("home:section_three_description_1")}
          </p>
          <p className="text-xl text-gray-500">
            {t("home:section_three_description_2")}
          </p>
        </div>
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <div className="font-medium leading-6 space-y-1">
                  <h3>{t(`home:${person.name}`)}</h3>
                  <p className="text-gray-500">{t(`home:${person.role}`)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="my-14">
          <span className="text-gray-500">
            {t("home:or_connect_with_us_over")}
          </span>
        </div>
        <ul className="grid sm:grid-cols-2 gap-6 xl:gap-8">
          <li>
            <a
              href="https://github.com/psfund/palestiniansocialfund.com/discussions"
              target="_blank"
              className="flex items-start"
            >
              <svg
                fill="currentColor"
                className="flex-none text-gray-900 w-12 h-12"
              >
                <rect width="48" height="48" rx="12"></rect>
                <path
                  d="M23.997 12a12 12 0 00-3.792 23.388c.6.12.816-.264.816-.576l-.012-2.04c-3.336.72-4.044-1.608-4.044-1.608-.552-1.392-1.332-1.764-1.332-1.764-1.08-.744.084-.72.084-.72 1.2.084 1.836 1.236 1.836 1.236 1.08 1.824 2.808 1.296 3.492.996.12-.78.42-1.308.756-1.608-2.664-.3-5.46-1.332-5.46-5.928 0-1.32.468-2.388 1.236-3.228a4.32 4.32 0 01.12-3.168s1.008-.324 3.3 1.224a11.496 11.496 0 016 0c2.292-1.56 3.3-1.224 3.3-1.224.66 1.644.24 2.88.12 3.168.768.84 1.236 1.92 1.236 3.228 0 4.608-2.808 5.616-5.484 5.916.432.372.816 1.104.816 2.22l-.012 3.3c0 .312.216.696.828.576A12 12 0 0023.997 12z"
                  fill="currentColor"
                  className="text-gray-50"
                ></path>
              </svg>
              <div className="flex-auto ms-4">
                <h3>GitHub Discussions</h3>
                <p className="text-gray-500">{t("home:github_description")}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </MainLayout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const balance = await stripe.balance.retrieve();
  delete balance.available[0].source_types;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      balance: balance.available[0],
    },
  };
};

export default Home;
