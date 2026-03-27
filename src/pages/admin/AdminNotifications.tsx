import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const AdminNotifications = () => {
  const [target, setTarget] = useState("all");

  return (
    <div className="p-4 md:p-6 max-w-lg mx-auto space-y-6">
      <h1 className="text-xl font-bold text-foreground">Notification Management</h1>

      <section className="bg-card rounded-2xl border border-border p-5 space-y-4">
        <h2 className="font-semibold text-foreground">Send Announcement</h2>
        <div><Label>Title</Label><Input placeholder="Announcement title" /></div>
        <div><Label>Message</Label><Textarea placeholder="Write your message..." /></div>
        <div>
          <Label>Target Audience</Label>
          <div className="flex gap-2 mt-1">
            {["all", "students", "teachers"].map(t => (
              <button key={t} onClick={() => setTarget(t)} className={`px-3 py-1 rounded-full text-xs font-medium ${target === t ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                {t === "all" ? "All Users" : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div>
          <Label>Channels</Label>
          <div className="flex flex-wrap gap-4 mt-2">
            {["In-app", "Push", "Email", "SMS"].map(ch => (
              <div key={ch} className="flex items-center gap-2">
                <Checkbox defaultChecked={ch === "In-app"} />
                <span className="text-sm">{ch}</span>
              </div>
            ))}
          </div>
        </div>
        <Button className="w-full" onClick={() => toast({ title: "Announcement sent!" })}>Send</Button>
      </section>

      <section>
        <h2 className="font-semibold text-foreground mb-3">Recent Announcements</h2>
        <div className="space-y-2">
          {[
            { title: "System Maintenance", body: "Scheduled maintenance on Saturday 2AM-4AM", date: "Mar 25" },
            { title: "New Feature: AI Tutor", body: "Try our new AI-powered tutoring feature!", date: "Mar 20" },
          ].map((a, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-4">
              <p className="font-medium text-foreground">{a.title}</p>
              <p className="text-xs text-muted-foreground">{a.body}</p>
              <p className="text-xs text-muted-foreground mt-1">{a.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminNotifications;
