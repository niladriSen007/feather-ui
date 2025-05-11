import { ReactNode } from "react";

const ShowBadge = ({ Icon, label }: { Icon: ReactNode; label: string }) => {
  return (
    <span className="text-sm text-zinc-500 dark:text-zinc-300 pb-3 text-start flex items-center gap-2">
      {Icon}
      <span className="flex items-center gap-1.5">{label}</span>
    </span>
  )
}
export default ShowBadge
