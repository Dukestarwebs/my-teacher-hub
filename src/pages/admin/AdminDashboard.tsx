import { MOCK_TEACHERS, MOCK_SEMINARS, MOCK_PAYMENTS } from "@/data/mockData";
import { Users, Video, DollarSign, Brain, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  const pendingTeachers = MOCK_TEACHERS.filter(t => !t.isApproved);
  const totalRevenue = MOCK_PAYMENTS.filter(p => p.status === "completed").reduce((a, p) => a + p.amount, 0);

  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Students", value: "45", icon: Users },
          { label: "Teachers", value: MOCK_TEACHERS.length.toString(), icon: Users },
          { label: "Seminars", value: MOCK_SEMINARS.length.toString(), icon: Video },
          { label: "Revenue", value: `UGX ${(totalRevenue / 1000).toFixed(0)}K`, icon: DollarSign },
        ].map(s => (
          <div key={s.label} className="bg-card rounded-2xl border border-border p-4 text-center">
            <s.icon className="h-5 w-5 mx-auto mb-1 text-primary" />
            <p className="text-xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {pendingTeachers.length > 0 && (
        <div className="bg-accent rounded-2xl border border-primary/20 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UserPlus className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold text-foreground">{pendingTeachers.length} Pending Approval{pendingTeachers.length > 1 ? "s" : ""}</p>
              <p className="text-xs text-muted-foreground">Teachers waiting for review</p>
            </div>
          </div>
          <Button size="sm" asChild><Link to="/admin/approvals">Review</Link></Button>
        </div>
      )}

      <section>
        <h2 className="font-semibold text-foreground mb-3">Recent Payments</h2>
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {MOCK_PAYMENTS.slice(0, 5).map(p => (
            <div key={p.id} className="flex items-center justify-between p-3 border-b border-border last:border-0">
              <div>
                <p className="text-sm font-medium text-foreground">{p.studentName}</p>
                <p className="text-xs text-muted-foreground">{p.seminarTitle} · {p.method}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-primary">UGX {p.amount.toLocaleString()}</p>
                <span className={`text-xs ${p.status === "completed" ? "text-primary" : "text-warning"}`}>{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
