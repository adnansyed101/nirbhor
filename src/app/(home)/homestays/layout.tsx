import { Metadata } from "next";
import SearchProvider from "./providers/search-provider";

export const metadata: Metadata = {
  title: "Nirbhor | Homestays"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <SearchProvider>
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
