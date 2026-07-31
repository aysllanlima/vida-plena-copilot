import { Leaf, PlusCircle, UserSearch, CalendarCheck, MessagesSquare } from "lucide-react";

const shortcuts = [
  { label: "Consultar Beneficiário", icon: UserSearch },
  { label: "Status de Eventos", icon: CalendarCheck },
  { label: "Rodas de Conversa", icon: MessagesSquare },
];

export function Sidebar({
  onNewChat,
  onShortcut,
}: {
  onNewChat: () => void;
  onShortcut: (label: string) => void;
}) {
  return (
    <aside className="hidden w-72 shrink-0 flex-col border-r border-sidebar-border bg-sidebar p-4 md:flex">
      <div className="flex items-center gap-3 px-1 py-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]">
          <Leaf className="h-5 w-5" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-sidebar-foreground">Vida Plena</p>
          <p className="text-xs text-muted-foreground">Copilot Corporativo</p>
        </div>
      </div>

      <button
        onClick={onNewChat}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <PlusCircle className="h-4 w-4" />
        Nova Conversa
      </button>

      <p className="mt-8 px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Atalhos Rápidos
      </p>
      <nav className="mt-3 flex flex-col gap-1">
        {shortcuts.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => onShortcut(label)}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Icon className="h-4 w-4 text-primary" />
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-auto rounded-xl border border-sidebar-border bg-card p-3 text-xs text-muted-foreground">
        Conectado como <span className="font-medium text-foreground">admin-ong</span>
      </div>
    </aside>
  );
}
