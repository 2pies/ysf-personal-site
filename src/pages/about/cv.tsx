import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'
import Image from 'next/image'
import img_cv_l from './img/cv_l.png'

const exhibitions = [
  `2021 Phantom, JCCAC, Hong Kong`,
  `2021 Displaced-Mayflower 400, Southampton, UK`,
  `2021 ‘Storm’ Rachel Gadsden &the Deluge Collective, UK`,
  `2020 White, JCCAC, Hong Kong`,
  `2020 沉暮光雲, Foo Tak Building, Hong Kong`,
  `2020 Cross All Borders 2020: Dare to Create!, JCCAC, Hong Kong`,
  `2019 ‘Body Schema’ Solo Exhibition, Diana Cheung Experimental Gallery, Hong Kong`,
  `2018 FRESH TREND 2018 HK, Hong Kong City Hall, Hong Kong`,
  `2018 SOMETIMES IRRELEVANT, Pao Galleries, Hong Kong`,
  `2016 Cross All Borders: Hong Kong Festival Showcasing New Visual Artists with Disabilities, JCCAC, Hong Kong`,
  `2015 Agnès b. RUE DE MARSEILLE, K11, Hong Kong`,
  `2015 口足畫藝－彩繪生命色彩展覽, Citywalk gallery, Hong Kong`,
  `2014 傷健同行畫展」, Hong Kong Central Library, Hong Kong`,
  `2012 MFPA Exhibition, Sun Yat-sen Memorial Hall, Taipei`,
  `2012 Cross All Borders: Hong Kong Festival Showcasing New Visual Artists with Disabilities, JCCAC, Hong Kong`,
  `2010 Cross All Borders: Hong Kong Festival Showcasing New Visual Artists with Disabilities, JCCAC, Hong Kong`,
  `2009 Embracing Life – contemplation In Drizzle Art Exhibition at the Chinese Cultural of Greater Toronto.`,
]

const performances = [
  `2022 “Turn as Turn”, CCDC, Hong Kong`,
  `2022 “Fragilely Connected”, Pak Kong Garden, Hong Kong`,
  `2021 “Untitled”, 5+2 studio, Hong Kong`,
  `2021 “I’m fine.” , Per.platforme, Videotage, Hong Kong`,
  `2021 “Disc’, Per.platforme, 135YCS, Hong Kong`,
  `2021 ‘Two World’, Phantom, JCCAC, Hong Kong`,
  `2019 ‘In vain’, South Island Art Day, Art statements , Wong Chuk Hang, Hong Kong`,
  `2018 ‘Inside the wall’, South Island Art Day , Art statements , Wong Chuk Hang, Hong Kong`,
  `2017 <STRANGERS IN THE GARDEN 2- Black Milk & White Coal>Exchange Performance Project , HK BUTOH SEASON 2017, Tong Three, Hong Kong`,
  `2017 WE DANCE AT FREESPACE HAPPENING, Westkowloon, Hong Kong `,
  `2016 OPEN DANCE＃16 A Barrier – free Inclusive Dance Party, Westkowloon, Hong Kong`,
]

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutStaticProps()),
    },
  }
}

const Page = (props: staticPage<typeof getStaticProps>) => {
  return (
    <Layout {...props}>
      <main>
        <Image src={img_cv_l} alt="" className="mb-8" />
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-xl font-bold">EXHIBITION</h2>
            <ul className="mb-8">
              {exhibitions.map((exhibition, index) => (
                <li key={index}>- {exhibition}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-bold">PERFORMANCE</h2>
            <ul className="">
              {performances.map((performance, index) => (
                <li key={index}>- {performance}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Page
