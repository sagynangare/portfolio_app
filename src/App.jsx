import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Blog from "./pages/Blog";
import ContactForm from "./pages/Contact";
import Footer from './components/Footer'
import MessageForm from "./pages/Message";
//import ProfilePage from "./components/Profile";
const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/message" element={<MessageForm />} />
      </Routes>
      
      <Footer/>
    </Router>
  );
};

export default App;
