import { XCircle } from "lucide-react"

const AlertError = () => {
  return (
    <div className="relative bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4">
      <div className="flex gap-3">
        <div className="p-2 rounded-full">
          <div className="rounded-full bg-white dark:bg-zinc-900">
            <XCircle className="h-6 w-6 text-red-500 dark:text-red-400" />
          </div>
        </div>
        <div className="space-y-0.5">
          <h3 className="text-sm font-medium text-red-700 dark:text-red-300">
            Error Alert
          </h3>
          <p className="text-[13px] text-red-500 dark:text-red-400">
            Something went wrong. Please try again.
          </p>
        </div>
      </div>
    </div>
  )
}
export default AlertError
