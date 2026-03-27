import { useState } from "react";
import { MOCK_RESOURCES } from "@/data/mockData";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Trash2, FileText } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const TeacherResources = () => {
  const { user } = useAuth();
  const [showUpload, setShowUpload] = useState(false);
  const resources = MOCK_RESOURCES.filter(r => r.uploadedBy === user?.name);

  return (
    <div className="p-4 md:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">My Resources</h1>
        <Button onClick={() => setShowUpload(true)}><Plus className="h-4 w-4 mr-1" />Upload</Button>
      </div>
      <div className="space-y-3">
        {resources.map(r => (
          <div key={r.id} className="flex items-center gap-4 bg-card rounded-2xl border border-border p-4">
            <FileText className="h-8 w-8 text-primary" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{r.title}</h3>
              <p className="text-xs text-muted-foreground">{r.subject} · {r.fileType.toUpperCase()}</p>
            </div>
            <Button size="sm" variant="ghost"><Trash2 className="h-4 w-4 text-destructive" /></Button>
          </div>
        ))}
        {resources.length === 0 && <p className="text-center text-muted-foreground py-8">No resources uploaded yet.</p>}
      </div>

      <Dialog open={showUpload} onOpenChange={setShowUpload}>
        <DialogContent>
          <DialogHeader><DialogTitle>Upload Resource</DialogTitle></DialogHeader>
          <form onSubmit={e => { e.preventDefault(); setShowUpload(false); toast({ title: "Resource uploaded!" }); }} className="space-y-3">
            <div><Label>Title</Label><Input required /></div>
            <div><Label>Description</Label><Input /></div>
            <div><Label>Subject</Label><Input value={user?.subject || ""} disabled className="bg-muted" /></div>
            <div><Label>File (PDF, DOC, PPT)</Label><Input type="file" accept=".pdf,.doc,.docx,.ppt,.pptx" /></div>
            <Button type="submit" className="w-full">Upload</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeacherResources;
