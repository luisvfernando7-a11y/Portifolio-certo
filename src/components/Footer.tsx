import { C, S } from '@/data/theme'

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.b1}`, backgroundColor: C.bg0, padding: '28px 0' }}>
      <div style={S.container}>
        <p>Luis Galvani · {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
