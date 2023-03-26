import { useState } from 'react'

import { getHomeList } from '@/models/cms.server'
import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'
import Link from 'next/link'
import Image from 'next/image'
import { Slider } from '@/components/Slider'

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutStaticProps()),
      workList: await getHomeList(),
    },
  }
}

export default function Index(props: staticPage<typeof getStaticProps>) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Layout {...props}>
      <main className="h-full w-full">
        <Slider
          sliderClass="h-full w-full"
          itemClass="relative w-full min-w-full h-full"
        >
          {props.workList.map((item) => {
            const content = isOpen
              ? item.description
              : item.description.split('\n')[0]
            return (
              <div
                key={item.description}
                className="aspect-video h-main-h w-full max-w-full"
              >
                <Image
                  className="h-main-h w-full min-w-full object-cover transition-all"
                  src={item.image}
                  alt=""
                  fill
                />

                <div className="absolute right-0 bottom-10 flex max-w-[70%] flex-col bg-white p-4 transition-all duration-300">
                  <p className="mb-2 whitespace-pre-line text-lg">{content}</p>
                  <div className="flex justify-end">
                    {item.url && (
                      <Link
                        className=" mt-4 mr-4 text-right text-sm text-text-gray underline hover:text-blue-400"
                        href={item.url}
                      >
                        View Project
                      </Link>
                    )}
                    <button
                      className=" mt-4 text-right text-sm text-text-gray underline hover:text-blue-400"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {isOpen ? 'Collapse' : 'Expand'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </main>
    </Layout>
  )
}
