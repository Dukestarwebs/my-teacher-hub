import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Settings = () => {
  const [settings, setSettings] = useState({
    push: true, email: true, sms: false, seminarReminders: true, examAlerts: true,
  });
  const [showDelete, setShowDelete] = useState(false);

  const toggle = (key: keyof typeof settings) => setSettings(s => ({ ...s, [key]: !s[key] }));

  return (
    <div className="p-4 md:p-6 max-w-lg mx-auto space-y-6">
      <h1 className="text-xl font-bold text-foreground">Settings</h1>

      <section className="bg-card rounded-2xl border border-border p-4 space-y-4">
        <h2 className="font-semibold text-foreground">Notification Settings</h2>
        {[
          { key: "push" as const, label: "Push Notifications" },
          { key: "email" as const, label: "Email Notifications" },
          { key: "sms" as const, label: "SMS Notifications" },
          { key: "seminarReminders" as const, label: "Seminar Reminders" },
          { key: "examAlerts" as const, label: "Exam Alerts" },
        ].map(item => (
          <div key={item.key} className="flex items-center justify-between">
            <Label>{item.label}</Label>
            <Switch checked={settings[item.key]} onCheckedChange={() => toggle(item.key)} />
          </div>
        ))}
      </section>

      <section className="bg-card rounded-2xl border border-border p-4 space-y-4">
        <h2 className="font-semibold text-foreground">Privacy</h2>
        <Button variant="destructive" className="w-full" onClick={() => setShowDelete(true)}>Delete Account</Button>
      </section>

      <Dialog open={showDelete} onOpenChange={setShowDelete}>
        <DialogContent>
          <DialogHeader><DialogTitle>Delete Account?</DialogTitle></DialogHeader>
          <p className="text-sm text-muted-foreground">This action is permanent and cannot be undone.</p>
          <div className="flex gap-3 mt-4">
            <Button variant="outline" onClick={() => setShowDelete(false)} className="flex-1">Cancel</Button>
            <Button variant="destructive" className="flex-1" onClick={() => toast({ title: "Account deletion requested" })}>Delete</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Settings;
