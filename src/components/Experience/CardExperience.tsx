import { Experience } from '@/utils/sectionExperiences'

interface CardExperienceProps {
  data: Experience
  style?: string
}

const CardExperience: React.FC<CardExperienceProps> = ({ data, style }) => {
  const defaultExperience: Experience = {
    title: '',
    description: '',
    abilities: '',
  }

  const experienceData = data || defaultExperience

  return (
    <div
      className={`
        GLASS
        w-[90%]
        max-w-[580px]
        rounded-xl
        border-l-4
        border-t-4
        border-[#ffffff4d]
        p-3
        drop-shadow-[1px_1px_1px_black]
        ${style}
      `}
    >
      <div
        className="
          flex
          flex-col
          gap-12
          font-bold
          md:text-xl
        "
      >
        <h3 className="text-2xl underline decoration-white">
          {experienceData.title}
        </h3>
        <p>{experienceData.description}</p>
        <p>{'Habilidades usadas: ' + experienceData.abilities}</p>
      </div>
    </div>
  )
}

export default CardExperience
