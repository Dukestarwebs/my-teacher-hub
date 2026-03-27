import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const TeacherEarnings = () => {
  const { user } = useAuth();
  const [payMethod, setPayMethod] = useState<"mtn" | "airtel">("mtn");
  const [payNumber, setPayNumber] = useState("0771234567");

  return (
    <div className="p-4 md:p-6 max-w-lg mx-auto space-y-6">
      <h1 className="text-xl font-bold text-foreground">Earnings</h1>

      <div className="gradient-hero rounded-2xl p-6 text-primary-foreground text-center">
        <DollarSign className="h-8 w-8 mx-auto mb-2" />
        <p className="text-sm opacity-90">Total Earnings</p>
        <p className="text-3xl font-bold">UGX 350,000</p>
      </div>

      <section className="bg-card rounded-2xl border border-border p-4">
        <h2 className="font-semibold text-foreground mb-3">Earnings History</h2>
        <div className="space-y-2">
          {[
            { seminar: "Mastering Algebra Basics", date: "Mar 20", students: 8, amount: 120000 },
            { seminar: "Advanced Equations", date: "Mar 15", students: 5, amount: 100000 },
            { seminar: "Math Fundamentals", date: "Mar 10", students: 10, amount: 130000 },
          ].map((e, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div>
                <p className="text-sm font-medium text-foreground">{e.seminar}</p>
                <p className="text-xs text-muted-foreground">{e.date} · {e.students} students</p>
              </div>
              <span className="text-sm font-bold text-primary">UGX {e.amount.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card rounded-2xl border border-border p-4 space-y-3">
        <h2 className="font-semibold text-foreground">Payment Method</h2>
        <div className="flex gap-2">
          <button onClick={() => setPayMethod("mtn")} className={`flex-1 p-3 rounded-xl border text-sm font-medium ${payMethod === "mtn" ? "border-primary bg-accent text-primary" : "border-border text-muted-foreground"}`}>MTN MoMo</button>
          <button onClick={() => setPayMethod("airtel")} className={`flex-1 p-3 rounded-xl border text-sm font-medium ${payMethod === "airtel" ? "border-primary bg-accent text-primary" : "border-border text-muted-foreground"}`}>Airtel Money</button>
        </div>
        <div><Label>Phone Number</Label><Input value={payNumber} onChange={e => setPayNumber(e.target.value)} /></div>
        <Button className="w-full" onClick={() => toast({ title: "Payout requested!" })}>Request Payout</Button>
      </section>
    </div>
  );
};

export default TeacherEarnings;
