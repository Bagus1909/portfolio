import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Bagus.
        </motion.span>
        <div className="socials">
          <a href="https://www.instagram.com/yoss_bass/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=6282325482326" target="_blank">
            <img src="/whatsapp.png" alt="" />
          </a>
          <a href="https://github.com/Bagus1909" target="_blank">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
