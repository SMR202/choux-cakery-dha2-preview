import './globals.css'

export const metadata = {
  title: 'CHOUX | Bakery in Central Park DHA-2 Islamabad',
  description: 'Bakery demo for CHOUX in Central Park DHA-2 Islamabad with fresh bakes, cakes and delivery contact.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
