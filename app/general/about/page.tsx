import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO title",
  description: "SEO About",
  keywords: ["About page", "Neil"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
