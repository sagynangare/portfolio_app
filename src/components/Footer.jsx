import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container navbar-dark bg-dark">
  <footer className="py-2 my-2">
    <ul className="nav justify-content-center border-bottom pb-1 mb-1">
      <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/experience">Experience</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/achievements">Achievements</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
    </ul>
    <p className="text-center text-body-secondary">© 2025 Company, Inc</p>
  </footer>
</div>
  );
};

export default Footer;
