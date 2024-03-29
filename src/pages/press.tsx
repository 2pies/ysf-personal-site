import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { getPressPage } from '@/models/cms.server'
import { staticPage } from '@/typeUtils'
import Image from 'next/image'

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutStaticProps()),
      cms: await getPressPage(),
    },
  }
}

export default function Index(props: staticPage<typeof getStaticProps>) {
  const { cms } = props
  return (
    <Layout {...props}>
      <main className="container">
        <div className="relative mb-8 aspect-video w-full">
          <Image src={cms.banner} alt="" fill />
        </div>
        <div className="flex flex-col gap-y-4">
          {cms.news.map((press) => (
            <div key={press.title} className="flex flex-col gap-y-1">
              <a
                href={press.url}
                className="text-gray-700 underline hover:text-blue-700"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="font-bold">{press.title}</h2>
              </a>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}
