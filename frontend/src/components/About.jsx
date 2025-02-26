import React from "react";
import { motion } from "framer-motion";
const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      icon: "💻",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
      icon: "⚙️",
    },
    {
      category: "Tools & Others",
      items: ["Git", "VS Code", "Webpack", "Agile/Scrum", "Trae"],
      icon: "🛠️",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <img
              className="mx-auto h-48 w-48 rounded-full object-cover ring-4 ring-indigo-500 shadow-xl transition-transform duration-300 hover:scale-105"
              src="/photo1.jpg"
              alt="Profile"
            />
            <div className="absolute -bottom-2 right-4 bg-indigo-500 rounded-full p-2">
              <span className="text-2xl">👨‍💻</span>
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 sm:text-5xl">
            Abhinav Sinha
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 font-light">
            Full Stack Developer passionate about creating elegant solutions
          </p>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            About Me <span className="text-2xl">🚀</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            I'm a full-stack developer with a passion for building web
            applications that solve real-world problems. With experience in both
            frontend and backend development, I enjoy creating seamless user
            experiences while ensuring robust and scalable backend
            architectures.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            Skills <span className="text-2xl">💪</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {skills.map((skillGroup) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={skillGroup.category}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-indigo-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <span>{skillGroup.icon}</span>
                  {skillGroup.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-800 hover:from-indigo-100 hover:to-purple-100 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            Experience <span className="text-2xl">💼</span>
          </h2>
          <div className="mt-8 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-indigo-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900">
                Unified Mentor
              </h3>
              <p className="mt-2 text-sm text-indigo-600 font-medium">
                Full Stack Developer | 2025 - Present
              </p>
              <ul className="mt-6 space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="text-indigo-500">▹</span>
                  Developed and maintained full-stack web applications using
                  React and Node.js
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-indigo-500">▹</span>
                  Implemented RESTful APIs and integrated third-party services
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-indigo-500">▹</span>
                  Collaborated with cross-functional teams to deliver
                  high-quality solutions
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            Education <span className="text-2xl">🎓</span>
          </h2>
          <div className="mt-8 bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-indigo-500 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900">
              National P.g. College Lucknow
            </h3>
            <p className="mt-2 text-indigo-600 font-medium">
              B.Voc. & M.Voc. Software Development and E.governance 2019-2024
            </p>
            <p className="mt-6 text-gray-600">
              Relevant coursework: Data Structures, Algorithms, Web Development,
              Database Management
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
