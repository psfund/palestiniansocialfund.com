import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BarLoader from "react-spinners/BarLoader";
import { useRouter } from "next/router";
import moment from "moment";
import axios from "axios";

import { MainLayout } from "src/layouts";

const Fund = () => {
  const [balance, setBalance] = useState(null);
  const [supporters, setSupporters] = useState(null);
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { locale } = useRouter();
  const { t } = useTranslation();

  moment.locale(locale);

  useEffect(() => {
    const getSummary = async () => {
      try {
        const summary = await axios.get("/api/summary");

        setBalance(summary.data.balance);
        setSupporters(summary.data.supporters);
        setPayments(summary.data.payments);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getSummary();
  }, []);

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

      <BarLoader
        color="#000"
        loading={isLoading}
        css={{
          display: "block",
          margin: "0 auto",
        }}
        height={4}
        width={100}
      />

      {!isLoading && (
        <>
          <div className="mb-8">
            <dl className="grid grid-cols-1 rounded bg-white overflow-hidden border border-gray-300 divide-y divide-gray-200 md:grid-cols-2 md:divide-y-0 md:divide-x">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-lg font-normal text-gray-900">
                  {t(`fund:balance`)}
                </dt>
                <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                  <div className="flex items-baseline text-2xl font-semibold text-green-600">
                    {balance}
                  </div>
                </dd>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-base font-normal text-gray-900">
                  {t(`fund:total_memberships`)}
                </dt>
                <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                  <div className="flex items-baseline text-2xl font-semibold text-green-600">
                    {supporters}
                  </div>
                </dd>
              </div>
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
                      {payments.map((payment, paymentIdx) => (
                        <tr key={paymentIdx}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {payment.amount / 100}{" "}
                            {payment.currency.toUpperCase()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-green-100 text-green-600">
                              {t(payment.status)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {moment.unix(payment.date).format("DD MMM YYYY")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </MainLayout>
  );
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "fund"])),
    },
  };
};

export default Fund;
