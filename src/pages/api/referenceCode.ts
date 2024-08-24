import type { APIRoute } from 'astro';
import SHA256 from 'crypto-js/sha256';
import Hex from 'crypto-js/enc-hex';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Definir valores constantes
    const transaction_currency = 'COP';
    const signature_integrity = import.meta.env.SIGNATURE_INTEGRITY;

    // Obtener el `amount` desde el cuerpo de la solicitud POST
    const { amount } = await request.json();

    // Generar una referencia única para la transacción
    const transaction_reference = `txn_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 15)}`;

    // Concatenar los valores en el orden especificado
    const data_to_hash = `${transaction_reference}${amount}${transaction_currency}${signature_integrity}`;

    // Generar el hash SHA256
    const hash = SHA256(data_to_hash).toString(Hex);

    // Devolver el hash y la referencia única en la respuesta
    return new Response(JSON.stringify({
      hash: hash,
      reference: transaction_reference
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "https://reservaciones.selvatour.co", 
      }
    });
  } catch (error: any) {
    console.error('Error generando el token:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};