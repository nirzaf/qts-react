import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, budget, timeline } = body;

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = (process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev").trim();
    // Using fazrinphcc@gmail.com as Resend test mode only allows sending to the verified owner email
    // To send to quadrate.lk@gmail.com, verify a custom domain on resend.com/domains
    const toEmail = "fazrinphcc@gmail.com";

    console.log("Email config:", { fromEmail, toEmail, hasApiKey: !!resendApiKey });

    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">🔔 New Contact Form Submission [HIGH PRIORITY]</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
          </tr>
          ${budget ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Budget:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${budget}</td>
          </tr>
          ` : ''}
          ${timeline ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Timeline:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${timeline}</td>
          </tr>
          ` : ''}
        </table>
        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
          <strong>Message:</strong>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This email was sent from the contact form on quadrate.lk
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `🔔 [HIGH PRIORITY] New Contact Form Submission: ${subject}`,
      html: emailHtml,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high',
      },
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.log("Email sent successfully:", data?.id);

    return NextResponse.json({
      message: "Email sent successfully",
      id: data?.id,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}
