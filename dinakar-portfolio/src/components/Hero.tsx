const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Founder of <span className="text-blue-500">Next Tech</span>
      </h2>
      <p className="max-w-2xl text-gray-400">
        AI Engineer | Full Stack Developer | Blockchain Systems Architect
      </p>
      <div className="mt-6 space-x-4">
        <a
          href="https://github.com/Dinakarnayak"
          className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/dinakar-nayak-n-125762232"
          className="border border-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;
