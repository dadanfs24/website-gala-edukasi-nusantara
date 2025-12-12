import { Status } from "@/lib/types";

const map: Record<Status, string> = {
  Open: "bg-[color:var(--gen-cta)]/15 text-[color:var(--gen-cta)] border-[color:var(--gen-cta)]/30",
  Closed: "bg-white/5 text-[color:var(--gen-cool-gray)] border-white/15",
  "Coming Soon":
    "bg-[color:var(--gen-blueprint)]/15 text-[color:var(--gen-blueprint)] border-[color:var(--gen-blueprint)]/30",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={"inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold " + map[status]}>
      {status}
    </span>
  );
}
