import { MainLayout } from "src/layouts"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/line-clamp'),
    ],
  }
  ```
*/
const milestones = [
  {
    id: 12,
    date: 'Nov 28, 2022',
    description: 'Sent our first big sum of $6000 USD thanks to all the supporters in order to help cooperatives purchase seeds, greenhouses, irrigation networks, organic fertilizers, and tools.',
    url: ''
  },
  {
    id: 11,
    date: 'Sep 15, 2022',
    description: 'Hosted a 2nd information session about the Mondragon cooperative for 17 cooperatives in Palestine at the Cooperative Work Camp run by the Youth Partnership Forum',
    url: 'https://drive.google.com/file/d/1auD6J8mTRfBqymnr_UB-8ncwtUkpUcZU/view?usp=sharing'
  },
  {
    id: 10,
    date: 'Aug 3, 2022',
    description: 'Published the transcript of our first virtual meetup (from Jan 28, 2022) in Jadaliyya in Arabic and in Science for the People Magazine in English',
    url: [
      'https://www.jadaliyya.com/Details/44342',
      'https://magazine.scienceforthepeople.org/vol25-1-the-soil-and-worker/agroecology-from-palestine-to-the-diaspora/'
    ]
  },
  {
    id: 9,
    date: 'Jul 26, 2022',
    description: 'Partnered with Popular Art Centre and Partnership Youth Forum in Ramallah to help fund cooperative farms',
    url: [
      'https://www.facebook.com/FADOC1726/',
      'https://www.facebook.com/PopularArtCentre/'
    ]
  },
  {
    id: 8,
    date: 'Jun 9, 2022',
    description: 'Launch Instagram account and reached 200+ followers',
    url: 'https://www.instagram.com/palestiniansocialfund/'
  },
  {
    id: 7,
    date: 'Mar 29, 2022',
    description: 'Hosted an information session about the Mondragon cooperative with the Popular Art Centre and Palestinian cooperatives',
    url: 'https://docs.google.com/presentation/d/1JdXJOgqpQJTxuDfdZR1rqxEDSDZOeKj0Zfx-LatTpns/edit?usp=sharing'
  },
  {
    id: 6,
    date: 'Jan 28, 2022',
    description: 'Hosted a virtual meetup for Palestinian cooperatives',
    url: 'https://drive.google.com/file/d/1_82i3nw84ahgpsaFTgLWkq12waS4jLOa/view?usp=sharing'
  },
  {
    id: 5,
    date: 'Feb 10, 2022',
    description: 'Supported 2 cooperatives in Palestine with 3000 shekels ($1.2k CAD); Farm of Life (مزرعة الحياة) to recover from lost harvest due to frost and Roots Greenhouse (مشتل جذور) to purchase seeds',
    url: [
      'https://www.facebook.com/مشتل-جذور-104157541510260',
      'https://www.facebook.com/BurinFarm'
    ]
  },
  {
    id: 4,
    date: 'Mar 10, 2022',
    description: 'Reached $2k CAD total raised from recurring support',
    url: 'https://palestiniansocialfund.com/fund'
  },
  {
    id: 3,
    date: 'Jan 31, 2022',
    description: 'Raised $10k CAD for Hakoura Organic Farm in Greece through Gofundme',
    url: 'https://www.gofundme.com/f/palestinian-cooperative-farm-in-greece'
  },
  {
    id: 2,
    date: 'Oct 27, 2021',
    description: 'Reached 10 recurring supporters',
    url: 'https://palestiniansocialfund.com/fund'
  },
  {
    id: 1,
    date: 'Jan 27, 2021',
    description: 'Launched the website',
    url: 'https://palestiniansocialfund.com'
  },
]
  
export default function Milestones() {
  return (
    <MainLayout>
      <ul role="list" className="divide-y divide-gray-200">
        {milestones.map((message) => (
          <li
            key={message.id}
            className="bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50"
          >
            <div className="flex justify-between space-x-3">
              <div className="min-w-0 flex-1">
                {
                  Array.isArray(message.url) &&
                    <div className="block focus:outline-none">
                      <p className="truncate text-sm font-medium text-gray-900">{message.description}</p>
                    </div>
                }
                {
                  !Array.isArray(message.url) &&
                    <a href={message.url} target="_blank" className="block focus:outline-none">
                      <p className="truncate text-sm font-medium text-gray-900">{message.description}</p>
                    </a>
                }
              </div>
              <time className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                {message.date}
              </time>
            </div>
            {Array.isArray(message.url) &&
              <div className="mt-1">
                {
                  message.url.map((u) =>
                    <a href={u} target="_blank" className="mt-1 text-sm text-blue-600 cursor-pointer line-clamp-2">
                      {u}
                    </a>
                  )
                }
              </div>
            }
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}
  