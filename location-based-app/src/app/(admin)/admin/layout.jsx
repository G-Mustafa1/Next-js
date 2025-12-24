import AdminNavbar from "@/components/admin/AdminNavbar";
import OpenMenu from "@/components/admin/OpenMenu";


export default function AdminLayout({ children }) {

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
            <AdminNavbar />
            <div className="flex-1 flex flex-col">
                <OpenMenu />
                <main className="flex-grow">
                    {children}
                </main>
            </div>
        </div>
    );
}
