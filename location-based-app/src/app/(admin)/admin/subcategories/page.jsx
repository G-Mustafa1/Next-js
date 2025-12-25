"use client";

import AddSubCategory from "@/components/admin/AddSubCategories";
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

const SubCategories = () => {
  const categories = [
    {
      title: "Birthday Party",
      category: "Birthday",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      thumbnail:
        "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?w=600",
    },
    {
      title: "Wedding Ceremony",
      category: "Wedding",
      description: "A beautiful wedding event.",
      thumbnail:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600",
    },
  ];

  return (
    <div className="p-4 sm:p-8 w-full">
      <div className="mx-auto container space-y-6 w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
          <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
            Sub Categories
          </h1>
          <AddSubCategory />
        </div>

        <div className="rounded-xl border shadow-sm bg-white dark:bg-slate-900 w-full overflow-x-auto">
          <Table className="w-full min-w-[500px]">
            <TableCaption className="py-4 text-slate-500">
              All Sub Categories
            </TableCaption>

            <TableHeader>
              <TableRow className="bg-slate-50 dark:bg-slate-800">
                <TableHead>Sub Category</TableHead>
                <TableHead>Parent Category</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {categories.map((item) => (
                <TableRow
                  key={item.title}
                  className="transition hover:bg-indigo-50/50 dark:hover:bg-slate-800"
                >
                  {/* Sub Category */}
                  <TableCell>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 min-w-0">
                      {/* Image */}
                      <div className="relative h-[64px] w-[96px] flex-shrink-0 overflow-hidden rounded-md border bg-slate-100">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <p className="font-medium text-slate-900 dark:text-slate-100 truncate">
                          {item.title}
                        </p>
                        <p className="text-sm text-slate-500 line-clamp-2 truncate">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  {/* Parent Category */}
                  <TableCell className="min-w-[120px]">
                    <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400">
                      {item.category}
                    </span>
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

export default SubCategories;
