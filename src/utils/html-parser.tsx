import { Slider } from '@/components/Slider'
import { cn } from '@/styles/classnames'
import parse, { type HTMLReactParserOptions, Element } from 'html-react-parser'
import Image from 'next/image'

export const parseHtml = (html: string) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (!(domNode instanceof Element && domNode.attribs)) return

      if (domNode.name === 'slider') {
        const images =
          domNode.attribs.images?.split(',').map((v) => v.trim()) || []
        const className = domNode.attribs.class || ''
        console.log(domNode.attribs.images, typeof domNode.attribs.images)
        console.log(domNode.attribs.class)
        return (
          <Slider
            sliderClass="h-full"
            itemClass={cn(className, 'relative w-full min-w-full')}
          >
            {images.map((v) => (
              <Image key={v} src={v} alt="" fill className="object-cover" />
            ))}
          </Slider>
        )
      }
    },
  }
  return parse(html, options)
}
