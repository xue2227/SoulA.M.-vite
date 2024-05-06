import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Reveal = ({ play,setPlay  }) => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ x: 0, transition: { type: "tween", duration: 0.25, ease: "easeInOut", times: [0, 0.5, 1], } });
      await controls.start({ y: "-100%", transition: { type: "tween", duration: 0.25, ease: "easeInOut", times: [0, 0.5, 1], delay: 0.25 } });
      controls.set({ x: "-100%", y: "0%" });
      setPlay(false);
    };

    if (play) {
      sequence();
    } else {
      controls.start({ x: "-100%" });
    }
  }, [play, controls,setPlay]);

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={controls}
      className="fixed top-0 bottom-0 left-0 right-0 bg-myblue z-20"
    />
  );
};

export default Reveal;