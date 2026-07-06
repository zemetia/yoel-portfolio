import { Fira_Code, Noto_Sans, Space_Grotesk } from 'next/font/google';

import { QueryProvider } from '@/providers/QueryProvider';
import '../globals.css';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata = { title: 'Admin — Portfolio CMS' };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}
    >
      <body style={{ margin: 0, background: 'var(--color-background)', color: 'var(--color-foreground)' }}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
