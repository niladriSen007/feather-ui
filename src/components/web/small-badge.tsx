import { cn } from "@/lib/utils"
import { ArrowRight, SnowflakeIcon } from "lucide-react"
import {motion} from "motion/react"

const SmallBadge = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ y: -10, opacity: 1, transition: { duration: 1 } }}
    className={cn("rounded-md w-max p-1", "flex items-center gap-2","border-2 shadow-2xl")}>
      <span className="bg-green-500/80  dark:bg-lime-400  py-1 px-2 rounded-lg">
        <SnowflakeIcon className="text-white dark:text-black" />
      </span>
      <span className="flex items-center gap-2">
        FeatherUI v1.0 
        <ArrowRight />
      </span>
    </motion.div>
  )
}
export default SmallBadge
