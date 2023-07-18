import { SectionProjectsProps } from '@/utils/sectionProjectjs'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectsContainerProps {
  data: SectionProjectsProps
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ data }) => {
  return (
    <div>
      <div>
        <Image src={data.image} width={540} height={320} alt={data.title} />

        <h3>{data.title}</h3>
      </div>
    </div>
  )
}

export default ProjectsContainer
