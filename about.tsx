const About = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-xl text-gray-700 mb-6">
          I am a dedicated Data Science student at SSUET, passionate about turning data into actionable insights. I am constantly working on new projects to hone my skills and make an impact in the field.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Skills & Technologies</h3>
        <ul className="text-lg text-gray-700 mb-6">
          <li>Python, R, and SQL</li>
          <li>Machine Learning and Data Visualization</li>
          <li>Web Development (React, Next.js, Tailwind CSS)</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

