import Link from 'next/link'
import Image from 'next/image'
import { previewSizeU } from '@/models/cms.server'

type propsT = {
  list: Array<{
    title: string
    imageSrc: string
    slug: string
    size: previewSizeU
  }>
}

const sizeConfig = {
  '3-square': 'aspect-[1/1] col-span-4 row-span-1',
  '3-long': 'aspect-[4/3] col-span-4 row-span-1',
  '3-tall': 'aspect-[9/16] col-span-4 row-span-1',
  'big-big': 'col-span-9 row-span-2',
  'big-square': 'aspect-[1/1] col-span-3 row-span-1',
  'long-small': 'aspect-[1.2] col-span-4 row-span-1',
  'long-big': 'col-span-8 row-span-1',
}

const Gallery = ({ list }: propsT) => {
  return (
    <div className="container grid grid-cols-12">
      {list.map((image) => {
        const size = image.size || '3-square'
        return (
          <Link
            href={image.slug}
            key={image.title}
            className={`group relative ${sizeConfig[size]}`}
          >
            <Image
              src={image.imageSrc}
              alt={image.title}
              className="h-full w-full object-cover"
              fill
              sizes="(max-width: 768px) 50vw,
                      33vw"
            />
            <div className="absolute bottom-0 top-0 left-0 right-0 flex items-end bg-black bg-opacity-40 p-4 group-hover:opacity-100 md:opacity-0">
              <span className="text-xs text-white">{image.title}</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Gallery
