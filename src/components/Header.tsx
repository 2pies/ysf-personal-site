import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import type { getMenuList, getSiteData } from '@/models/site.server'
import Hamburger from './Hamburger'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcon'

type LoaderData = {
  menuList: Awaited<ReturnType<typeof getMenuList>>
  siteData: Awaited<ReturnType<typeof getSiteData>>
}

const Social = () => (
  <div className="flex items-end">
    <a
      title="Facebook"
      href="https://www.facebook.com/siuyeungg?locale=tw_TW"
      target="_blank"
      rel="noopener noreferrer"
      className="mr-2 flex h-10 w-10 cursor-pointer items-center justify-center md:h-6 md:w-6"
    >
      <FacebookIcon color="black" />
    </a>
    <a
      title="Instagram"
      href="https://www.instagram.com/siufong_yeung/"
      target="_blank"
      rel="noopener noreferrer"
      className="mr-2 flex h-10 w-10 cursor-pointer items-center justify-center md:h-6 md:w-6"
    >
      <InstagramIcon color="black" />
    </a>
    <a
      title="Youtube"
      href="https://www.youtube.com/channel/UCWq9kjmDJoSUKWcS7zHwApQ"
      target="_blank"
      rel="noopener noreferrer"
      className="mr-2 flex h-10 w-10 cursor-pointer items-center justify-center md:h-6 md:w-6"
    >
      <YoutubeIcon color="black" />
    </a>
  </div>
)

const Header = ({ menuList, siteData }: LoaderData) => {
  const [menuIsOpened, setM] = useState(false)
  const toggleMenu = () => {
    setM(!menuIsOpened)
  }

  const { pathname } = useRouter()

  return (
    <>
      <header className="sticky z-40 max-w-full bg-white px-8 pt-10 pb-6 md:pb-6 md:pt-12">
        <div className="flex w-main-w max-w-full flex-wrap items-center justify-end gap-y-4">
          <div className="flex-1">
            <Link href="/" className="whitespace-nowrap text-lg font-bold">
              {siteData.siteName}
            </Link>
          </div>
          <div className="md:hidden">
            <Hamburger menuIsOpened={menuIsOpened} toggleMenu={toggleMenu} />
          </div>

          <div className="hidden flex-wrap items-end justify-end gap-y-4 gap-x-6 md:flex">
            <nav>
              <ul className="mr-2 flex">
                {menuList.map((menu) => {
                  const isActive =
                    menu.path === '/'
                      ? pathname === menu.path
                      : `${pathname}/`.startsWith(menu.path)

                  return (
                    <li key={menu.path}>
                      <Link
                        href={menu.path}
                        className={
                          'ml-6 block hover:underline ' +
                          (isActive ? 'text-black' : 'text-link-gray')
                        }
                      >
                        {menu.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <Social />
          </div>
        </div>
      </header>
      {menuIsOpened && (
        <div className="relative max-h-0 w-full">
          <div
            className="fixed top-0 left-0 z-10 h-screen w-screen bg-white/20 backdrop-blur-3xl md:hidden"
            onClick={() => setM(false)}
          />
          <div className="absolute left-0 top-0 z-50 flex w-screen flex-col md:hidden">
            {menuList.map((menu) => (
              <div
                key={menu.path}
                className="flex flex-col items-center"
                onClick={() => setM(false)}
              >
                <Link href={menu.path} className="mt-8 block text-2xl">
                  {menu.label}
                </Link>
              </div>
            ))}
            <div className="flex flex-1 items-end justify-center py-8">
              <Social />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
