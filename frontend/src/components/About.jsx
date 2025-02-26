import React from "react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "VS Code", "Webpack", "Agile/Scrum", "Trae"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <div className="text-center">
          <img
            className="mx-auto h-40 w-40 rounded-full object-cover"
            src="/photo.png" // This is correct if image is in public folder
            alt="Profile"
          />
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Abhinav Sinha
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Full Stack Developer passionate about creating elegant solutions
          </p>
        </div>

        {/* About Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-lg text-gray-500">
            I'm a full-stack developer with a passion for building web
            applications that solve real-world problems. With experience in both
            frontend and backend development, I enjoy creating seamless user
            experiences while ensuring robust and scalable backend
            architectures.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white rounded-lg shadow p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {skillGroup.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
          <div className="mt-6 space-y-8">
            {/* Add your work experience items here */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Unified Mentor
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Full Stack Developer | 2025 - Present
              </p>
              <ul className="mt-4 list-disc list-inside text-gray-500 space-y-2">
                <li>
                  Developed and maintained full-stack web applications using
                  React and Node.js
                </li>
                <li>
                  Implemented RESTful APIs and integrated third-party services
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver
                  high-quality solutions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          <div className="mt-6 bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              National P.g. College Lucknow
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              B.Voc. & M.Voc. Software Development and E.governance 2019-2024
            </p>
            <p className="mt-4 text-gray-500">
              Relevant coursework: Data Structures, Algorithms, Web Development,
              Database Management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
