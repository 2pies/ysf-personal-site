import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'
import Image from 'next/image'
import img_cv_l from './img/cv_l.png'
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
        <Image src={img_cv_l} alt="" className="mb-8" />
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-xl font-bold underline">EXHIBITION</h2>
            <ul className="mb-8">
              {props.exhibitions.map((exhibition, index) => (
                <li key={index}>- {exhibition}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-bold underline">PERFORMANCE</h2>
            <ul className="">
              {props.performances.map((performance, index) => (
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
