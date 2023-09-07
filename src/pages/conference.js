import { MainLayout } from "src/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { ArrowRightIcon } from "@heroicons/react/outline";

const Conference = () => {
  return (
    <MainLayout>
      <Head>
        <title>Support the Conference | Palestinian Social Fund</title>
      </Head>

      <div className="pb-12">
        <h1 className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">
          Support the Conference for Social Movements and the Struggle for
          Alternative Economies
        </h1>
        <p className="mt-5 text-xl text-gray-500">
          This will be the 4th international conference of its kind held in
          Ramallah, Palestine. An event that will raise the bar on the thought
          and practice of carving an alternative economic path in Palestine that
          is true to the cause.
        </p>
      </div>

      <div className="flex">
        <a
          className="flex items-center bg-black py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
          href="https://donate.stripe.com/28o8As1ZCfPQ9he3cq"
          target="_blank"
        >
          Support the Conference
          <ArrowRightIcon className="ms-2 h-4 w-4" />
        </a>
      </div>
    </MainLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default Conference;
