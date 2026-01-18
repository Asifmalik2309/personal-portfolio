import { GraduationCap, Briefcase } from "lucide-react"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-white text-gray-900 py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT – STORY */}
        <div>
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Story
            </span>
          </h2>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            I’m an enthusiastic{" "}
            <span className="text-gray-900 font-semibold">
              Software Developer
            </span>{" "}
            with a strong passion for full-stack development and clean, scalable
            systems. I’m currently pursuing my{" "}
            <span className="text-gray-900 font-medium">
              Computer Science and Engineering (CSE)
            </span>{" "}
            at SHEAT Group of Institutions, Varanasi.
          </p>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Since{" "}
            <span className="text-gray-900 font-medium">
              February 2025
            </span>
            , I’ve been working as a{" "}
            <span className="text-gray-900 font-semibold">
              Software Developer Engineer
            </span>{" "}
            at Sarthak Tech, where I build modern web applications using
            Next.js, TypeScript, Node.js, and MongoDB.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            I enjoy crafting elegant user interfaces, designing efficient
            backends, and continuously learning new technologies to grow as
            a developer.
          </p>
        </div>

        {/* RIGHT – CARDS */}
        <div className="space-y-8">
          
          {/* Education Card */}
          <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <p className="text-lg font-medium">
              Computer Science and Engineering (CSE)
            </p>
            <p className="text-blue-600">
              SHEAT Group of Institutions, Varanasi
            </p>
            <p className="text-gray-500">Varanasi, Uttar Pradesh</p>

            <div className="mt-3 text-gray-500 text-sm space-y-1">
              <p>Expected Graduation: 2025</p>
            </div>
          </div>

          {/* Experience Card */}
          <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="h-8 w-8 text-purple-600" />
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>

            <p className="text-lg font-medium">
              Software Developer Engineer
            </p>
            <p className="text-purple-600">Sarthak Tech</p>
            <p className="text-gray-500">Varanasi, Uttar Pradesh</p>
            <p className="text-gray-500 text-sm mb-4">
              August 2025 – Present
            </p>

            <p className="text-gray-600 leading-relaxed">
              Developing full-stack applications using Next.js, Node.js,
              MongoDB, and TypeScript while collaborating with cross-functional
              teams to deliver scalable solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
