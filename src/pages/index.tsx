import { useState } from 'react'

import { marked } from 'marked'

import { getHomeList } from '@/models/cms.server'
import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'
import Link from 'next/link'
import Image from 'next/image'

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutStaticProps()),
      workList: await getHomeList().then((v) =>
        v.map((cms) => ({ cms, html: marked(cms.description) })),
      ),
    },
  }
}

const buttonStyle = 'absolute top-1/2 -translate-y-1/2 bg-white p-2 text-black '
const infoBoxStyle =
  'absolute right-0 bottom-10 flex bg-white p-4 transition-all '

export default function Index(props: staticPage<typeof getStaticProps>) {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(true)
  const imageList = props.workList

  const currentImage = imageList[index]

  const onNext = () => {
    if (imageList.length - 1 === index) setIndex(0)
    else setIndex(index + 1)
  }
  const onPrev = () => {
    if (index === 0) setIndex(imageList.length - 1)
    else setIndex(index - 1)
  }

  return (
    <Layout {...props}>
      <main className="max-w-none p-0">
        <div className="relative flex h-full max-h-screen w-full max-w-full overflow-hidden">
          {imageList.map(({ cms, html }) => (
            <Image
              key={cms.title}
              className="h-main-h w-full min-w-full object-cover transition-all"
              style={{ transform: `translateX(-${index * 100}%)` }}
              src={cms.imageSrc}
              alt={cms.title}
              width={1920}
              height={1080}
            />
          ))}

          <div
            className={
              infoBoxStyle +
              'items-center justify-center' +
              (isOpen ? '' : ' z-10')
            }
          >
            <button
              className="mr-2 text-sm font-bold underline hover:text-blue-400"
              onClick={() => setIsOpen(true)}
            >
              {currentImage.cms.title}
            </button>
            <span className="text-xs text-text-gray">
              {index + 1} of {imageList.length}
            </span>
          </div>
          <div
            className={
              infoBoxStyle +
              'flex max-w-[70%] flex-col duration-300 ' +
              (isOpen ? 'opacity-100' : 'opacity-0')
            }
          >
            <h2 className="mb-2 text-lg font-bold">{currentImage.cms.title}</h2>
            <div
              className="rich-md"
              dangerouslySetInnerHTML={{ __html: currentImage.html }}
            />

            <div className="flex justify-end">
              {currentImage.cms.slug && (
                <Link
                  className=" mt-4 mr-4 text-right text-sm text-text-gray underline hover:text-blue-400"
                  href={currentImage.cms.slug}
                >
                  see more
                </Link>
              )}
              <button
                className=" mt-4 text-right text-sm text-text-gray underline hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                close info
              </button>
            </div>
          </div>

          <button className={buttonStyle + 'left-0'} onClick={onPrev}>
            ﹤
          </button>
          <button className={buttonStyle + 'right-0'} onClick={onNext}>
            ﹥
          </button>
        </div>
      </main>
    </Layout>
  )
}
