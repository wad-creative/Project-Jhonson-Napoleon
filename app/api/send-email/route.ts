import { sendEmail } from "@/lib/email/sendEmail";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await sendEmail(data);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: true | any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
