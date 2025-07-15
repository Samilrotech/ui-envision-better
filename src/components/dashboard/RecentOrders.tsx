import { MoreHorizontal, FileText, Eye, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const orders = [
  {
    id: "PO-TEST-001",
    date: "Jul 15, 2025",
    items: 1,
    status: "ORDERED",
    priority: "High"
  },
  {
    id: "PO-TEST-002", 
    date: "Jul 14, 2025",
    items: 3,
    status: "PROCESSING",
    priority: "Medium"
  },
  {
    id: "PO-TEST-003",
    date: "Jul 13, 2025", 
    items: 2,
    status: "DELIVERED",
    priority: "Low"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "ORDERED":
      return <Badge variant="secondary" className="bg-info/10 text-info border-info/20">Ordered</Badge>;
    case "PROCESSING":
      return <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">Processing</Badge>;
    case "DELIVERED":
      return <Badge variant="secondary" className="bg-success/10 text-success border-success/20">Delivered</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "High":
      return <Badge variant="secondary" className="bg-danger/10 text-danger border-danger/20">High</Badge>;
    case "Medium":
      return <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">Medium</Badge>;
    case "Low":
      return <Badge variant="secondary" className="bg-success/10 text-success border-success/20">Low</Badge>;
    default:
      return <Badge variant="secondary">{priority}</Badge>;
  }
};

export function RecentOrders() {
  return (
    <Card className="animate-slide-up">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl font-semibold">Recent Purchase Orders</CardTitle>
          <CardDescription>Track your latest orders and their status</CardDescription>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <span>View All</span>
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">PO Number</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Items</TableHead>
              <TableHead className="font-semibold">Priority</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="text-right font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium text-primary">{order.id}</TableCell>
                <TableCell className="text-muted-foreground">{order.date}</TableCell>
                <TableCell>{order.items} items</TableCell>
                <TableCell>{getPriorityBadge(order.priority)}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-popover border border-border shadow-lg">
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Download Invoice
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}