import path from 'path'
import fs from 'fs'

type performanceT = {
  slug: string
  name: string
  year: number
  preview: string
  detailsHtml: string
}

type workT = {
  slug: string
  name: string
  year: number
  preview: string
  detailsHtml: string
}

type homeT = {
  works: Array<{
    image: string
    description: string
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

export { getWorkList, getPerformanceList, getHomeList }
export type { performanceT, workT, homeT }
