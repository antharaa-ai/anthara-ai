import { NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();

    const { name, email, projectType, brief } = body;

    await resend.emails.send({
      from: "Anthara <onboarding@resend.dev>",
      to: "contact.anthara@gmail.com",
      subject: `New Anthara Inquiry - ${projectType}`,
      html: `
        <h2>New Project Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>

        <h3>Project Brief</h3>
        <p>${brief}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}