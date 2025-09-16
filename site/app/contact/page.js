import React from "react";

export default function Contact() {
  return (
    <section style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ color: 'var(--primary-green)' }}>Contact Us</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <input type="text" placeholder="Name" required style={{ padding: '0.75em', borderRadius: '0.3em', border: '1px solid #ccc' }} />
        <input type="email" placeholder="Email" required style={{ padding: '0.75em', borderRadius: '0.3em', border: '1px solid #ccc' }} />
        <input type="tel" placeholder="Phone" style={{ padding: '0.75em', borderRadius: '0.3em', border: '1px solid #ccc' }} />
        <textarea placeholder="Message" required rows={4} style={{ padding: '0.75em', borderRadius: '0.3em', border: '1px solid #ccc' }} />
        <button type="submit" style={{
          background: 'var(--primary-green)',
          color: 'var(--white)',
          padding: '0.75em 2em',
          border: 'none',
          borderRadius: '0.5em',
          fontWeight: 600,
          fontSize: '1.1rem',
          cursor: 'pointer',
        }}>
          Send Inquiry
        </button>
      </form>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--primary-green)', fontSize: '1.2rem' }}>Business Hours</h2>
        <p>Monday – Sunday: 7:00 AM – 10:00 PM</p>
        <h2 style={{ color: 'var(--primary-green)', fontSize: '1.2rem', marginTop: '1rem' }}>Address</h2>
        <p>123 Main Street, Your City, ST 12345</p>
      </div>
      <div style={{ background: 'var(--light-gray)', padding: '1.5rem', borderRadius: '0.5em' }}>
        <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.5em' }}>What Our Customers Say</h3>
        <blockquote style={{ fontStyle: 'italic', margin: 0 }}>
          "Willie's Lavanderia made laundry day so much easier! Friendly staff and super clean machines. Highly recommend!"
        </blockquote>
        <div style={{ marginTop: '0.5em', fontWeight: 500 }}>– Maria G.</div>
      </div>
    </section>
  );
}


