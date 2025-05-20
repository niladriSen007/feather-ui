"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, UserPlus } from "lucide-react"
import { Button } from "../button/Button"
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

interface GradientEventCardProps {
  variant?:
    | "purple"
    | "blue"
    | "green"
    | "lime"
    | "yellow"
    | "orange"
    | "pink"
    | "rose"
    | "gray"
    | "cyan"
    | "emerald"
    | "amber"
    | "red"
    | "fuchsia"
    | "violet"
    | "sky"
    | "teal"
}

export default function GradientEventCard({
  variant = "purple",
}: Readonly<GradientEventCardProps>) {
  const gradients = {
    purple: "bg-gradient-to-br from-purple-500 to-indigo-700",
    blue: "bg-gradient-to-br from-blue-500 to-cyan-700",
    green: "bg-gradient-to-br from-emerald-500 to-teal-700",
    lime: "bg-gradient-to-br from-lime-500 to-green-700",
    yellow: "bg-gradient-to-br from-yellow-500 to-amber-700",
    orange: "bg-gradient-to-br from-orange-500 to-red-700",
    pink: "bg-gradient-to-br from-pink-500 to-fuchsia-700",
    rose: "bg-gradient-to-br from-rose-500 to-pink-700",
    gray: "bg-gradient-to-br from-gray-500 to-stone-700",
    cyan: "bg-gradient-to-br from-cyan-500 to-blue-700",
    emerald: "bg-gradient-to-br from-emerald-500 to-green-700",
    amber: "bg-gradient-to-br from-amber-500 to-orange-700",
    red: "bg-gradient-to-br from-red-500 to-fuchsia-700",
    fuchsia: "bg-gradient-to-br from-fuchsia-500 to-pink-700",
    violet: "bg-gradient-to-br from-violet-500 to-indigo-700",
    sky: "bg-gradient-to-br from-sky-500 to-blue-700",
    teal: "bg-gradient-to-br from-teal-500 to-green-700",
  }

  const gradient = gradients[variant]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${gradient} p-6 rounded-xl shadow-lg max-w-md  font-sans text-white overflow-hidden`}
    >
      <div className="relative">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold">FeatherUI x AWS</h2>
            <p className="text-white/80 text-sm mt-1">Collaborative Meeting</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-center">
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
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-medium">Attendees</h3>
            <Button
              className="text-xs bg-white/20 hover:bg-white/30 transition-colors rounded-full px-2 py-1 flex items-center"
              label={
                <>
                  <UserPlus size={12} className="mr-1" />
                  Invite
                </>
              }
            />
          </div>

          <div className="flex items-center space-x-2">
            {participants.map((participant) => (
              <Avatar key={participant.id} className="border-2 border-white/30">
                <AvatarImage
                  src={participant.avatarUrl || "/placeholder.svg"}
                  alt={participant.name}
                />
                <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
              </Avatar>
            ))}
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-medium">
              +5
            </div>
          </div>
        </div>

        <Button
          className="w-full mt-6 bg-white text-black hover:bg-white/90"
          label={"Join Meeting"}
        />
      </div>
    </motion.div>
  )
}
