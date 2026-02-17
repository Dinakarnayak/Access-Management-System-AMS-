const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold text-blue-500 mb-10">Technical Skills</h3>

      <div className="grid md:grid-cols-3 gap-6 text-gray-400">
        <div>
          <h4 className="font-semibold text-white mb-2">Programming</h4>
          <p>Python, TypeScript, Java, C++, JavaScript</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">AI & ML</h4>
          <p>Deep Learning, NLP, LLMs, LSTM, GRU</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Web & Backend</h4>
          <p>React, Express, FastAPI, MongoDB, PostgreSQL</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
