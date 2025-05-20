"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface TimelineEventCardProps {
  theme?: "light" | "dark"
  status?: "upcoming" | "live" | "completed"
}

export default function TimelineEventCard({
  theme = "dark",
  status = "upcoming",
}: TimelineEventCardProps) {
  const getStatusColor = () => {
    if (status === "live")
      return theme === "dark" ? "text-rose-400" : "text-rose-600"
    if (status === "completed")
      return theme === "dark" ? "text-zinc-400" : "text-zinc-500"
    return theme === "dark" ? "text-amber-400" : "text-amber-600"
  }

  const getStatusText = () => {
    if (status === "live") return "Live Now"
    if (status === "completed") return "Completed"
    return "Upcoming"
  }

  const getProgressValue = () => {
    if (status === "live") return 45
    if (status === "completed") return 100
    return 0
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
      } p-6 rounded-xl shadow-lg max-w-sm mx-auto font-sans border ${
        theme === "dark" ? "border-zinc-800" : "border-zinc-200"
      }`}
    >
      <div className="flex items-start space-x-4">
        <div className="relative">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              status === "live"
                ? "bg-rose-500/20"
                : status === "completed"
                ? theme === "dark"
                  ? "bg-zinc-700"
                  : "bg-zinc-200"
                : "bg-amber-500/20"
            }`}
          >
            <Calendar size={20} className={getStatusColor()} />
          </div>
          {status !== "completed" && (
            <span
              className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                status === "live" ? "bg-rose-500" : "bg-amber-500"
              } ${status === "live" ? "animate-pulse" : ""}`}
            ></span>
          )}
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <span className={`text-xs font-medium ${getStatusColor()}`}>
                {getStatusText()}
              </span>
              <h2 className="text-lg font-semibold mt-1">
                FeatherUI x AWS meeting
              </h2>
            </div>
            <div
              className={`text-xs ${
                theme === "dark" ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              12 Jul
            </div>
          </div>

          <div className="mt-3 space-y-2">
            <div
              className={`flex items-center text-sm ${
                theme === "dark" ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              <Clock size={14} className="mr-2" />
              <span>12:30 - 13:30 PM</span>
            </div>
            <div
              className={`flex items-center text-sm ${
                theme === "dark" ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              <MapPin size={14} className="mr-2" />
              <span>Virtual Meeting</span>
            </div>
            <div
              className={`flex items-center text-sm ${
                theme === "dark" ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              <Users size={14} className="mr-2" />
              <span>8 participants</span>
            </div>
          </div>

          {status !== "upcoming" && (
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span
                  className={
                    theme === "dark" ? "text-zinc-400" : "text-zinc-500"
                  }
                >
                  Progress
                </span>
                <span
                  className={
                    theme === "dark" ? "text-zinc-400" : "text-zinc-500"
                  }
                >
                  {getProgressValue()}%
                </span>
              </div>
              <Progress
                value={getProgressValue()}
                className={`h-1.5 ${
                  status === "live"
                    ? theme === "dark"
                      ? "bg-rose-950"
                      : "bg-rose-100"
                    : theme === "dark"
                    ? "bg-zinc-800"
                    : "bg-zinc-200"
                }`}
              />
            </div>
          )}

          <Button
            className={`w-full mt-4 ${
              status === "live"
                ? "bg-rose-600 hover:bg-rose-700"
                : status === "completed"
                ? theme === "dark"
                  ? "bg-zinc-800 hover:bg-zinc-700"
                  : "bg-zinc-200 hover:bg-zinc-300"
                : "bg-amber-600 hover:bg-amber-700"
            } text-white`}
            disabled={status === "completed"}
          >
            {status === "live"
              ? "Join Now"
              : status === "completed"
              ? "View Recording"
              : "Add to Calendar"}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
