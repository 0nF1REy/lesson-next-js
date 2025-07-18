import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Aula Next JS do zero!",
  description: "Aprendendo  procedimentos com Next JS",
  openGraph: {
    title: "Home - Aula Next JS do zero!",
    description: "Aprendendo  procedimentos com Next JS",
    images: ["https://images4.alphacoders.com/195/195666.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Home() {
  return (
    <div>
      <h1>Página HOME</h1>
    </div>
  );
}
