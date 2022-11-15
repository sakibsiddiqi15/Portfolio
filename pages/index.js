import Image from "next/image";
import react from "../public/react.svg";
import BGshape from "./components/BGshape";
import Header from "./components/Header";

const SKILLS = [
  {
    name: "Javascript",
    img: "",
  },
  {
    name: "Typescript",
    img: "",
  },
  {
    name: "React.js",
    img: "",
  },
  {
    name: "Next.js",
    img: "",
  },
  {
    name: "Node.js",
    img: "",
  },
  {
    name: "Express.js",
    img: "",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <section className="">
        <div className="container">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 py-28 min-h-[90vh]">
            {/*text*/}
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <h3 className="text-lg tracking-widest text-cyan-300 font-semibold font-mono mb-3">
                &lt;developer/&gt;
              </h3>
              <h1 className="font-mono text-3xl md:text-5xl lg:text-6xl text-cyan-100 font-semibold mb-3">
                Sakib Siddiqi
              </h1>
              <div className="flex gap-2 flex-wrap">
                {["Web Devloper", "Mobile App Developer"].map((ele) => (
                  <p
                    className="badge badge-outline font-mono font-semibold text-indigo-50 p-3 border-2 border-cyan-500/80 tracking-widest"
                    key={ele}
                  >
                    {ele}
                  </p>
                ))}
              </div>
              <pre className="mb-3 text-md text-cyan-50/50 text-xl">
                ... ... ... ... <br />
                ... ... ... ... <br />
              </pre>

              <div className="flex gap-3 flex-wrap">
                {SKILLS.map((skill, key) => (
                  <div
                    className="aspect-square w-16 h-16 p-3 rounded-2xl tooltip bg-cyan-50/5"
                    key={key}
                    data-tip={skill.name}
                  >
                    <Image src={react} alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2  grid place-content-center">
              <div className="relative h-80 w-60 md:h-96 md:w-70 ">
                <Image
                  src="/sakib.png"
                  alt="sakib siddiqi"
                  className="min-w-min max-w-md h-auto object-contain"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BGshape />
      <section className=" bg-[#0c1224]">
        <div className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <div className="max-w-sm w-full h-full min-h-[300px] relative aspect-square ">
                <Image src="/about.svg" alt="sakib-siddiqi" layout="fill" />
              </div>
            </div>
            <div className="flex flex-col gap-3 justify-center items-start">
              <h1 className="text-3xl text-green-100 font-semibold tracking-wider">
                More about me.!
              </h1>
              <p className="text-green-100/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                dolor atque at, perferendis omnis quidem magni consequatur vel
                eligendi, animi modi voluptate soluta voluptates aliquam
                incidunt asperiores hic sunt cum!
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Web Devloper", "Mobile App Developer"].map((ele) => (
                  <p
                    className="badge badge-outline font-mono font-semibold text-indigo-50 p-3 border-2 border-cyan-500/80 tracking-widest"
                    key={ele}
                  >
                    {ele}
                  </p>
                ))}
              </div>

              {/* eslint-disable-next-line react/no-unescaped-entities*/}
              <button className="btn glass btn-wide">Let's talk</button>
            </div>
          </div>
        </div>
      </section>
      <BGshape top />
      <div className="pb-80" />
    </>
  );
}
