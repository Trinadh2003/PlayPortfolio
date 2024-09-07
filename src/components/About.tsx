const About = () => {


  const education = [
    {
      degree: 'Master of Science (MS) in Computer Science',
      institution: 'Arizona State University',
      date: 'Aug 2022 – May 2024',
      gpa: '3.7',
      location: 'Tempe, Arizona',
    },
    {
      degree: 'Bachelor of Technology in Electronics and Communication Engineering',
      institution: 'Birla Institute of Technology and Science (BITS Pilani)',
      date: 'Aug 2017 – May 2021',
      gpa: '3.5',
      location: 'India',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary-dark via-secondary-dark to-primary-dark flex flex-col justify-center  items-center">
      <div className="flex flex-col md:flex-row items-center justify-center p-10 pb-2  ">
        {/* About Section */}
        <div className="flex-1 flex flex-col items-end justify-center sm:p-8 sm:border-b-2 sm:border-b-accent-green md:border-b-0 md:border-r-2  md:border-r-accent-green">
          <h2 className="text-4xl font-bold w-full text-center text-accent-green mb-8">About Me</h2>
          <p className="text-lg max-w-lg text-white ">
            I am a motivated and detail-oriented Software Development Engineer with experience in designing, developing, and delivering robust software solutions. Proficient in Java, Python, Spring Boot, and AWS, I have a strong foundation in software engineering principles and best practices. Adept at managing cloud infrastructure, enhancing application performance, and implementing CI/CD pipelines. I am skilled in a variety of technologies, including JavaScript, React, and various database management systems. My experience spans across developing complex applications, optimizing performance, and integrating cutting-edge technologies to drive user engagement and operational efficiency.
          </p>
        </div>

        {/* Education Section */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 mt-12 md:mt-0 md:ml-12 md:border-l-2  md:border-l-accent-green">
          <h2 className="text-3xl font-bold text-accent-green mb-6">Education</h2>
          <div className="w-full xl:w-3/5">
            {education.map((edu, index) => (
              <div key={index} className="bg-accent-green text-white p-6 rounded-lg mb-6 last:mb-2">
                <h3 className="text-xl font-bold text-primary-dark">{edu.degree}</h3>
                <p className="text-lg">{edu.institution}</p>
                <p className="text-sm text-gray-200">{edu.date} • GPA: {edu.gpa}</p>
                <p className="text-sm text-gray-200">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-0 mb-10 w-full flex justify-center">
        <button
          type="button"
          className="rounded-lg bg-blue-500 py-3 px-6 text-center text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] active:opacity-[0.85]"
        >
          <a href="#contact"  >
            Contact</a>
        </button>
      </div>

    </div>
  );
};

export default About;
