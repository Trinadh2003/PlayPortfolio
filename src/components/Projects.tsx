export default function Projects() {
  const projects = [
    {
      title: 'Effort Logger',
      description: 'Time tracking and task management software with 2FA and AES-256 encryption.',
      technologies: 'Java, Spring Boot, GraphQL, Google Calendar API',
    },
    {
      title: 'TraWell',
      description: 'Cab booking application with multi-user booking and wallet management.',
      technologies: 'Java, Swing, MySQL, NetBeans IDE',
    },
  ];

  return (
    <div className="pb-56 p-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-accent-cyan text-center my-20 border-b-2 border-b-accent-green">Projects</h2>
      {/* Flex wrap with center alignment */}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="  rounded-xl bg-accent-green shadow-lg p-6 w-full max-w-md flex flex-col justify-between items-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-gray"
          >
            <div className="text-left w-full">
              <h5 className="text-xl font-bold text-white mb-4 border-b-1 border-b-white text-center pb-2">{project.title}</h5>
              <p className="text-base text-white mb-4">{project.description}</p>
              <p className="text-sm bg-secondary-dark  text-white p-1 rounded-lg">Technologies: {project.technologies}</p>
            </div>
            <div className="p-6 pt-0 w-full">
              <button
                type="button"
                className=" rounded-lg bg-white py-2 my-2 px-6 text-center text-xs font-bold uppercase text-accent-green shadow-md transition-all hover:shadow-lg hover:border-2 hover:border-teal-800 focus:opacity-[0.85] active:opacity-[0.85]"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
