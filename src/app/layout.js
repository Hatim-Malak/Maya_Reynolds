import { Geist, Lora, Alex_Brush } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const alexBrush = Alex_Brush({
  weight: '400',
  variable: "--font-alex-brush",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD — Anxiety, Trauma & Burnout Therapy in Santa Monica, CA",
  description: "Licensed clinical psychologist in Santa Monica, CA. Warm, evidence-based therapy for adults — anxiety, panic, trauma, and burnout. In-person and secure telehealth for California clients.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${lora.variable} ${alexBrush.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20">{children}</body>
    </html>
  );
}
