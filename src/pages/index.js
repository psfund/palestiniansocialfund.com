import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MainLayout } from "src/layouts";

const Home = () => {
  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="mt-4 text-6xl tracking-tight font-extrabold text-black sm:mt-5 sm:leading-none lg:mt-6 xl:text-8xl">
                Palestinian <br />
                Social <br />
                Fund
              </h1>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="bg-white sm:w-full sm:mx-auto sm:rounded-md sm:overflow-hidden">
              <div className="flex-1 p-4 border rounded-md border-gray-300">
                <p className="text-2xl tracking-tight font-medium border-r-2 border-gray-50 mb-3">
                  The Palestinian Social Fund aims to financially support the
                  initiatives of Palestinian cooperative farms.
                </p>
                <ul className="ps-3 list-disc list-inside">
                  <li className="text-lg mb-2 tracking-tight">
                    We don’t take salaries.{" "}
                  </li>
                  <li className="text-lg mb-2 tracking-tight">
                    We don’t accept conditions.{" "}
                  </li>
                  <li className="text-lg mb-2 tracking-tight">
                    We don’t make conditions.{" "}
                  </li>
                  <li className="text-lg mb-2 tracking-tight">
                    We don’t take money from organizations or big donors.{" "}
                  </li>
                  <li className="text-lg mb-2 tracking-tight">
                    Our fund’s success will be determined by the people’s
                    solidarity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
};

export default Home;
