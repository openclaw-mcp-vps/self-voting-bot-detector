import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Self-Voting Bot Detector — Detect Fake Engagement",
  description: "Analyze voting patterns to detect self-voting bots and fake engagement across social platforms."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5262876e-a93e-4f18-bfea-1d5767b188b7"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
