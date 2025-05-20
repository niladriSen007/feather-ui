"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface MinimalEventCardProps {
  theme?: "light" | "dark"
}

export default function MinimalEventCard({ theme = "dark" }: MinimalEventCardProps) {
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
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold">FeatherUI x AWS meeting</h2>
          <p className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"} mt-1`}>
            A collaborative session on cloud solutions
          </p>
        </div>
        <div
          className={`flex flex-col items-center justify-center ${
            theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"
          } p-2 rounded-lg min-w-[60px]`}
        >
          <span className={`text-xs font-medium ${theme === "dark" ? "text-teal-400" : "text-teal-600"}`}>JUL</span>
          <span className="text-xl font-bold">12</span>
        </div>
      </div>

      <Separator className={`my-4 ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"}`} />

      <div className="space-y-2">
        <div className={`flex items-center text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
          <Calendar size={16} className="mr-2" />
          <span>Friday, July 12, 2024</span>
        </div>
        <div className={`flex items-center text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
          <Clock size={16} className="mr-2" />
          <span>12:30 - 13:30 PM (GMT+0)</span>
        </div>
      </div>

      <Button
        className={`w-full mt-4 ${
          theme === "dark" ? "bg-teal-600 hover:bg-teal-700 text-white" : "bg-teal-500 hover:bg-teal-600 text-white"
        }`}
      >
        <ExternalLink size={16} className="mr-2" />
        Add to Calendar
      </Button>
    </motion.div>
  )
}
