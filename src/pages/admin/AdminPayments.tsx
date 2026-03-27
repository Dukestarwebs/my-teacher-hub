import { MOCK_PAYMENTS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const AdminPayments = () => {
  const total = MOCK_PAYMENTS.filter(p => p.status === "completed").reduce((a, p) => a + p.amount, 0);

  return (
    <div className="p-4 md:p-6 space-y-4">
      <h1 className="text-xl font-bold text-foreground">Payments & Revenue</h1>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-card rounded-2xl border border-border p-4 text-center">
          <p className="text-xs text-muted-foreground">Total Collected</p>
          <p className="text-lg font-bold text-primary">UGX {total.toLocaleString()}</p>
        </div>
        <div className="bg-card rounded-2xl border border-border p-4 text-center">
          <p className="text-xs text-muted-foreground">Platform Fees</p>
          <p className="text-lg font-bold text-foreground">UGX {(total * 0.1).toLocaleString()}</p>
        </div>
        <div className="bg-card rounded-2xl border border-border p-4 text-center">
          <p className="text-xs text-muted-foreground">Pending Payouts</p>
          <p className="text-lg font-bold text-warning">UGX 15,000</p>
        </div>
      </div>

      <section>
        <h2 className="font-semibold text-foreground mb-3">All Transactions</h2>
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {MOCK_PAYMENTS.map(p => (
            <div key={p.id} className="flex items-center justify-between p-3 border-b border-border last:border-0">
              <div>
                <p className="text-sm font-medium text-foreground">{p.studentName}</p>
                <p className="text-xs text-muted-foreground">{p.seminarTitle} · {p.method} · {new Date(p.date).toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">UGX {p.amount.toLocaleString()}</p>
                <span className={`text-xs ${p.status === "completed" ? "text-primary" : "text-warning"}`}>{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-foreground mb-3">Teacher Payout Requests</h2>
        <div className="bg-card rounded-xl border border-border p-4 flex items-center justify-between">
          <div>
            <p className="font-medium text-foreground">Ssempala David</p>
            <p className="text-xs text-muted-foreground">UGX 350,000 · MTN 0771234567</p>
          </div>
          <Button size="sm" onClick={() => toast({ title: "Payout processed!" })}>Process</Button>
        </div>
      </section>
    </div>
  );
};

export default AdminPayments;
