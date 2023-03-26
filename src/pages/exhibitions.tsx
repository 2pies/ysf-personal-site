import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { getExhibitionList } from '@/models/cms.server'
import { cn } from '@/styles/classnames'
import { staticPage } from '@/typeUtils'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutStaticProps()),
      cms: await getExhibitionList(),
    },
  }
}

export default function Index(props: staticPage<typeof getStaticProps>) {
  return (
    <Layout {...props}>
      <main className="container">
        <div className="container grid grid-cols-6">
          {props.cms.exhibitions.map((exh) => {
            // 'square', 'long', 'super-long', 'tall'
            const aspectRatio =
              exh.size === 'square'
                ? 'aspect-[1/1]'
                : exh.size === 'long'
                ? 'aspect-[16/9]'
                : exh.size === 'super-long'
                ? 'aspect-[32/9]'
                : 'aspect-[3/4]'
            const colSpan =
              exh.size === 'square'
                ? 'col-span-2'
                : exh.size === 'long'
                ? 'col-span-3'
                : exh.size === 'super-long'
                ? 'col-span-full'
                : 'col-span-2'
            const className = cn(
              'relative opacity-90 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-200',
              aspectRatio,
              colSpan,
            )

            const render = (
              <Image
                src={exh.image}
                alt=""
                className="h-full w-full object-cover"
                fill
                sizes="100vw"
              />
            )

            if (exh.url)
              return (
                <a
                  key={exh.image}
                  href={exh.url}
                  target="_blank"
                  className={className}
                >
                  {render}
                </a>
              )
            return (
              <div key={exh.image} className={className}>
                {render}
              </div>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}
