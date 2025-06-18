import { easeOut, motion } from "motion/react";
import happyTeam from "../../../assets/team.jpg";
const Banner = () => {
  return (
    <div className="bg-base-200 ">
      <div className=" container mx-auto min-h-[50vh]">
        <div className=" flex py-22">
          <div className=" flex-1/2">
            <motion.h1
              animate={{ x: [0, 50, 0] }}
              transition={{
                duration: 2,
                delay: 1,
                ease: easeOut,
                repeat: Infinity,
              }}
              className="text-5xl font-bold"
            >
              Leatest{" "}
              <motion.span
                animate={{
                  color: ["#ecff33", "#33ffe3", "#ff6133", "##FFFF00"],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Jobs
              </motion.span>{" "}
              For You
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className=" flex-1/2">
            <motion.img
              animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: easeOut }}
              className=" rounded-2xl max-w-sm"
              src={happyTeam}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
