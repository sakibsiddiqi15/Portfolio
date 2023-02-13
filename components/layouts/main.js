export default function main({ children }) {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <header className="py-3 px-4 bg-indigo-100">
                <h1 className="text-lg font-semibold text-slate-900">
                    Header
                </h1>
            </header>
            <main>
                {children}
            </main>
            <footer className="py-3 px-4 bg-slate-800">
                <p className="text-lg tracking-wide font-semibold">
                    FOOTER
                </p>
            </footer>
        </div>
    )
}