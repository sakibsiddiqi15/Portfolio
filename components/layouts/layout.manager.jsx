import { DashboardLayout, DefaultLayout } from ".";

export function withDashboard(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}

export function withDefaultLayout(page) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}