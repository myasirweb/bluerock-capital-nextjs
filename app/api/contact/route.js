// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // Determine name for email
    const name = data.name || `${data.firstName || ""} ${data.lastName || ""}`;
    const email = data.email;
    const phone = data.phone || data.phoneNumber || "N/A";
    const company = data.company || "N/A";
    const purpose = data.purpose || data.purposeOfContact || "No Subject";
    const message = data.message || data.purposeOfContact || "No message provided";

    const transporter = nodemailer.createTransport({
      host: "smtp.your-email-provider.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "office@bluerock.ro",
      subject: `Contact Form: ${purpose}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
