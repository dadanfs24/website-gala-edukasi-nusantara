import { events } from "@/lib/data/events";
import { EventCard } from "@/components/cards/event-card";
import { AdSlot } from "@/components/ui/ad-slot";

export default function EventPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Event</h1>
        <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/90">
          Tryout / Webinar — cover, judul, penyelenggara, tanggal & waktu, lokasi, harga, status, dan tombol daftar/detail.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((item) => (
          <EventCard key={item.slug} item={item} />
        ))}
      </div>

      <div className="mt-8">
        <AdSlot
          title="Monetisasi • Promosi Event"
          description="Promosikan tryout/webinar kampus kamu di GEN (banner + listing + CTA daftar)."
          ctaLabel="Promosikan Event"
          href="mailto:partnership@gen.id?subject=Promosi%20Event%20di%20GEN"
        />
      </div>
    </div>
  );
}
