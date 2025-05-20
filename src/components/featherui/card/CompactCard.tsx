"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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

interface CardEventCardProps {
  theme?: "light" | "dark"
}

export default function CompactCard({ theme = "dark" }: CardEventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md"
    >
      <Card className={theme === "dark" ? "bg-zinc-900 text-white border-zinc-800" : ""}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>FeatherUI x AWS meeting</CardTitle>
              <CardDescription className={theme === "dark" ? "text-zinc-400" : ""}>
                Cloud computing collaboration
              </CardDescription>
            </div>
            <div
              className={`flex flex-col items-center justify-center ${
                theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"
              } p-2 rounded-lg min-w-[50px]`}
            >
              <span className={`text-xs font-medium ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}>JUL</span>
              <span className="text-xl font-bold">12</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 mb-4">
            <div className={`flex items-center text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
              <Calendar size={16} className="mr-2" />
              <span>Friday, July 12, 2024</span>
            </div>
            <div className={`flex items-center text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
              <Clock size={16} className="mr-2" />
              <span>12:30 - 13:30 PM</span>
            </div>
            <div className={`flex items-center text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
              <MapPin size={16} className="mr-2" />
              <span>Virtual Meeting (Google Meet)</span>
            </div>
            <div className={`flex items-center text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
              <Users size={16} className="mr-2" />
              <span>8 participants</span>
            </div>
          </div>

          <div>
            <h3 className={`text-sm font-medium ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} mb-2`}>
              Participants
            </h3>
            <div className="flex -space-x-2 overflow-hidden">
              {participants.map((participant) => (
                <Avatar key={participant.id} className="border-2 border-background">
                  <AvatarImage src={participant.avatarUrl || "/placeholder.svg"} alt={participant.name} />
                  <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  theme === "dark" ? "bg-zinc-800 text-zinc-300" : "bg-zinc-200 text-zinc-700"
                } text-xs font-medium border-2 border-background`}
              >
                +5
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className={`w-full ${
              theme === "dark" ? "bg-cyan-600 hover:bg-cyan-700" : "bg-cyan-500 hover:bg-cyan-600"
            } text-white`}
          >
            Join Meeting
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
