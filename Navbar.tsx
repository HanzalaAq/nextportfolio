import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-6 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Profile Image and Name */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/profile.jpg"  // Path to your profile image
            alt="Hanzala Afaq"
            className="w-16 h-16 rounded-full border-4 border-white"
          />
          <div className="text-white text-4xl font-bold">
            <Link href="/">Hanzala Afaq</Link>
          </div>
        </div>

        {/* Navbar Items */}
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-white hover:text-gray-300 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors duration-300">About</Link>
          </li>
          <li>
            <Link href="/projects" className="text-white hover:text-gray-300 transition-colors duration-300">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


