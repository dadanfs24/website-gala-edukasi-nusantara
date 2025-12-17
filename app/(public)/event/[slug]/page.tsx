import { events } from "@/lib/data/events";
import { EventCarousel } from "@/components/cards/event-carousel";

export default function EventPage() {
  return (
    <div className="gen-dotbg">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* header kamu (boleh tetap) */}

        <div className="mt-6">
          <EventCarousel items={events} intervalMs={10000} />
        </div>
      </div>
    </div>
  );
}
