import { Slider } from '@/components/Slider'
import { cn } from '@/styles/classnames'
import parse, { type HTMLReactParserOptions, Element } from 'html-react-parser'
import Image from 'next/image'

// https://youtu.be/hlBtknFhRho
const getVideoUrl = (url: string, autoplay: boolean) => {
  if (/youtu.be/.test(url)) {
    const id = url.match(/[^/]+$/)
    if (id && id[0]) {
      let url = `https://www.youtube.com/embed/${id[0]}`
      if (autoplay) url += '?autoplay=1'
      return url
    }
  }
  return url
}

export const parseHtml = (html: string) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (!(domNode instanceof Element && domNode.attribs)) return

      if (domNode.name === 'youtube') {
        const isShort = typeof domNode.attribs.short !== 'undefined'
        const isPause = typeof domNode.attribs.pause !== 'undefined'
        const isAutoplay = !isPause && !isShort
        const url = getVideoUrl(domNode.attribs.src || '', isAutoplay)

        return (
          <div
            className={
              'relative h-0 w-full ' + (isShort ? 'pb-[177.8%]' : 'pb-[56.25%]')
            }
          >
            <iframe
              className="absolute top-0 left-0 h-full w-full"
              src={url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )
      }

      if (domNode.name === 'slider') {
        const images =
          domNode.attribs.images?.split(',').map((v) => v.trim()) || []
        const className = domNode.attribs.class || ''
        return (
          <Slider
            sliderClass="h-full"
            itemClass={cn(className, 'relative w-full min-w-full')}
          >
            {images.map((v) => (
              <Image
                key={v}
                src={v}
                alt=""
                fill
                className="object-cover"
                priority
              />
            ))}
          </Slider>
        )
      }
    },
  }
  return parse(html, options)
}
