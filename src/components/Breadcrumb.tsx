import Link from 'next/link'

type propsT = {
  prevLink: string
  prevText: string

  currentText: string
}

const Breadcrumb = (props: propsT) => {
  return (
    <div className="flex items-center gap-x-1 pb-4">
      <Link href={props.prevLink} className=" text-gray-700 underline">
        {props.prevText}
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>

      <span>{props.currentText}</span>
    </div>
  )
}

export { Breadcrumb }
