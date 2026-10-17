import { FieldValue } from "firebase-admin/firestore";
import { db } from "@/lib/firebase";

const EMAIL_RE = /^[^\s@/]+@[^\s@/]+\.[^\s@/]+$/;
const ALREADY_EXISTS = 6;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return Response.json(
      { error: "Enter a valid email address, like you@email.com." },
      { status: 400 },
    );
  }

  try {
    await db()
      .collection("waitlist")
      .doc(email)
      .create({ email, createdAt: FieldValue.serverTimestamp() });
  } catch (err) {
    if ((err as { code?: number }).code !== ALREADY_EXISTS) {
      console.error("[waitlist] failed to save signup", err);
      return Response.json(
        { error: "Couldn't join the waitlist." },
        { status: 500 },
      );
    }
  }

  return Response.json({ ok: true });
}
