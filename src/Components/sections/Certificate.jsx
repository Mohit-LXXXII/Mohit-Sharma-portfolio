import jsI from '../assets/js.png'
import sql from '../assets/sql.png'
import java from '../assets/java.png'
import { Calendar, Award, ExternalLink,Image } from "lucide-react"

const certificates = [
  {
    id: "1",
    title: "JavaScript (Intermediate) Certificate",
    issuer: "HackerRank",
    date: "10 Nov,2024",
    image: jsI,
    credentialUrl: "https://www.hackerrank.com/certificates/6068bf5132b7?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate",
    description: "It covers topics like Design Patterns, Memory management, concurrency model, and event loops, among others.",
  },
  {
    id: "2",
    title: "Java (Basic) Certificate",
    issuer: "HackerRank",
    date: "14 Aug,2024",
    image: java,
    credentialUrl: "https://www.hackerrank.com/certificates/9c3950f17182",
    description: "It will cover basic topics in Java language such as classes, data structures, inheritance, exception handling, etc. You are expected to be proficient in either Java 7 or Java 8.",
  },
  {
    id: "3",
    title: "SQL (Intermediate) Certificate",
    issuer: "HackerRank",
    date: "28 June,2024",
    image: sql,
    credentialUrl: "https://www.hackerrank.com/certificates/38fea5d23e36",
    description: "It includes complex joins, unions, and sub-queries.",
  },
  // {
  //   id: "4",
  //   title: "Google UX Design Certificate",
  //   issuer: "Google",
  //   date: "September 2023",
  //   image: "/placeholder.svg?height=200&width=300",
  //   credentialUrl: "#",
  //   description: "User experience design principles, wireframing, and prototyping",
  // },
  // {
  //   id: "5",
  //   title: "Node.js Application Development",
  //   issuer: "IBM",
  //   date: "August 2023",
  //   image: "/placeholder.svg?height=200&width=300",
  //   credentialUrl: "#",
  //   description: "Backend development with Node.js, Express, and database integration",
  // },
  // {
  //   id: "6",
  //   title: "Cybersecurity Fundamentals",
  //   issuer: "Cisco",
  //   date: "July 2023",
  //   image: "/placeholder.svg?height=200&width=300",
  //   credentialUrl: "#",
  //   description: "Network security, threat detection, and cybersecurity best practices",
  // },
]

export default function Certificates() {
  return (
    <section className="bg-black min-h-screen py-16 px-4" id="certis">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl font-bold text-gray-200">Certificates & Achievements</h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my commitment to continuous learning and
            expertise
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Certificate Image */}
              <div className="relative h-48 bg-gray-800">
                <img
                  src={certificate.image}
                 
                  
                  className="object-cover w-full h-48"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" /> */}
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-200 leading-tight">{certificate.title}</h3>
                  {certificate.credentialUrl && (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-400 transition-colors flex-shrink-0 ml-2"
                      aria-label="View credential"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <div className="mb-3">
                  <p className="text-blue-500 font-medium text-lg">{certificate.issuer}</p>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">{certificate.date}</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">{certificate.description}</p>

                {/* Verification Badge */}
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-xs font-medium">Verified Certificate</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-blue-500 mb-2">{certificates.length}+</div>
            <div className="text-gray-200 font-medium">Certificates Earned</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-blue-500 mb-2">4</div>
            <div className="text-gray-200 font-medium">Different Platforms</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-blue-500 mb-2">2024</div>
            <div className="text-gray-200 font-medium">Most Recent Year</div>
          </div>
        </div>
      </div>
    </section>
  )
}
