import { cn } from '@/styles/classnames'
import { useTimeIntervals } from '@/utils/react-hooks'
import { Children, useId, useRef, useState } from 'react'

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

  const sliderRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const sliderItems = Children.toArray(children)

  const itemId = useId()
  const getItemId = (index: number) => `${itemId}${index}`

  const onPrev = () => {
    if (!sliderRef.current) return
    const newIndex = index === 0 ? sliderItems.length - 1 : index - 1
    const item = document.getElementById(getItemId(newIndex))
    setIndex(newIndex)
    if (!item) return
    const itemLeft = item.offsetLeft
    sliderRef.current.scrollTo({ left: itemLeft, behavior: 'smooth' })
  }

  const onNext = () => {
    if (!sliderRef.current) return
    const newIndex = sliderItems.length - 1 === index ? 0 : index + 1
    const item = document.getElementById(getItemId(newIndex))
    setIndex(newIndex)
    if (!item) return
    const itemLeft = item.offsetLeft
    sliderRef.current.scrollTo({ left: itemLeft, behavior: 'smooth' })
  }

  useTimeIntervals(3000, onNext)

  return (
    <div className="relative">
      <div
        ref={sliderRef}
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
        className="absolute top-1/2 left-4 aspect-square rounded-full border border-black bg-white p-2 opacity-40 duration-200 hover:opacity-70"
        onClick={onPrev}
        title="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-4 aspect-square rounded-full border border-black bg-white p-2 opacity-40 duration-200 hover:opacity-70"
        onClick={onNext}
        title="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  )
}
