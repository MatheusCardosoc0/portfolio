import { sectionLinks } from '@/utils/sectionLinks'
import SectionLinksContainer from './SectionLinksContainer'
import Menu from './Menu'
import ThemeButton from './ThemeButton'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-neutral-100">
      <div className="px-2 py-4 sm:px-4 lg:px-6 lg:py-6">
        <div className="flex justify-evenly">
          {sectionLinks.slice(0, 2).map((a) => (
            <SectionLinksContainer key={a.title} data={a.title} />
          ))}

          <Menu />

          <ThemeButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
