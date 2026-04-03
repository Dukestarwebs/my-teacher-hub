import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MOCK_TEACHERS, SUBJECTS } from "@/data/mockData";
import { Search, Star } from "lucide-react";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");

  const filtered = MOCK_TEACHERS.filter(t => t.isApproved).filter(t => {
    const matchQuery = !query || t.name.toLowerCase().includes(query.toLowerCase()) || t.subject.toLowerCase().includes(query.toLowerCase());
    const matchSubject = !subjectFilter || t.subject === subjectFilter;
    return matchQuery && matchSubject;
  });

  return (
    <div className="p-4 md:p-6 space-y-4 max-w-full overflow-hidden">
      <h1 className="text-xl font-bold text-foreground">Search & Browse</h1>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search teachers, subjects..." value={query} onChange={e => setQuery(e.target.value)} className="pl-10" />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 md:mx-0 md:px-0">
        <button onClick={() => setSubjectFilter("")} className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 ${!subjectFilter ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground"}`}>All</button>
        {SUBJECTS.map(s => (
          <button key={s.id} onClick={() => setSubjectFilter(s.name)} className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 ${subjectFilter === s.name ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground"}`}>{s.icon} {s.name}</button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map(t => (
          <Link to={`/teachers/${t.uid}`} key={t.uid} className="flex items-center gap-3 md:gap-4 bg-card rounded-2xl border border-border p-3 md:p-4 hover:border-primary/30">
            <div className="relative flex-shrink-0">
              <img src={t.photoURL} alt="" className="h-11 w-11 md:h-12 md:w-12 rounded-full" />
              <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${t.isOnline ? "bg-primary animate-pulse-dot" : "bg-muted-foreground/30"}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground truncate">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.subject}</p>
              <div className="flex items-center gap-1 mt-1"><Star className="h-3 w-3 fill-amber-500 text-amber-500" /><span className="text-xs">{t.rating} ({t.totalReviews})</span></div>
            </div>
            <Button size="sm" className="flex-shrink-0">Book</Button>
          </Link>
        ))}
        {filtered.length === 0 && <p className="text-center text-muted-foreground py-8">No teachers found</p>}
      </div>
    </div>
  );
};

export default SearchPage;
