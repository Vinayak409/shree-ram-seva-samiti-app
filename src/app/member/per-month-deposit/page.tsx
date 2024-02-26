import { Payment, columns } from "./columns";
import { DataTable } from "@/app/member/per-month-deposit/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      tillLastMonth: 16200,
      thisMonth: 200,
      totalTillNow: 16400,
      status: "success",
    },
    {
      id: "778ed52f",
      tillLastMonth: 16400,
      thisMonth: 200,
      totalTillNow: 16600,
      status: "success",
    },
    {
      id: "858ed52f",
      tillLastMonth: 16600,
      thisMonth: 200,
      totalTillNow: 16800,
      status: "success",
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
