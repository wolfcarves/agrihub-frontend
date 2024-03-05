import React from "react";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { columns } from "./columns-crops-registered";
import useGetCropsQuery from "@hooks/api/get/useGetCropsQuery";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@components/ui/table";
import { formatDate } from "@components/lib/utils";
import { Card } from "@components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const TableCropsRegistered = () => {
  const { data: cropData } = useGetCropsQuery();
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Created At</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-center">Growth Span</TableHead>
            <TableHead>Companion Crops</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cropData?.map(crops => (
            <TableRow key={crops.id}>
              <TableCell className="font-medium">
                {formatDate(crops.createdat || "")}
              </TableCell>
              <TableCell>{crops.name}</TableCell>
              <TableCell className="text-center">{crops.growth_span}</TableCell>
              <TableCell>{crops.companion}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={() =>
                        navigator.clipboard.writeText(crops.id || "")
                      }
                    >
                      Copy crop ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <Link to={`/admin/website/crops/update/${crops.id}`}>
                      <DropdownMenuItem>View/update crop</DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableCropsRegistered;
