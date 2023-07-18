import { sectionProjects } from '@/utils/sectionProjectjs'
import ProjectsContainer from './ProjectsContainer'

const Project = () => {
  return (
    <section
      className="
        mx-auto
        w-[90%]
        max-w-[720px]
      "
    >
      <div
        className="
          mt-12
          flex
          flex-col
          items-center
          justify-center
          gap-20
        "
      >
        <h2
          className="
            text-4xl
            font-bold
            text-black
            underline
            decoration-orange-500
            dark:text-white
            dark:decoration-green-700
          "
        >
          Projetos
        </h2>
        <div>
          {sectionProjects.map((item) => (
            <ProjectsContainer key={item.title} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
