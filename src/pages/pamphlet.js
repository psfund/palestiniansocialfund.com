import { useEffect, useRef, useState } from "react";
import { MainLayout } from "src/layouts";

const navigation = [
  { name: "Introduction", href: "#introduction" },
  { name: "Statistics", href: "#statistics" },
  { name: "Cooperative Farms", href: "#cooperative-farms" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pamphlet() {
  const [currentTab, setCurrentTab] = useState("Introduction");
  console.log(currentTab);
  const introRef = useRef();
  const statsRef = useRef();
  const coopFarmsRef = useRef();

  const handleScroll = () => {
    const introTop = introRef.current.getBoundingClientRect().top;
    const statsTop = statsRef.current.getBoundingClientRect().top;
    const coopFarmsTop = coopFarmsRef.current.getBoundingClientRect().top;

    if (introTop === 0 && currentTab !== "Introduction") {
      setCurrentTab("Introduction");
    } else if (statsTop === 0 && currentTab !== "Statistics") {
      setCurrentTab("Statistics");
    } else if (
      (coopFarmsTop === 0 || statsTop < 0) &&
      currentTab !== "Cooperative Farms"
    ) {
      setCurrentTab("Cooperative Farms");
    }
  };

  useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
  }, [currentTab]);

  return (
    <MainLayout>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <nav
            className="sticky top-0 pt-3 pr-4 space-y-1"
            aria-label="Sidebar"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  currentTab === item.name
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                <span className="truncate">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="col-span-8">
          <div className="pb-8">
            <h1
              ref={introRef}
              id="introduction"
              className="sticky top-0 bg-white py-3 mb-6 font-bold text-3xl"
            >
              Introduction
            </h1>
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

          <div className="pb-8">
            <h1
              ref={statsRef}
              id="statistics"
              className="sticky top-0 bg-white py-3 mb-6 font-bold text-3xl"
            >
              Statistics
            </h1>
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

          <div className="pb-8">
            <h1
              ref={coopFarmsRef}
              id="cooperative-farms"
              className="sticky top-0 bg-white py-3 mb-6 font-bold text-3xl"
            >
              Cooperative Farms
            </h1>
            <div className="text-lg">
              <p className="mb-3">
                Palestinian Social Fund seeks to strengthen the farmers who feed
                our communities and highlight the power they hold in overcoming
                the occupation and creating a self-sufficient Palestinian
                society. We work with local people who adapt agricultural
                techniques to suit the local area and its specific social,
                environmental, and economic conditions.
              </p>
              <p className="mb-3">
                On a biweekly basis, you’ll find a farmer’s market set on tables
                laid out in front of the cultural center in Ramallah. A number
                of agricultural cooperatives from the surrounding municipalities
                come to sell their organic produce to passersby and regular
                customers who show their support. Most of these cooperatives are
                youth-led farms inspired by a surge of interest in new models of
                community-supported farming using agroecological methods.
              </p>
            </div>

            <h2 className="mt-8 mb-4 text-xl font-medium text-gray-500">
              Agroecology
            </h2>
            <div className="text-lg">
              <p className="mb-3">
                This farmer’s market isn’t just a place to buy organic produce,
                it’s a place to get a taste of what’s to come. The Palestinian
                youth today are paving the way toward establishing food
                sovereignty and reducing dependence on the products and
                employment of the occupation. They uphold their values and
                principles through a cooperative organizational model centered
                on equity amongst farmers themselves, and between farmers and
                their communities.
              </p>
            </div>

            <h2 className="mt-8 mb-4 text-xl font-medium text-gray-500">
              Cooperativism
            </h2>
            <div className="text-lg">
              <p className="mb-3">
                This farmer’s market isn’t just a place to buy organic produce,
                it’s a place to get a taste of what’s to come. The Palestinian
                youth today are paving the way toward establishing food
                sovereignty and reducing dependence on the products and
                employment of the occupation. They uphold their values and
                principles through a cooperative organizational model centered
                on equity amongst farmers themselves, and between farmers and
                their communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
