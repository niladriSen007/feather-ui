import { Info } from "lucide-react"

const AlertInfo = () => {
  return (
    <div className="relative bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4">
      <div className="flex gap-3">
        <div className="p-2 rounded-full">
          <div className="rounded-full bg-white dark:bg-zinc-900">
            <Info className="h-6 w-6 text-blue-500 dark:text-blue-400" />
          </div>
        </div>
        <div className="space-y-0.5">
          <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
            Info Alert
          </h3>
          <p className="text-[13px] text-blue-500 dark:text-blue-400">
            Here&apos;s some useful information for you.
          </p>
        </div>
      </div>
    </div>
  )
}
export default AlertInfo
