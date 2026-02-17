const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-blue-500 mb-10">Projects</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">ShubhaVidya</h4>
            <p className="text-gray-400">
              Full-stack AI-powered education platform built with React, Node.js,
              MongoDB, and JWT authentication.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Blockchain E-Voting</h4>
            <p className="text-gray-400">
              Decentralized voting system using blockchain principles for
              transparency and security.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">IndinaGPT</h4>
            <p className="text-gray-400">
              LLM-based chatbot system built using FastAPI and modular AI
              services.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">RBAC API</h4>
            <p className="text-gray-400">
              Secure TypeScript backend with JWT authentication and role-based
              access control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
