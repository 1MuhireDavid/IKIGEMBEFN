import { useState } from 'react';

export default function Subscribe() {
  const [status, setStatus] = useState(null);

  // Handle user subscription
  const handleSubscription = async (plan:any) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/movies/subscribe/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plan }), // Plan can be 'monthly' or 'yearly'
      });

      const data = await response.json();

      if (data.checkout_url) {
        // Redirect to Stripe Checkout
        window.location.href = data.checkout_url;
      } else {
        setStatus('Error during subscription.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('Error during subscription.');
    }
  };

  return (
    <div>
      <h1>Subscribe to Movies</h1>
      <button onClick={() => handleSubscription('monthly')}>Subscribe Monthly</button>
      <button onClick={() => handleSubscription('yearly')}>Subscribe Yearly</button>
      {status && <p>{status}</p>}
    </div>
  );
}
