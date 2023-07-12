'use client'

import { useMenuState } from '@/context/useMenuState'
import { sectionLinks } from '@/utils/sectionLinks'
import { CgMenuGridR } from 'react-icons/cg'
import { FaWindowClose } from 'react-icons/fa'
import SectionLinksContainer from './SectionLinksContainer'

const Menu = () => {
  const { isOpen, setMenuState } = useMenuState()

  return (
    <>
      <button
        onClick={() => setMenuState(!isOpen)}
        className="
        group
        relative
        rounded-full
        p-2
        hover:scale-150
      "
      >
        {isOpen === true ? (
          <FaWindowClose
            className="
            text-3xl
            text-black
            group-hover:text-white
            group-hover:drop-shadow-[1px_1px_1px_black]
            dark:text-white
            group-hover:dark:text-purple-500
          "
          />
        ) : (
          <CgMenuGridR
            className="
            text-3xl
            text-black
            group-hover:text-white
            group-hover:drop-shadow-[1px_1px_1px_black]
            dark:text-white
            group-hover:dark:text-purple-500
          "
          />
        )}

        <div
          className="
          absolute
          left-2
          top-2
          z-[-1]
          hidden
          h-8
          w-8
         
          animate-ping
          rounded-full
          bg-neutral-300
          group-hover:inline
        "
        />
      </button>

      {isOpen === true && (
        <div
          className="
            fixed
            right-0
            top-2
            z-[-2]
            min-h-screen
            w-[50%]
            max-w-[400px]
            bg-white
            dark:bg-black
          "
        >
          <div
            className="
              relative
              h-full
              w-full
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-[20rem]
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              <div className="flex flex-col gap-8">
                {sectionLinks.map((item) => (
                  <SectionLinksContainer key={item.title} data={item.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Menu
