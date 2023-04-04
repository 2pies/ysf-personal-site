import { getMenuList, getSiteData } from '@/models/site.server'
import Header from '@/components/Header'

type propsT = {
  menuList: Awaited<ReturnType<typeof getMenuList>>
  siteData: Awaited<ReturnType<typeof getSiteData>>
  children: React.ReactNode
}

export function Layout(props: propsT) {
  const { menuList, siteData } = props

  return (
    <div className="flex h-full max-h-screen min-h-screen flex-col items-center bg-white">
      <Header menuList={menuList} siteData={siteData} />
      {props.children}
      <footer className="pb-3 pt-1">
        <span className="text-xs">
          {siteData.copyRight.replace('{year}', new Date().getFullYear() + '')}
        </span>
      </footer>
    </div>
  )
}

export async function getLayoutStaticProps() {
  return {
    menuList: await getMenuList(),
    siteData: await getSiteData(),
  }
}
