import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'
import Image from 'next/image'

const ccc = 'https://picsum.photos/1920/'

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutStaticProps()),
    },
  }
}

const imageList = [
  {
    imageSrc: `${ccc}1081/`,
    title: 'image1',
    year: 2022,
  },
  {
    imageSrc: `${ccc}1082/`,
    title: 'image2',
    year: 2022,
  },
  {
    imageSrc: `${ccc}1083/`,
    title: 'image3',
    year: 2022,
  },
  {
    imageSrc: `${ccc}1084/`,
    title: 'image4',
    year: 2022,
  },
]

export default function Index(props: staticPage<typeof getStaticProps>) {
  return (
    <Layout {...props}>
      <main>
        <h1>Press</h1>
        <div className="container grid grid-cols-3 gap-4">
          {imageList.map((image) => (
            <div
              key={image.title}
              className="group relative col-span-1 aspect-video"
            >
              <Image src={image.imageSrc} alt={image.title} fill />
              <div className="absolute bottom-0 top-0 left-0 right-0 flex items-end bg-black bg-opacity-40 p-4 opacity-0 group-hover:opacity-100">
                <span className="text-xs text-white">{`${image.title}(${image.year})`}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}
