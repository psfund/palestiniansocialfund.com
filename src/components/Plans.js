import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

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
    hrefMonhtly: "https://buy.stripe.com/3cs03W0Vy47850YeUZ",
    priceYearly: 310,
    hrefYearly: "https://buy.stripe.com/cN2dUM8o0dHI7969AG",
  },
];

export default function Plans(props) {
  const { t } = useTranslation();
  const [billing, setBilling] = useState("yearly");
  const { locale } = useRouter();

  return (
    <>
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
                      billing === "monthly" ? tier.hrefMonhtly : tier.hrefYearly
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
                    <td key={tier.name} className="h-full py-8 px-6 align-top">
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
    </>
  );
}
