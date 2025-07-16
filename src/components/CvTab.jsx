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
    <div className="p-8 max-w-5xl mx-auto bg-gradient-to-b from-blue-50 to-white rounded-3xl shadow-xl">
    <div className="grid grid-cols-3 items-center mb-8">
      <div></div>
      <h2 className="text-4xl font-bold text-blue-700 text-center">
        Software Engineer
      </h2>
      <div className="text-right">
        <a
          href="/Edoardo-Stolfa-Resume.docx"
          download
          className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow hover:bg-blue-700 transition"
        >
          📄 Scarica CV
        </a>
      </div>
    </div>
      <p className="text-gray-600 mb-4">
        📍 Italy, EU | 📧 <a
    href="mailto:dadduedo@gmail.com"
    className="text-blue-600 hover:underline"
  >
    dadduedo@gmail.com
  </a> | 📱 +39 334 321 3210
      </p>
      <h3 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">Skills</h3>

      <div className="grid grid-cols-4 gap-6 mb-6">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => handleSkillClick(skill.url)}
            className={`${skill.color} w-full py-8 text-xl font-bold text-white rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition transform`}
          >
            {skill.name}
          </button>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">
        Esperienze Lavorative
      </h3>
      <div className="mb-4">
        <p className="font-bold text-lg">Bvtech</p>
        <p className="text-sm text-gray-500">Software Developer (2025 - Presente)</p>
        <p className="text-gray-700">
          Full-stack development with typescript of core functions
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold text-lg">Fybra</p>
        <p className="text-sm text-gray-500">Software Developer (2024 - 2025)</p>
        <p className="text-gray-700">
          Back-end in TypeScript per 3 app front-end, architettura serverless con Node.js, sviluppo Angular e React.
        </p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-lg">Verisure</p>
        <p className="text-sm text-gray-500">Software Developer (2023 - 2024)</p>
        <p className="text-gray-700">
          Ottimizzazione performance web, back-end serverless AWS Lambda/DynamoDB, Docker, documentazione interna.
        </p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-lg">BGP Management Consulting</p>
        <p className="text-sm text-gray-500">Software Developer (2020 - 2023)</p>
        <p className="text-gray-700">
          Sviluppo microservizi Node.js per SAP, testing con Jenkins/Azure, miglioramento performance del 50%.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">Progetti</h3>
      <p className="text-gray-700 mb-4">
        <strong>E-commerce Platform (2022 - 2023):</strong> React, Next.js, MongoDB, test e documentazione completa.
      </p>

      <h3 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">Formazione</h3>
      <p className="text-gray-700">
        Laurea Triennale, Università di Cassino (2019)
      </p>

      <h3 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">Certificazioni</h3>
      <p className="text-gray-700">
        Scrum Fundamentals Certified
      </p>

      <a
        href="/Edoardo-Stolfa-Resume.docx"
        download
        className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow hover:bg-blue-700 transition"
      >
        📄 Scarica CV
      </a>
    </div>
    
  );
};

export default CvTab;
