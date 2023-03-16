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
      <main className="container">
        {/* <Slider
          sliderClass="bg-blue-200"
          itemClass=" w-full min-w-full aspect-video"
        >
          <div>11111111111111111111111111111</div>
          <div>22222222222222222222222222222</div>
          <div>33333333333333333333333333333</div>
        </Slider> */}

        <Gallery
          list={props.performanceList.map((v) => ({
            title: `${v.name} (${v.year})`,
            slug: `/performance/${v.slug}`,
            imageSrc: v.preview,
          }))}
        />
      </main>
    </Layout>
  )
}
