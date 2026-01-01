import AdminNavbar from "@/components/admin/AdminNavbar";
import OpenMenu from "@/components/admin/OpenMenu";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";


export default async function AdminLayout({ children }) {
    const session = await auth()
    console.log(session);
    
    if(!session) {
        redirect('/login')
    }
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
