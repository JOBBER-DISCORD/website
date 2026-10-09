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

  console.log(`[waitlist] new signup: ${email}`);

  return Response.json({ ok: true });
}
