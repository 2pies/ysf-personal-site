import { getPerformanceList } from '@/models/cms.server'
import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'
import { type GetStaticPropsContext } from 'next'
import { parseHtml } from '@/utils/html-parser'

export async function getStaticPaths() {
  const workList = await getPerformanceList()

  const paths = workList.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async (props: GetStaticPropsContext) => {
  const workList = await getPerformanceList()
  const work = workList.find((v) => v.slug === props.params?.slug)
  if (!work) throw new Error('Not found')

  return {
    props: {
      ...(await getLayoutStaticProps()),
      work,
    },
  }
}

export default function Index(props: staticPage<typeof getStaticProps>) {
  return (
    <Layout {...props}>
      <main className="container">
        {parseHtml(props.work.detailsHtml)}
      </main>
    </Layout>
  )
}
