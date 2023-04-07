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

            const boxTextClass =
              'mb-2 line-clamp-3 max-h-[100px] whitespace-pre-line text-[0.8rem] transition-all duration-300 ease-in-out hover:line-clamp-none hover:max-h-[700px] p-4'

            return (
              <div
                key={item.description}
                className="aspect-video w-full max-w-full"
              >
                <div>
                  <Image
                    className="h-main-h w-full min-w-full object-contain transition-all"
                    src={item.image}
                    alt=""
                    priority
                    fill
                  />

                  <div className="absolute bottom-0 right-0 flex max-w-[70%] flex-col rounded-tl bg-white/30">
                    {item.url ? (
                      <Link className={boxTextClass} href={item.url}>
                        {content}
                      </Link>
                    ) : (
                      <p className={boxTextClass}>{content}</p>
                    )}
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
