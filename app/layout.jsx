import "./globals.css";

export const metadata = {
  title: "Mohd Siddiqui — Portfolio",
  description: "Frontend / Full-Stack Developer (MERN) — portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page-shell">
        <main className="min-h-screen px-6 py-10 sm:px-10 lg:px-16">
          {children}
        </main>
      </body>
    </html>
  );
}


