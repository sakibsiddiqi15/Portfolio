import { withDashboard } from "../../components/layouts/layout.manager";

export default function index() {
    return (
        <>
            <h1 className="text-4xl text-indigo-50 font-semibold font-mono">
                Dashboard.
            </h1>
        </>
    )
}
index.layout = withDashboard;