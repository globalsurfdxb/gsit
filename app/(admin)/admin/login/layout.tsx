export const metadata = {
  title: "GS IT | Backend Console",
  description: "GS IT",
};

import "../../../globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en" className={`antialiased`}>
      {children}
    </div>
  );
}
