import Footer from "@/components/Footer/footer"; // Import the Navbar component
import "../styles/globals.css";
import "../styles/tailwind.css";
import Navbar from "@/components/Nav/nav";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen flex flex-col bg-gray-900">
        {/* Navbar */}
        <Navbar /> {/* Add Navbar here */}
        {/* Main Content */}
        <div className="flex-grow">{children}</div>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
