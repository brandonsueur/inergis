import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendContactEmail = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { name, email, subject, message } = data;

  // Vérification des variables d'environnement requises
  const requiredEnvVars = {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SMTP_FROM: process.env.SMTP_FROM,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  };

  const missingEnvVars = Object.entries(requiredEnvVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Configuration SMTP incomplète. Variables manquantes : ${missingEnvVars.join(
        ", "
      )}`
    );
  }

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: `[Contact Site SNOF] ${subject}`,
    html: `
      <h2>Nouveau message de contact</h2>
      <p><strong>De :</strong> ${name} (${email})</p>
      <p><strong>Sujet :</strong> ${subject}</p>
      <p><strong>Message :</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error("Erreur détaillée lors de l'envoi de l'Email:", error);

    // Messages d'erreur plus spécifiques selon le type d'erreur
    if (error.code === "EAUTH") {
      throw new Error(
        "Erreur d'authentification SMTP. Vérifiez vos identifiants."
      );
    } else if (error.code === "ESOCKET") {
      throw new Error(
        "Erreur de connexion au serveur SMTP. Vérifiez l'hôte et le port."
      );
    } else if (error.code === "ETIMEDOUT") {
      throw new Error(
        "Délai d'attente dépassé lors de la connexion au serveur SMTP."
      );
    } else {
      throw new Error(`Erreur lors de l'envoi de l'Email: ${error.message}`);
    }
  }
};
