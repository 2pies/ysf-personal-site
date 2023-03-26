import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutStaticProps()),
    },
  }
}

export default function Index(props: staticPage<typeof getStaticProps>) {
  return (
    <Layout {...props}>
      <main className="p-12">
        <h1>Contact</h1>
        <p>
          For all enquiries, exhibitions and collaborations, feel free to
          contact me via email at{' '}
        </p>
      </main>
    </Layout>
  )
}
