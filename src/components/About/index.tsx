import { SiSitepoint } from 'react-icons/si'
import Informations from './Informations'

const About = () => {
  return (
    <header
      id="Sobre"
      className="
        mx-auto
        w-[90%]
        max-w-[640px]
      "
    >
      <div className="px-3 py-2">
        <div>
          <h1
            className="
              text-4xl
              font-black
              md:text-5xl
            "
          >
            Olá me chamo Matheus Cardoso Luiz Costa
          </h1>
          <div
            className="
              mt-6
              flex
              max-w-[300px]
              items-center
              gap-2
              border-b-4
              border-t-4
              border-black
              p-2
              text-sm
              font-medium
              dark:border-green-700
            "
          >
            <p>Sou Programador freelancer Web</p>
            <SiSitepoint className="text-2xl text-red-500" />
          </div>
        </div>

        <div className="mt-20">
          <Informations />
        </div>
      </div>
    </header>
  )
}

export default About
