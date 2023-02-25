import Gallery from '@/components/Gallery'

const ccc = 'https://picsum.photos/1920/'

const imageList = [
  {
    imageSrc: `${ccc}1081/`,
    title: 'image1',
    year: 2022,
    slug: 'image1',
  },
  {
    imageSrc: `${ccc}1082/`,
    title: 'image2',
    year: 2022,
    slug: 'image2',
  },
  {
    imageSrc: `${ccc}1083/`,
    title: 'image3',
    year: 2022,
    slug: 'image3',
  },
  {
    imageSrc: `${ccc}1084/`,
    title: 'image4',
    year: 2022,
    slug: 'image4',
  },
]

export default function Index() {
  return (
    <main>
      <Gallery
        list={imageList.map((v) => ({
          ...v,
          title: `${v.title} (${v.year})`,
        }))}
      />
    </main>
  )
}
