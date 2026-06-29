import './globals.css'

export const metadata = {
  title: 'ოქროს ლომბარდი | სწრაფი სესხი ოქროს უზრუნველყოფით',
  description: 'სანდო ლომბარდი თბილისში — ოქროს განვადება, სწრაფი სესხი, ძვირფასეულობის შეფასება',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ka">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
