import { Bell } from "lucide-react"
import { AnimatePresence,motion } from "motion/react"

const AlertToast = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="relative bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/30 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4"
      >
        <div className="flex gap-3">
          <div className="p-2 rounded-full">
            <div className="rounded-full bg-white dark:bg-zinc-900">
              <Bell className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
            </div>
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Toast Alert
            </h3>
            <p className="text-[13px] text-indigo-500 dark:text-indigo-400">
              This alert appears and disappears automatically.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
export default AlertToast
