import { getCategories } from "@/app/actions/categories";
import AddCategories from "@/components/admin/AddCategories";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import React from "react";

const Categories = async () => {
  const categories = await getCategories()    

  return (
    <div className="p-4 sm:p-8">
      <div className="mx-auto max-w-6xl space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
            Categories
          </h1>
          <AddCategories />
        </div>

        {/* Table Card */}
        <div className="rounded-xl border bg-white shadow-sm dark:bg-slate-900">
          <Table>
            <TableCaption className="py-4 text-slate-500">
              All Categories
            </TableCaption>

            <TableHeader>
              <TableRow className="bg-slate-50 dark:bg-slate-800">
                <TableHead className="text-base font-semibold">
                  Category
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {categories?.users?.map((item) => (
                <TableRow
                  key={item.title}
                  className="transition hover:bg-indigo-50/50 dark:hover:bg-slate-800"
                >
                  <TableCell>
                    <div className="flex items-center gap-4">
                      {/* Image */}
                      <div className="relative h-[70px] w-[110px] shrink-0 overflow-hidden rounded-md border bg-slate-100">
                        <Image
                          width={110}
                          height={70}
                          src={item.thumbnail}
                          alt={item.title}
                          // fill
                          className="object-cover"
                        />
                      </div>

                      {/* Text */}
                      <div>
                        <p className="font-medium text-slate-900 dark:text-slate-100">
                          {item.title}
                        </p>
                        <p className="text-sm text-slate-500 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Categories;
