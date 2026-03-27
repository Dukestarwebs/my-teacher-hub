import { useParams, Link } from "react-router-dom";
import { MOCK_SEMINARS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Clock, Users, Video, Calendar } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SeminarDetail = () => {
  const { seminarId } = useParams();
  const sem = MOCK_SEMINARS.find(s => s.id === seminarId);
  const [showPayment, setShowPayment] = useState(false);
  const [payMethod, setPayMethod] = useState<"mtn" | "airtel">("mtn");
  const [phone, setPhone] = useState("");
  const [payState, setPayState] = useState<"idle" | "processing" | "success">("idle");

  if (!sem) return <div className="p-6 text-center text-muted-foreground">Seminar not found</div>;

  const handlePay = async () => {
    setPayState("processing");
    await new Promise(r => setTimeout(r, 2000));
    setPayState("success");
  };

  return (
    <div className="p-4 md:p-6 space-y-4">
      <div className="bg-card rounded-2xl border border-border p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-primary bg-accent px-2 py-0.5 rounded-full">{sem.subject}</span>
          {sem.status === "live" && <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded-full animate-pulse">🔴 LIVE</span>}
        </div>
        <h1 className="text-xl font-bold text-foreground">{sem.title}</h1>
        <p className="text-sm text-muted-foreground mt-2">{sem.description}</p>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="flex items-center gap-2 text-sm"><Calendar className="h-4 w-4 text-primary" />{new Date(sem.scheduledAt).toLocaleDateString()}</div>
          <div className="flex items-center gap-2 text-sm"><Clock className="h-4 w-4 text-primary" />{sem.duration} minutes</div>
          <div className="flex items-center gap-2 text-sm"><Users className="h-4 w-4 text-primary" />{sem.registeredStudents.length}/{sem.maxParticipants} seats</div>
          <div className="flex items-center gap-2 text-sm"><Video className="h-4 w-4 text-primary" />{sem.streamType}</div>
        </div>

        <div className="mt-4 p-3 bg-accent rounded-xl">
          <p className="text-sm text-muted-foreground">Registration Fee</p>
          <p className="text-2xl font-bold text-primary">UGX {sem.fee.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">Deadline: {new Date(sem.deadline).toLocaleDateString()}</p>
        </div>

        <div className="mt-4 flex gap-3">
          {sem.status === "live" ? (
            <Button className="flex-1" size="lg">Join Live Seminar</Button>
          ) : (
            <Button className="flex-1" size="lg" onClick={() => setShowPayment(true)}>Register & Pay</Button>
          )}
        </div>
      </div>

      <div className="bg-card rounded-2xl border border-border p-4">
        <h3 className="font-semibold text-foreground mb-2">Teacher</h3>
        <Link to={`/teachers/${sem.teacherId}`} className="flex items-center gap-3 hover:bg-accent/50 rounded-xl p-2 -m-2">
          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${sem.teacherName.split(" ")[1]}`} alt="" className="h-10 w-10 rounded-full" />
          <div>
            <p className="font-medium text-foreground">{sem.teacherName}</p>
            <p className="text-xs text-muted-foreground">{sem.subject}</p>
          </div>
        </Link>
      </div>

      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent>
          <DialogHeader><DialogTitle>Payment</DialogTitle></DialogHeader>
          {payState === "success" ? (
            <div className="text-center py-6">
              <p className="text-4xl mb-3">✅</p>
              <h3 className="text-lg font-bold text-foreground">Payment Successful!</h3>
              <p className="text-sm text-muted-foreground mt-1">You are registered for this seminar.</p>
              <Button className="mt-4" onClick={() => setShowPayment(false)}>Done</Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-3 bg-accent rounded-xl text-center">
                <p className="text-sm text-muted-foreground">Amount</p>
                <p className="text-xl font-bold text-primary">UGX {sem.fee.toLocaleString()}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setPayMethod("mtn")} className={`flex-1 p-3 rounded-xl border text-sm font-medium ${payMethod === "mtn" ? "border-primary bg-accent text-primary" : "border-border text-muted-foreground"}`}>MTN MoMo</button>
                <button onClick={() => setPayMethod("airtel")} className={`flex-1 p-3 rounded-xl border text-sm font-medium ${payMethod === "airtel" ? "border-primary bg-accent text-primary" : "border-border text-muted-foreground"}`}>Airtel Money</button>
              </div>
              <div>
                <Label>Phone Number</Label>
                <Input placeholder="07XXXXXXXX" value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
              <Button className="w-full" onClick={handlePay} disabled={payState === "processing"}>
                {payState === "processing" ? "Processing..." : "Pay Now"}
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SeminarDetail;
