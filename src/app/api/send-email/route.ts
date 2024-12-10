import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // Use TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'bruno@brunotasso.com.br',
      subject: `Nova mensagem de contato de ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
      html: `
        <h1>Nova mensagem de contato</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ message: 'E-mail enviado com sucesso' }, { status: 200 })
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error)
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 })
  }
}

