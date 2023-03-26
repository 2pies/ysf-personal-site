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

type Home = {
  imageSrc: string
  title: string
  description: string
  slug: string | null
}

const homeList: Home[] = [
  {
    imageSrc: '/images/2022/chokstick/No.27.jpg',
    title: '百家碗筷',
    slug: null,
    description: `
No.27  
她說雙魚座一點也不難搞  
她說她是獨生女  
她說曾經也希望自己有哥哥或姐姐  
她想被人疼愛  
-----------
More stories are coming soon...
    
    `,
  },
  {
    imageSrc: '/images/2022/turn/1.png',
    title: 'Turn as Turn',
    slug: '/performance/turn-as-turn',
    description: `“Turn as Turn”, 2022, 3.28mins, Performance Documentary`,
  },
  {
    imageSrc: '/images/2022/hand/1.png',
    title: 'It’s a hand',
    slug: '/performance/it-is-a-hand',
    description: `
"It’s a hand." , 2022, Performance Documentary

Through repeated movements, the body reached its limit. A new form emerges from the disappearance of the original subject.

以重複的動作，過程到達了身體的極限，令原態消失，重塑了一個新的形態出現。
    `,
  },
  {
    imageSrc: '/images/2022/frag/1.jpg',
    title: 'Fragilely Connected',
    slug: '/performance/fragilely-connected',
    description: `
2022 Spring Equinox Performance

“Fragilely Connected”, 2022, Performance Documentary

It was 2022 Equinox, a Sunday. It was inside an alined playground where people used to meet up while children play.
With that green fabric, we tried to connected and yet we were kept in a distance. Movements seemed to be in response yet tensioned with fragileness.

Performed by Yeung Siu Fong & RiK Wing Kei Yu
Photo by Ann Huang
Video by Thisby Cheng
20th Mar, 2022. Pak Kong Garden, Sai Kung, HONG KONG 
`,
  },
]

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
const getHomeList = async () => homeList

export type { Home }
export { getWorkList, getPerformanceList, getHomeList }
