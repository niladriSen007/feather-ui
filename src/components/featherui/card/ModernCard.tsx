"use client"

import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  MapPin,
  Share2,
  Star,
  Users,
  Video,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "../button/Button"
import { Badge } from "@/components/ui/badge"

interface Participant {
  id: string
  name: string
  email: string
  avatarUrl: string
  status: "Going" | "Pending" | "Declined"
}

const participantsData: Participant[] = [
  {
    id: "1",
    name: "Jane Dane",
    email: "jane@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    status: "Going",
  },
  {
    id: "2",
    name: "Julie Zane",
    email: "julie@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/69.jpg",
    status: "Pending",
  },
  {
    id: "3",
    name: "Mike Mane",
    email: "mike@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/70.jpg",
    status: "Going",
  },
]

interface ModernEventCardProps {
  theme?: "light" | "dark"
}

export default function ModernEventCard({
  theme = "dark",
}: Readonly<ModernEventCardProps>) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
      } rounded-xl shadow-lg max-w-sm mx-auto font-sans overflow-hidden`}
    >
      {/* Event Image */}
      <div className="relative h-48 w-full">
        <Image
          src="https://images.unsplash.com/photo-1747599309107-20504ba6b8dd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Event cover"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div>
            <Badge
              className={`${
                theme === "dark" ? "bg-emerald-600" : "bg-emerald-500"
              } text-white`}
            >
              FEATURED
            </Badge>
            <h2 className="text-xl font-bold text-white mt-2">
              FeatherUI x AWS meeting
            </h2>
          </div>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm"
          >
            <Star
              size={20}
              className={
                isFavorite ? "fill-yellow-400 text-yellow-400" : "text-white"
              }
            />
          </button>
        </div>
      </div>

      {/* Event Details */}
      <div className="p-5">
        <div className="flex flex-col space-y-3">
          <div
            className={`flex items-center text-sm ${
              theme === "dark" ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            <Calendar size={16} className="mr-2" />
            <span>July 12, 2024</span>
            <span className="mx-2">•</span>
            <Clock size={16} className="mr-2" />
            <span>12:30 - 13:30</span>
          </div>

          <div
            className={`flex items-center text-sm ${
              theme === "dark" ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            <MapPin size={16} className="mr-2" />
            <span>Virtual Event</span>
          </div>

          <div
            className={`flex items-center text-sm ${
              theme === "dark" ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            <Users size={16} className="mr-2" />
            <span>
              {participantsData.filter((p) => p.status === "Going").length}{" "}
              attending
            </span>
          </div>
        </div>

        <div className="mt-5">
          <h3
            className={`text-sm font-medium ${
              theme === "dark" ? "text-zinc-200" : "text-zinc-700"
            } mb-2`}
          >
            Participants
          </h3>
          <div className="flex -space-x-2 overflow-hidden">
            {participantsData.map((participant) => (
              <Image
                key={participant.id}
                width={32}
                height={32}
                src={participant.avatarUrl || "/placeholder.svg"}
                alt={participant.name}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              />
            ))}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                theme === "dark" ? "bg-zinc-700" : "bg-zinc-200"
              } text-xs font-medium`}
            >
              +2
            </div>
          </div>
        </div>

        <div className="mt-5 flex space-x-3">
          <Button
            className={`flex-1 flex items-center justify-center ${
              theme === "dark"
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-emerald-500 hover:bg-emerald-600"
            } text-white`}
            label={
              <div className="flex items-center">
                {" "}
                <Video size={16} className="mr-2" />
                Join Meeting
              </div>
            }
          />
          <Button
            variant="outline"
            className={`cursor-pointer ${
              theme === "dark"
                ? "border-zinc-700 text-zinc-300"
                : "border-2 border-zinc-700 text-zinc-700 shadow-2xl hover:text-zinc-800 "
            }`}
            label={<Share2 size={16} />}
          />
        </div>
      </div>
    </motion.div>
  )
}
