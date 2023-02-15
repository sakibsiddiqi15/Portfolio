import constants from "../../utils/constants";


function Header() {
  return (
    <header className="py-5">
      <div className="container flex justify-between flex-wrap">
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={constants.DOMAIN + "logo.svg"}
          alt="SAKIB"
          className=" max-w-[120px]"
        />
        <nav>
            <ul className="flex relative flex-wrap">
                <span  className="indicator inline-block h-1 w-24 bg-sakib-gradient rounded-full absolute"/>
                <li><a href="#" className="nav-link">Home</a></li>
                <li><a href="#" className="nav-link">About</a></li>
                <li><a href="#" className="nav-link">Skills</a></li>
                <li><a href="#" className="nav-link">Project</a></li>
                <li><a href="#" className="nav-link">Contacts</a></li>
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default function main({ children }) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <main>{children}</main>
      <footer className="py-3 px-4 bg-slate-800">
        <p className="text-lg tracking-wide font-semibold">FOOTER</p>
      </footer>
    </div>
  );
}
