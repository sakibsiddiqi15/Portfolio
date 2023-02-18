import constants from "../utils/constants";
export default function Home() {
  return (
    <>
      <section className="pt-20">
        <div className="text-center">
          <div className="h-80 w-80 inline-flex justify-center items-center rounded-full relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={constants.DOMAIN + "banner.svg"} alt="" className="w-13/12 max-w-md inline-block z-10" />
            <div className="absolute border-2 border-white inline-block rounded-full bg-sakib-gradient animate-spin z-0 h-64 w-64 opacity-30" />
            <div className="absolute border-2 border-white inline-block rounded-full bg-sakib-gradient animate-spin [animation-duration:4s] z-0 h-80 w-80 opacity-20 " />
            <div className="absolute border-2 border-white inline-block rounded-full bg-sakib-gradient animate-spin [animation-duration:8s] duration-500 z-0 h-96 w-96 opacity-10" />
          </div>
          <h1 className="text-5xl tracking-wider font-bold bg-clip-text bg-sakib-gradient text-transparent font-mono">I&apos;m Web Developer.</h1>
        </div>
      </section>
    </>
  );
}
