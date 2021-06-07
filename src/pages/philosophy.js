import { useTranslation } from "next-i18next";
import { MainLayout } from "src/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Philosophy = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <h1 className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight">
        {t("philosophy:title")}
      </h1>
      <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight mt-14 mb-5">
        {t("philosophy:section_one_title")}
      </h1>
      <p className="text-xl tracking-tight text-gray-500">
        {t("philosophy:section_one_description")}
      </p>
      <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight mt-14 mb-5">
        {t("philosophy:section_two_title")}
      </h1>
      <p className="text-xl tracking-tight text-gray-500 mb-5">
        {t("philosophy:section_two_description_1.1")}
        <span className="underline">
          {t("philosophy:section_two_description_1.1_underlined")}
        </span>
        {t("philosophy:section_two_description_1.2")}
      </p>
      <p className="text-xl tracking-tight text-gray-500">
        {t("philosophy:section_two_description_2")}
      </p>
      <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight mt-14 mb-5">
        {t("philosophy:section_three_title")}
      </h1>
      <ul className="list-disc list-inside text-xl tracking-tight text-gray-500">
        <li className="my-2">{t("philosophy:section_three_bullet_1")}</li>
        <li className="my-2">{t("philosophy:section_three_bullet_2")}</li>
        <li className="my-2">{t("philosophy:section_three_bullet_3")}</li>
      </ul>

      <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight mt-14 mb-5">
        {t("philosophy:section_four_title")}
      </h1>
      <ul className="list-disc list-inside text-xl tracking-tight text-gray-500">
        <li className="my-2">
          <span className="underline">
            {t("philosophy:section_four_bullet_1_title")}
          </span>{" "}
          {t("philosophy:section_four_bullet_1_description")}
        </li>
        <li className="my-2">
          <span className="underline">
            {t("philosophy:section_four_bullet_2_title")}
          </span>{" "}
          {t("philosophy:section_four_bullet_2_description")}
        </li>
        <li className="my-2">
          <span className="underline">
            {t("philosophy:section_four_bullet_3_title")}
          </span>{" "}
          {t("philosophy:section_four_bullet_3_description")}
        </li>
      </ul>

      <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight mt-14 mb-5">
        {t("philosophy:section_five_title")}
      </h1>
      <ul className="list-disc list-inside text-xl tracking-tight text-gray-500">
        <li className="my-2">
          <span className="underline">
            {t("philosophy:section_five_bullet_1_title")}
          </span>{" "}
          {t("philosophy:section_five_bullet_1_description")}
        </li>
        <li className="my-2">
          <span className="underline">
            {t("philosophy:section_five_bullet_2_title")}
          </span>{" "}
          {t("philosophy:section_five_bullet_2_description")}
        </li>
        <li className="my-2">
          <span className="underline">
            {t("philosophy:section_five_bullet_3_title")}
          </span>{" "}
          {t("philosophy:section_five_bullet_3_description")}
        </li>
        <li className="my-2">
          <span className="underline">
            {t("philosophy:section_five_bullet_4_title")}
          </span>{" "}
          {t("philosophy:section_five_bullet_4_description")}
        </li>
      </ul>
      <div className="relative lg:col-span-1 mt-14 bg-gray-100 rounded p-5">
        <blockquote className="text-ggra">
          <p className="text-xl sm:text-xl">
            &ldquo;{t("philosophy:quote")}&ldquo;
          </p>
          <footer className="mt-1">
            <p className="flex flex-col font-medium">
              <span>—&nbsp;&nbsp;{t("philosophy:quoter")}</span>
            </p>
          </footer>
        </blockquote>
      </div>
    </MainLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "philosophy"])),
  },
});

export default Philosophy;
