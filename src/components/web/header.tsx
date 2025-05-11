import { ArrowUpRight, PartyPopper, SnowflakeIcon } from "lucide-react"
import { Link as ViewTransitionsLink } from "next-view-transitions"
import Link from "next/link"
import { ToggleTheme } from "./theme-toggle"

const Header = () => {
  return (
    <div>
      <div className="sm:hidden w-full flex items-center justify-between py-4 px-6 bg-white dark:bg-black/5">
        <Link
          href="#"
          target="_blank"
          className="flex items-center justify-center gap-2"
        >
          <span className="flex items-center gap-2">
            <PartyPopper className="w-3.5 h-3.5  bg-gradient-to-r from-lime-500 to-blue-600 bg-clip-text " />
            <span className="text-transparent bg-gradient-to-r from-lime-500 via-green-400 to-lime-600 bg-clip-text font-semibold">
              Explore new components
            </span>
          </span>
        </Link>
        <div className="group relative inline-flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-colors">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 opacity-40 group-hover:opacity-80 blur-sm transition-opacity duration-500" />
          <div className="relative z-10 flex items-center gap-2">
            <span className="text-white dark:text-zinc-900 flex items-center">
              FeatherUi Pro
              <ArrowUpRight className="w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90" />
            </span>
          </div>
        </div>
      </div>

      <div className="sticky top-0 left-0 right-0 z-50">
        <div className="bg-white dark:bg-black/5 w-full">
          {/* Rest of the header content */}
          <div className="flex items-center justify-center w-full flex-col">
            <div
              className={`
                            flex items-center justify-between
                            shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]
                            backdrop-blur-md
                            border-b 
                            w-full sm:min-w-[800px] sm:max-w-[1400px]
                            px-4 py-2.5
                            relative
                            transition-all duration-300 ease-in-out
                        `}
            >
              <div className="relative z-10 flex items-center justify-between w-full gap-2">
                {/* Logo Section with Navigation Links */}
                <div className="flex items-center gap-6">
                  <Link href="/" className="flex items-center gap-2">
                    <SnowflakeIcon className="size-6 font-black text-green-500 dark:text-lime-400" />
                    <span className="hidden sm:block font-semibold">
                      Feather Ui
                    </span>
                  </Link>
                  <span className="text-zinc-300 dark:text-zinc-700">|</span>
                  {/* Desktop Navigation Links */}
                  <div className="hidden sm:flex items-center gap-8">
                    <ViewTransitionsLink
                      href="/docs/components/background-paths"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                    >
                      Components & Blocks
                    </ViewTransitionsLink>
                    <ViewTransitionsLink
                      href="/pricing"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                    >
                      Pricing & FAQ
                    </ViewTransitionsLink>
                    <ViewTransitionsLink
                      href="/pricing"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                    >
                      Contacts
                    </ViewTransitionsLink>
                    <Link
                      href="https://codesnippetui.pro/templates?utm_source=codesnippetui.com&utm_medium=header"
                      target="_blank"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                    >
                      Templates
                      <span className="text-green-500 dark:text-lime-400 border border-green-500 dark:border-lime-400 rounded-lg px-1 py-0.5 text-xs">
                        New
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right side items */}
                <div className="hidden sm:flex items-center gap-3">
                  <span className="text-zinc-300 dark:text-zinc-700">|</span>
                  {/* <HeaderPro /> */}
                  <ToggleTheme />
                  <span className="text-zinc-300 dark:text-zinc-700">|</span>
                  <ViewTransitionsLink
                    href="#"
                    target="_blank"
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                  >
                    Buy{"  "}
                    <span className="px-2 flex items-center text-black font-medium bg-green-500 dark:bg-lime-400 rounded-md text-sm">
                      {" "}
                      UIPro
                    </span>
                  </ViewTransitionsLink>
                </div>

                {/* Mobile Navigation remains unchanged */}
                <div className="flex sm:hidden items-center gap-4">
                  <ViewTransitionsLink
                    href="/docs/components/action-search-bar"
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    Components
                  </ViewTransitionsLink>
                  <ViewTransitionsLink
                    href="/pricing"
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    Pricing
                  </ViewTransitionsLink>
                  <ToggleTheme />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
