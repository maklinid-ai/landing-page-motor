"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { ConsultCta, WhatsAppCta } from "./cta";

const faqs = [
  {
    q: "Saya belum punya pengalaman bisnis cuci motor. Apakah tetap bisa?",
    a: "Tentu. Itulah inti layanan Maklin. Kami menyediakan sistem end-to-end — mulai dari studi kelayakan, setup outlet, SOP, rekrutmen & training SDM, hingga pendampingan operasional. Anda tidak perlu pengalaman teknis; kami mengoperasionalkannya bersama Anda hingga bisnis stabil.",
  },
  {
    q: "Apa beda paket Basic, Standard, dan Premium?",
    a: "Perbedaan utamanya pada kapasitas (jumlah hidraulik), kelengkapan branding, dan durasi pendampingan. Basic cocok untuk mulai dengan 4 hidraulik & pendampingan 1 bulan. Standard (paling direkomendasikan) punya 6 hidraulik, branding lengkap, dan pendampingan 2 bulan. Premium punya 8 hidraulik dengan pendampingan intensif 3 bulan untuk hasil optimal.",
  },
  {
    q: "Apakah angka simulasi profit dijamin?",
    a: "Simulasi profit bersifat ilustratif berdasarkan asumsi operasional ideal. Hasil aktual bergantung pada lokasi, manajemen, dan kondisi pasar. Sebelum eksekusi, kami melakukan studi kelayakan & survey lokasi untuk memberi proyeksi yang lebih spesifik & realistis untuk lokasi Anda.",
  },
  {
    q: "Bagaimana cara Maklin memilih lokasi yang tepat?",
    a: "Kami melakukan survey lokasi berbasis data: trafik kendaraan, demografi, kepadatan motor, kompetitor, aksesibilitas, dan biaya sewa. Hasil survey menjadi dasar studi kelayakan dan rekomendasi go/no-go sebelum Anda mengeluarkan modal besar.",
  },
  {
    q: "Apakah saya harus punya lahan/ruko sendiri?",
    a: "Tidak. Banyak klien kami menyewa lahan atau ruko. Yang penting lokasi strategis dan sesuai kriteria studi kelayakan. Jika Anda sudah punya lahan/ruko kosong, kami bantu menilai apakah layak untuk bisnis cuci motor.",
  },
  {
    q: "Berapa lama proses dari konsultasi hingga outlet buka?",
    a: "Secara umum 4–8 minggu setelah lokasi final, tergantung kompleksitas setup outlet, pengadaan peralatan, dan kesiapan SDM. Kami akan memberi timeline detail dalam business plan setelah konsultasi awal.",
  },
  {
    q: "Apakah Maklin membantu pemasaran dan akuisisi pelanggan?",
    a: "Ya. Setup outlet mencakup branding, dan kami berbagi praktik akuisisi pelanggan awal serta retention. Pendampingan operasional juga membantu Anda memahami pola pelanggan berulang (recurring revenue) yang menjadi kekuatan utama bisnis cuci motor.",
  },
  {
    q: "Bagaimana cara memulai konsultasi gratis?",
    a: "Sangat mudah. Klik tombol 'Konsultasi Gratis' di halaman ini, isi form singkat (nama, WhatsApp, kota, kepemilikan lahan, modal), atau hubungi WhatsApp kami langsung. Tim Maklin akan menghubungi Anda untuk sesi konsultasi awal tanpa biaya.",
  },
  {
    q: "Apakah modal bisa dicicil atau ada opsi pembiayaan?",
    a: "Kami terbuka mendiskusikan opsi pembiayaan pada sesi konsultasi. Beberapa klien mengkombinasikan modal sendiri dengan pembiayaan. Yang penting struktur modal sehat agar bisnis berjalan optimal sejak hari pertama.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#fafaf9] py-20 sm:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan Yang Sering Diajukan"
          description="Hal-hal yang paling sering ditanyakan calon investor sebelum memutuskan bergabung dengan Maklin."
        />

        <Reveal className="mt-12" delay={0.05}>
          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            defaultValue="item-0"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-black/8 bg-white px-5 shadow-sm transition-shadow data-[state=open]:shadow-premium"
              >
                <AccordionTrigger className="py-5 text-left text-base font-bold text-ink hover:no-underline sm:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal className="mt-12" delay={0.1}>
          <div className="rounded-3xl border border-black/8 bg-white p-8 text-center shadow-premium">
            <h3 className="text-xl font-bold text-ink sm:text-2xl">
              Masih punya pertanyaan?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Tim Maklin siap menjawab semua pertanyaan Anda tanpa biaya.
              Konsultasikan langsung via WhatsApp atau jadwalkan sesi konsultasi.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ConsultCta size="lg">Konsultasi Gratis</ConsultCta>
              <WhatsAppCta size="lg" className="w-full sm:w-auto">
                Chat WhatsApp
              </WhatsAppCta>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
