import { useState } from "react";
import { MOCK_MESSAGES } from "@/data/mockData";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Messages = () => {
  const { user } = useAuth();
  const [selectedConv, setSelectedConv] = useState(MOCK_MESSAGES[0]?.conversationId || "");
  const [newMsg, setNewMsg] = useState("");
  const conv = MOCK_MESSAGES.find(c => c.conversationId === selectedConv);

  return (
    <div className="flex h-[calc(100vh-4rem)] md:h-screen">
      {/* Conversation List */}
      <div className={`${selectedConv && conv ? "hidden md:flex" : "flex"} flex-col w-full md:w-80 border-r border-border bg-card`}>
        <div className="p-4 border-b border-border">
          <h1 className="text-lg font-bold text-foreground">Messages</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          {MOCK_MESSAGES.map(c => (
            <button key={c.conversationId} onClick={() => setSelectedConv(c.conversationId)} className={`w-full flex items-center gap-3 p-4 border-b border-border hover:bg-accent/50 text-left ${selectedConv === c.conversationId ? "bg-accent" : ""}`}>
              <img src={c.teacherPhoto} alt="" className="h-10 w-10 rounded-full" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm">{c.teacherName}</p>
                <p className="text-xs text-muted-foreground truncate">{c.lastMessage}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat View */}
      {conv ? (
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-border bg-card flex items-center gap-3">
            <button className="md:hidden text-sm text-primary" onClick={() => setSelectedConv("")}>← Back</button>
            <img src={conv.teacherPhoto} alt="" className="h-8 w-8 rounded-full" />
            <span className="font-semibold text-foreground">{conv.teacherName}</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {conv.messages.map(m => (
              <div key={m.id} className={`flex ${m.senderId === user?.uid ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.senderId === user?.uid ? "bg-primary text-primary-foreground rounded-br-md" : "bg-card border border-border rounded-bl-md"}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={e => { e.preventDefault(); setNewMsg(""); }} className="p-4 border-t border-border bg-card flex gap-2">
            <Input placeholder="Type a message..." value={newMsg} onChange={e => setNewMsg(e.target.value)} className="flex-1" />
            <Button type="submit" size="icon"><Send className="h-4 w-4" /></Button>
          </form>
        </div>
      ) : (
        <div className="hidden md:flex flex-1 items-center justify-center text-muted-foreground">Select a conversation</div>
      )}
    </div>
  );
};

export default Messages;
