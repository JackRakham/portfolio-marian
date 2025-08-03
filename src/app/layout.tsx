import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import Aoscompo from "@/utils/aos";
import NextTopLoader from 'nextjs-toploader';
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import ToasterContext from './api/contex/ToasetContex'
import { EditProvider } from './api/contex/EditContext'
import DownloadPDF from "@/components/DownloadPDF";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Marian Daza - Diseñadora y Publicista',
  description: 'Portfolio de Marian Daza, diseñadora creativa especializada en logos, flyers, posters y contenido para redes sociales.',
}

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader />
        <EditProvider>
          <Aoscompo>
            <TopBar />
            {children}
            <Footer />
          </Aoscompo>
          <ToasterContext />
        </EditProvider>
        <DownloadPDF />
      </body>
    </html>
  );
}
