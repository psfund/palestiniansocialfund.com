import { MainLayout } from "src/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Plans from "src/components/Plans";

const Philosophy = () => {
  return (
    <MainLayout>
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
