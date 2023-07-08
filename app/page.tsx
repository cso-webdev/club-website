import Image from "next/image"
import image from "public/cyborgduck.png"
export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <div className="flex-col flex relative w-full items-center max-w-[1000px] h-full justify-between">
          <div className="flex flex-col max-w-[980px]">
            <div className="font-semibold tracking-tight w-full flex justify-center text-lg">
              Welcome to
            </div>
            <div className="tracking-tighter font-extrabold text-4xl sm:text-7xl lg:text-8xl backdrop-blur-sm drop-shadow-xl">
              TAMS WEB DEV
            </div>
            <div className="w-full flex justify-center">
              <div className="text-xs font-semibold py-1 mt-2 px-2.5 bg-black text-white w-fit rounded-xl">
                {"The best commitee :)"}
              </div>
            </div>
          </div>
          <div className="w-full h-[350px] bg-gradient-to-r from-cyan-400 via-cyan-200 to-cyan-400 flex justify-center items-center -z-10 rounded-xl sm:-my-2 lg:-my-3 ring-cyan-500 ring-2">
            <Image src={image} alt="Cyborg Duck" className="object-scale-down max-h-[60%]" />
          </div>
          <div className="flex flex-col max-w-[980px]">
            <div className="font-[750] tracking-tight hover:tracking-widest transition-all ease-in-out cursor-default -mt-7 lg:-mt-8 border-cyan-500 border-2 rounded-xl p-2.5 px-6 text-4xl font-sans sm:text-5xl lg:text-6xl backdrop-blur-md">
              {"LET'S BUILD!"}
            </div>
          </div>
          <div className="bg-cyan-200 absolute w-full -z-20 my-10 flex flex-1 h-[500px] grad-back"></div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4  gap-1 h-[200px] mt-10">
            <div className="bg-cyan-300 bg-opacity-80 w-full rounded-xl">
              sdf
              </div>
              <div className="bg-cyan-300  bg-opacity-80 w-full rounded-xl">
              sdf
              </div>
              <div className="bg-cyan-300 bg-opacity-80 w-full rounded-xl">
              sdf
              </div>
              <div className="bg-cyan-300 bg-opacity-80 w-full rounded-xl">
              sdf
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
