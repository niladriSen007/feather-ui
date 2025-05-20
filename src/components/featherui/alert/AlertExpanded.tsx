import { ChevronDown, ChevronUp, ShieldCheck } from "lucide-react"
import { useState } from "react"

const AlertExpanded = () => {

  const [expanded, setExpanded] = useState(false)
  return (
    <div className="relative bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4">
            <div className="flex gap-3">
              <div className="p-2 rounded-full">
                <div className="rounded-full bg-white dark:bg-zinc-900">
                  <ShieldCheck className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
                </div>
              </div>
              <div className="space-y-0.5 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                    Expandable Alert
                  </h3>
                  <button
                    className="text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-300"
                    onClick={() => setExpanded(!expanded)}
                  >
                    {expanded ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="text-[13px] text-emerald-500 dark:text-emerald-400">
                  Click to see more details.
                </p>
                {expanded && (
                  <div className="mt-2 pt-2 border-t border-emerald-200 dark:border-emerald-800/30 text-[13px] text-emerald-600 dark:text-emerald-300">
                    <p>
                      This is additional information that is hidden by default.
                      You can expand and collapse this section by clicking the
                      button.
                    </p>
                    <p className="mt-1">
                      It&apos;s useful for providing more context without taking
                      up too much space initially.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
  )
}
export default AlertExpanded