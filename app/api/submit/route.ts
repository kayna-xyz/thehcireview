import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const affiliation = formData.get("affiliation") as string
    const graduateYear = formData.get("graduateYear") as string
    const articleDescription = formData.get("articleDescription") as string
    const file = formData.get("file") as File | null

    // Validate required fields
    if (!name || !email || !affiliation || !articleDescription) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      )
    }

    // Build email HTML
    const htmlContent = `
      <div style="font-family: monospace; max-width: 600px; margin: 0 auto;">
        <h2 style="border-bottom: 2px solid #7BD5FF; padding-bottom: 12px;">New HCI Review Submission</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; width: 140px; vertical-align: top;">Name</td>
            <td style="padding: 8px 12px;">${name}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Email</td>
            <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Affiliation</td>
            <td style="padding: 8px 12px;">${affiliation}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Graduate Year</td>
            <td style="padding: 8px 12px;">${graduateYear || "N/A"}</td>
          </tr>
        </table>

        <h3 style="margin-top: 24px;">Article Description</h3>
        <p style="background: #f9f9f9; padding: 16px; border-left: 3px solid #7BD5FF; white-space: pre-wrap;">${articleDescription}</p>

        ${file ? `<p style="margin-top: 16px; color: #666;">Attachment: <strong>${file.name}</strong> (${(file.size / 1024).toFixed(1)} KB)</p>` : ""}
      </div>
    `

    // Prepare attachments
    const attachments: { filename: string; content: Buffer }[] = []
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer()
      attachments.push({
        filename: file.name,
        content: Buffer.from(bytes),
      })
    }

    const result = await resend.emails.send({
      from: "HCI Review <onboarding@resend.dev>",
      to: "kh3443@columbia.edu",
      replyTo: email,
      subject: `HCI Review Submission - ${name}`,
      html: htmlContent,
      attachments,
    })

    console.log("[v0] Resend response:", JSON.stringify(result))

    if (result.error) {
      console.error("[v0] Resend error:", result.error)
      return NextResponse.json(
        { error: result.error.message || "Failed to send email." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Email send error:", error)
    return NextResponse.json(
      { error: "Failed to send submission. Please try again." },
      { status: 500 }
    )
  }
}
