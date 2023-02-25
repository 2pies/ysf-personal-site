import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'
import Image from 'next/image'

import img_artistBio_l from './img/artistBio_l.jpg'

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
          <Image src={img_artistBio_l} alt="" className="max-w-xl" />
          <p className="md:mt-12">
            {`Yeung graduated from RMIT University Bachelor of Arts (Fine Art). Yeung's creative works attempt to recognize the "body" see the as an object from different perspectives and observations, she explores relationships between the soul and the physique with her "body" and expresses it via various media. Her recent series comprises paintings, ceramics, video, sound, and behavioral art. Apart from participating in artistic creation, Yeung is also a performance artist.`}
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default Page
