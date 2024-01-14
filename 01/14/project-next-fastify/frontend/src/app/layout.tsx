import NavigationComponent from "@/components/navigation/NavigationComponent";

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
