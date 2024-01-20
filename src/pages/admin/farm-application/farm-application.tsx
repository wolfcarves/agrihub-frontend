import React from "react";
import { DataTable } from "../../../components/ui/custom/data-table/data-table";
import { Payment, columns } from "./columns";
import { users } from "../../../constants/data";

const FarmApplication = () => {
  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com"
    },
    {
      id: "4a6f32c1",
      amount: 150,
      status: "processing",
      email: "john.doe@example.com"
    },
    {
      id: "c87e9a12",
      amount: 75,
      status: "success",
      email: "jane.smith@example.com"
    },
    {
      id: "e1a3b5d7",
      amount: 200,
      status: "pending",
      email: "alice.jones@example.com"
    },
    {
      id: "9b8c7a6f",
      amount: 120,
      status: "success",
      email: "bob.anderson@example.com"
    },
    {
      id: "3d2e1f4c",
      amount: 80,
      status: "success",
      email: "sam.wilson@example.com"
    },
    {
      id: "a1b2c3d4",
      amount: 180,
      status: "pending",
      email: "emma.roberts@example.com"
    },
    {
      id: "5f6e7d8c",
      amount: 90,
      status: "success",
      email: "charlie.brown@example.com"
    },
    {
      id: "2a3b4c5d",
      amount: 160,
      status: "success",
      email: "olivia.martin@example.com"
    },
    {
      id: "7e8f9a1b",
      amount: 130,
      status: "pending",
      email: "david.hall@example.com"
    }
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className=" font-semibold">Farm Applications</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default FarmApplication;
