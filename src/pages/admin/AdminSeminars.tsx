import { useState } from "react";
import { MOCK_SEMINARS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const AdminSeminars = () => {
  const [streamType, setStreamType] = useState<"video" | "audio">("video");

  return (
    <div className="p-4 md:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">Seminar Management</h1>
        <Button>Create Seminar</Button>
      </div>

      <div className="bg-card rounded-xl border border-border p-4 flex items-center justify-between">
        <div>
          <Label className="font-semibold">Global Stream Type</Label>
          <p className="text-xs text-muted-foreground">Applied to all new seminars</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-sm ${streamType === "audio" ? "text-primary font-medium" : "text-muted-foreground"}`}>Audio</span>
          <Switch checked={streamType === "video"} onCheckedChange={v => setStreamType(v ? "video" : "audio")} />
          <span className={`text-sm ${streamType === "video" ? "text-primary font-medium" : "text-muted-foreground"}`}>Video</span>
        </div>
      </div>

      <div className="space-y-2">
        {MOCK_SEMINARS.map(s => (
          <div key={s.id} className="bg-card rounded-xl border border-border p-4 flex items-center justify-between">
            <div>
              <h3 className="font-medium text-foreground">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.teacherName} · {new Date(s.scheduledAt).toLocaleDateString()} · {s.registeredStudents.length} registered</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs px-2 py-0.5 rounded-full ${s.status === "live" ? "bg-destructive/10 text-destructive" : s.status === "upcoming" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>{s.status}</span>
              {s.status === "live" && <Button size="sm" variant="destructive" onClick={() => toast({ title: "Seminar ended" })}>End</Button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSeminars;
