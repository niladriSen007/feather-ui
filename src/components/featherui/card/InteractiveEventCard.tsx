"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ChevronDown, Clock, MapPin, Users, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Participant {
  id: string
  name: string
  avatarUrl: string
}

const participants: Participant[] = [
  {
    id: "1",
    name: "Jane Dane",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "2",
    name: "Julie Zane",
    avatarUrl: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    id: "3",
    name: "Mike Mane",
    avatarUrl: "https://randomuser.me/api/portraits/men/70.jpg",
  },
]

interface InteractiveEventCardProps {
  theme?: "light" | "dark"
}

export default function InteractiveEventCard({
  theme = "dark",
}: InteractiveEventCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, layout: { duration: 0.3 } }}
      className={`${
        theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
      } p-4 rounded-xl shadow-lg max-w-sm mx-auto font-sans border ${
        theme === "dark" ? "border-zinc-800" : "border-zinc-200"
      }`}
    >
      <motion.div layout className="flex items-start justify-between gap-3.5">
        <div className="flex items-center space-x-3">
          <div
            className={`p-3 rounded-lg text-center ${
              theme === "dark" ? "bg-violet-900/30" : "bg-violet-100"
            }`}
          >
            <div
              className={`text-xs font-bold ${
                theme === "dark" ? "text-violet-400" : "text-violet-600"
              }`}
            >
              JUL
            </div>
            <div
              className={`text-2xl font-bold ${
                theme === "dark" ? "text-violet-300" : "text-violet-700"
              }`}
            >
              12
            </div>
          </div>
          <div>
            <h2 className="text-base font-semibold">FeatherUI x AWS meeting</h2>
            <div
              className={`flex items-center text-xs ${
                theme === "dark" ? "text-zinc-400" : "text-zinc-500"
              } mt-1`}
            >
              <Clock size={12} className="mr-1" />
              <span>12:30 - 13:30</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`p-2 rounded-full cursor-pointer ${
            theme === "dark" ? "hover:bg-zinc-800" : "hover:bg-zinc-100"
          } transition-colors`}
        >
          {isExpanded ? (
            <X
              size={16}
              className={theme === "dark" ? "text-zinc-400" : "text-zinc-600"}
            />
          ) : (
            <ChevronDown
              size={16}
              className={theme === "dark" ? "text-zinc-400" : "text-zinc-600"}
            />
          )}
        </button>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className={`mt-4 pt-4 border-t ${
                theme === "dark" ? "border-zinc-800" : "border-zinc-200"
              }`}
            >
              <div className="space-y-3">
                <div
                  className={`flex items-center text-sm ${
                    theme === "dark" ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  <Calendar size={16} className="mr-2" />
                  <span>Friday, July 12, 2024</span>
                </div>
                <div
                  className={`flex items-center text-sm ${
                    theme === "dark" ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  <MapPin size={16} className="mr-2" />
                  <span>Virtual Meeting (Google Meet)</span>
                </div>
                <div
                  className={`flex items-center text-sm ${
                    theme === "dark" ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  <Users size={16} className="mr-2" />
                  <span>8 participants</span>
                </div>
              </div>

              <div className="mt-4">
                <h3
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                  } mb-2`}
                >
                  Participants
                </h3>
                <div className="flex flex-wrap gap-2">
                  {participants.map((participant) => (
                    <div
                      key={participant.id}
                      className="flex items-center space-x-2 bg-zinc-800/50 rounded-full pl-1 pr-3 py-1"
                    >
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={participant.avatarUrl || "/placeholder.svg"}
                          alt={participant.name}
                        />
                        <AvatarFallback>
                          {participant.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs">{participant.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex space-x-2">
                <Button
                  className={`flex-1 ${
                    theme === "dark"
                      ? "bg-violet-600 hover:bg-violet-700"
                      : "bg-violet-500 hover:bg-violet-600"
                  } text-white`}
                >
                  Join Meeting
                </Button>
                <Button
                  variant="outline"
                  className={`${
                    theme === "dark"
                      ? "border-zinc-700 text-zinc-300"
                      : "border-zinc-300 text-zinc-700"
                  }`}
                >
                  Decline
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
