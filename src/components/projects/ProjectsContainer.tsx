import { Project } from '@/utils/sectionProjectjs'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

interface ProjectsContainerProps {
  data: Project
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ data }) => {
  return (
    <div
      className="
        rounded-md
        border-2
        border-l-4
        border-t-4
        border-neutral-300
        border-l-neutral-500
        border-t-neutral-400
        bg-white
        p-2
        drop-shadow-[0px_0px_2px_black]
        transition-all
        duration-1000
        hover:rotate-[-5deg]
        hover:drop-shadow-[-20px_-20px_12px_#00000058]
        dark:border-neutral-700
        dark:border-l-neutral-900
        dark:border-t-neutral-800
        dark:bg-neutral-700
        hover:dark:drop-shadow-[-20px_-20px_12px_#4800ff]
      "
    >
      <div
        className="
          relative
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
              dark:border-b-neutral-900
              dark:border-l-neutral-800
              dark:border-r-neutral-900
              dark:border-t-neutral-800
            "
          />
        </Link>

        <h3 className="text-center font-bold">{data.title}</h3>

        <Link target="_blank" href={data.linkGithub}>
          <FaGithub
            className="
              mx-auto
              mt-4
              rounded-full
              bg-white
              text-2xl
              drop-shadow-[0px_0px_1px_black]
              dark:bg-black
            "
          />
        </Link>

        <div
          className="
            absolute
            bottom-2
            left-2
            h-4
            w-4
            rounded-full
            bg-blue-500
            drop-shadow-[0px_0px_1px_black]
          "
        />

        <div
          className="
            absolute
            bottom-2
            left-12
            h-4
            w-4
            rounded-full
            bg-yellow-500
            drop-shadow-[0px_0px_1px_black]
          "
        />
      </div>
    </div>
  )
}

export default ProjectsContainer
