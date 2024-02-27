import { Payment, columns } from "./columns";
import { DataTable } from "@/app/member/loan/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
 
  return [
    {
      id: "728ed52f",
      principalAmount: 150000,
      emi: 3000,
      interest: 1125,
      total: 4125,
      month: "Jan",
      status: "success",
    },
    {
      id: "728ed52f",
      principalAmount: 147000,
      emi: 3000,
      interest: 1125.5,
      total: 4102.5,
      month: "Feb",
      status: "success",
    },
    {
      id: "728ed52f",
      principalAmount: 144000,
      emi: 0,
      interest: 1080,
      total: 1080,
      month: "March",
      status: "pending",
    },
    {
      id: "728ed52f",
      principalAmount: 144000,
      emi: 0,
      interest: 1080,
      total: 1080,
      month: "April",
      status: "pending",
    },

    // ...
  ];

}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
