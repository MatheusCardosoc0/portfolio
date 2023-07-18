'use client'

import { useState } from 'react'
import { GiMoebiusStar } from 'react-icons/gi'

const Informations = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="
        flex
        flex-col
        items-center
        gap-6
      "
    >
      <h3
        className="
          text-2xl
          font-black
        "
      >
        Sobre mim
      </h3>

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            EMPHASIS
            group
            relative
            w-[90%]
            max-w-[600px]
            rounded-full
            border-b-4
            border-l-4
            border-t-4
            border-black
            py-4
            dark:border-purple-500
            dark:bg-black
          "
        >
          <GiMoebiusStar
            className="
              mx-auto
              text-5xl 
              text-yellow-500 
              drop-shadow-[1px_1px_0px_black] 
              transition-all 
              duration-1000 
              group-hover:rotate-90 
              dark:text-indigo-500
            "
          />

          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-[18%]
              rounded-full
              border-4
              border-black
              bg-yellow-500
              dark:border-purple-500
              dark:bg-purple-500
            "
          />
          <div
            className="
              absolute
              right-2
              top-1
              h-[90%]
              w-[14%]
              rounded-full
              border-4
              border-black
              bg-neutral-200
              dark:border-zinc-800
              dark:bg-purple-900
            "
          />
        </button>
      )}

      {isOpen && (
        <div className="flex flex-col gap-8 rounded-lg border-b-4 border-t-4 border-black py-6 text-justify font-medium leading-6 dark:border-purple-700">
          <p>
            Olá, meu nome é Matheus Cardoso Luiz Costa e estou no 3o período do
            curso de Análise e Desenvolvimento de Sistemas. Tenho habilidades
            sólidas em ReactJS, Node.js e React Native, bem como experiência em
            testes com Jest. Atualmente, estou em busca de uma oportunidade como
            estagiário ou desenvolvedor júnior, pois estou ansioso para aplicar
            meus
          </p>
          <p>
            conhecimentos em um ambiente profissional e contribuir para projetos
            desafiadores. Sou um profissional dedicado e comprometido em
            aprimorar minhas habilidades constantemente. Estou sempre estudando
            e buscando me
          </p>
          <p>
            atualizar para acompanhar as tendências e avanços tecnológicos.
            Tenho uma mente aberta e estou disposto a explorar diferentes
            caminhos e desafios. Com minha paixão pela programação e minha
            vontade de aprender,
          </p>
          <p>
            estou confiante de que posso contribuir de forma significativa para
            a equipe e o sucesso de um projeto. Estou pronto para abraçar essa
            oportunidade e trazer soluções inovadoras para a equipe.
          </p>
        </div>
      )}
    </div>
  )
}

export default Informations
