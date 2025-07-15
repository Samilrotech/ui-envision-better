import { Plus, FileText, Eye, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const actions = [
  {
    title: "View All Orders",
    description: "Browse all purchase orders",
    icon: Eye,
    variant: "default" as const,
    href: "/orders"
  },
  {
    title: "Submit QC Report",
    description: "Create new quality control report",
    icon: Plus,
    variant: "success" as const,
    href: "/submit-qc"
  },
  {
    title: "My QC Reports",
    description: "View your submitted reports",
    icon: FileText,
    variant: "info" as const,
    href: "/qc-reports"
  },
  {
    title: "Analytics",
    description: "View QC performance metrics",
    icon: BarChart3,
    variant: "warning" as const,
    href: "/analytics"
  }
];

export function QuickActions() {
  return (
    <Card className="animate-slide-up">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
        <CardDescription>Jump to common tasks</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action) => (
          <Button
            key={action.title}
            variant={action.variant}
            className="w-full justify-start h-auto p-4"
            asChild
          >
            <a href={action.href}>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <action.icon className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-sm opacity-90">{action.description}</div>
                </div>
              </div>
            </a>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}