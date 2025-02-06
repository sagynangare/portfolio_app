import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="home text-center text-white d-flex align-items-center justify-content-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div>
        <h1>Welcome to My Portfolio</h1>
        <p>I am a Web Developer specializing in React.</p>
        <a href="/projects" className="btn btn-primary">View My Work</a>
      </div>
    </motion.div>
  );
};

export default Home;
