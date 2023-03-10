import Link from 'next/link'
import Image from 'next/image'

type propsT = {
  list: Array<{
    title: string
    imageSrc: string
    slug: string
  }>
}

const Gallery = ({ list }: propsT) => {
  return (
    <div className="container grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
      {list.map((image) => (
        <div
          key={image.title}
          className="group relative col-span-1 h-[45vw] max-h-[45vw] md:h-[30vw] md:max-h-[30vw]"
        >
          <Link href={image.slug}>
            <Image
              src={image.imageSrc}
              alt={image.title}
              className="h-full w-full object-cover"
              fill
            />
            <div className="absolute bottom-0 top-0 left-0 right-0 flex items-end bg-black bg-opacity-40 p-4 group-hover:opacity-100 md:opacity-0">
              <span className="text-xs text-white">{image.title}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Gallery
