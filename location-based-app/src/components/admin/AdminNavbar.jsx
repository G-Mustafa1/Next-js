
// <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-slate-900/80">
//     <nav className="mx-auto flex justify-between container flex-wrap items-center gap-2 px-4 py-3 sm:px-10">
//         <div>
//             <Link href="/admin" className="text-xl font-semibold text-indigo-600 dark:text-indigo-400"> Admin</Link>
//         </div>
//         <div className="flex items-center gap-2">
//             {navItems.map((item) => {
//                 const isActive = pathname === item.href;
//                 return (
//                     <Link
//                         key={item.href}
//                         href={item.href}
//                         className={clsx(
//                             "rounded-md px-3 py-2 text-sm font-medium transition-all",
//                             "hover:bg-indigo-50 hover:text-indigo-700",
//                             "dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400",
//                             isActive
//                                 ? "bg-indigo-600 text-white shadow-sm"
//                                 : "text-slate-600 dark:text-slate-300"
//                         )}
//                     >
//                         {item.name}
//                     </Link>
//                 );
//             })}
//         </div>
//     </nav>
// </header>



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Users", href: "/admin/users" },
    { name: "Events", href: "/admin/events" },
    { name: "Categories", href: "/admin/categories" },
    { name: "Subcategories", href: "/admin/subcategories" },
];

export default function AdminNavbar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-white dark:bg-slate-900 border-r hidden md:flex flex-col">
            <div className="px-6 py-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                Admin Panel
            </div>
            <nav className="flex-1 px-2 py-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "block rounded-md px-4 py-2 text-sm font-medium transition-all",
                                "hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400",
                                isActive
                                    ? "bg-indigo-600 text-white shadow-sm"
                                    : "text-slate-600 dark:text-slate-300"
                            )}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
