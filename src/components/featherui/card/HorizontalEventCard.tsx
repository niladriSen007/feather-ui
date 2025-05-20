"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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

interface HorizontalEventCardProps {
  theme?: "light" | "dark"
}

export default function HorizontalEventCard({ theme = "dark" }: HorizontalEventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
      } p-4 rounded-xl shadow-lg  font-sans border ${
        theme === "dark" ? "border-zinc-800" : "border-zinc-200"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div
          className={`flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-lg ${
            theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"
          } md:w-32`}
        >
          <span className={`text-sm font-medium ${theme === "dark" ? "text-orange-400" : "text-orange-600"}`}>
            JULY
          </span>
          <span className="text-3xl font-bold mt-1">12</span>
          <span className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"} mt-1`}>FRIDAY</span>
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">FeatherUI x AWS meeting</h2>
                <Badge
                  className={`${
                    theme === "dark" ? "bg-orange-500/20 text-orange-400" : "bg-orange-100 text-orange-600"
                  }`}
                >
                  Upcoming
                </Badge>
              </div>
              <p className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"} mt-1`}>
                Cloud computing collaboration session
              </p>
            </div>

            <div className="flex items-center space-x-1">
              {participants.slice(0, 3).map((participant) => (
                <Avatar key={participant.id} className="h-8 w-8 border-2 border-background">
                  <AvatarImage src={participant.avatarUrl || "/placeholder.svg"} alt={participant.name} />
                  <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  theme === "dark" ? "bg-zinc-800 text-zinc-300" : "bg-zinc-200 text-zinc-700"
                } text-xs font-medium border-2 border-background`}
              >
                +5
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            <div className={`flex items-center text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
              <Clock size={16} className="mr-2 flex-shrink-0" />
              <span>12:30 - 13:30 PM</span>
            </div>
            <div className={`flex items-center text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
              <MapPin size={16} className="mr-2 flex-shrink-0" />
              <span>Virtual Meeting</span>
            </div>
            <div className={`flex items-center text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
              <Users size={16} className="mr-2 flex-shrink-0" />
              <span>8 participants</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <Button
              className={`${
                theme === "dark" ? "bg-orange-600 hover:bg-orange-700" : "bg-orange-500 hover:bg-orange-600"
              } text-white`}
            >
              Join Meeting
            </Button>
            <Button
              variant="outline"
              className={`${theme === "dark" ? "border-zinc-700 text-zinc-300" : "border-zinc-300 text-zinc-700"}`}
            >
              Add to Calendar
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
