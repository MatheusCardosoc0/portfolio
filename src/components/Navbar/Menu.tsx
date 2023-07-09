import { CgMenuGridR } from 'react-icons/cg'

const Menu = () => {
  return (
    <button
      className="
        group
        relative
        rounded-full
        p-2
        hover:scale-150
      "
    >
      <CgMenuGridR className="text-2xl text-black group-hover:text-white group-hover:drop-shadow-[1px_1px_1px_black] dark:text-white group-hover:dark:text-purple-500" />

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
  )
}

export default Menu
