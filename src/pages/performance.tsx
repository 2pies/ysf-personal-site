import Gallery from '@/components/Gallery'
import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { getPerformanceList } from '@/models/cms.server'
import { staticPage } from '@/typeUtils'

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutStaticProps()),
      performanceList: await getPerformanceList(),
    },
  }
}

export default function Index(props: staticPage<typeof getStaticProps>) {
  return (
    <Layout {...props}>
      <main>
        <Gallery
          list={props.performanceList.map((v) => ({
            ...v,
            title: `${v.title} (${v.year})`,
          }))}
        />
      </main>
    </Layout>
  )
}
