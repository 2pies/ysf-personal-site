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
  return (
    <Layout {...props}>
      <main className="container px-0 pt-12">
        <Slider
          sliderClass="w-full"
          itemClass="relative w-full min-w-full aspect-video"
        >
          {props.workList.map((item) => {
            const content = item.description

            const main = (
              <div>
                <Image
                  className="h-main-h w-full min-w-full object-contain transition-all"
                  src={item.image}
                  alt=""
                  priority
                  fill
                />

                <div className="absolute right-0 bottom-10 flex max-w-[70%] flex-col rounded-tl rounded-bl bg-white/30 p-4 transition-all duration-300">
                  <p className="mb-2 whitespace-pre-line text-lg">{content}</p>
                </div>
              </div>
            )

            if (item.url)
              return (
                <Link
                  key={item.description}
                  className="aspect-video w-full max-w-full"
                  href={item.url}
                >
                  {main}
                </Link>
              )

            return (
              <div
                key={item.description}
                className="aspect-video w-full max-w-full"
              >
                {main}
              </div>
            )
          })}
        </Slider>
      </main>
    </Layout>
  )
}
