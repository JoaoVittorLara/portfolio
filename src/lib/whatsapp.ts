import { WHATSAPP } from '../consts';

/**
 * Link do WhatsApp com a mensagem já escrita, no formato `wa.me`: abre o app
 * no celular e o WhatsApp Web no computador, sem nenhum script de terceiro.
 *
 * Devolve `null` quando não há número configurado: quem chama decide o que
 * mostrar no lugar do botão.
 */
export function linkWhatsApp(
  mensagem: string = WHATSAPP.mensagem,
): string | null {
  if (!WHATSAPP.numero) return null;
  return `https://wa.me/${WHATSAPP.numero}?text=${encodeURIComponent(mensagem)}`;
}
