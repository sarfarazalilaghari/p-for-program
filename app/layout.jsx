import { Geist, Geist_Mono,Monoton } from "next/font/google";
import "./globals.css";
import Nav from "./components/ui/nav-bar/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const  Mono= Monoton({
  variable: "--Monoton",
  subsets: ["latin"],
  weight:"400"
});

export const metadata = {
  title: "P For Program",
  description: "P for program is a web application in which there are multiple learning resources are available Html course javascript course css course and many more ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body className={`${geistSans.variable}`}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
