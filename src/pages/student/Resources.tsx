import { useState } from "react";
import { MOCK_RESOURCES, SUBJECTS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download, FileText, File, Presentation } from "lucide-react";

const fileIcon = (type: string) => {
  if (type === "pdf") return <FileText className="h-8 w-8 text-destructive" />;
  if (type === "doc") return <File className="h-8 w-8 text-info" />;
  return <Presentation className="h-8 w-8 text-warning" />;
};

const Resources = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const resources = MOCK_RESOURCES.filter(r => {
    const mq = !query || r.title.toLowerCase().includes(query.toLowerCase());
    const ms = !filter || r.subject === filter;
    return mq && ms;
  });

  return (
    <div className="p-4 md:p-6 space-y-4">
      <h1 className="text-xl font-bold text-foreground">Resource Library</h1>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search notes, subjects..." value={query} onChange={e => setQuery(e.target.value)} className="pl-10" />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        <button onClick={() => setFilter("")} className={`px-3 py-1 rounded-full text-xs font-medium ${!filter ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground"}`}>All</button>
        {SUBJECTS.map(s => <button key={s.id} onClick={() => setFilter(s.name)} className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${filter === s.name ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground"}`}>{s.name}</button>)}
      </div>
      <div className="space-y-3">
        {resources.map(r => (
          <div key={r.id} className="flex items-center gap-4 bg-card rounded-2xl border border-border p-4">
            {fileIcon(r.fileType)}
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{r.title}</h3>
              <p className="text-xs text-muted-foreground">{r.subject} · {r.fileType.toUpperCase()} · By {r.uploadedBy}</p>
            </div>
            <Button size="sm" variant="outline"><Download className="h-4 w-4" /></Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
