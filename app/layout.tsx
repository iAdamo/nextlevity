import type { Metadata } from "next";
import StyledJsxRegistry from "./registry";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export const metadata: Metadata = {
  title: "Nextlevity",
  description: "Multi-service marketing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen m-0 p-0">
        <StyledJsxRegistry>
          <GluestackUIProvider mode="system">{children}</GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
