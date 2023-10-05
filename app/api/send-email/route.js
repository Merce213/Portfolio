import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { fullname, senderEmail, subject, message } =
            await request.json();

        const data = await resend.emails.send({
            from: `${fullname} <onboarding@resend.dev>`,
            to: "nassim-bgb69@gmx.fr",
            subject: `${subject}`,
            cc: `${senderEmail}`,
            reply_to: `${senderEmail}`,
            react: EmailTemplate({ fullname, senderEmail, subject, message }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
