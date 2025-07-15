import { ShoppingCart, ClipboardCheck, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { QCProgress } from "@/components/dashboard/QCProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex w-full">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6 space-y-6">
          {/* Welcome Section */}
          <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground animate-slide-up">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <ClipboardCheck className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Welcome, Test Hardware Co.</h2>
            </div>
            <p className="text-primary-foreground/90">
              Monitor your purchase orders and submit quality control reports
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Active Orders"
              value="1"
              icon={ShoppingCart}
              variant="info"
            />
            <StatsCard
              title="Active Products"
              value="1"
              icon={ClipboardCheck}
              variant="primary"
            />
            <StatsCard
              title="Pending QC Reports"
              value="1"
              icon={AlertTriangle}
              variant="warning"
            />
            <StatsCard
              title="Completed QC Reports"
              value="0"
              icon={CheckCircle2}
              variant="success"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Recent Orders */}
            <div className="lg:col-span-2">
              <RecentOrders />
            </div>
            
            {/* Right Column - Quick Actions and QC Progress */}
            <div className="space-y-6">
              <QuickActions />
              <QCProgress />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
