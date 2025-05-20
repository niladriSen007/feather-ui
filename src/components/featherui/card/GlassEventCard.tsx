"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
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

interface GlassEventCardProps {
  theme?: "light" | "dark"
}

export default function GlassEventCard({
  theme = "dark",
}: GlassEventCardProps) {
  return (
    <div className="relative max-w-md">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl -z-10"></div>

      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl shadow-lg font-sans text-white overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>

        <div className="relative">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold">FeatherUI x AWS</h2>
              <p className="text-white/80 text-sm mt-1">
                Collaborative Meeting
              </p>
            </div>
            <div className="bg-white/20 p-3 rounded-lg text-center">
              <div className="text-xs font-bold">JUL</div>
              <div className="text-2xl font-bold">12</div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center text-white/90 text-sm">
              <Calendar size={16} className="mr-2" />
              <span>Friday, July 12, 2024</span>
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <Clock size={16} className="mr-2" />
              <span>12:30 - 13:30 PM</span>
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <MapPin size={16} className="mr-2" />
              <span>Virtual Meeting (Google Meet)</span>
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <Users size={16} className="mr-2" />
              <span>8 participants</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium mb-3">Attendees</h3>
            <div className="flex -space-x-2 overflow-hidden">
              {participants.map((participant) => (
                <Avatar
                  key={participant.id}
                  className="border-2 border-white/30"
                >
                  <AvatarImage
                    src={participant.avatarUrl || "/placeholder.svg"}
                    alt={participant.name}
                  />
                  <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xs font-medium border-2 border-white/30">
                +5
              </div>
            </div>
          </div>

          <Button className="w-full mt-6 bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm">
            Join Meeting
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
