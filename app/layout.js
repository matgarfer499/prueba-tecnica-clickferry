import './globals.css'

export const metadata = {
  title: 'Prueba técnica Clickferry',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
