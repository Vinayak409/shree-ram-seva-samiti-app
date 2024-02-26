"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  tillLastMonth: number;
  thisMonth: number;
  totalTillNow: number;
  status: "pending" | "processing" | "success" | "failed";
  //   email: string
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "tillLastMonth",
    header: "Till Last Month",
  },
  {
    accessorKey: "thisMonth",
    header: "This Month",
  },
  {
    accessorKey: "totalTillNow",
    header: "Total Till Now",
  },
];
