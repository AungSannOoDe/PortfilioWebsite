
import { Providers } from "@/Providers/Providers";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className="transition-colors duration-500 bg-white dark:bg-gray-900 text-black dark:text-white">
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
