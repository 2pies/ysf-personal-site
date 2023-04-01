import { getLayoutStaticProps, Layout } from '@/components/Layout'
import { staticPage } from '@/typeUtils'
import Image from 'next/image'

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutStaticProps()),
    },
  }
}

export default function Index(props: staticPage<typeof getStaticProps>) {
  return (
    <Layout {...props}>
      <main className="container px-0">
        <div className="relative aspect-video min-h-[30rem] w-full px-0">
          <Image
            src="/images/uploads/work_2019_body_schema_motion_1.jpg"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute top-0 left-0 h-1/2 w-1/3 backdrop-brightness-200" />
          <div className="absolute top-0 left-1/3 h-1/2 w-1/3 backdrop-sepia" />
          <div className="absolute top-0 left-2/3 h-1/2 w-1/3 backdrop-contrast-200" />

          <div className="absolute top-1/2 left-0 h-1/2 w-1/3 backdrop-hue-rotate-90" />
          <div className="absolute top-1/2 left-1/3 h-1/2 w-1/3 backdrop-hue-rotate-180" />
          <div className="absolute top-1/2 left-2/3 h-1/2 w-1/3 -backdrop-hue-rotate-60" />

          <div className="absolute top-0 left-0 h-full w-full bg-black/30" />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 pt-0 text-gray-400">
            <h1 className="text-4xl mix-blend-difference md:text-7xl ">
              Contact
            </h1>
            <p className="text-center text-xl mix-blend-difference md:w-2/3 md:text-3xl">
              {`For all enquiries, exhibitions and collaborations, feel free to contact me via email at `}
              <a href="mailto:nhgysf@gmail.com">nhgysf@gmail.com</a>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
