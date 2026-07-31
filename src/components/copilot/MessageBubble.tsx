import { Leaf, User } from "lucide-react";

export type ChatMessage = { role: "user" | "assistant"; content: string };

export function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <span
        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          isUser
            ? "bg-secondary text-secondary-foreground"
            : "bg-[image:var(--gradient-primary)] text-primary-foreground"
        }`}
      >
        {isUser ? <User className="h-4 w-4" /> : <Leaf className="h-4 w-4" />}
      </span>
      <div
        className={`max-w-[75%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-primary text-primary-foreground"
            : "border border-border bg-card text-card-foreground"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
