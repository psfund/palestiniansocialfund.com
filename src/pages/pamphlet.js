import { useEffect, useRef, useState } from "react";
import { MainLayout } from "src/layouts";

const navigation = [
  { name: "Introduction", href: "#introduction" },
  { name: "Economic & social control", href: "#economic-and-social-control" },
  { name: "Dependence on foreign aid", href: "#dependence-on-foreign-aid" },
  { name: "Our role", href: "#our-role" },
  { name: "Cooperative Farms", href: "#cooperative-farms" },
  { name: "Cooperativism", href: "#cooperativism" },
  { name: "Agroecology", href: "#agroecology" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pamphlet() {
  const [currentTab, setCurrentTab] = useState("Introduction");

  const sectionOneRef = useRef();
  const sectionTwoRef = useRef();
  const sectionThreeRef = useRef();
  const sectionFourRef = useRef();
  const sectionFiveRef = useRef();
  const sectionSixRef = useRef();
  const sectionSevenRef = useRef();

  const handleScroll = () => {
    if (sectionOneRef.current) {
      const sectionOneTop = sectionOneRef.current.getBoundingClientRect().top;
      const sectionTwoTop = sectionTwoRef.current.getBoundingClientRect().top;
      const sectionThreeTop =
        sectionThreeRef.current.getBoundingClientRect().top;
      const sectionFourTop = sectionFourRef.current.getBoundingClientRect().top;
      const sectionFiveTop = sectionFiveRef.current.getBoundingClientRect().top;
      const sectionSixTop = sectionSixRef.current.getBoundingClientRect().top;
      const sectionSevenTop =
        sectionSevenRef.current.getBoundingClientRect().top;
      const scrollY = window.scrollY;
      const pageHeight =
        window.document.body.scrollHeight - window.document.body.offsetHeight;

      if (sectionOneTop === 0 && currentTab !== "Introduction") {
        setCurrentTab("Introduction");
      } else if (
        sectionTwoTop === 0 &&
        currentTab !== "Economic & social control"
      ) {
        setCurrentTab("Economic & social control");
      } else if (
        sectionThreeTop === 0 &&
        currentTab !== "Dependence on foreign aid"
      ) {
        setCurrentTab("Dependence on foreign aid");
      } else if (sectionFourTop === 0 && currentTab !== "Our role") {
        setCurrentTab("Our role");
      } else if (sectionFiveTop === 0 && currentTab !== "Cooperative Farms") {
        setCurrentTab("Cooperative Farms");
      } else if (sectionSixTop === 0 && currentTab !== "Cooperativism") {
        setCurrentTab("Cooperativism");
      } else if (
        (sectionSevenTop === 0 && currentTab !== "Agroecology") ||
        scrollY >= pageHeight
      ) {
        setCurrentTab("Agroecology");
      }
    }
  };

  useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
  }, [currentTab]);

  return (
    <MainLayout>
      <div className="grid grid-cols-12">
        <div className="hidden md:inline-block md:col-span-3">
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
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="col-span-12 md:col-span-7">
          <div className="pb-8">
            <h1
              ref={sectionOneRef}
              id="introduction"
              className="sticky top-0 bg-white py-3 mb-6 font-bold text-3xl"
            >
              Introduction
            </h1>
            <div className="text-lg">
              <p className="mb-3">
                The path to liberation requires material support that is
                directed toward self-sustainability. The Palestinian Social Fund
                raises unconditional funding for cooperative farms in Palestine
                through grassroots efforts. These farms are started by youth who
                are returning to the land to reclaim food sovereignty and
                control their own destiny.
              </p>
              <blockquote className="my-10 text-xl text-center font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
                <i>
                  “Since the occupation of the West Bank and Gaza Strip in 1967,
                  the agricultural sector dropped from 53% of the GDP to 3.4% in
                  2016.”
                </i>
              </blockquote>
              <p className="mb-3">
                The occupation has continuously attacked Palestinian agriculture
                as a way to disconnect Palestinians from the land. Land theft,
                destruction of thousands of olive trees, and banning Palestinian
                indigenous practices in the name of environmentalism or
                "national security" are all ways the occupation uses to
                disenfranchise the Palestinian people. Since the occupation of
                the West Bank and Gaza Strip in 1967, the agricultural sector
                dropped from 53% of the GDP to 3.4% in 2016.
              </p>
            </div>
          </div>

          <div className="pb-8">
            <h1
              ref={sectionTwoRef}
              id="economic-and-social-control"
              className="sticky top-0 bg-white py-3 mb-6 font-bold text-3xl"
            >
              Economic & social control
            </h1>
            <div className="text-lg my-3">
              <p className="mb-3">
                After the Oslo Accords in 1993, the occupation continued to
                control the imports and exports of the Palestinian economy,
                forcing its own produce into the West Bank and Gaza and selling
                it at cheaper prices to drive Palestinian farmers out of
                business.
              </p>
              <p className="mb-3">
                About 80% of produce is from Israeli sources, which is a tactic
                to weaken Palestinian production and create a consumerist
                Palestinian population.
              </p>
              <p className="mb-3">
                Another form of social control Oslo facilitated was the creation
                of a private lending system, which encouraged a culture of
                consumption and pushed many people into the debt trap.
              </p>
              <p className="mb-3">
                This has caused the deformation of the social fabric in
                Palestinian society, driving the abandonment of strongly rooted
                communal values of solidarity and reciprocity, or Al-Ouna
                (العونة), in the pursuit of individual survival.
              </p>
              <p className="mb-3">
                As a result of these repressive tactics, lands were neglected
                after an increase of migration to the cities in search of jobs
                and resorting to work in Israeli settlements and cities.
              </p>
            </div>
          </div>

          <div className="pb-8">
            <h1
              ref={sectionThreeRef}
              id="dependence-on-foreign-aid"
              className="sticky top-0 bg-white py-3 mb-6 font-bold text-3xl"
            >
              Dependence on foreign aid
            </h1>
            <div className="text-lg my-3">
              <p className="mb-3">
                Oslo allowed foreign aid and outside investments to come into
                Palestine, thereby transforming Palestinian social institutions
                into passive recipients of aid, rather than empowering them to
                be productive actors in control of their developmental ends.
              </p>
              <p className="mb-3">
                This depedency has created donor-driven organizations that
                compromise to conditions that depoliticize the Palestinian
                struggle and undermine Palestinian self-determination.
              </p>
            </div>
          </div>

          <div className="pb-8">
            <h1
              ref={sectionFourRef}
              id="our-role"
              className="sticky top-0 bg-white py-3 mb-6 font-bold text-3xl"
            >
              Our role
            </h1>
            <div className="text-lg my-3">
              <p className="mb-3">
                The Palestinian Social Fund aims to involve Palestinians abroad
                in raising unconditional fundinf for cooperative farms for 3
                main reasons:
              </p>
              <ol className="list-decimal mb-3 pl-10">
                <li>Returning to and protecting the land</li>
                <li>
                  Providing a livelihood for workers that is tied to the land
                  and our communal values
                </li>
                <li>
                  Achieving food sovereignty and breaking the dependency on the
                  occupation’s economy for produce and employment
                </li>
              </ol>
              <p className="mb-3">
                These are concrete goals we have in Palestine and the
                Palestinian diaspora has a big role to play. Historically
                Palestinians in exile supported by sending remittances back home
                to support the steadfastness, or sumud (صمود) of our people
                while they struggle for liberation.
              </p>
              <p className="mb-3">
                This is crucial because Palestinians in the diaspora have
                largely been isolated after the Oslo Accords destroyed much of
                the institutions that allowed Palestinians abroad to engage in
                the struggle. We must reclaim our role by supporting the
                economic resistance of the youth on the ground.
              </p>
            </div>
          </div>

          <div className="pb-8">
            <h1
              ref={sectionFiveRef}
              id="cooperative-farms"
              className="sticky top-0 bg-white py-3 mb-6 font-bold text-3xl"
            >
              Cooperative Farms
            </h1>
            <div className="text-lg">
              <p className="mb-3">
                On a biweekly basis, you’ll find a farmer’s market set up on
                tables laid out in front of the cultural center in Ramallah. A
                number of agricultural cooperatives from the surrounding
                municipalities come to sell their organic produce to passersby
                and to regular customers that come out in their support. Most of
                these cooperatives are youth-led farms inspired by a surge of
                interest in new models of community-supported farming using
                agroecological methods.
              </p>
              <p className="mb-3">
                This farmer’s market isn’t just a place to buy organic produce,
                it’s a place to get a taste of what’s to come. The Palestinian
                youth today are paving the way toward establishing food
                sovereignty and reducing dependence on the products and
                employment of the occupation. They uphold their values and
                principles through a cooperative organizational model centered
                on equity amongst farmers themselves, between farmers and their
                community, and the environment.
              </p>
            </div>
          </div>

          <div className="pb-8">
            <h1
              ref={sectionSixRef}
              id="cooperativism"
              className="sticky top-0 bg-white py-3 mb-6 font-bold text-3xl"
            >
              Cooperativism
            </h1>
            <div className="text-lg">
              <p className="mb-3">
                Cooperativism is a way to organize production around strongly
                rooted communal ideals of solidarity and reciprocity. It applies
                a horizontal structure where all the workers and farmers have an
                equal ownership in the production.
              </p>
              <p className="mb-3">
                Al-Ouna (العونة) is the historical term used for cooperativism
                in Palestine, it has always been a part of our Palestinian
                character, especially in farming. Families would cooperate in
                their olive harvests and sing folk songs sending gratitude and
                good wishes to each other. They would do the same when roofing a
                house, which till this day is a celebration and the house's
                owner invites everyone to food after the roof is finished.
              </p>
              <p className="mb-3">
                The return to and protection of the land, under a cooperative
                framework means we’re returning to our roots.
              </p>
            </div>
          </div>

          <div className="pb-8">
            <h1
              ref={sectionSevenRef}
              id="agroecology"
              className="sticky top-0 bg-white py-3 mb-6 font-bold text-3xl"
            >
              Agroecology
            </h1>
            <div className="text-lg">
              <p className="mb-3">
                Agroecology is an agricultural method that mimics the natural
                cycles of the environment, in order to reuse waste and avoid
                external inputs.
              </p>
              <p className="mb-3">
                This method is a holistic approach to the problems that
                Palestinian farmers face. Agroecology pushes farmers away from
                using chemical fertilizers and pesticides that seep harmful
                chemicals into the food and soil. It also breaks the dependency
                on the occupation and outside corporations, who control these
                products and limit farmers to using seeds genetically modified
                to withstand the harsh chemicals.
              </p>
              <blockquote className="mt-10 text-xl text-center font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
                <i>
                  “There can be no liberation if we don’t have sovereignty over
                  our daily bread. Agroecology is a way towards food
                  sovereignty, which can then enable us to consider questions of
                  political liberation.”
                </i>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
