import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'
import Image from 'next/image'
import Link from 'next/link'

const imageList = [
  {
    imageSrc: '/images/cv_s.jpg',
    title: 'CV',
    slug: 'cv',
  },
  {
    imageSrc: '/images/artistBio_s.jpg',
    title: 'Artist Bio',
    slug: 'bio',
  },
  {
    imageSrc: '/images/award_s.jpg',
    title: 'Awards',
    slug: 'awards',
  },
]

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
      <main>
        <div className="container flex min-h-full flex-col items-center justify-between md:flex-row">
          {imageList.map((image, index) => (
            <div
              key={image.title}
              className={
                'group relative mb-4 aspect-square w-full md:mb-0 md:w-1/4 ' +
                (index % 2 ? '' : 'md:-translate-y-1/2')
              }
            >
              <Link href={image.slug}>
                <Image src={image.imageSrc} alt={image.title} fill />
                <div className="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-40 p-4 group-hover:opacity-100 md:opacity-0">
                  <span className="text-white">{image.title}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}
