'use client'

import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'

const ThemeButton = () => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className="
        group
        relative
        rounded-full
        p-2
        hover:scale-125
      "
    >
      {theme === 'dark' && (
        <BsSunFill
          onClick={() => setTheme('light')}
          className="text-2xl text-white group-hover:text-yellow-500"
        />
      )}
      {theme !== 'dark' && (
        <BsMoonStarsFill
          onClick={() => setTheme('dark')}
          className="text-2xl text-black group-hover:text-white"
        />
      )}

      <div
        className={clsx(
          `
          SPIN
          absolute
          left-0
          top-0
          z-[-1]
          hidden
          h-12
          w-12
          -translate-x-1/2
          rounded-full
          bg-gradient-to-tr
          from-indigo-500
          via-indigo-700
          to-black
          group-hover:inline
        `,

          theme === 'dark' &&
            `bg-gradient-to-tr
            from-yellow-500
            via-red-700
            to-orange-700`,
        )}
      />
    </button>
  )
}

export default ThemeButton
