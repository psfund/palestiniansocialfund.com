import { MainLayout } from "src/layouts";

const milestones = [
  {
    id: 20,
    date: "Mar 01, 2024",
    description: `Launched our second campaign, Long Live Our Workers, to raise $20,000 to help provide work opportunities at the cooperatives for Gazan workers stranded in the West Bank during the war on Gaza.`,
    url: "https://www.instagram.com/p/C3-kRl-L-ng",
  },
  {
    id: 19,
    date: "Feb 26, 2024",
    description: `We raised $45,000 thanks to pouring support of people in the last 5-months during the war on Gaza, a huge milestone in the fund. The money has already been sent to help develop different cooperatives.`,
    url: "",
  },
  {
    id: 18,
    date: "Feb 03, 2024",
    description: `Community members and youth joined us for a film screening and discussion on the
      significance of cooperative farming in the occupied West Bank.
      Cohosted by the Palestinian Social Fund, the Popular Art Center,
      and the Palestinian Youth Movement, we discussed the nature of agriculture and
      ecological practices as a form of popular resistance and steadfastness
      against the exploitation, liberalization and destruction of our natural
      resources and economy at the hands of the Zionist regime.
      
      The path to liberation is through our people’s struggle to remain steadfast 
      on their land. Our deep-rooted connection to our land enables us to fight for
      full liberation and return! ✊ 🇵🇸`,
    url: "https://www.instagram.com/p/C27whynonIX",
  },
  {
    id: 17,
    date: "Aug 31, 2023",
    description: `We exceeded our goal for the Raise the Yield Campaign by 70%, riasing $24,000. The money was used to help purchase 2 cows for the Duma Cooperative which had its barns demolished on top of its cows, 2 greenhouses and toolings for a various other cooperatives.`,
    url: "https://www.instagram.com/p/CwnaI_tAAwI",
  },
  {
    id: 16,
    date: "Apr 11, 2023",
    description:
      "Launched our first campaign for 2023, called Raise the Yield Campaign, to raise $14,000 to help purchase 2 greenhouses for cooperatives in Madama and Kufr Ni'ma.",
    url: "",
  },
  {
    id: 15,
    date: "Mar 14, 2023",
    description:
      'A representative of the Palestinian Social Fund spoke on a panel entitled "Young Feminist Resistance in Occupied Palestine: Imagining a Future of Liberation and Radical Love," organized as a side event to the UN Commission on the Status of Women on 14th March, 2023.',
    url: "",
  },
  {
    id: 14,
    date: "Mar 05, 2023",
    description:
      "The PSF was a part of a panel hosted by the DSA BDS & Palestine Solidarity group, where $700 USD were raised from attendees in solidarity.",
    url: "https://www.instagram.com/p/CpEN1Y2tCXu/",
  },
  {
    id: 13,
    date: "Feb 12, 2023",
    description:
      "The $6000 raised in 2022 were used to purchase a 1/2 dunam greenhouse for Ard Al Ya's cooperative in Saffa to help increase their yield in the coming season.",
    url: "https://www.instagram.com/p/CokplCuJsFq/",
  },
  {
    id: 12,
    date: "Nov 28, 2022",
    description:
      "Sent our first big sum of $6000 USD, thanks to all the supporters, in order to help cooperatives purchase seeds, greenhouses, irrigation networks, organic fertilizers, and tools.",
    url: "",
  },
  {
    id: 11,
    date: "Sep 15, 2022",
    description:
      "Hosted a 2nd information session about the Mondragon cooperative for 17 cooperatives in Palestine at the Cooperative Work Camp run by the Youth Partnership Forum",
    url: "https://drive.google.com/file/d/1auD6J8mTRfBqymnr_UB-8ncwtUkpUcZU/view?usp=sharing",
  },
  {
    id: 10,
    date: "Aug 3, 2022",
    description:
      "Published the transcript of our first virtual meetup (from Jan 28, 2022) in Jadaliyya in Arabic and in Science for the People Magazine in English",
    url: [
      "https://www.jadaliyya.com/Details/44342",
      "https://magazine.scienceforthepeople.org/vol25-1-the-soil-and-worker/agroecology-from-palestine-to-the-diaspora/",
    ],
  },
  {
    id: 9,
    date: "Jul 26, 2022",
    description:
      "Partnered with Popular Art Centre and Partnership Youth Forum in Ramallah to help fund cooperative farms",
    url: [
      "https://www.facebook.com/FADOC1726/",
      "https://www.facebook.com/PopularArtCentre/",
    ],
  },
  {
    id: 8,
    date: "Jun 9, 2022",
    description: "Launch Instagram account and reached 200+ followers",
    url: "https://www.instagram.com/palestiniansocialfund/",
  },
  {
    id: 7,
    date: "Mar 29, 2022",
    description:
      "Hosted an information session about the Mondragon cooperative with the Popular Art Centre and Palestinian cooperatives",
    url: "https://docs.google.com/presentation/d/1JdXJOgqpQJTxuDfdZR1rqxEDSDZOeKj0Zfx-LatTpns/edit?usp=sharing",
  },
  {
    id: 6,
    date: "Jan 28, 2022",
    description: "Hosted a virtual meetup for Palestinian cooperatives",
    url: "https://drive.google.com/file/d/1_82i3nw84ahgpsaFTgLWkq12waS4jLOa/view?usp=sharing",
  },
  {
    id: 5,
    date: "Feb 10, 2022",
    description:
      "Supported 2 cooperatives in Palestine with 3000 shekels ($1.2k CAD); Farm of Life (مزرعة الحياة) to recover from lost harvest due to frost and Roots Greenhouse (مشتل جذور) to purchase seeds",
    url: [
      "https://www.facebook.com/مشتل-جذور-104157541510260",
      "https://www.facebook.com/BurinFarm",
    ],
  },
  {
    id: 4,
    date: "Mar 10, 2022",
    description: "Reached $2k CAD total raised from recurring support",
    url: "https://palestiniansocialfund.com/fund",
  },
  {
    id: 3,
    date: "Jan 31, 2022",
    description:
      "Raised $10k CAD for Hakoura Organic Farm in Greece through Gofundme",
    url: "https://www.gofundme.com/f/palestinian-cooperative-farm-in-greece",
  },
  {
    id: 2,
    date: "Oct 27, 2021",
    description: "Reached 10 recurring supporters",
    url: "https://palestiniansocialfund.com/fund",
  },
  {
    id: 1,
    date: "Jan 27, 2021",
    description: "Launched the website",
    url: "",
  },
];

export default function Milestones() {
  return (
    <MainLayout>
      <div className="flex flex-col">
        {milestones.map((m) => (
          <div className="p-4 rounded-md hover:bg-gray-50">
            <p className="mb-2 text-gray-500 border-l-2 border-l-gray-300 ps-3">
              {m.date}
            </p>
            <p className="text-base font-medium">{m.description}</p>
            <div className="flex flex-col">
              {!Array.isArray(m.url) && (
                <a
                  href={m.url}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700"
                >
                  {m.url}
                </a>
              )}
              {Array.isArray(m.url) &&
                m.url.map((u) => (
                  <a
                    href={u}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {u}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
