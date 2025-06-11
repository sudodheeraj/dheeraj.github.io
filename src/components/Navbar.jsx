import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/">Introduction</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/certifications">Certifications</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
};

export default Navbar;
