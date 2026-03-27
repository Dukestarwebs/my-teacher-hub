import { useState } from "react";
import { MOCK_TEACHERS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, XCircle } from "lucide-react";

const AdminApprovals = () => {
  const [teachers, setTeachers] = useState(MOCK_TEACHERS.filter(t => !t.isApproved));

  const approve = (uid: string) => {
    setTeachers(t => t.filter(x => x.uid !== uid));
    toast({ title: "Teacher Approved!", description: "SMS and email notification sent." });
  };
  const reject = (uid: string) => {
    setTeachers(t => t.filter(x => x.uid !== uid));
    toast({ title: "Teacher Rejected", description: "Rejection notification sent.", variant: "destructive" });
  };

  return (
    <div className="p-4 md:p-6 space-y-4">
      <h1 className="text-xl font-bold text-foreground">Teacher Approvals</h1>
      {teachers.length === 0 ? (
        <div className="text-center py-12">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
          <p className="text-muted-foreground">All caught up! No pending approvals.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {teachers.map(t => (
            <div key={t.uid} className="bg-card rounded-2xl border border-border p-5">
              <div className="flex items-center gap-3 mb-3">
                <img src={t.photoURL} alt="" className="h-12 w-12 rounded-full" />
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                <div><span className="text-muted-foreground">Subject:</span> <span className="font-medium text-foreground">{t.subject}</span></div>
                <div><span className="text-muted-foreground">Phone:</span> <span className="font-medium text-foreground">0771234567</span></div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{t.bio}</p>
              <div className="flex gap-2">
                <Button onClick={() => approve(t.uid)} className="flex-1"><CheckCircle className="h-4 w-4 mr-1" /> Approve</Button>
                <Button variant="destructive" onClick={() => reject(t.uid)} className="flex-1"><XCircle className="h-4 w-4 mr-1" /> Reject</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminApprovals;
