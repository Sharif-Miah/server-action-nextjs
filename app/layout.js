import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Server Action',
  description: 'Next.js Server Action Example.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200 px-5`}>
        <main className='mx-auto rounded bg-white max-w-5xl px-5 min-h-[100dvh]'>
          {children}
        </main>
      </body>
    </html>
  );
}
