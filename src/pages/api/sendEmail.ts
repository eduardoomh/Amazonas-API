import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { clientTemplate } from '../../utils/Email/ClientTemplate';
import { adminTemplate } from '../../utils/Email/AdminTemplate';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const {email, isClient} = data;

    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    const response = await resend.emails.send({
    from: 'reservaciones@selvatour.co',
      to: `${isClient ? email?.trim() : import.meta.env.ADMIN_EMAIL}`, 
      subject: 'Selvatour - Confirmación de reservación', 
      html: isClient ? clientTemplate(data) : adminTemplate(data)
    });

    return new Response(JSON.stringify({ 
        success: true, 
        code: 200, 
        res: response 
    }), { status: 200 });
    
  } catch (error: any) {
    console.error('Error enviando el correo:', error);
    return new Response(JSON.stringify({ success: false, 
        error: error.message 
    }), { status: 500 });
  }
};