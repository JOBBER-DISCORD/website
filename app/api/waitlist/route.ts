import { supabase } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return Response.json(
      { error: "Enter a valid email address, like you@email.com." },
      { status: 400 },
    );
  }

  const { error } = await supabase()
    .from("waitlist_signups")
    .upsert({ email }, { onConflict: "email", ignoreDuplicates: true });

  if (error) {
    console.error("[waitlist] failed to save signup", error);
    return Response.json(
      { error: "Couldn't join the waitlist." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
