import Link from "next/link"
import { Menu } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import SmallMenu from "./smallMenu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-12 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-around space-x-4">
          <div className="w-24">
            <div className="sm:hidden">
              <SmallMenu />
            </div>
          </div>
          <nav className="flex-1 sm:flex">
            <div className="hidden flex-1 items-center justify-center space-x-1 sm:flex">
              <Link href="/about" rel="noreferrer">
                <div
                  className={buttonVariants({
                    variant: "link",
                  })}
                >
                  About
                  <span className="sr-only">About</span>
                </div>
              </Link>
              <Link href="/contact" rel="noreferrer">
                <div
                  className={buttonVariants({
                    variant: "link",
                  })}
                >
                  Contact
                  <span className="sr-only">Contact</span>
                </div>
              </Link>
              <Link href="/contact" rel="noreferrer">
                <div
                  className={buttonVariants({
                    variant: "link",
                  })}
                >
                  Contact
                  <span className="sr-only">Contact</span>
                </div>
              </Link>
            </div>
          </nav>
          <nav className="w-24">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.facebook className="h-5 w-5" />
                <span className="sr-only">FaceBook</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
