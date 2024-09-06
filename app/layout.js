import MainHeaderBackground from "@/components/header/main-header-background";
import "./globals.css";
import MainHeader from "@/components/header/main-header";

export const metadata = {
  title: "Foodies",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
