import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'
import Image from 'next/image'

import img_artistBio_l from './img/artistBio_l.jpg'
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
        <div className="flex flex-col items-center justify-center">
          <Image src={img_artistBio_l} alt="" className="max-w-xl" />
          <p className="md:mt-12">{props.bio}</p>
        </div>
      </main>
    </Layout>
  )
}

export default Page
