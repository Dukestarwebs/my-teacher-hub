import { useState } from "react";
import { MOCK_NOTIFICATIONS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Calendar, BarChart3, MessageSquare, CheckCircle, Megaphone } from "lucide-react";

const iconMap = { seminar: Calendar, result: BarChart3, message: MessageSquare, approved: CheckCircle, announcement: Megaphone };

const Notifications = () => {
  const [notifs, setNotifs] = useState(MOCK_NOTIFICATIONS);
  const markAllRead = () => setNotifs(n => n.map(x => ({ ...x, read: true })));

  return (
    <div className="p-4 md:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">Notifications</h1>
        <Button variant="ghost" size="sm" onClick={markAllRead}>Mark all read</Button>
      </div>
      <div className="space-y-2">
        {notifs.map(n => {
          const Icon = iconMap[n.type as keyof typeof iconMap] || Calendar;
          return (
            <div key={n.id} className={`flex items-start gap-3 bg-card rounded-xl border p-4 ${!n.read ? "border-l-4 border-l-primary border-border" : "border-border"}`}>
              <div className={`p-2 rounded-full ${!n.read ? "bg-accent" : "bg-muted"}`}><Icon className="h-4 w-4 text-primary" /></div>
              <div className="flex-1">
                <p className="font-medium text-sm text-foreground">{n.title}</p>
                <p className="text-xs text-muted-foreground">{n.body}</p>
                <p className="text-xs text-muted-foreground mt-1">{new Date(n.createdAt).toLocaleString()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
