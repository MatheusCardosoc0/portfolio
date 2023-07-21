'use client'

import { sectionExperiences } from '@/utils/sectionExperiences'
import { useCallback, useState } from 'react'
import CardExperience from './CardExperience'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import clsx from 'clsx'

const ExperienceContainer = () => {
  const [currentExperience, setCurrentExperience] = useState(0)

  const changeNextCurrentExperience = useCallback(() => {
    if (currentExperience === sectionExperiences.length - 1) {
      return
    }

    setCurrentExperience((prev) => prev + 1)
  }, [currentExperience])

  const changePreviousCurrentExperience = useCallback(() => {
    if (currentExperience < 1) {
      return
    }

    setCurrentExperience((prev) => prev - 1)
  }, [currentExperience])

  return (
    <div
      className="
        flex
        w-full
        max-w-[720px]
        flex-col-reverse
        items-center
        justify-center
        gap-4
        sm:flex-row
      "
    >
      <CardExperience
        data={sectionExperiences[currentExperience]}
        style="sm:hidden"
      />
      <div
        className="
          flex 
          items-center
          justify-center
          gap-20
          sm:gap-0
        "
      >
        <button
          onClick={() => changePreviousCurrentExperience()}
          className={clsx(
            `
            text-4xl drop-shadow-[1px_0px_1px_black] 
            `,
            currentExperience !== 0
              ? 'TOPOINTLEFT text-5xl text-orange-500 hover:text-green-500'
              : 'text-purple-500',
          )}
        >
          <AiOutlineArrowLeft />
        </button>

        <CardExperience
          data={sectionExperiences[currentExperience]}
          style="hidden sm:block"
        />

        <button
          onClick={() => changeNextCurrentExperience()}
          className={clsx(
            `
            text-4xl  drop-shadow-[1px_0px_1px_black] 
            `,
            currentExperience < sectionExperiences.length - 1
              ? 'TOPOINTRIGHT text-5xl text-orange-500 hover:text-green-500'
              : 'text-purple-500',
          )}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  )
}

export default ExperienceContainer
