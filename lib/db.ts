import postgres from "postgres";

let client: postgres.Sql | undefined;

// Created on first use so builds don't need DATABASE_URL.
export function db() {
  if (!client) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL is not set");
    // prepare: false keeps it compatible with pooled connections (Neon, Supabase pooler).
    client = postgres(url, { max: 1, prepare: false });
  }
  return client;
}
