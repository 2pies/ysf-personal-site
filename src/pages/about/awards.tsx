import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'
import Image from 'next/image'

import img_award_s from './img/award_s.jpg'
import cms from '@/cms/about.json'

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutStaticProps()),
      ...cms,
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
            {props.awards.map((exhibition, index) => (
              <li key={index}>- {exhibition}</li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default Page
