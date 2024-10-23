import '@/styles/reset.css';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
        <head/>
    <body>{children}</body>
    </html>
  );
}