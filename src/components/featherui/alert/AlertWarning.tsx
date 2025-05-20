import { AlertTriangle } from "lucide-react"

const AlertWarning = () => {
  return (
    <div className="relative bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4">
      <div className="flex gap-3">
        <div className="p-2 rounded-full">
          <div className="rounded-full bg-white dark:bg-zinc-900">
            <AlertTriangle className="h-6 w-6 text-amber-500 dark:text-amber-400" />
          </div>
        </div>
        <div className="space-y-0.5">
          <h3 className="text-sm font-medium text-amber-700 dark:text-amber-300">
            Warning Alert
          </h3>
          <p className="text-[13px] text-amber-500 dark:text-amber-400">
            Please review before proceeding.
          </p>
        </div>
      </div>
    </div>
  )
}
export default AlertWarning
