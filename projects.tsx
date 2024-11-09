const Projects = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/Caputre.JPG" alt="Project 1" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-600">A brief description of Project 1 goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/Project2.JPG" alt="Project 2" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-600">A brief description of Project 2 goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/Google-clone.JPG" alt="Project 3" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p className="text-gray-600">A brief description of Project 3 goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
