import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO title",
  description: "SEO Descripcion",
  keywords: ["Pricing page", "Neil"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}
