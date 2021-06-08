import { useTranslation } from "next-i18next";
import { MainLayout } from "src/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ArrowSmUpIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import moment from "moment";
import { stripe } from "src/clients";

const Fund = ({ stats, charges }) => {
  const { locale } = useRouter();
  const { t } = useTranslation();

  moment.locale(locale);

  return (
    <MainLayout>
      <div className="pb-12">
        <h1 className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">
          {t("track_fund")}
        </h1>
        <p className="text-2xl tracking-tight text-gray-500">
          {t("fund:description")}
        </p>
      </div>

      <div className="mb-8">
        <dl className="grid grid-cols-1 rounded bg-white overflow-hidden border border-gray-300 divide-y divide-gray-200 md:grid-cols-2 md:divide-y-0 md:divide-x">
          {stats.map((item) => {
            return (
              <div key={item.name} className="px-4 py-5 sm:p-6">
                <dt className="text-base font-normal text-gray-900">
                  {t(`fund:${item.name}`)}
                </dt>
                <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                  <div className="flex items-baseline text-2xl font-semibold text-green-600">
                    {item.stat}
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>

      <div className="flex flex-col">
        <div className="mb-4">
          <h2>{t("recent_activity")}</h2>
        </div>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="border border-gray-300 overflow-hidden rounded">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className={`px-6 py-3 ${
                        locale === "ar" ? "text-right" : "text-left"
                      } text-xs font-medium text-gray-500 uppercase tracking-wider`}
                    >
                      {t("transaction")}
                    </th>
                    <th
                      scope="col"
                      className={`px-6 py-3 ${
                        locale === "ar" ? "text-right" : "text-left"
                      } text-xs font-medium text-gray-500 uppercase tracking-wider`}
                    >
                      {t("amount")}
                    </th>
                    <th
                      scope="col"
                      className={`px-6 py-3 ${
                        locale === "ar" ? "text-right" : "text-left"
                      } text-xs font-medium text-gray-500 uppercase tracking-wider`}
                    >
                      {t("status")}
                    </th>
                    <th
                      scope="col"
                      className={`px-6 py-3 ${
                        locale === "ar" ? "text-right" : "text-left"
                      } text-xs font-medium text-gray-500 uppercase tracking-wider`}
                    >
                      {t("date")}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {charges.map((charge, i) => (
                    <tr key={i}>
                      <td className="flex px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <ArrowSmUpIcon
                          className="me-2 flex-shrink-0 self-center h-5 w-5 bg-green-100 text-green-600 rounded-full"
                          aria-hidden="true"
                        />
                        {t("fund:payment")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {charge.amount / 100} {charge.currency.toUpperCase()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-green-100 text-green-600">
                          {t(charge.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {moment.unix(charge.date).format("DD MMM YYYY")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps = async ({ locale }) => {
  const balance = await stripe.balance.retrieve();

  const subscriptions = await stripe.subscriptions.list();

  const charges = await stripe.charges.list();
  const cleanCharges = charges.data.map((c) => ({
    amount: c.amount,
    status: c.paid ? "paid" : "",
    date: c.created,
    currency: c.currency,
  }));

  const stats = [
    {
      name: "balance",
      stat: `${
        (balance.available[0].amount + balance.pending[0].amount) / 100
      } ${balance.available[0].currency.toUpperCase()}`,
    },
    {
      name: "total_memberships",
      stat: subscriptions.data.length,
    },
  ];

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "fund"])),
      stats: stats,
      charges: cleanCharges,
    },
  };
};

export default Fund;
