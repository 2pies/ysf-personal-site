import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'

import Gallery from '@/components/Gallery'
import { getWorkList } from '@/models/cms.server'

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutStaticProps()),
      workList: await getWorkList(),
    },
  }
}

export default function Index(props: staticPage<typeof getStaticProps>) {
  return (
    <Layout {...props}>
      <main>
        <Gallery
          list={props.workList.map((v) => ({
            ...v,
            title: `${v.title} (${v.year})`,
          }))}
        />
      </main>
    </Layout>
  )
}
