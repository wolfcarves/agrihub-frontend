// import { ColumnDef } from "@tanstack/react-table";

// import { useNavigate } from "react-router-dom";
// // This type is used to define the shape of our data.
// // You can use a Zod schema here if you want.

// export const columns: ColumnDef<FarmApplicationData>[] = [
//   {
//     accessorKey: "status",
//     header: "Status"
//   },
//   {
//     accessorKey: "farm_name",
//     header: "Farm Name"
//   },
//   {
//     accessorKey: "district",
//     header: "District"
//   },

//   {
//     header: "Actions",
//     id: "actions",
//     cell: ({ row }) => {
//       const farm = row.original;
//       const navigate = useNavigate();

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button
//               variant="ghost"
//               className="h-1 w-8 p-0 focus-visible:ring-0 "
//             >
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem
//               onClick={() => navigate(`/admin/farm/application/${farm.id}`)}
//             >
//               View
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>Delete</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       );
//     }
//   }
// ];
