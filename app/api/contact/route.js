import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transport.sendMail({
      from: email,
      to: process.env.MAIL_RECEIVE,
      subject: `New message from ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    });

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Error", { status: 500 });
  }
}
