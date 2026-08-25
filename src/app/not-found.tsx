import type { Metadata } from "next";
import Link from "next/link";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GFooter } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Fire IPTV Hub" },
  description:
    "The page you requested could not be found. Return to Fire IPTV Hub home or browse subscription plans, installation guides and support.",
  robots: { index: false, follow: false },
};

const helpfulLinks = [
  { name: "Home", href: ROUTES.home },
  { name: "Subscription Plans", href: ROUTES.subscription },
  { name: "Installation Guide", href: ROUTES.installation },
  { name: "Reseller Panel", href: ROUTES.reseller },
  { name: "Contact Us", href: ROUTES.contact },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-transparent flex flex-col">
      <B1GHeader />
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl w-full text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#12141F] mb-4">Page not found</h1>
          <p className="text-sm text-slate-500 font-semibold mb-10">
            The page you are looking for does not exist, was moved, or the URL may be mistyped.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link href={ROUTES.home}>
              <Button variant="primary" className="w-full sm:w-auto rounded-[12px] px-8 py-3">Back to Home</Button>
            </Link>
            <Link href={ROUTES.contact}>
              <Button variant="outline" className="w-full sm:w-auto rounded-[12px] px-8 py-3">Contact Support</Button>
            </Link>
          </div>
          <nav aria-label="Helpful links">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {helpfulLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-semibold text-slate-600 hover:text-[#E01E26]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <B1GFooter />
    </main>
  );
}
