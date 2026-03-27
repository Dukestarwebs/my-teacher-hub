import { useParams, Link } from "react-router-dom";
import { MOCK_TEACHERS, MOCK_SEMINARS, MOCK_RESOURCES, MOCK_REVIEWS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Star, MessageSquare, Video } from "lucide-react";

const TeacherProfile = () => {
  const { teacherId } = useParams();
  const teacher = MOCK_TEACHERS.find(t => t.uid === teacherId);
  if (!teacher) return <div className="p-6 text-center text-muted-foreground">Teacher not found</div>;

  const seminars = MOCK_SEMINARS.filter(s => s.teacherId === teacherId);
  const resources = MOCK_RESOURCES.filter(r => r.uploadedBy === teacher.name);
  const reviews = MOCK_REVIEWS.filter(r => r.teacherId === teacherId);

  return (
    <div className="p-4 md:p-6 space-y-4">
      <div className="gradient-hero rounded-2xl p-6 text-primary-foreground">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src={teacher.photoURL} alt="" className="h-16 w-16 rounded-full border-2 border-primary-foreground" />
            <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-primary-foreground ${teacher.isOnline ? "bg-green-400 animate-pulse-dot" : "bg-muted-foreground/50"}`} />
          </div>
          <div>
            <h1 className="text-xl font-bold">{teacher.name}</h1>
            <span className="bg-primary-foreground/20 px-2 py-0.5 rounded-full text-xs">{teacher.subject}</span>
            <div className="flex items-center gap-1 mt-1"><Star className="h-3 w-3 fill-yellow-300 text-yellow-300" /><span className="text-sm">{teacher.rating} ({teacher.totalReviews} reviews)</span></div>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">{teacher.bio}</p>

      <div className="flex gap-3">
        <Button className="flex-1"><Video className="h-4 w-4 mr-1" /> Book Session</Button>
        <Button variant="outline" className="flex-1" asChild><Link to="/messages"><MessageSquare className="h-4 w-4 mr-1" /> Message</Link></Button>
      </div>

      <Tabs defaultValue="seminars">
        <TabsList className="w-full">
          <TabsTrigger value="seminars" className="flex-1">Seminars</TabsTrigger>
          <TabsTrigger value="resources" className="flex-1">Resources</TabsTrigger>
          <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="seminars" className="mt-3 space-y-3">
          {seminars.map(s => (
            <Link to={`/seminars/${s.id}`} key={s.id} className="block bg-card rounded-xl border border-border p-4 hover:border-primary/30">
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{new Date(s.scheduledAt).toLocaleDateString()} · {s.duration} min</p>
              <p className="text-sm font-bold text-primary mt-1">UGX {s.fee.toLocaleString()}</p>
            </Link>
          ))}
          {seminars.length === 0 && <p className="text-sm text-muted-foreground text-center py-4">No upcoming seminars</p>}
        </TabsContent>
        <TabsContent value="resources" className="mt-3 space-y-3">
          {resources.map(r => (
            <div key={r.id} className="bg-card rounded-xl border border-border p-4">
              <h3 className="font-semibold text-foreground">{r.title}</h3>
              <p className="text-xs text-muted-foreground">{r.subject} · {r.fileType.toUpperCase()}</p>
            </div>
          ))}
          {resources.length === 0 && <p className="text-sm text-muted-foreground text-center py-4">No resources</p>}
        </TabsContent>
        <TabsContent value="reviews" className="mt-3 space-y-3">
          {reviews.map(r => (
            <div key={r.id} className="bg-card rounded-xl border border-border p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm text-foreground">{r.studentName}</span>
                <div className="flex">{Array.from({length: r.rating}).map((_, i) => <Star key={i} className="h-3 w-3 fill-warning text-warning" />)}</div>
              </div>
              <p className="text-sm text-muted-foreground">{r.comment}</p>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeacherProfile;
