import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    if (!sendgridApiKey) {
      return res.status(500).json({ success: false, error: 'Falta la variable de entorno SENDGRID_API_KEY.' });
    }

    sgMail.setApiKey(sendgridApiKey);

    const { name, phone, email, projectType, description } = req.body || {};

    if (!name || !phone || !email || !projectType) {
      return res.status(400).json({ success: false, error: 'Faltan campos obligatorios.' });
    }

    // Simple email validation
    const emailValid = typeof email === 'string' && /.+@.+\..+/.test(email);
    if (!emailValid) {
      return res.status(400).json({ success: false, error: 'Email no válido.' });
    }

    const ownerEmail = process.env.OWNER_EMAIL || 'praticas@guadalweb.com';
    const fromEmail = process.env.FROM_EMAIL || ownerEmail;

    const ownerMsg = {
      to: ownerEmail,
      from: fromEmail,
      subject: `Nuevo Presupuesto Web - ${name}`,
      text: `Has recibido una nueva solicitud de presupuesto desde la web:\n\nNombre: ${name}\nTeléfono: ${phone}\nEmail: ${email}\nTipo de Obra: ${projectType}\n\nDescripción del Proyecto:\n${description || ''}`
    };

    const userMsg = {
      to: email,
      from: fromEmail,
      subject: 'Confirmación de recepción - Burgos Reformas Integrales',
      text: `Hola ${name},\n\nHemos recibido su solicitud de presupuesto. Nos pondremos en contacto con usted lo antes posible.\n\nResumen de su solicitud:\nNombre: ${name}\nTeléfono: ${phone}\nEmail: ${email}\nTipo de Obra: ${projectType}\n\nDescripción:\n${description || ''}\n\nSaludos,\nBurgos Reformas Integrales`
    };

    // Send both emails
    await sgMail.send([ownerMsg, userMsg]);
    res.status(200).json({ success: true, message: 'Emails enviados correctamente.' });
  } catch (err) {
    console.error('SendGrid error:', err);
    const sendgridErrors = err?.response?.body?.errors;
    const sendgridMessage = Array.isArray(sendgridErrors) && sendgridErrors.length > 0
      ? sendgridErrors.map((item) => item.message).filter(Boolean).join(' | ')
      : err?.response?.body?.message || err.message || 'Error desconocido';

    res.status(500).json({
      success: false,
      error: `Error al enviar los correos. ${sendgridMessage}`,
    });
  }
}
