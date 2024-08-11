import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedItem = ({
  children,
  index,
  className,
  delayMultiplier = 0.3,
  ...rest
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
        delay: index * delayMultiplier,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedItem;
