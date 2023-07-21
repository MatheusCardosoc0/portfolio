import About from '@/components/About'
import Experience from '@/components/Experience'
import Project from '@/components/projects'

export default function Home() {
  return (
    <main className="mt-40 pb-20">
      <About />
      <Project />
      <Experience />
    </main>
  )
}
