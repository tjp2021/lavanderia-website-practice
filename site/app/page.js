import Link from "next/link";

export default function Home() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      gap: '2rem',
    }}>
      <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-green)' }}>
        Welcome to Willie's Lavanderia
      </h1>
      <p style={{ fontSize: '1.25rem', maxWidth: 600 }}>
        Fresh, fast, and friendly laundry services in your neighborhood. We offer self-serve, drop-off, and convenient pick-up & delivery options to fit your busy life.
      </p>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        fontSize: '1.1rem',
      }}>
        <li>• Self-Serve Laundry</li>
        <li>• Drop-Off Laundry for Pick Up</li>
        <li>• Laundry Pick Up & Delivery</li>
      </ul>
      <Link href="/contact" style={{
        background: 'var(--primary-green)',
        color: 'var(--white)',
        padding: '0.75em 2em',
        borderRadius: '0.5em',
        fontWeight: 600,
        fontSize: '1.2rem',
        textDecoration: 'none',
        marginTop: '1rem',
        boxShadow: '0 2px 8px rgba(39,174,96,0.08)',
        transition: 'background 0.2s',
      }}>
        Contact Us
      </Link>
    </section>
  );
}
