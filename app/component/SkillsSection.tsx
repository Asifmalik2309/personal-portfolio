import { Code, Database, Wrench } from "lucide-react"

const skillsData = [
  {
    title: "Frontend",
    icon: Code,
    accent: "from-blue-500 to-cyan-500",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML & CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Next.js",
      "Angular",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    accent: "from-green-500 to-emerald-500",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    accent: "from-purple-500 to-pink-500",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Agile Methodology",
      "Vercel",
    ],
  },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative bg-white text-gray-900 py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              Technologies
            </span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((group) => (
            <div
              key={group.title}
              className="relative bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${group.accent} flex items-center justify-center mb-6`}
              >
                <group.icon className="h-6 w-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">
                {group.title}
              </h3>

              {/* Skills List */}
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
