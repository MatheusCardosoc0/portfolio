import { sectionLinks } from '@/utils/sectionLinks'
import SectionLinksContainer from './SectionLinksContainer'
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
        <div className="flex justify-evenly">
          {sectionLinks.slice(0, 2).map((item, i) => (
            <div
              key={item.title}
              className={`
                hidden
                sm:flex
              `}
            >
              <SectionLinksContainer data={item.title} />
            </div>
          ))}

          <ThemeButton />

          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
