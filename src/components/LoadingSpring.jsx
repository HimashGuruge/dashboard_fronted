import { motion } from "framer-motion";

export default function LoadingSpring() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <motion.div
        className="w-10 h-10 rounded-full bg-blue-500"
        animate={{
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut", // removed spring
        }}
      />
    </div>
  );
}
