import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { cn } from '@/styles/classnames'
import { staticPage } from '@/typeUtils'
import Image from 'next/image'
import { useState } from 'react'

import image1 from './workshop/photo1.jpg'
import image2 from './workshop/photo2.jpg'
import image3 from './workshop/photo3.jpg'

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutStaticProps()),
    },
  }
}

const cms = {
  sections: [
    <div key={1}>
      <p>以生命影響生命，以下演講主題範疇：</p>

      <h3 className="mt-8 text-2xl underline">成長</h3>
      <ul className="flex flex-col gap-y-1 pt-2">
        <li>- 自卑和內向不一定是負面的</li>
        <li>- 如何建立自信？</li>
        <li>- 別畏懼不擅長的事物，如何用開放的態度接觸新事物？</li>
      </ul>

      <h3 className="mt-8 text-2xl underline">了解自我</h3>
      <ul className="flex flex-col gap-y-1 pt-2">
        <li>- 如何自我認識？</li>
        <li>- 如何自我察覺？</li>
        <li>- 如何透過自我對話中了我自己</li>
      </ul>

      <h3 className="mt-8 text-2xl underline">藝術</h3>
      <ul className="flex flex-col gap-y-1 pt-2">
        <li>- 如何從藝術創作中建立自我</li>
        <li>- 分享藝術創作歷程</li>
      </ul>
    </div>,
    <div key={2}>
      <h3 className="text-2xl underline">關於藝術工作坊</h3>
      <ul className="flex flex-col gap-y-1 pt-2">
        <li>- 提升創意思維</li>
        <li>- critical thinking</li>
        <li>- 發掘個人潛能</li>
        <li>- 透過創作了解自己</li>
      </ul>
    </div>,
    <div key={3}>
      <h3 className="text-2xl underline">關於行為藝術工作坊</h3>

      <p className="pt-2 md:w-2/3">
        以身體作為基本的媒介，以生活經歷作為靈感，與物件建立關係、融合相處、重新建立。打開身體感知，保持自然及靈敏。
      </p>
    </div>,
  ],
}

export default function Index(props: staticPage<typeof getStaticProps>) {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null)

  const isIdle = selectedIndex === null

  return (
    <Layout {...props}>
      <main className="container">
        <div className="mt-4 grid grid-cols-3 gap-x-4">
          {[image1, image2, image3].map((image, index) => {
            const isSelected = index === selectedIndex
            return (
              <button
                key={index}
                onClick={() => setSelectedIndex(isSelected ? null : index)}
              >
                <Image
                  src={image}
                  alt=""
                  className={!isIdle && !isSelected ? 'grayscale' : ''}
                />
              </button>
            )
          })}
        </div>

        {cms.sections.map((section, index) => {
          const isSelected = index === selectedIndex
          return (
            <div
              key={index}
              className={cn(
                'py-8 transition-all duration-300 ease-in-out',
                isSelected
                  ? 'translate-x-0 opacity-100'
                  : 'pointer-events-none absolute translate-x-1/2 opacity-0',
              )}
            >
              {section}
            </div>
          )
        })}
      </main>
    </Layout>
  )
}
