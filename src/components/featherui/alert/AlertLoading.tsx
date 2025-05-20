import { Loader2 } from "lucide-react"

const AlertLoading = () => {
  return (
    <div className="relative bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800/30 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4">
    <div className="flex gap-3">
      <div className="p-2 rounded-full">
        <div className="rounded-full bg-white dark:bg-zinc-900">
          <Loader2 className="h-6 w-6 text-cyan-500 dark:text-cyan-400 animate-spin" />
        </div>
      </div>
      <div className="space-y-0.5">
        <h3 className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
          Loading Alert
        </h3>
        <p className="text-[13px] text-cyan-500 dark:text-cyan-400">
          Please wait while we process your request...
        </p>
      </div>
    </div>
  </div>
  )
}
export default AlertLoading