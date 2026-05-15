// src/app/page.tsx — test page sementara
export default function Home() {
  return (
    <main style={{ padding: '40px' }}>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        color: 'var(--text-primary)',
        fontSize: '32px'
      }}>
        ✅ Tokens bekerja!
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
        Background: <code style={{ color: 'var(--color-blue)' }}>var(--bg-base)</code>
      </p>
      <div style={{
        marginTop: '24px',
        padding: '16px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius-md)'
      }}>
        Card dengan bg-card dan border-card ✓
      </div>
    </main>
  )
}