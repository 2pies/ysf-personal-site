import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'
import Image from 'next/image'
import Link from 'next/link'

import img_cv_s from './about/img/cv_s.jpg'
import img_artistBio_s from './about/img/artistBio_s.jpg'
import img_award_s from './about/img/award_s.jpg'
import { cn } from '@/styles/classnames'

const imageList = [
  {
    imageSrc: img_cv_s,
    title: 'CV',
    slug: 'about/cv',
  },
  {
    imageSrc: img_artistBio_s,
    title: 'Artist Bio',
    slug: 'about/bio',
  },
  {
    imageSrc: img_award_s,
    title: 'Awards',
    slug: 'about/awards',
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
      <main className="container flex min-h-full flex-col items-center justify-between md:flex-row">
        {imageList.map((image, index) => (
          <div
            key={image.title}
            className={cn(
              'group relative mb-4 w-full md:mb-0 md:w-1/4',
              index % 2 ? '' : 'md:-translate-y-1/2',
            )}
          >
            <Link href={image.slug}>
              <Image src={image.imageSrc} alt={image.title} />
              <div className="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-40 p-4 group-hover:opacity-100 md:opacity-0">
                <span className="text-white">{image.title}</span>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </Layout>
  )
}
