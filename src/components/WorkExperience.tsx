const WorkExperience = () => {
  const experiences = [
    {
      role: 'Software Development Engineer Intern',
      company: 'Lumin Inc',
      date: 'May 2023 – Apr 2024',
      details: [
        "Integrated PACS systems using DICOM standards and Java libraries with Spring Boot.",
        "Optimized SQL queries and developed RESTful APIs, resulting in a 40% improvement in data retrieval times.",
        "Redesigned the company’s products and services page using React, enhancing the user interface and experience.",
      ],
    },
    {
      role: 'Software Development Engineer',
      company: 'Infor',
      date: 'May 2021 – Jul 2022',
      details: [
        "Developed and enhanced features for WFM ERP applications using Java.",
        "Configured AWS EC2 instances for testing and production, reducing deployment time by 20%.",
        "Optimized performance using AWS CloudWatch and Java-based tuning, resulting in a 40% improvement in response times.",
      ],
    },
    {
      role: 'Software Development Engineer Intern',
      company: 'Hindustan Times',
      date: 'Aug 2020 – May 2021',
      details: [
        "Developed a COVID-19 tracker application using Java and React, integrating real-time data from APIs.",
        "Automated end-to-end CMS integration testing using Selenium and Java.",
        "Designed and implemented a machine learning-based recommendation engine using Python.",
      ],
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="m-2 md:w-3/5 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-primary-dark my-20 border-b-2 border-b-accent-green">Work Experience</h2>
        <div className="flex flex-col gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-glass-background backdrop-blur-md border  rounded-lg  shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-gray flex flex-col"
            >
              <div className="flex flex-col md:flex-row md:items-stretch">
                <div className=" md:w-1/3 bg-accent-green p-4 text-white rounded-lg flex flex-col justify-center">
                  <span className="font-bold text-xl">{experience.company}</span>
                  <div>
                    <span className="text-lg">{experience.role}</span>
                    <div className="text-gray-200">{experience.date}</div>
                  </div>
                </div>
                <div className="md:w-2/3 mt-4 md:mt-0 md:ml-6 p-4">
                  <ul className="list-inside space-y-2">
                    {experience.details.map((detail, idx) => (
                      <li key={idx} className="before:content-['→'] before:text-accent-green before:mr-2">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
