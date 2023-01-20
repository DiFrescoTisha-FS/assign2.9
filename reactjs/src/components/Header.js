import { Link } from "react-router-dom";
import logo from "../images/tdlogo.png";
import {
  FaTwitter,
  FaInstagramSquare,
  FaFacebookF,
  FaHome,
} from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 p-4 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center gap-2"
      >
        {/* Social Icons */}
        <img
          className="mx-auto h-[50px] w-auto rounded-full"
          src={logo}
          alt="logo"
        />
        <FaFacebookF color="gray" background="transparent" size="20px" />
        <FaTwitter color="gray" background="transparent" size="20px" />
        <FaInstagramSquare color="gray" background="transparent" size="20px" />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex items-center text-[#1F2123] gap-[10px]  cursor-pointer"
      >
        <div className="flex flex-row mt-4">
          <Link
            className="uppercase hidden md:inline-flex text-sm space-x-1 cursor-pointer text-[#c0c0c0]"
            to="/"
          >
            <FaHome size="20" />
            &nbsp; Home
          </Link>
        </div>
        <div className="flex flex-row mt-4">
          <Link
            to="/dashboard"
            className="uppercase hidden md:inline-flex text-sm space-x-1 cursor-pointer text-[#c0c0c0]"
          >
            <AiFillDashboard size="20" />
            &nbsp;Dashboard
          </Link>
        </div>
      </motion.div>
    </header>
  );
}

