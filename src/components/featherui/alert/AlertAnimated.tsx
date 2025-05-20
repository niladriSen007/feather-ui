import { CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"

const AlertAnimated = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.02 }}
      className="relative bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800/30 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4 cursor-pointer"
      onClick={() => {}}
    >
      <div className="flex gap-3">
        <div className="p-2 rounded-full">
          <div className="rounded-full bg-white dark:bg-zinc-900">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <CheckCircle2 className="h-6 w-6 text-pink-500 dark:text-pink-400" />
            </motion.div>
          </div>
        </div>
        <div className="space-y-0.5">
          <h3 className="text-sm font-medium text-pink-700 dark:text-pink-300">
            Animated Alert
          </h3>
          <p className="text-[13px] text-pink-500 dark:text-pink-400">
            This alert has animations! Click to dismiss.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
export default AlertAnimated
