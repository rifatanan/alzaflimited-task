import './globals.css';
import { Inter, Open_Sans } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-inter',
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable}`}>{children}</body>
        </html>
    );
}
