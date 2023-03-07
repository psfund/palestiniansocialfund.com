import { useRouter } from "next/router";
import { MainLayout } from "src/layouts";

const tabs = [
  { name: "Introduction", href: "/pamphlet/introduction" },
  { name: "Statistics", href: "/pamphlet/statistics" },
  {
    name: "Food Sovereignty",
    href: "/pamphlet/food-sovereignty",
  },
  {
    name: "Cooperative Farms",
    href: "/pamphlet/cooperative-farms",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pamphlet() {
  const { asPath } = useRouter();

  const isCurrentPath = (tab) => {
    return asPath.includes(tab.name.split(" ").join("-").toLowerCase());
  };

  const getCurrentPath = () => {
    return tabs.find((tab) => isCurrentPath(tab));
  };

  return (
    <MainLayout>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={getCurrentPath()?.name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="flex space-x-4" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  isCurrentPath(tab)
                    ? "bg-gray-100 text-gray-700"
                    : "text-gray-500 hover:text-gray-700",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
                aria-current={isCurrentPath(tab) ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>

        {getCurrentPath()?.href.includes("introduction") && (
          <div className="py-8 md:pr-80">
            <h1 className="mb-8 font-bold text-3xl">Introduction</h1>
            <div className="text-lg">
              <p className="mb-3">
                The Palestinian Social Fund is a volunteer-run non-profit
                organization.
              </p>
              <p className="mb-3">
                We raise unconditional funding for cooperative farms in
                Palestine through grassroots efforts. Because we believe that
                having sovereignty over our daily bread is inseparable from
                liberation.
              </p>
            </div>
            <h2 className="mt-8 mb-4 text-xl font-medium text-gray-500">
              Economic dependency & captivity
            </h2>
            <div className="text-lg my-3">
              <p className="mb-3">
                The occupation controls the imports and exports of the
                Palestinian economy and floods its own produce into the West
                Bank and Gaza, selling them at cheaper prices which forces
                Palestinian produce out of the market and farmers out of
                business.
              </p>
              <p className="mb-3">
                About 80% of produce is from Israeli sources, which has built an
                absolute dependency in the West Bank & Gaza on the Israeli
                economy. This is not an accident, but is done by design to
                weaken Palestinian production and create a consumerist
                Palestinian population.
              </p>
            </div>
            <h2 className="mt-8 mb-4 text-xl font-medium text-gray-500">
              Liberalization & NGO-ization of the economy
            </h2>
            <div className="text-lg my-3">
              <p className="mb-3">
                After the Oslo Accords in 1993, the economy has been liberalised
                through the introduction of banking and credit systems that have
                driven the Palestinian people into enormous debt.
              </p>
              <p className="mb-3">
                This has caused the deformation of social relations in
                Palestinian society, driving the abandonment of strongly rooted
                communal values of solidarity and reciprocity, or Al-Ouna
                (العونة), in the pursuit for one's individual interests.
              </p>
              <p className="mb-3">
                This has left lands neglected due to forced migration to
                Palestian cities in search of jobs, or resorting to work in
                Israeli settlements and cities for higher pay since the average
                salary in the West Bank is 10 shekels per hour ($3/hr), and even
                less in Gaza.
              </p>
              <p className="mb-3">
                We also saw the dissolution of grassroots civil organizations in
                the period after Oslo, which were autonomously run and provided
                a cradle for the 6-year First Intifada (1987-1993).
                Non-governmental Organizations (NGOs) backed by foreign aid
                started to take place of these organizations, who saw an
                opportunity to treat the Palestinian struggle as commodity that
                can be bought and sold. With no real long-term vision, NGOs are
                usually concerned with productivity centered metrics and
                distribute their funds with no focus on strengthening the
                foundation of Palestinian society.
              </p>
            </div>
            <h2 className="mt-8 mb-4 text-xl font-medium text-gray-500">
              The role of the Palestinian Social Fund
            </h2>
            <div className="text-lg my-3">
              <p className="mb-3">
                The Palestinian Social Fund aims to involve Palestinians abroad
                in financially supporting cooperative farms for 3 main reasons:
              </p>
              <ol className="list-decimal mb-3 pl-10">
                <li>Returning to and protecting the land</li>
                <li>
                  Providing a livelihood for workers that is tied to the land
                  and our communal values
                </li>
                <li>
                  Achieving food sovereignty and breaking the dependency on the
                  occupation’s economy for produce and labor
                </li>
              </ol>
              <p className="mb-3">
                And this is really crucial because Palestinians in the diaspora
                have largely been isolated after the Oslo Accords destroyed much
                of the institutions that allow Palestinians abroad to engage in
                the struggle and so this allows us to play a large role in
                supporting the economic resistance of the youth on the ground.
              </p>
              <p className="mb-3">
                And this is not new, historically Palestinians in exile played a
                significant role in sending remittances back home to support the
                steadfastness/sumud (صمود) of our People while they struggle for
                liberation.
              </p>
            </div>
          </div>
        )}

        {getCurrentPath()?.href.includes("statistics") && (
          <div className="py-8 md:pr-80">
            <h1 className="mb-8 font-bold text-3xl">Statistics</h1>
            <h2 className="mt-8 mb-4 text-xl font-medium text-gray-500">
              Food
            </h2>
            <div className="text-lg">
              <p className="mb-3">
                Today agriculture in Palestine makes up the smallest percentage
                of the Gross Domestic Product (GDP), however, this was not
                always the case.
              </p>
              <p className="mb-3">
                Below is a statistical comparison of agricultural output before
                the occupation of the West Bank versus after.
              </p>
            </div>
            <ul className="list-disc text-lg mb-3 pl-10">
              <li>Agriculture Percentage of GDP in 1967 = 53%</li>
              <li>Agriculture Percentage of GDP in 1994 = 10%</li>
            </ul>
            <p className="mb-3 pl-10 text-sm text-gray-500">
              Source: Political Economy of Palestine: Critical,
              Interdisciplinary, and Decolonial Perspectives
            </p>
            <div className="text-lg">
              <p className="mb-3">
                This sharp decrease in agriculture within Palestinian society
                after 1967 is not a coincidence—it is the occupation’s strategy
                of disenfranchising the Palestinian population to remove all
                forms of self-sustainability by controlling all resources,
                especially food.
              </p>
            </div>
            <h2 className="mt-8 mb-4 text-xl font-medium text-gray-500">
              Water
            </h2>
            <div className="text-lg">
              <p className="mb-3">
                The occupation also controls all the major water sources in the
                West Bank, especially the underground water aquifer where:
              </p>
              <ul className="list-disc mb-3 pl-10">
                <li>
                  80% of water of the acquifer is stolen and directed to
                  Israelis
                </li>
                <li>
                  Since 1967, the occupation prohibits the building of wells by
                  Palestinians
                </li>
                <li>
                  The average Palestinian receives 4-5X less water than the
                  average Israeli
                </li>
              </ul>
              <p className="mb-3">
                In Gaza, the situation is worse. 97% of water is contaminated
                due to the blockade and constant bombardment, which has left
                water systems delapidated.
              </p>
            </div>
          </div>
        )}

        {getCurrentPath()?.href.includes("food-sovereignty") && (
          <div className="py-8">Introduction</div>
        )}

        {getCurrentPath()?.href.includes("cooperative-farms") && (
          <div className="py-8">Introduction</div>
        )}
      </div>
    </MainLayout>
  );
}
