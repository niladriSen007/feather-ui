"use client"
import { motion } from "motion/react"
import Figma from "../icons/figma"
import TailwindCSS from "../icons/tailwindcss"
import BrowseBlocks from "./browse-blocks"
import BrowseButton from "./browse-button"
import Features from "./features-section"
import ShowBadge from "./show-badge"
import SmallBadge from "./small-badge"

const HeroSection = () => {
  return (
    <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row  justify-between gap-8 lg:gap-12 px-4 sm:px-6 py-12 md:py-16 lg:py-40">
      {/* Left side - Title and CTA */}
      <div className="w-full lg:w-[45%] flex flex-col items-start text-left space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SmallBadge />
          <h1 className="text-4xl sm:text-6xl lg:text-4xl font-bold  leading-12 text-zinc-900 dark:text-zinc-100">
            Discover FeatherUI Design Systems Now!
          </h1>
          <div className="flex items-center gap-6 my-6">
            <ShowBadge
              Icon={<TailwindCSS />}
              label="Built with Tailwind CSS 4.0"
            />
            <ShowBadge Icon={<Figma />} label="Figma Design System" />
          </div>
          <p className="text-lg text-gray-700 dark:text-zinc-600">
            FeatherUI is a collection of components and blocks that you can use
            to build your next project. It is built with Tailwind CSS.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-start w-full"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-start gap-3">
            <BrowseButton />
            <BrowseBlocks />
          </div>
        </motion.div>

        <Features />
      </div>

      {/* Right side - Components Layout */}
      <div className="w-full lg:w-[55%] flex flex-col justify-between gap-6 lg:pl-8">
        {/* Top row: Card + Action Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
        ></motion.div>

        {/* Middle row: AI Chat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        ></motion.div>

        {/* Bottom row: Buttons on left, Input on right */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        ></motion.div>
      </div>
    </div>
  )
}
export default HeroSection
