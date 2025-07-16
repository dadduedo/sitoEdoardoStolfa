const CvTab = () => {
  const skills = [
    { name: "Node.js", color: "bg-green-500", url: "https://nodejs.org" },
    { name: "React", color: "bg-blue-500", url: "https://react.dev" },
    { name: "Angular", color: "bg-red-500", url: "https://angular.io" },
    { name: "TypeScript", color: "bg-sky-500", url: "https://www.typescriptlang.org" },
    { name: "Firebase", color: "bg-orange-500", url: "https://firebase.google.com" },
    { name: "Docker", color: "bg-cyan-500", url: "https://www.docker.com" },
    { name: "Serverless", color: "bg-purple-500", url: "https://www.serverless.com" },
    { name: "MongoDB", color: "bg-emerald-500", url: "https://www.mongodb.com" },
    { name: "MySQL", color: "bg-indigo-500", url: "https://www.mysql.com" },
    { name: "SAP HANA", color: "bg-yellow-500", url: "https://www.sap.com/products/hana.html" },
    { name: "HTML", color: "bg-pink-500", url: "https://developer.mozilla.org/docs/Web/HTML" },
    { name: "Express.js", color: "bg-lime-500", url: "https://expressjs.com" },
    { name: "Git", color: "bg-violet-500", url: "https://git-scm.com" },
    { name: "Sequelize", color: "bg-teal-500", url: "https://sequelize.org" },
    { name: "AWS Lambda", color: "bg-rose-500", url: "https://aws.amazon.com/lambda" },
    { name: "Next.js", color: "bg-fuchsia-500", url: "https://nextjs.org" },
  ];

  const handleSkillClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto bg-gradient-to-b from-blue-50 to-white rounded-3xl shadow-xl">
      {/* Header */}
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center mb-8 gap-4">
        <div></div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 text-center">
          Software Engineer
        </h2>
        <div className="text-center sm:text-right">
          <a
            href="/Edoardo-Stolfa-Resume.docx"
            download
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-blue-600 rounded-full shadow hover:bg-blue-700 transition"
          >
            📄 Scarica CV
          </a>
        </div>
      </div>

      {/* Contatti */}
      <p className="text-gray-600 mb-4 text-sm sm:text-base text-center sm:text-left">
        📍 Italy, EU<br />
        📧 <a
          href="mailto:dadduedo@gmail.com"
          className="text-blue-600 hover:underline"
        >
          dadduedo@gmail.com
        </a><br />
        📱 +39 334 321 3210
      </p>

      {/* Skills */}
      <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mt-4 sm:mt-6 mb-3 sm:mb-4">Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mb-6">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => handleSkillClick(skill.url)}
            className={`${skill.color} w-full py-3 sm:py-5 md:py-6 text-sm sm:text-lg md:text-xl font-bold text-white rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition transform`}
          >
            {skill.name}
          </button>
        ))}
      </div>

      {/* Esperienze */}
      <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mt-4 sm:mt-6 mb-2 sm:mb-3">
        Esperienze Lavorative
      </h3>
      {[
        {
          company: "Bvtech",
          role: "Software Developer (2025 - Presente)",
          description: "Full-stack development with TypeScript of core functions",
        },
        {
          company: "Fybra",
          role: "Software Developer (2024 - 2025)",
          description: "Back-end in TypeScript per 3 app front-end, architettura serverless con Node.js, sviluppo Angular e React.",
        },
        {
          company: "Verisure",
          role: "Software Developer (2023 - 2024)",
          description: "Ottimizzazione performance web, back-end serverless AWS Lambda/DynamoDB, Docker, documentazione interna.",
        },
        {
          company: "BGP Management Consulting",
          role: "Software Developer (2020 - 2023)",
          description: "Sviluppo microservizi Node.js per SAP, testing con Jenkins/Azure, miglioramento performance del 50%.",
        },
      ].map((job, index) => (
        <div key={index} className="mb-3 sm:mb-4">
          <p className="font-bold text-base sm:text-lg">{job.company}</p>
          <p className="text-xs sm:text-sm text-gray-500">{job.role}</p>
          <p className="text-gray-700 text-sm sm:text-base">{job.description}</p>
        </div>
      ))}

      {/* Progetti */}
      <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mt-4 sm:mt-6 mb-2 sm:mb-3">
        Progetti
      </h3>
      <p className="text-gray-700 text-sm sm:text-base mb-4">
        <strong>E-commerce Platform (2022 - 2023):</strong> React, Next.js, MongoDB, test e documentazione completa.
      </p>

      {/* Formazione */}
      <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mt-4 sm:mt-6 mb-2 sm:mb-3">
        Formazione
      </h3>
      <p className="text-gray-700 text-sm sm:text-base">
        Laurea Triennale, Università di Cassino (2019)
      </p>

      {/* Certificazioni */}
      <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mt-4 sm:mt-6 mb-2 sm:mb-3">
        Certificazioni
      </h3>
      <p className="text-gray-700 text-sm sm:text-base">
        Scrum Fundamentals Certified
      </p>

      {/* Scarica CV */}
      <div className="flex justify-center sm:justify-start">
        <a
          href="/Edoardo-Stolfa-Resume.docx"
          download
          className="inline-flex items-center gap-2 mt-6 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-blue-600 rounded-full shadow hover:bg-blue-700 transition"
        >
          📄 Scarica CV
        </a>
      </div>
    </div>
  );
};

export default CvTab;

