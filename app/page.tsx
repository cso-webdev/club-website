import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Wand2 } from "lucide-react"
import image from "public/cyborgduck.png"
import Title from "./title"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <div className="relative flex h-full w-full max-w-[1000px] flex-col items-center justify-between">
          <div className="flex max-w-[980px] flex-col">
            <div className="flex w-full justify-center text-lg font-semibold tracking-tight">
              Welcome to
            </div>
            <div className="text-4xl font-extrabold tracking-tighter drop-shadow-xl backdrop-blur-sm sm:text-7xl lg:text-8xl">
              <Title/>
            </div>
            <div className="flex w-full justify-center">
              <div className="mt-2 w-fit rounded-xl bg-black px-2.5 py-1 text-xs font-semibold text-white">
                {"The best commitee :)"}
              </div>
            </div>
          </div>
          <div className="-z-10 -my-2.5 flex h-[350px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-200 to-cyan-400 ring-2 ring-cyan-500">
            <Image
              src={image}
              alt="Cyborg Duck"
              className="max-h-[60%] object-scale-down"
            />
          </div>
          <div className="flex max-w-[980px] flex-col">
            <div className="-mt-7 cursor-default rounded-xl border-2 border-cyan-500 p-2.5 px-6 font-sans text-4xl font-bold tracking-tight backdrop-blur-md transition-all ease-in-out hover:tracking-widest sm:text-5xl lg:-mt-8 lg:text-6xl">
              {"LET'S BUILD!"}
            </div>
          </div>
          <div className="grad-back absolute -z-20 my-10 flex h-[500px] w-full flex-1 bg-cyan-200"></div>
          <div className="mt-10 grid h-[100px] w-full grid-cols-2 gap-3 md:grid-cols-4">
            <Link
              href=""
              className="group relative flex w-full rounded-xl border-2 border-cyan-500 bg-cyan-300 bg-opacity-80 p-2 pt-6"
            >
              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold tracking-tight underline">
                  About Us
                </div>
                <div>Learn more about us!</div>
              </div>
              <div className="absolute right-0 top-0 -translate-y-2 translate-x-2 rounded-xl bg-cyan-600 text-cyan-100 transition ease-in-out group-hover:scale-125">
                <ArrowUpRight />
              </div>
            </Link>
            <Link
              href=""
              className="group relative flex w-full rounded-xl border-2 border-cyan-500 bg-cyan-300 bg-opacity-80 p-2 pt-6"
            >
              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold tracking-tight underline">
                  Videos
                </div>
                <div>Watch Our Tutorial Videos!</div>
              </div>
              <div className="absolute right-0 top-0 -translate-y-2 translate-x-2 rounded-xl bg-cyan-600 text-cyan-100 transition ease-in-out group-hover:scale-125">
                <ArrowUpRight />
              </div>
            </Link>
            <Link
              href=""
              className="group relative flex w-full rounded-xl border-2 border-cyan-500 bg-cyan-300 bg-opacity-80 p-2 pt-6"
            >
              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold tracking-tight underline">
                  Resources
                </div>
                <div>Watch Our Tutorial Videos!</div>
              </div>
              <div className="absolute right-0 top-0 -translate-y-2 translate-x-2 rounded-xl bg-cyan-600 text-cyan-100 transition ease-in-out group-hover:scale-125">
                <ArrowUpRight />
              </div>
            </Link>
            <Link
              href=""
              className="group relative flex w-full rounded-xl border-2 border-cyan-500 bg-cyan-300 bg-opacity-80 p-2 pt-6"
            >
              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold tracking-tight underline">
                  Upcoming Events
                </div>
                <div>Look at our events!</div>
              </div>
              <div className="absolute right-0 top-0 -translate-y-2 translate-x-2 rounded-xl bg-cyan-600 text-cyan-100 transition ease-in-out group-hover:scale-125">
                <ArrowUpRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
