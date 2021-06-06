import { useTranslation } from "next-i18next";
import { MainLayout } from "src/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Philosophy = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <h1 className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight">
        Our philosophy
      </h1>
      <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight mt-14 mb-5">
        What is it we are looking to accomplish?
      </h1>
      <p className="text-xl tracking-tight text-gray-500">
        We want to generate recurring solidarity capital from the diaspora &
        allies to continuously support Palestinian cooperatives in the
        agricultural sector.
      </p>
      <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight mt-14 mb-5">
        Why? What is the urgency?
      </h1>
      <p className="text-xl tracking-tight text-gray-500 mb-5">
        The theft of our resources and the destruction of our local production
        has left our economy{" "}
        <span className="underline">
          captive to foreign aid and dependent on importing goods
        </span>
        , mainly from the occupier.
      </p>
      <p className="text-xl tracking-tight text-gray-500">
        By directing the economic resources of the diaspora & allies into
        Palestinian production, we can regain sovereignty over our sustensance.
      </p>
      <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight mt-14 mb-5">
        Goals
      </h1>
      <ul className="list-disc list-inside text-xl tracking-tight text-gray-500">
        <li className="my-2">
          500-750 supporters by the end of the year by end of 2021
        </li>
        <li className="my-2">
          Invest in growing 1-2 agricultural cooperatives
        </li>
        <li className="my-2">
          Create a replicable model for at least 1 cooperative to expand it to
          other villages
        </li>
      </ul>

      <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight mt-14 mb-5">
        How we fund cooperatives
      </h1>
      <ul className="list-disc list-inside text-xl tracking-tight text-gray-500">
        <li className="my-2">
          <span className="underline">Equity-free</span>: we take no equity from
          the cooperatives we invest in
        </li>
        <li className="my-2">
          <span className="underline">Criteria</span>: must be an agricultural
          cooperative
        </li>
        <li className="my-2">
          <span className="underline">Process</span>: invest in coop → simplify
          coop's model → replicate coop
        </li>
      </ul>

      <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight mt-14 mb-5">
        The pillars we stand upon
      </h1>
      <ul className="list-disc list-inside text-xl tracking-tight text-gray-500">
        <li className="my-2">
          <span className="underline">Transparency</span>: a measure against
          ill-will and two-faced politics
        </li>
        <li className="my-2">
          <span className="underline">Cooperativism</span>: a framework for
          democratic workplaces and communal governance
        </li>
        <li className="my-2">
          <span className="underline">Unity</span>: achieving a whole larger
          than the sum of our parts
        </li>
        <li className="my-2">
          <span className="underline">
            Self-sufficiency {`&`} sustainability
          </span>
          : achieving food security and harmony with the environment
        </li>
      </ul>
      <div className="relative lg:col-span-1 mt-14 bg-gray-100 rounded p-5">
        <blockquote className="text-ggra">
          <p className="text-xl sm:text-xl">
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
