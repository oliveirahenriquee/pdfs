// Cole aqui o link HTTPS oficial do checkout do produto de R$ 39,90.
const CHECKOUT_URL = '';
// Preencha antes de publicar: identificação e contato comercial do vendedor.
const SELLER_INFO = '';
const status = document.querySelector('#checkout-status');
if (SELLER_INFO) document.querySelector('#seller-info').textContent = SELLER_INFO;
function checkoutUrl() { try { const url = new URL(CHECKOUT_URL); return url.protocol === 'https:' ? url.href : null; } catch { return null; } }
if (!checkoutUrl()) status.textContent = 'Checkout ainda não configurado. Nenhum pagamento será iniciado.';
document.querySelectorAll('[data-checkout]').forEach(button => button.addEventListener('click', () => { const url = checkoutUrl(); if (url) window.location.assign(url); else status.textContent = 'Checkout indisponível: configure o link oficial antes de publicar.'; }));
