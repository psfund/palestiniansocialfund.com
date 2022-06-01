import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { AcademicCapIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tiers = [
  {
    name: "student",
    priceMonthly: 6,
    hrefMonhtly: "https://buy.stripe.com/fZe4kc1ZCcDE3WU008",
    priceYearly: 65,
    hrefYearly: "https://buy.stripe.com/dR6g2U6fSbzA796fZ5",
  },
  {
    name: "seed",
    priceMonthly: 15,
    hrefMonhtly: "https://buy.stripe.com/8wM5oggUwcDE2SQbIS",
    priceYearly: 150,
    hrefYearly: "https://buy.stripe.com/28og2UcEgavwdxu9AJ",
  },
  {
    name: "tree",
    priceMonthly: 35,
    hrefMonhtly: "https://buy.stripe.com/14k03W8o09rs0KI28k",
    priceYearly: 400,
    hrefYearly: "https://buy.stripe.com/aEU3g8cEg0UW9hedR1",
  },
];

export default function Plans() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
            Support the farms
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Your support, big or small, matters.
          </p>
          <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
            <button
              type="button"
              className={classNames(
                billing === "monthly"
                  ? "bg-white border-gray-200 shadow-sm text-gray-900"
                  : "border border-transparent text-gray-700",
                "relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gray-500 focus:z-10 sm:w-auto sm:px-8"
              )}
              onClick={() => setBilling("monthly")}
            >
              Monthly support
            </button>
            <button
              type="button"
              className={classNames(
                billing === "yearly"
                  ? "bg-white border-gray-200 shadow-sm text-gray-900"
                  : "border border-transparent text-gray-700",
                "ml-0.5 relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gray-500 focus:z-10 sm:w-auto sm:px-8"
              )}
              onClick={() => setBilling("yearly")}
            >
              Yearly support
            </button>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={classNames(
                tier.name === "student"
                  ? "bg-gray-50"
                  : "bg-white border border-gray-200",
                "rounded-lg shadow-sm divide-y divide-gray-200"
              )}
            >
              <div className="p-6">
                <h2 className="flex items-center text-lg font-bold capitalize leading-6 font-medium text-gray-900">
                  {tier.name === "student" && (
                    <AcademicCapIcon className="h-8 w-8 mr-1" />
                  )}
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $
                    {billing === "monthly"
                      ? tier.priceMonthly
                      : tier.priceYearly}{" "}
                    USD
                  </span>{" "}
                  <span className="text-base font-medium text-gray-500">
                    {billing}
                  </span>
                </p>
                <a
                  href={
                    billing === "monthly" ? tier.hrefMonhtly : tier.hrefYearly
                  }
                  className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  Support
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
