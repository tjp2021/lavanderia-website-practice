export default function Services() {
  return (
    <section style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ color: 'var(--primary-green)' }}>Our Services</h1>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem' }}>
        <li style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ color: 'var(--primary-green)' }}>Self-Serve Laundry</h2>
          <p>Modern, clean machines available 7 days a week. Enjoy free Wi-Fi and a comfortable waiting area while you wash and dry your clothes.</p>
        </li>
        <li style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ color: 'var(--primary-green)' }}>Drop-Off Laundry for Pick Up</h2>
          <p>Short on time? Drop off your laundry and we’ll wash, dry, and fold it for you. Ready for pick up the same or next day.</p>
        </li>
        <li style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ color: 'var(--primary-green)' }}>Laundry Pick Up & Delivery</h2>
          <p>Schedule a pick up and we’ll handle the rest! Perfect for busy families, professionals, or anyone who wants laundry off their to-do list.</p>
        </li>
      </ul>
    </section>
  );
}


