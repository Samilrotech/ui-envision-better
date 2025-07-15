import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "info";
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  variant = "default",
  trend,
  className
}: StatsCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "card-primary";
      case "success":
        return "card-success";
      case "warning":
        return "card-warning";
      case "danger":
        return "card-danger";
      case "info":
        return "card-info";
      default:
        return "bg-card border shadow-sm hover:shadow-md";
    }
  };

  return (
    <Card className={cn(
      "interactive-card transition-all duration-300",
      getVariantClasses(),
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className={cn(
              "text-sm font-medium",
              variant === "default" ? "text-muted-foreground" : "text-current opacity-90"
            )}>
              {title}
            </p>
            <div className="flex items-baseline gap-2">
              <p className={cn(
                "text-3xl font-bold",
                variant === "default" ? "text-foreground" : "text-current"
              )}>
                {value}
              </p>
              {trend && (
                <span className={cn(
                  "text-sm font-medium",
                  variant === "default" 
                    ? trend.isPositive ? "text-success" : "text-danger"
                    : "text-current opacity-75"
                )}>
                  {trend.isPositive ? "+" : ""}{trend.value}%
                </span>
              )}
            </div>
          </div>
          <div className={cn(
            "h-12 w-12 rounded-full flex items-center justify-center",
            variant === "default" 
              ? "bg-primary/10 text-primary" 
              : "bg-white/20 text-current"
          )}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}