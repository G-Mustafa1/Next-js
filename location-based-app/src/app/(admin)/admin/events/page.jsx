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

const Events = () => {
  const events = [
    {
      title: "Birthday Party",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Karachi, Pakistan",
      thumbnail:
        "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlydGhkYXl8ZW58MHx8MHx8fDA%3D",
      date: "12 Aug 2025",
    },
    {
      title: "Wedding Ceremony",
      description: "A beautiful wedding event.",
      location: "Lahore, Pakistan",
      thumbnail:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
      date: "20 Aug 2025",
    },
  ];

  return (
    <div className="p-4 sm:p-8">
      <div className="mx-auto max-w-6xl rounded-xl border bg-white shadow-sm dark:bg-slate-900">
        <Table>
          <TableCaption className="py-4 text-slate-500">
            All created events
          </TableCaption>

          <TableHeader>
            <TableRow className="bg-slate-50 dark:bg-slate-800">
              <TableHead>Event</TableHead>
              <TableHead className="hidden md:table-cell">
                Location
              </TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {events.map((event) => (
              <TableRow
                key={event.title}
                className="hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                {/* Event info */}
                <TableCell>
                  <div className="flex items-center gap-4">
                    {/* Thumbnail */}
                    <div className="h-[80px] w-[120px] overflow-hidden rounded-md border">
                      <Image
                        src={event.thumbnail}
                        alt={event.title}
                        width={80}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-slate-500 line-clamp-1">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </TableCell>

                {/* Location */}
                <TableCell className="hidden md:table-cell text-slate-600">
                  {event.location}
                </TableCell>

                {/* Date */}
                <TableCell className="text-slate-600">
                  {event.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Events;
