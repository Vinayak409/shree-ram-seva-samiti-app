"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  principalAmount: number;
  emi: number;
  interest: number;
  total: number;
  month: string,
  status: "pending" | "processing" | "success" | "failed";
  //   email: string
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "principalAmount",
    header: "Principal Amount",
  },
  {
    accessorKey: "month",
    header: "Month",
  },
  {
    accessorKey: "emi",
    header: "EMI",
  },
  {
    accessorKey: "interest",
    header: "Interest",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
];
