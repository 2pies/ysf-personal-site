import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'
import Image from 'next/image'

import img_award_s from './img/award_s.jpg'

const awards = [
  `2016 Cross All Borders: Hong Kong Festival Showcasing New Visual Artists with Disabilities (Golden Award)`,
  `2012 Cross All Borders: Hong Kong Festival Showcasing New Visual Artists with Disabilities (bronze Award)`,
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
      <main className="container">
        <div className="flex flex-col items-center justify-center">
          <Image src={img_award_s} alt="" className="max-w-xl" />
          <ul className="mb-8 flex flex-col gap-4 md:mt-12">
            {awards.map((exhibition, index) => (
              <li key={index}>- {exhibition}</li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default Page
