import { CheckCircle2 } from "lucide-react"

const AlertSuccess = () => {
  return (
    <div className="relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4">
      <div className="flex gap-3">
        <div className="p-2 rounded-full">
          <div className="rounded-full bg-white dark:bg-zinc-900">
            <CheckCircle2 className="h-6 w-6 text-green-500 dark:text-green-400" />
          </div>
        </div>
        <div className="space-y-0.5">
          <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Success Alert
          </h3>
          <p className="text-[13px] text-zinc-500 dark:text-zinc-400">
            Operation completed successfully!
          </p>
        </div>
      </div>
    </div>
  )
}
export default AlertSuccess
