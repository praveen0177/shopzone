// Initialize Stripe
const stripe = Stripe('YOUR_PUBLISHABLE_KEY');
const elements = stripe.elements();
const card = elements.create('card');
card.mount('#card-element');

function openPaymentModal(imageSrc, name, price) {
  // Set product details in the modal
  document.getElementById('product-image').src = imageSrc;
  document.getElementById('product-name').innerText = name;
  document.getElementById('product-price').innerText = `$${price}`;

  // Show the payment modal
  document.getElementById('payment-modal').style.display = 'flex';
}

function closePaymentModal() {
  document.getElementById('payment-modal').style.display = 'none';
}

// Handle form submission
document.getElementById('payment-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  // Show loading animation
  document.getElementById('payment-status').innerText = 'Processing...';

  // Call your server to create a PaymentIntent and handle payment confirmation
  const { paymentIntent, error } = await stripe.confirmCardPayment(
    'YOUR_CLIENT_SECRET', {
      payment_method: {
        card: card,
      }
    }
  );

  if (error) {
    // Show error to your customer
    document.getElementById('payment-status').innerText = `Payment failed: ${error.message}`;
  } else if (paymentIntent && paymentIntent.status === 'succeeded') {
    // Show a success message
    document.getElementById('payment-status').innerText = 'Payment successful!';
    setTimeout(closePaymentModal, 2000);
  }
});
