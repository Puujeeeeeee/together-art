import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
function Page() {
  return (
    <div className="min-h-screen bg-white p-[100px]">
      <div className="flex  flex-col   h-[100vh] gap-[30px]">
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-5xl flex flex-wrap font-medium ">
            <div className="flex gap-[20px] text-black">
              <p> Unlock </p>
              <p>your,</p>
            </div>
            <div className="flex gap-[20px] text-[#ff6375]">
              <p>creative </p>
              <p>potential,</p>
            </div>
            <div className="flex gap-[20px] text-[#fb923c]">
              <p>connect </p>
              <p>with</p>
              <p>others,</p>
            </div>
            <div className="flex gap-[20px] text-black">
              <p>and</p>
            </div>
            <div className="flex gap-[20px] text-[#00b4a9;]">
              <p>stand </p>
              <p>out</p>
              <p>from</p>
              <p>the</p>
              <p>crowd . 🥋</p>
            </div>
          </div>
        </motion.ul>
        <div className="flex h-[600px] gap-[20px]  border-black">
          <div className=" w-[33%] border bg-[#f1a3bb] relative overflow-hidden">
            <div className="text-black px-[40px] py-[20px] gap-[20px] ">
              <h1 className="text-2xl font-medium">Elevate your design </h1>
              <p className="text-lg">
                Refine your skills into mastery. Elevate project quality and
                client engagement with a distinctive aesthetic vision.
              </p>
            </div>
            <div className="hover:scale-95 scale-90 duration-200  absolute w-[562px] top-[-90px] left-[-65px]">
              <img className="w-[804px] " src="busgui.webp" alt="" />
            </div>
          </div>
          <div className=" w-[33%] border  relative overflow-hidden ">
            <div className="text-black px-[40px] py-[20px] gap-[20px] ">
              <h1 className="text-2xl font-medium">Elevate your design </h1>
              <p className="text-lg">
                Refine your skills into mastery. Elevate project quality and
                client engagement with a distinctive aesthetic vision.
              </p>
            </div>
            <div className="hover:scale-95 scale-90 duration-200   absolute w-[532px] top-[-100px] left-[-65px]">
              <img className="w-[804px] " src="3guy.webp" alt="" />
            </div>
          </div>
          <div className=" w-[33%] border bg-[#5eead4] relative overflow-hidden">
            <div className="text-black px-[40px] py-[20px] gap-[20px] ">
              <h1 className="text-2xl font-medium">Elevate your design </h1>
              <p className="text-lg">
                Refine your skills into mastery. Elevate project quality and
                client engagement with a distinctive aesthetic vision.
              </p>
            </div>
            <div className="hover:scale-95 scale-90  duration-200   absolute w-[532px] top-[-100px] left-[-65px]">
              <img className="w-[804px] " src="halzka.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;
