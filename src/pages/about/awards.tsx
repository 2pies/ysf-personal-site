import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'
import Image from 'next/image'

import img_award_s from './img/award_s.jpg'
import cms from 'public/cms/about.json'

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
        <div className="flex flex-col items-center justify-center pt-4">
          <Image src={img_award_s} alt="" className="max-w-[20rem]" />
          <ul className="mb-8 flex flex-col gap-2 md:mt-12 md:px-24">
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
