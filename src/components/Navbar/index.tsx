import Menu from './Menu'
import ThemeButton from './ThemeButton'

const Navbar = () => {
  return (
    <nav
      className="
      fixed
      top-0
      w-full
      bg-white
      drop-shadow-[0px_4px_4px_#0000005d]
      dark:bg-black
      dark:drop-shadow-[0px_4px_4px_#6200ff]
     "
    >
      <div className="px-2 py-4 sm:px-4 lg:px-6 lg:py-6">
        <div className="flex items-center justify-evenly">
          <h2 className="flex gap-1 text-2xl font-black">
            <span>Matheus Cardoso</span>
            <span className="hidden lg:flex">Luiz Costa</span>
          </h2>

          <ThemeButton />

          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
