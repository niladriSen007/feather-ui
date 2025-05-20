import { motion } from "framer-motion" // Corrected import from framer-motion
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  Clock,
  UserPlus,
  Video,
} from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"
import { Button } from "../button/Button"

interface Participant {
  id: string
  name: string
  email: string
  avatarUrl: string
  status: "Going" | "Pending"
}

const participantsData: Participant[] = [
  {
    id: "1",
    name: "Jane Dane",
    email: "jane@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg", // Placeholder
    status: "Going",
  },
  {
    id: "2",
    name: "Julie Zane",
    email: "jane@example.com", // OCR shows same email, using as is
    avatarUrl: "https://randomuser.me/api/portraits/women/69.jpg", // Placeholder
    status: "Pending",
  },
  {
    id: "3",
    name: "Mike Mane",
    email: "jane@example.com", // OCR shows same email, using as is
    avatarUrl: "https://randomuser.me/api/portraits/men/70.jpg", // Placeholder
    status: "Going",
  },
]

interface EventCardProps {
  theme?: "light" | "dark"
}

const EventCard: React.FC<EventCardProps> = ({ theme = "dark" }) => {
  const [activeTab, setActiveTab] = useState<
    "Description" | "Participants" | "Comments"
  >("Participants")
  const tabNames: Array<"Description" | "Participants" | "Comments"> = [
    "Description",
    "Participants",
    "Comments",
  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
      } p-6 rounded-xl shadow-lg max-w-sm mx-auto font-sans`}
    >
      {/* Top Section */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className=" p-3 rounded-lg text-center">
            <div
              className={`text-xs font-bold text-white ${
                theme === "dark" ? "bg-lime-500" : "bg-red-500"
              } py-1 px-2 rounded-t-md`}
            >
              JUL
            </div>
            <div className="text-2xl font-bold">12</div>
          </div>
          <div>
            <p
              className={`text-xs ${
                theme === "dark" ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              Upcoming event
            </p>
            <h2 className="text-lg font-semibold flex items-center">
              FeatherUI x AWS meeting
            </h2>
            <div
              className={`flex items-center text-xs ${
                theme === "dark" ? "text-zinc-400" : "text-zinc-500"
              } mt-1`}
            >
              <CalendarDays size={14} className="mr-1" />
              <span>12 July, 2024</span>
              <span className="mx-1">|</span>
              <Clock size={14} className="mr-1" />
              <span>12:30 - 13:30</span>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs Section */}
      <div
        className={`flex border-b ${
          theme === "dark" ? "border-zinc-700" : "border-zinc-300"
        } mb-4 overflow-x-auto sm:overflow-x-visible`}
      >
        {tabNames?.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-3 sm:px-4 text-sm font-medium whitespace-nowrap cursor-pointer
              ${
                activeTab === tab
                  ? `${
                      theme === "dark"
                        ? "text-lime-400 border-lime-400 border-b-2 border-lime-500"
                        : "text-red-500 border-red-500 border-b-2 border-red-500"
                    }`
                  : `${
                      theme === "dark"
                        ? "text-zinc-400 hover:text-white hover:border-zinc-500"
                        : "text-zinc-500 hover:text-zinc-900 hover:border-zinc-400"
                    } hover:border-b-2 transition-colors duration-200`
              }
              ${index > 0 ? "ml-1 sm:ml-2" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Content Section based on activeTab */}
      <div className="min-h-[200px]">
        {" "}
        {/* Added min-height to prevent layout shifts */}
        {activeTab === "Description" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className={`text-lg font-semibold ${
                theme === "dark" ? "text-zinc-100" : "text-zinc-800"
              } mb-3`}
            >
              Event Description
            </h3>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-zinc-300" : "text-zinc-700"
              } leading-relaxed`}
            >
              Join us for an insightful session where FeatherUI collaborates
              with AWS to explore the future of cloud computing and innovative
              solutions. This meeting will cover key strategies, upcoming
              projects, and opportunities for synergy. An excellent chance to
              network and learn from industry leaders.
            </p>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-zinc-300" : "text-zinc-700"
              } leading-relaxed mt-2`}
            >
              Agenda highlights include: Project Overviews, Technical Deep
              Dives, and Q&A sessions.
            </p>
          </motion.div>
        )}
        {activeTab === "Participants" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Participants List Section */}
            <div className="mb-6">
              <h3
                className={`text-sm font-medium ${
                  theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                } mb-3`}
              >
                Participants ({participantsData.length})
              </h3>
              <div className="space-y-3">
                {participantsData.map((participant) => (
                  <div
                    key={participant.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <Image
                        width={48}
                        height={48}
                        src={participant.avatarUrl}
                        alt={participant.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p
                          className={`text-sm font-semibold ${
                            theme === "dark" ? "text-white" : "text-zinc-900"
                          }`}
                        >
                          {participant.name}
                        </p>
                        <p
                          className={`text-xs ${
                            theme === "dark" ? "text-zinc-400" : "text-zinc-500"
                          }`}
                        >
                          {participant.email}
                        </p>
                      </div>
                    </div>
                    {participant.status === "Going" ? (
                      <span
                        className={`flex items-center text-xs ${
                          theme === "dark"
                            ? "bg-lime-700 text-lime-200"
                            : "bg-green-100 text-green-700"
                        } px-2 py-1 rounded-full`}
                      >
                        <CheckCircle2 size={14} className="mr-1" /> Going
                      </span>
                    ) : (
                      <span
                        className={`flex items-center text-xs ${
                          theme === "dark"
                            ? "bg-yellow-700 text-yellow-200"
                            : "bg-yellow-100 text-yellow-700"
                        } px-2 py-1 rounded-full`}
                      >
                        <AlertTriangle size={14} className="mr-1" /> Pending
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <button
                className={`mt-4 flex items-center text-sm ${
                  theme === "dark"
                    ? "text-lime-400 hover:text-lime-300"
                    : "text-red-500 hover:text-red-600"
                }`}
              >
                <UserPlus size={16} className="mr-2" />
                Invite people
              </button>
            </div>
          </motion.div>
        )}
        {activeTab === "Comments" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className={`text-lg font-semibold ${
                theme === "dark" ? "text-zinc-100" : "text-zinc-800"
              } mb-3`}
            >
              Comments
            </h3>
            {/* Placeholder for comments section - you can map through actual comment data here */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Image
                  width={48}
                  height={48}
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="User avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-zinc-200" : "text-zinc-800"
                    }`}
                  >
                    Alex Johnson
                  </p>
                  <p
                    className={`text-xs ${
                      theme === "dark" ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    Looking forward to this! 🔥
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Image
                  width={48}
                  height={48}
                  src="https://randomuser.me/api/portraits/women/76.jpg"
                  alt="User avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-zinc-200" : "text-zinc-800"
                    }`}
                  >
                    Sarah Miller
                  </p>
                  <p
                    className={`text-xs ${
                      theme === "dark" ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    Will the slides be available afterwards?
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <textarea
                  className={`w-full p-2 ${
                    theme === "dark"
                      ? "bg-zinc-800 border-zinc-700 text-zinc-300 placeholder-zinc-500 focus:ring-lime-500 focus:border-lime-500"
                      : "bg-zinc-100 border-zinc-300 text-zinc-700 placeholder-zinc-400 focus:ring-red-500 focus:border-red-500"
                  } rounded-md text-sm resize-none`}
                  rows={3}
                  placeholder="Add a comment..."
                ></textarea>
                <button
                  className={`mt-2 px-4 py-2 cursor-pointer ${
                    theme === "dark"
                      ? "bg-lime-600 hover:bg-green-700"
                      : "bg-red-500 hover:bg-red-600"
                  } text-white text-sm font-medium rounded-md transition-colors duration-200`}
                >
                  Post Comment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>{" "}
      {/* End of Content Section based on activeTab */}
      {/* Bottom Section */}
      <Button
        label={
          <>
            <Video
              size={18}
              className={`mr-2 ${
                theme === "dark" ? "text-lime-500" : "text-red-500"
              }`}
            />{" "}
            {/* Assuming Google Meet icon is lime-ish */}
            Open Google Meet
          </>
        }
        className={`w-full ${
          theme === "dark"
            ? "bg-zinc-800 hover:bg-zinc-700 text-white"
            : "bg-zinc-200 hover:bg-zinc-300 text-zinc-800"
        } py-3 mt-4 rounded-lg flex items-center justify-center text-sm font-medium`}
      />
    </motion.div>
  )
}

export default EventCard
