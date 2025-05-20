import { AlertTriangle } from "lucide-react"
import { useState } from "react"

const AlertAction = () => {

  const [actionTaken, setActionTaken] = useState<string | null>(null)
  return (
    <div className="relative bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/30 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4">
    <div className="flex gap-3">
      <div className="p-2 rounded-full">
        <div className="rounded-full bg-white dark:bg-zinc-900">
          <AlertTriangle className="h-6 w-6 text-orange-500 dark:text-orange-400" />
        </div>
      </div>
      <div className="space-y-2 flex-1">
        <div className="space-y-0.5">
          <h3 className="text-sm font-medium text-orange-700 dark:text-orange-300">
            Action Required
          </h3>
          <p className="text-[13px] text-orange-500 dark:text-orange-400">
            {actionTaken
              ? `You chose to ${actionTaken} this alert.`
              : "Please take action on this alert."}
          </p>
        </div>
        {!actionTaken && (
          <div className="flex gap-2">
            <button
              onClick={() => setActionTaken("approve")}
              className="px-3 py-1 text-xs font-medium rounded-md bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-800/30 dark:text-orange-300 dark:hover:bg-orange-700/30 transition-colors"
            >
              Approve
            </button>
            <button
              onClick={() => setActionTaken("dismiss")}
              className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 transition-colors"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}
export default AlertAction