import { div } from "framer-motion/client";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh] bg-white w-full">
      <div className="corners">
        <div className="corner corner--1"></div>
        <div className="corner corner--2"></div>
        <div className="corner corner--3"></div>
        <div className="corner corner--4"></div>
      </div>
    </div>
  );
};
export default Loader;
