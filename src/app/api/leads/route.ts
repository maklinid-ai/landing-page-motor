import { NextRequest, NextResponse } from "next/server";
// import { db } from "@/lib/db";

const PHONE_RE = /^[\d+\s\-()]{8,20}$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Invalid request body." },
        { status: 400 },
      );
    }

    const name = String(body.name ?? "").trim();
    const whatsapp = String(body.whatsapp ?? "").trim();
    const city = String(body.city ?? "").trim();
    const hasLand = String(body.hasLand ?? "Tidak").trim();
    const investment = String(body.investment ?? "").trim();
    const packageName = body.packageName ? String(body.packageName) : null;

    if (!name || name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Nama wajib diisi." },
        { status: 400 },
      );
    }
    if (!PHONE_RE.test(whatsapp)) {
      return NextResponse.json(
        { ok: false, error: "Nomor WhatsApp tidak valid." },
        { status: 400 },
      );
    }
    if (!city) {
      return NextResponse.json(
        { ok: false, error: "Kota wajib diisi." },
        { status: 400 },
      );
    }
    if (!investment) {
      return NextResponse.json(
        { ok: false, error: "Pilih rentang modal investasi." },
        { status: 400 },
      );
    }

    const response = await fetch(
  "https://script.google.com/macros/s/AKfycbxSvaI8VvlWg2Qn0Sd6zEMTlUU-tKUzYLFPdGNMBM1A9BAiVgU3kU0pUMbb91QtGBE_/exec",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      whatsapp,
      city,
      hasLand,
      investment,
      packageName,
      source: "landing-page",
      createdAt: new Date().toISOString(),
    }),
  }
);

if (!response.ok) {
  throw new Error("Gagal mengirim data ke Google Sheet");
}

if (!response.ok) {
  throw new Error("Gagal mengirim data ke Google Sheet");
}

return NextResponse.json({
  ok: true,
  message: "Lead berhasil dikirim",
});


  } catch (err) {
    console.error("[LEAD_API_ERROR]", err);
    return NextResponse.json(
      { ok: false, error: "Terjadi kesalahan. Silakan coba lagi." },
      { status: 500 },
    );
  }
}
