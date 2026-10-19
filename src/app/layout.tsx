import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Popeyes Gift Card",
  description: "Participate in the Panera Bread Rewards program and get a chance to claim a $100 gift card.",
    icons: {
    icon: [
      { url: "https://i.imgur.com/Dn5WKVh.png", type: "image/png" },
    ],
    shortcut: "https://i.imgur.com/Dn5WKVh.png",
    apple: [
      { url: "https://i.imgur.com/Dn5WKVh.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "https://i.imgur.com/Dn5WKVh.png",
        url: "https://i.imgur.com/BZ4vV7P.png",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="b844d676-9381-45a7-bbb3-4072f33b2a59"
        />
        <ErrorReporter />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
