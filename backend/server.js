require('dotenv').config(); 
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS  
  }
});

app.post('/enviar-email', (req, res) => {
    const { email, subject, body } = req.body;
  
    const mailOptions = {
      from: `Formulário de Contato <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, 
      subject: `[Formulário] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #4CAF50;">Nova mensagem do formulário</h2>
          <p><strong>De:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
          <p><strong>Mensagem:</strong></p>
          <p style="border: 1px solid #ddd; padding: 10px; background: #f9f9f9;">${body}</p>
          <hr>
          <footer>
            <p style="font-size: 12px; color: #666;">Este e-mail foi enviado automaticamente pelo sistema de formulários.</p>
          </footer>
        </div>
      `,
      text: `Nova mensagem do formulário\n\nDe: ${email}\nAssunto: ${subject}\n\nMensagem:\n${body}`
    };
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erro ao enviar o e-mail.');
    }
    res.send('E-mail enviado com sucesso!');
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
