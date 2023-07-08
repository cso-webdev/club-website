import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import image from "public/cyborgduck.png"
import Link from "next/link"

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
              TAMS WEB DEV
            </div>
            <div className="flex w-full justify-center">
              <div className="mt-2 w-fit rounded-xl bg-black px-2.5 py-1 text-xs font-semibold text-white">
                {"The best commitee :)"}
              </div>
            </div>
          </div>
          <div className="-z-10 flex h-[350px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-200 to-cyan-400 ring-2 ring-cyan-500 sm:-my-2 lg:-my-3">
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
          {/* <div className="mt-10 h-[200px] w-full gap-1 rounded-xl border-2 border-cyan-500 px-4 py-4 text-xl">
            Welcome to the official website for TAMS Web Dev! <br />
            <br />
            Here you can access written and video resources to take you from 0
            coding experience to web wizard
            <span className="inline-block align-middle mr-1">
              <Wand2 />
            </span>
            created by your committee heads!
          </div> */}
          <div className="mt-10 grid h-[200px] w-full grid-cols-2 gap-3 md:grid-cols-4">
            <Link href="" className="w-full relative group p-2 pt-6 flex rounded-xl bg-cyan-300 bg-opacity-80 border-cyan-500 border-2">
              <div className="!space-y-5">
                Welcome to the official website for TAMS Web Dev!
              </div>
              <div className="absolute text-cyan-100 top-0 right-0 translate-x-2 -translate-y-2 bg-cyan-600 rounded-xl">
                <ArrowUpRight />
              </div>
            </Link>
            <Link href="" className="w-full relative group p-2 pt-6 flex rounded-xl bg-cyan-300 bg-opacity-80 border-cyan-500 border-2">
              <div className="!space-y-5">
                Welcome to the official website for TAMS Web Dev!
              </div>
              <div className="absolute text-cyan-100 top-0 right-0 translate-x-2 -translate-y-2 bg-cyan-600 rounded-xl">
                <ArrowUpRight />
              </div>
            </Link>
            <Link href="" className="w-full relative group p-2 pt-6 flex rounded-xl bg-cyan-300 bg-opacity-80 border-cyan-500 border-2">
              <div className="!space-y-5">
                Welcome to the official website for TAMS Web Dev!
              </div>
              <div className="absolute text-cyan-100 top-0 right-0 translate-x-2 -translate-y-2 bg-cyan-600 rounded-xl">
                <ArrowUpRight />
              </div>
            </Link>
            <Link href="" className="w-full relative group p-2 pt-6 flex rounded-xl bg-cyan-300 bg-opacity-80 border-cyan-500 border-2">
              <div className="!space-y-5">
                Welcome to the official website for TAMS Web Dev!
              </div>
              <div className="absolute text-cyan-100 top-0 right-0 translate-x-2 -translate-y-2 bg-cyan-600 rounded-xl">
                <ArrowUpRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
