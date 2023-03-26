import { getWorkList } from '@/models/cms.server'
import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { type GetStaticPropsContext } from 'next'
import { staticPage } from '@/typeUtils'
import { parseHtml } from '@/utils/html-parser'

export async function getStaticPaths() {
  const workList = await getWorkList()

  const paths = workList.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async (props: GetStaticPropsContext) => {
  const workList = await getWorkList()
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
      <main className="container">{parseHtml(props.work.detailsHtml)}</main>
    </Layout>
  )
}
