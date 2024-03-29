import { MainLayout } from "src/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import Plans from "src/components/Plans";

const Support = () => {
  return (
    <MainLayout>
      <Head>
        <title>Support the farms | Palestinian Social Fund</title>
      </Head>

      <Plans />
    </MainLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default Support;
