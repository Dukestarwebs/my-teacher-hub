import { useState } from "react";
import { MOCK_TEACHERS } from "@/data/mockData";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const students = [
  { uid: "s1", name: "Nakamya Grace", email: "grace@test.com", joined: "2026-01-15", status: "active" },
  { uid: "s2", name: "Lubega Brian", email: "brian@test.com", joined: "2026-02-01", status: "active" },
  { uid: "s3", name: "Atim Faith", email: "faith@test.com", joined: "2026-02-20", status: "suspended" },
];

const AdminUsers = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="p-4 md:p-6 space-y-4">
      <h1 className="text-xl font-bold text-foreground">User Management</h1>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search users..." value={query} onChange={e => setQuery(e.target.value)} className="pl-10" />
      </div>
      <Tabs defaultValue="students">
        <TabsList className="w-full">
          <TabsTrigger value="students" className="flex-1">Students</TabsTrigger>
          <TabsTrigger value="teachers" className="flex-1">Teachers</TabsTrigger>
        </TabsList>
        <TabsContent value="students" className="mt-4 space-y-2">
          {students.filter(s => !query || s.name.toLowerCase().includes(query.toLowerCase())).map(s => (
            <div key={s.uid} className="bg-card rounded-xl border border-border p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.email} · Joined {new Date(s.joined).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full ${s.status === "active" ? "bg-accent text-accent-foreground" : "bg-destructive/10 text-destructive"}`}>{s.status}</span>
                <Button size="sm" variant="ghost">View</Button>
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="teachers" className="mt-4 space-y-2">
          {MOCK_TEACHERS.filter(t => !query || t.name.toLowerCase().includes(query.toLowerCase())).map(t => (
            <div key={t.uid} className="bg-card rounded-xl border border-border p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={t.photoURL} alt="" className="h-8 w-8 rounded-full" />
                <div>
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.subject} · {t.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full ${t.isApproved ? "bg-accent text-accent-foreground" : "bg-warning/10 text-warning"}`}>{t.isApproved ? "Approved" : "Pending"}</span>
                <Button size="sm" variant="ghost">View</Button>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminUsers;
