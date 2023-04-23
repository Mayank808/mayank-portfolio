import './globals.css'

export const metadata = {
  title: 'Mayank Mehra',
  description: 'Hi, my name is Mayank and welcome to my website. While you are here feel free to learn a bit about me and visit my other socials.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
