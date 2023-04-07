import path from 'path'
import fs from 'fs'

export type previewSizeU =
  | '3-square'
  | '3-long'
  | '3-tall'
  | 'big-big'
  | 'big-square'
  | 'big-tall-big'
  | 'big-tall-square'
  | 'long-small'
  | 'long-big'

type performanceT = {
  slug: string
  name: string
  year: number
  preview: string
  previewSize: previewSizeU
  detailsHtml: string
}

type workT = {
  slug: string
  name: string
  year: number
  preview: string
  previewSize: previewSizeU
  detailsHtml: string
}

type homeT = {
  works: Array<{
    image: string
    description: string
    url: string
  }>
}

type exhibitionT = {
  exhibitions: Array<{
    image: string
    url: string
    size: 'square' | 'long' | 'super-long' | 'tall'
  }>
}

type pressT = {
  banner: string
  news: Array<{
    title: string
    url: string
  }>
}

const getWorkList = async () => {
  const list = fs
    .readdirSync(path.join(process.cwd(), 'public/cms/work'))
    .filter((item) => item.endsWith('.json'))
    .map((item) => {
      const data = fs.readFileSync(
        path.join(process.cwd(), 'public/cms/work', item),
        'utf8',
      )
      return JSON.parse(data) as workT
    })
    .sort((a, b) => {
      return b.slug.localeCompare(a.slug)
    })
  return list
}

const getPerformanceList = async () => {
  const list = fs
    .readdirSync(path.join(process.cwd(), 'public/cms/performance'))
    .filter((item) => item.endsWith('.json'))
    .map((item) => {
      const data = fs.readFileSync(
        path.join(process.cwd(), 'public/cms/performance', item),
        'utf8',
      )
      return JSON.parse(data) as performanceT
    })
    .sort((a, b) => {
      return b.slug.localeCompare(a.slug)
    })
  return list
}

const getHomeList = async () => {
  const homePageRaw = fs.readFileSync(
    path.join(process.cwd(), 'public/cms/home.json'),
    'utf8',
  )

  const homePage = JSON.parse(homePageRaw) as homeT
  return homePage.works
}

const getExhibitionList = async () => {
  const exhibitionPageRaw = fs.readFileSync(
    path.join(process.cwd(), 'public/cms/exhibition.json'),
    'utf8',
  )

  const exhibitionPage = JSON.parse(exhibitionPageRaw) as exhibitionT
  return exhibitionPage
}

const getPressPage = async () => {
  const pressPageRaw = fs.readFileSync(
    path.join(process.cwd(), 'public/cms/press.json'),
    'utf8',
  )

  const pressPage = JSON.parse(pressPageRaw) as pressT
  return pressPage
}

export {
  getWorkList,
  getPerformanceList,
  getHomeList,
  getExhibitionList,
  getPressPage,
}
export type { performanceT, workT, homeT, exhibitionT }
