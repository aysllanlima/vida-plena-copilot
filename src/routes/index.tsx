import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Send, Loader2, Leaf } from "lucide-react";
import { Sidebar } from "@/components/copilot/Sidebar";
import { MessageBubble, type ChatMessage } from "@/components/copilot/MessageBubble";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vida Plena Copilot | Assistente Corporativo da ONG" },
      {
        name: "description",
        content:
          "Copiloto corporativo da ONG Vida Plena: consulte beneficiários, status de eventos e rodas de conversa em um chat inteligente.",
      },
      { property: "og:title", content: "Vida Plena Copilot | Assistente Corporativo da ONG" },
      {
        property: "og:description",
        content:
          "Chat inteligente para a equipe da ONG Vida Plena consultar beneficiários, eventos e rodas de conversa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CopilotPage,
});

const DIFY_URL = "https://api.dify.ai/v1/chat-messages";
const DIFY_KEY = "app-l0sr3eeWEqUhvpDnlhcAip5J";

function CopilotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (!loading) inputRef.current?.focus();
  }, [loading]);

  async function sendMessage(text: string) {
    const query = text.trim();
    if (!query || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: query }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(DIFY_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${DIFY_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: {},
          query: query,
          response_mode: "blocking",
          conversation_id: "",
          user: "admin-ong",
        }),
      });

      if (!response.ok) throw new Error(`Erro ${response.status}`);

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer ?? "Não foi possível obter uma resposta." },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Não consegui falar com o assistente agora. ${
            error instanceof Error ? error.message : ""
          }`.trim(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      <Sidebar
        onNewChat={() => {
          setMessages([]);
          setInput("");
          inputRef.current?.focus();
        }}
        onShortcut={(label) => sendMessage(label)}
      />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 border-b border-border bg-card/70 px-6 py-4 backdrop-blur">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground md:hidden">
            <Leaf className="h-4 w-4" />
          </span>
          <div>
            <h1 className="text-base font-semibold">Vida Plena Copilot</h1>
            <p className="text-xs text-muted-foreground">Assistente interno da ONG Vida Plena</p>
          </div>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6 md:px-8">
          <div className="mx-auto flex max-w-3xl flex-col gap-5">
            {messages.length === 0 && !loading && (
              <div className="mt-16 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]">
                  <Leaf className="h-7 w-7" />
                </span>
                <h2 className="mt-5 text-xl font-semibold">Como posso ajudar hoje?</h2>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                  Pergunte sobre beneficiários, eventos ou rodas de conversa — ou use um atalho
                  rápido na barra lateral.
                </p>
              </div>
            )}

            {messages.map((message, index) => (
              <MessageBubble key={index} message={message} />
            ))}

            {loading && (
              <div className="flex items-center gap-2 pl-11 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                Pensando...
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-border bg-card/70 px-4 py-4 backdrop-blur md:px-8">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
            className="mx-auto flex max-w-3xl items-end gap-2 rounded-2xl border border-border bg-background p-2 shadow-[var(--shadow-soft)] focus-within:border-primary"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  sendMessage(input);
                }
              }}
              rows={1}
              placeholder="Escreva sua mensagem para o Copilot..."
              className="max-h-40 min-h-11 flex-1 resize-none bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Enviar mensagem"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </button>
          </form>
          <p className="mx-auto mt-2 max-w-3xl text-center text-xs text-muted-foreground">
            O Copilot pode cometer erros. Confirme informações sensíveis.
          </p>
        </div>
      </main>
    </div>
  );
}
