"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "Users", href: "/admin/users" },
  { name: "Events", href: "/admin/events" },
  { name: "Categories", href: "/admin/categories" },
  { name: "Subcategories", href: "/admin/subcategories" },
];

const OpenMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white/80 px-4 py-3 backdrop-blur dark:bg-slate-900/80 md:hidden">
      {/* Logo */}
      <span className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
        Admin
      </span>

      {/* Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="rounded-md p-2 bg-indigo-600 hover:bg-indigo-700">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[260px] p-0">
          <SheetHeader className="border-b p-4">
            <SheetTitle className="text-indigo-600">
              Admin Panel
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-1 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-700 dark:text-slate-300 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default OpenMenu;
