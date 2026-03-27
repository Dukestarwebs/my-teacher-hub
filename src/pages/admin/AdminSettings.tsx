import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

const AdminSettings = () => {
  const [streamType, setStreamType] = useState(true); // true = video
  const [platformFee, setPlatformFee] = useState("10");
  const [maintenance, setMaintenance] = useState(false);

  return (
    <div className="p-4 md:p-6 max-w-lg mx-auto space-y-6">
      <h1 className="text-xl font-bold text-foreground">Platform Settings</h1>

      <div className="bg-card rounded-2xl border border-border p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div><Label className="font-semibold">Seminar Stream Type</Label><p className="text-xs text-muted-foreground">{streamType ? "Video" : "Audio"} mode</p></div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Audio</span>
            <Switch checked={streamType} onCheckedChange={setStreamType} />
            <span className="text-xs text-muted-foreground">Video</span>
          </div>
        </div>

        <div>
          <Label>Platform Fee (%)</Label>
          <Input type="number" value={platformFee} onChange={e => setPlatformFee(e.target.value)} className="mt-1" />
        </div>

        <div className="flex items-center justify-between">
          <div><Label className="font-semibold">Maintenance Mode</Label><p className="text-xs text-muted-foreground">Shows maintenance page when ON</p></div>
          <Switch checked={maintenance} onCheckedChange={setMaintenance} />
        </div>
      </div>

      <Button className="w-full" onClick={() => toast({ title: "Settings saved!" })}>Save Settings</Button>
    </div>
  );
};

export default AdminSettings;
