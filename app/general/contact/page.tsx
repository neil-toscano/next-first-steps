import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO title",
  description: "SEO Contact",
  keywords: ["Contact page", "Neil"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
