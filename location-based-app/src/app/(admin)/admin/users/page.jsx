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

const Users = () => {
  const users = [
    {
      fullName: "Ghulam Mustafa",
      email: "mustafa@gmail.com",
      location: "Karachi, Pakistan",
      profileImage:
        "https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?w=600",
      events: 2,
    },
    {
      fullName: "Muhammad Ali",
      email: "ali@gmail.com",
      location: "Karachi, Pakistan",
      profileImage:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600",
      events: 5,
    },
    {
      fullName: "Ali Abbas",
      email: "abbas@gmail.com",
      location: "Karachi, Pakistan",
      profileImage:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=600",
      events: 5,
    },
  ];

  return (
    <div className="p-4 sm:p-10">
      <div className="rounded-xl border bg-white shadow-sm dark:bg-slate-900 container mx-auto">
        <Table>
          <TableCaption className="py-4 text-slate-500">
            Registered users list
          </TableCaption>

          <TableHeader>
            <TableRow className="bg-slate-50 dark:bg-slate-800">
              <TableHead className=''>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden md:table-cell">
                Location
              </TableHead>
              <TableHead className="text-center">Events</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.email}
                className="hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                {/* User cell */}
                <TableCell>
                  <div className="flex items-center gap-3 h-[80px] w-[80px] ">
                    <Image
                      src={user.profileImage}
                      alt={user.fullName}
                      width={40}
                      height={40}
                      className="rounded-full object-cover h-full w-full"
                    />
                    <div>
                      <p className="font-medium">{user.fullName}</p>
                      <p className="text-sm text-slate-500 md:hidden">
                        {user.location}
                      </p>
                    </div>
                  </div>
                </TableCell>

                {/* Email */}
                <TableCell className="text-slate-600">
                  {user.email}
                </TableCell>

                {/* Location (hidden on mobile) */}
                <TableCell className="hidden md:table-cell text-slate-600">
                  {user.location}
                </TableCell>

                {/* Events */}
                <TableCell className="text-center font-medium">
                  {user.events}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
