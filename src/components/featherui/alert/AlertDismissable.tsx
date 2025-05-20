import { Bell, X } from "lucide-react"
import { useState } from "react"

const AlertDismissable = () => {
  const [visibleAlerts, setVisibleAlerts] = useState<boolean>(true)

  return (
    <div className="relative bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/30 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4">
      <button
        className="absolute top-2 right-2 text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
        onClick={() => {
          setVisibleAlerts(!visibleAlerts)
        }}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Dismiss</span>
      </button>
      <div className="flex gap-3">
        <div className="p-2 rounded-full">
          <div className="rounded-full bg-white dark:bg-zinc-900">
            <Bell className="h-6 w-6 text-purple-500 dark:text-purple-400" />
          </div>
        </div>
        <div className="space-y-0.5 pr-6">
          <h3 className="text-sm font-medium text-purple-700 dark:text-purple-300">
            Dismissible Alert
          </h3>
          <p className="text-[13px] text-purple-500 dark:text-purple-400">
            Click the X to dismiss this notification.
          </p>
        </div>
      </div>
    </div>
  )
}
export default AlertDismissable
