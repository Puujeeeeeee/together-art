import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
function Header() {
  return (
    <div className="min-h-screen bg-white p-[100px]">
      <div className="flex  flex-col  h-[140vh] gap-[30px] ">
        <div className="flex flex-col items-center gap-[15px] px-[200px]">
          <div>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="p-[2px] px-[4px] border   border-purple-600 text-purple-600  rounded-3xl text-sm bg-white"
            >
              PRE-SALE NOW
            </motion.ul>
          </div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-[85px] text-black font-black leading-none flex items-center flex-col">
              <p>Master</p>
              <p>G❤️rgeous</p>

              <p>UI Design</p>
            </div>
          </motion.ul>
          <div className="text-[20px] ">
            <p className=" text-black">
              Transform your visual design skills with Pablo Stanley and team.
            </p>
          </div>
          <div className="flex gap-[20px]  ">
            <a href="https://www.zangia.mn/anket/view">
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="border w-[250px] hover:shadow-2xl hover:duration-300 hover:-rotate-3  rounded-md h-[70px] cursor-pointer text-black text-2xl border-black flex justify-center items-center"
              >
                Visit My CV
              </motion.ul>
            </a>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="border w-[250px] h-[70px] rounded-md cursor-pointer hover:-rotate-3  border-black text-white text-2xl bg-purple-600 flex justify-center items-center hover:shadow-2xl  duration-300 "
            >
              Join Please Now
            </motion.ul>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="indicator w-[900px] h-[550px]  flex justify-center items-center ">
            <img
              className="w-[750px] h-[450px] relative z-50 "
              src="together.webp"
              alt=""
            />
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="indicator-item indicator-start absolute z-0 hover:-rotate-3  shadow-2xl hover:scale-95 duration-200">
                <img className="w-[200px] " src="welcome.webp" alt="" />
              </span>
            </motion.ul>
            <motion.ul
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="indicator-item badge-secondary absolute z-0 hover:rotate-3   shadow-2xl hover:scale-95 duration-200">
                <img className="w-[200px]" src="signature.webp" alt="" />
              </span>
            </motion.ul>
            <motion.ul
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="indicator-item indicator-middle indicator-start hover:-rotate-3   badge-secondary absolute z-0 shadow-2xl hover:scale-95 duration-200">
                <img className="w-[200px]" src="selection.webp" alt="" />
              </span>
            </motion.ul>
            <motion.ul
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="indicator-item indicator-middle  bage-secondary hover:rotate-3  absolute z-0 shadow-2xl hover:scale-95 duration-200">
                <img className="w-[200px]" src="page.webp" alt="" />
              </span>
            </motion.ul>
            <motion.ul
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="indicator-item indicator-bottom indicator-start hover:-rotate-3  badge-secondary absolute z-0 shadow-2xl hover:scale-95 duration-200">
                <img className="w-[200px] " src="musician.webp" alt="" />
              </span>
            </motion.ul>
            <motion.ul
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="indicator-item indicator-bottom  badge-secondary  hover:rotate-3 absolute z-0 shadow-2xl hover:scale-95 duration-200">
                <img className="w-[200px]" src="story.png" alt="" />
              </span>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
