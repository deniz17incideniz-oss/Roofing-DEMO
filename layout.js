import '../styles/globals.css';

export const metadata = {
  title: 'Atlas Roofing Solutions Berlin | Free Roof Inspection & Repair',
  description: 'Berlin\'s trusted roofing experts. Free inspections, transparent pricing, storm damage repair, and full roof replacements. Licensed, insured, and 5-star rated. Call +49 30 12345678.',
  keywords: 'roofing Berlin, roof repair Berlin, roof inspection Berlin, storm damage repair, roof replacement Germany, Dachdecker Berlin',
  openGraph: {
    title: 'Atlas Roofing Solutions Berlin | Free Roof Inspection',
    description: 'Berlin\'s trusted roofing experts. Free inspections, transparent pricing, and 5-star rated service.',
    type: 'website',
    locale: 'en_DE',
    siteName: 'Atlas Roofing Solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
