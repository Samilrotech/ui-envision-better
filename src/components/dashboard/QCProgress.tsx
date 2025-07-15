import { TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pendingReports = [
  {
    id: "TEST-GATE-001",
    poNumber: "PO-TEST-001",
    priority: "High",
    dueDate: "Today"
  },
  {
    id: "TEST-GATE-002", 
    poNumber: "PO-TEST-002",
    priority: "Medium",
    dueDate: "Tomorrow"
  }
];

export function QCProgress() {
  const completionRate = 0; // 0% as shown in the original image
  const totalItems = 1;
  const completedItems = 0;

  return (
    <div className="space-y-6">
      {/* QC Progress Overview */}
      <Card className="animate-slide-up">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold">QC Progress</CardTitle>
            <CardDescription>Your quality control performance</CardDescription>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            <span>QC Completion Rate</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-2xl font-bold">{completionRate}%</span>
            </div>
            <Progress value={completionRate} className="h-3" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{completedItems} completed</span>
              <span>{totalItems} total QC items</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-success/10 text-success rounded-full mx-auto mb-2">
                <CheckCircle className="h-4 w-4" />
              </div>
              <div className="text-sm font-medium">Passed</div>
              <div className="text-xs text-muted-foreground">0 items</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-danger/10 text-danger rounded-full mx-auto mb-2">
                <AlertCircle className="h-4 w-4" />
              </div>
              <div className="text-sm font-medium">Rejected</div>
              <div className="text-xs text-muted-foreground">0 items</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-warning/10 text-warning rounded-full mx-auto mb-2">
                <Clock className="h-4 w-4" />
              </div>
              <div className="text-sm font-medium">Pending</div>
              <div className="text-xs text-muted-foreground">1 item</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pending QC Reports */}
      <Card className="animate-slide-up">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Pending QC Reports</CardTitle>
          <CardDescription>Items awaiting quality control</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {pendingReports.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div className="space-y-1">
                <div className="font-medium">{report.id}</div>
                <div className="text-sm text-muted-foreground">PO: {report.poNumber}</div>
              </div>
              <div className="flex items-center gap-2">
                <Badge 
                  variant="secondary" 
                  className={
                    report.priority === "High" 
                      ? "bg-danger/10 text-danger border-danger/20" 
                      : "bg-warning/10 text-warning border-warning/20"
                  }
                >
                  {report.priority}
                </Badge>
                <Button size="sm" variant="outline" asChild>
                  <a href="/submit-qc">Submit QC Report</a>
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}