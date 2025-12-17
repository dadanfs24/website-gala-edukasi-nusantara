import { events } from "@/lib/data/events";
import { EventCarousel } from "@/components/cards/event-carousel";
import { AdSlot } from "@/components/ui/ad-slot";

export default function EventPage() {
  return (
    <div className="gen-dotbg">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Header kamu tetap */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gen-border)] bg-[color:var(--gen-card-bg)] px-3 py-1 text-xs font-semibold text-[color:var(--gen-fg)]/65">
            <span className="h-2 w-2 rounded-full bg-[color:var(--gen-cta)]" />
            Tryout / Webinar / Event
          </div>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[color:var(--gen-fg)] md:text-4xl">
            Event
          </h1>

          <p className="mt-2 text-sm leading-relaxed text-[color:var(--gen-fg)]/70">
            Geser untuk lihat event lain. Auto geser tiap 10 detik.
          </p>
        </div>

        {/* CAROUSEL */}
        <EventCarousel items={events} intervalMs={10000} />

        {/* Ad */}
        <div className="mt-8 rounded-3xl border border-[color:var(--gen-border)] bg-[color:var(--gen-card-bg)] p-4 backdrop-blur md:p-6">
          <AdSlot
            title="Monetisasi • Event Promosi Berbayar"
            description="Kampus/instansi bisa pasang event promosi + banner + link affiliate yang relate."
            ctaLabel="Hubungi Editorial"
            href="mailto:editorial@gen.id?subject=Event%20Promosi%20di%20GEN"
          />
        </div>
      </div>
    </div>
  );
}
