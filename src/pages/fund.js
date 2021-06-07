import { useTranslation } from "next-i18next";
import { MainLayout } from "src/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ArrowSmUpIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const stats = [
  {
    name: "balance",
    stat: "$50,000",
  },
  {
    name: "total_memberships",
    stat: "71,897",
  },
];

const transactions = [
  {
    id: 1,
    amount: "$11",
    status: "paid",
    date: "Jul 12, 2021",
  },
  // More people...
];

const Fund = () => {
  const { locale } = useRouter();
  const { t } = useTranslation();

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
          {stats.map((item) => (
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
          ))}
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
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="flex px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <ArrowSmUpIcon
                          className="me-2 flex-shrink-0 self-center h-5 w-5 bg-green-100 text-green-600 rounded-full"
                          aria-hidden="true"
                        />
                        {t("fund:payment")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-green-100 text-green-600">
                          {t(transaction.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.date}
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "fund"])),
  },
});

export default Fund;
