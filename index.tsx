import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="bg-gray-50 font-inter">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-40 flex flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto text-center px-6 md:px-0">
          <motion.img
            src="/hanzalapic.GIF" // Correct path to your image
            alt="Hanzala Afaq"
            className="w-3 h-3 rounded-full border-8 border-white mb-6 shadow-xl transform hover:scale-110 transition-all duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 text-yellow-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hi, I'm <span className="text-white">Hanzala Afaq</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I'm a passionate Data Science student and aspiring developer. Welcome to my portfolio where data meets creativity!
          </motion.p>
          <a
            href="#about"
            className="bg-yellow-400 text-gray-800 py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-md"
          >
            Learn More About Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            I am a Data Science enthusiast with a strong foundation in programming and data analysis. Currently, I am pursuing my studies at SSUET and working on various projects to sharpen my skills and contribute to the world of data science.
          </motion.p>
          <a
            href="/about"
            className="text-blue-600 text-lg font-semibold hover:text-blue-700 transition-colors duration-300"
          >
            Read More
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Project 1 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <img
                src="/Capture.JPG"
                alt="Project 1"
                className="w-full h-48 object-cover mb-4 rounded-lg transform hover:scale-105 transition-all duration-500"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
              <p className="text-gray-600">A description of Project 1 goes here. This project was built using React and Data Science tools.</p>
            </motion.div>
            {/* Project 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <img
                src="/Google-clone.JPG"
                alt="Project 2"
                className="w-full h-48 object-cover mb-4 rounded-lg transform hover:scale-105 transition-all duration-500"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 2</h3>
              <p className="text-gray-600">A description of Project 2 goes here. Built with machine learning algorithms to solve real-world problems.</p>
            </motion.div>
            {/* Project 3 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
            >
              <img
                src="/Project2.JPG"
                alt="Project 3"
                className="w-full h-48 object-cover mb-4 rounded-lg transform hover:scale-105 transition-all duration-500"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 3</h3>
              <p className="text-gray-600">A description of Project 3 goes here. Showcasing my skills in data analysis and visualization techniques.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Hanzala Afaq. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;



