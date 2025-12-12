import { scholarships } from "@/lib/data/scholarships";
import { ScholarshipCard } from "@/components/cards/scholarship-card";
import { AdSlot } from "@/components/ui/ad-slot";

export default function BeasiswaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Beasiswa</h1>
        <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/90">
          Setiap beasiswa ditampilkan dalam kartu ringkas: nama, penyelenggara, jenjang, benefit utama, deadline, status, dan CTA.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {scholarships.map((item) => (
          <ScholarshipCard key={item.slug} item={item} />
        ))}
      </div>

      <div className="mt-8">
        <AdSlot
          title="Monetisasi • Tampilkan Beasiswa Anda"
          description="Ingin menampilkan beasiswa Anda di sini? Kami bisa buat listing premium + promosi."
          ctaLabel="Hubungi Kami"
          href="mailto:partnership@gen.id?subject=Listing%20Beasiswa%20di%20GEN"
        />
      </div>
    </div>
  );
}
