import NavigationComponent from "@/components/navigation/NavigationComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сайт по Зельде",
  description: "Описание сайта по игре Зельда",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <NavigationComponent />
        {children}
      </body>
    </html>
  );
}
