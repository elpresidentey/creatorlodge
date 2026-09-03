export async function sendBookingEmail(to: string, subject: string, html: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) { console.log(`[email mock] to:${to} subject:${subject}`); return; }
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.EMAIL_FROM || "Creators Lounge <hello@creatorslounge.ng>", to, subject, html }),
    });
  } catch(e){ console.error("email failed", e); }
}
