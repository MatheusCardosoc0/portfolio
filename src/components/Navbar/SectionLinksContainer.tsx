import clsx from 'clsx'
import Link from 'next/link'

interface SectionLinksContainerProps {
  data: string
}

const SectionLinksContainer: React.FC<SectionLinksContainerProps> = ({
  data,
}) => {
  return (
    <Link
      href={'#' + data}
      className="
        group
        relative
        rounded-full
        p-1
        md:p-2
      "
    >
      <div className="text-2xl text-black group-hover:text-white dark:text-white">
        <b>{data}</b>
      </div>

      {new Array(3).fill(0).map((_, i) => (
        <div
          key={i}
          className={clsx(
            `
            absolute
            top-1
            z-[-1]
            hidden
            h-8
            w-[33%]
            rotate-[-8deg]
            bg-black
            group-hover:block
            dark:bg-purple-600
            md:h-12
          `,
            i === 0 && 'dark:ANIMATION_LED right-[0%]',
            i === 1 && 'dark:ANIMATION_LED2 right-[33%]',
            i === 2 && 'dark:ANIMATION_LED3 right-[66%]',
          )}
        />
      ))}
    </Link>
  )
}

export default SectionLinksContainer
