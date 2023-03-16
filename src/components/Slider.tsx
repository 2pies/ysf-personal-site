import { cn } from '@/styles/classnames'
import { Children, useId, useState } from 'react'

// only support horizontal slider
// only support full width slider

type propsT = {
  /* must provide a width */
  sliderClass: string
  itemClass?: string
  children: React.ReactNode | React.ReactNode[]
}

export const Slider = (props: propsT) => {
  const { children, sliderClass, itemClass } = props

  const [index, setIndex] = useState(0)
  const sliderItems = Children.toArray(children)

  const itemId = useId()
  const getItemId = (index: number) => `${itemId}${index}`

  const onPrev = () => {
    const newIndex = index === 0 ? sliderItems.length - 1 : index - 1
    const item = document.getElementById(getItemId(newIndex))
    setIndex(newIndex)
    if (!item) return
    item.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  const onNext = () => {
    const newIndex = sliderItems.length - 1 === index ? 0 : index + 1
    const item = document.getElementById(getItemId(newIndex))
    setIndex(newIndex)
    if (!item) return
    item.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  return (
    <div className="relative">
      <div
        className={cn('flex snap-x snap-mandatory overflow-auto', sliderClass)}
      >
        {sliderItems.map((Child, index) => (
          <div
            key={index}
            id={getItemId(index)}
            className={cn('snap-start', itemClass)}
          >
            {Child}
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 text-black"
        onClick={onPrev}
      >
        ﹤
      </button>
      <button
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 text-black"
        onClick={onNext}
      >
        ﹥
      </button>
    </div>
  )
}
