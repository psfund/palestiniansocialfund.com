import { useTranslation } from "next-i18next";
import { MainLayout } from "src/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Philosophy = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <h1 className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-10">
        Our philosophy
      </h1>
      <p className="text-2xl tracking-tight text-gray-500 mb-5">
        Unite the efforts and activities of Palestinian communities around the
        world
      </p>
      <p className="text-xl tracking-tight text-gray-400 italic mb-5">By</p>
      <p className="text-2xl tracking-tight text-gray-500 mb-5">
        Pooling capital and resources across the Palestinian diaspora
      </p>
      <p className="text-xl tracking-tight text-gray-400 italic mb-5">
        In order to
      </p>
      <p className="text-2xl tracking-tight text-gray-500">
        Fund, develop and revive the agricultural foundation of the Palestinian
        economy.
      </p>
      <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight mt-14 mb-5">
        The pillars we stand upon:
      </h1>
      <ul class="list-disc list-inside text-2xl tracking-tight text-gray-500">
        <li className="my-2">
          <span className="underline">Transparency</span>, a measure against
          ill-will and two-faced politics
        </li>
        <li className="my-2">
          <span className="underline">Cooperativism</span>, a framework for
          democratic workplaces and communal governance
        </li>
        <li className="my-2">
          <span className="underline">Unity</span>, achieving a whole larger
          than the sum of our parts
        </li>
        <li className="my-2">
          <span className="underline">
            Self-sufficiency {`&`} sustainability
          </span>
          , achieving food security and harmony with the environment
        </li>
      </ul>
      <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight mt-14 mb-5">
        Main activities:
      </h1>
      <ul class="list-disc list-inside text-2xl tracking-tight text-gray-500">
        <li className="my-2">
          Building open-source software tools to help diaspora Palestinians pool
          their capital and resources
        </li>
        <li className="my-2">
          Funding and scaling agricultural cooperatives in Palestine with a
          focus on rural villages
        </li>
      </ul>
      <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight mt-14 mb-5">
        How we operate:
      </h1>
      <p className="text-2xl tracking-tight text-gray-500 mb-5">
        We’re a volunteer-based non-profit that believes in a united economic
        front for the Palestinian cause. Email us at{" "}
        <a className="underline" href="mailto:psfund@protonmail.com">
          psfund@protonmail.com
        </a>{" "}
        to contribute.
      </p>
      <div className="relative lg:col-span-1 mt-14">
        <blockquote className="mt-6 text-ggra">
          <p className="text-xl font-medium sm:text-2xl">
            &ldquo;You own something in this world... so rise!&ldquo;
          </p>
          <footer className="mt-1">
            <p className="flex flex-col font-medium">
              <span>—&nbsp;&nbsp;Ghassan Kanafani</span>
            </p>
          </footer>
        </blockquote>
      </div>
    </MainLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Philosophy;
