import { useTranslation } from "next-i18next";
import { MainLayout } from "src/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Plans from "src/components/Plans";

const Philosophy = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="pb-12">
        <h1 className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">
          {t("home:section_two_title")}
        </h1>
        <p className="text-2xl tracking-tight text-gray-500 mb-2">
          {t("home:section_two_description_1")}
        </p>
        <p className="text-2xl tracking-tight text-gray-500">
          {t("home:section_two_description_2")}
        </p>
      </div>
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
