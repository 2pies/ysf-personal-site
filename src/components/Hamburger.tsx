type Props = {
  menuIsOpened: boolean
  toggleMenu: () => void
}

export default function Hamburger({ menuIsOpened, toggleMenu }: Props) {
  const iconStyle = `duration-300 ease-out transition-all border-t-[1.5px] absolute w-[21px] border-current border-solid transform left-1/2 top-1/2 -translate-x-1/2`
  return (
    <button
      title="menu"
      className={
        'relative -mt-4 h-[20px] w-[21px] text-current' +
        (menuIsOpened ? ' opacity-30' : '')
      }
      type="button"
      onClick={toggleMenu}
    >
      <div
        className={
          (menuIsOpened ? 'translate-y-0 rotate-45 ' : 'translate-y-[-5px] ') +
          iconStyle
        }
      />
      <div
        className={(menuIsOpened ? 'translate-y-0 rotate-45 ' : '') + iconStyle}
      />
      <div
        className={
          (menuIsOpened ? 'translate-y-0 -rotate-45 ' : 'translate-y-[5px] ') +
          iconStyle
        }
      />
    </button>
  )
}
