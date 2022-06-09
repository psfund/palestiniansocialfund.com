import { MainLayout } from "src/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Plans from "src/components/Plans";

const Philosophy = () => {
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

export default Philosophy;
