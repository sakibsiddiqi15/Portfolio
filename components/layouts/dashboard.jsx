export default function dashboard({children}) {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
             <header className="py-3 px-4 bg-indigo-100">
                <h1 className="text-lg font-semibold text-slate-900">
                    Dashboard.
                </h1>
            </header>
            {children}
            <footer className="py-3 px-4 bg-slate-800">
                <p className="text-lg tracking-wide font-semibold">
                    Dashboard FOOTER
                </p>
            </footer>
        </div>
    )
}