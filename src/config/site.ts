// Touch file to force rebuild: updated cache refresh
export const site = {
  name: "MAKLIN",
  tagline: "Build • Operate • Grow",
  description:
    "Layanan Bisnis Cuci Motor & Salon Motor. Kami membantu investor membangun bisnis cuci motor dari nol hingga siap beroperasi.",
  whatsappNumber: "6281973940566",
  whatsappDisplay: "+62 819-7394-0566",
  email: "halo@maklin.id",
  domain: "maklin.id",
  url: "https://maklin.id",
};

export const whatsappMessage =
  "Halo MAKLIN, saya tertarik membangun bisnis cuci motor dan ingin mengetahui paket investasi yang sesuai untuk saya.";

export function waLink(message?: string) {
  const text = encodeURIComponent(message ?? whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export const services = [
  "Studi Kelayakan",
  "Survey Lokasi",
  "Business Plan",
  "Setup Outlet",
  "SOP Operasional",
  "Rekrutmen SDM",
  "Training SDM",
  "Pendampingan Operasional",
  "Pengembangan Salon Motor",
  "Coating & Detailing",
];

export type ProfitTier = {
  id: "basic" | "standard" | "premium";
  name: string;
  investment: string;
  investmentValue: number;
  monthlyProfit: string;
  bep: string;
  highlight?: boolean;
};

export const profitTiers: ProfitTier[] = [
  {
    id: "basic",
    name: "Basic",
    investment: "Rp129 Juta",
    investmentValue: 129,
    monthlyProfit: "Rp15,8 Juta",
    bep: "8 Bulan",
  },
  {
    id: "standard",
    name: "Standard",
    investment: "Rp199 Juta",
    investmentValue: 199,
    monthlyProfit: "Rp29,2 Juta",
    bep: "6 Bulan",
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    investment: "Rp255 Juta",
    investmentValue: 255,
    monthlyProfit: "Rp46,8 Juta",
    bep: "5 Bulan",
  },
];

export type PackageTier = {
  id: "basic" | "standard" | "premium";
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  cta: string;
};

export const packageTiers: PackageTier[] = [
  {
    id: "basic",
    name: "Basic",
    price: "Rp129 Juta",
    description:
      "Pilihan ideal untuk investor pemula yang ingin memulai bisnis cuci motor dengan sistem yang teruji.",
    features: [
      "Studi Kelayakan",
      "4 Hidraulik",
      "SOP Dasar",
      "Rekrutmen",
      "Training",
      "Pendampingan 1 Bulan",
    ],
    cta: "Pilih Paket",
  },
  {
    id: "standard",
    name: "Standard",
    price: "Rp199 Juta",
    description:
      "Paket paling direkomendasikan dengan kapasitas lebih besar dan branding lengkap untuk pertumbuhan cepat.",
    features: [
      "Studi Kelayakan & Business Plan",
      "6 Hidraulik",
      "Branding Lengkap",
      "SOP Operasional & SDM",
      "Rekrutmen & Training",
      "Pendampingan 2 Bulan",
    ],
    recommended: true,
    cta: "Pilih Paket",
  },
  {
    id: "premium",
    name: "Premium",
    price: "Rp255 Juta",
    description:
      "Solusi all-in-one dengan kapasitas maksimal dan pendampingan intensif untuk hasil optimal.",
    features: [
      "Studi Kelayakan & Business Plan",
      "8 Hidraulik",
      "Branding Lengkap",
      "SOP Operasional & SDM",
      "Rekrutmen & Training",
      "Pendampingan 3 Bulan",
    ],
    cta: "Pilih Paket",
  },
];

export const navLinks = [
  { label: "Masalah", href: "#masalah" },
  { label: "Peluang", href: "#peluang" },
  { label: "Solusi", href: "#solusi" },
  { label: "Simulasi Profit", href: "#simulasi" },
  { label: "Paket", href: "#paket" },
  { label: "FAQ", href: "#faq" },
];
