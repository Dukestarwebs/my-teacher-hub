import { MOCK_RESOURCES } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Trash2, FileText, Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const AdminResources = () => (
  <div className="p-4 md:p-6 space-y-4">
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-foreground">Resource Management</h1>
      <Button><Plus className="h-4 w-4 mr-1" />Upload</Button>
    </div>
    <div className="space-y-2">
      {MOCK_RESOURCES.map(r => (
        <div key={r.id} className="bg-card rounded-xl border border-border p-4 flex items-center gap-3">
          <FileText className="h-6 w-6 text-primary" />
          <div className="flex-1">
            <p className="font-medium text-foreground">{r.title}</p>
            <p className="text-xs text-muted-foreground">{r.subject} · {r.fileType.toUpperCase()} · By {r.uploadedBy}</p>
          </div>
          <Button size="sm" variant="ghost" onClick={() => toast({ title: "Resource deleted" })}><Trash2 className="h-4 w-4 text-destructive" /></Button>
        </div>
      ))}
    </div>
  </div>
);

export default AdminResources;
