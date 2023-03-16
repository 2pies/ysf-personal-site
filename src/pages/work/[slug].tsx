import { getWorkList } from '@/models/cms.server'
import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { type GetStaticPropsContext } from 'next'
import { staticPage } from '@/typeUtils'

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
      html: work.template === 'basic' ? work.body.trim() : null,
    },
  }
}

export default function Index(props: staticPage<typeof getStaticProps>) {
  const work = props.work

  const renderBody = props.html && (
    <div className="rich-md" dangerouslySetInnerHTML={{ __html: props.html }} />
  )

  const getRenderPhoto = () => {
    if (work.template !== 'basic') return null
    if (work.photos.length === 0)
      return <img className="mb-4" src={work.imageSrc} alt={work.title} />
    if (work.photos.length === 2) {
      return (
        <div className="grid grid-cols-2 gap-4">
          {work.photos.map((v) => (
            <div key={v}>
              <img
                className="mb-4 h-full object-cover"
                src={v}
                alt={work.title}
              />
            </div>
          ))}
        </div>
      )
    }
    if (work.photos.length <= 4) {
      return (
        <div className="grid grid-cols-4 gap-4">
          {work.photos.map((v) => (
            <div key={v}>
              <img
                className="mb-4 h-full object-cover"
                src={v}
                alt={work.title}
              />
            </div>
          ))}
        </div>
      )
    }
    if (work.photos.length > 4) {
      return (
        <div className="grid grid-cols-4 gap-4">
          {work.photos.map((v) => (
            <div key={v}>
              <img
                className="mb-4 h-full object-cover"
                src={v}
                alt={work.title}
              />
            </div>
          ))}
        </div>
      )
    }
  }

  return (
    <Layout {...props}>
      <main>
        <div className="container">
          <div className="mb-4 flex items-end">
            <h1 className="mb-0">{work.title}</h1>
            <p className="ml-2 text-text-gray">{work.year}</p>
          </div>
          {work.template === 'basic' && props.html && (
            <>
              {renderBody}
              {getRenderPhoto()}
            </>
          )}
        </div>
      </main>
    </Layout>
  )
}
