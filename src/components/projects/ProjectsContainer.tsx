import { SectionProjectsProps } from '@/utils/sectionProjectjs'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

interface ProjectsContainerProps {
  data: SectionProjectsProps
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ data }) => {
  return (
    <div
      className="
        rounded-md
        border-l-2
        border-t-2
        border-l-neutral-300
        border-t-neutral-200
        bg-neutral-100
        p-2
        drop-shadow-[0px_0px_8px_black]
        transition-all
        duration-1000
        hover:rotate-[-10deg]
        hover:drop-shadow-[-20px_-20px_12px_#00000058]
      "
    >
      <div
        className="
          mx-auto
          h-[300px]
          w-full
          max-w-[220px]
        "
      >
        <Link target="_blank" href={data.linkDeploy}>
          <Image
            src={data.image}
            width={540}
            height={320}
            alt={data.title}
            className="
              h-[80%]
              w-full
              rounded-t-md
              border-b-2
              border-l-2
              border-r-4
              border-t-4
              border-b-neutral-600
              border-l-neutral-500
              border-r-neutral-600
              border-t-neutral-500
            "
          />
        </Link>

        <h3 className="text-center font-bold">{data.title}</h3>

        <Link target="_blank" href={data.linkGithub}>
          <FaGithub
            className="
              mx-auto
              mt-4
              text-2xl
            "
          />
        </Link>
      </div>
    </div>
  )
}

export default ProjectsContainer
