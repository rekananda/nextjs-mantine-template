import '@assets/css/app.css';
import '@assets/css/font.css';
import '@assets/css/global.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import { ColorSchemeScript } from "@mantine/core";
import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import ThemeProvider from './ThemeProvider';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
