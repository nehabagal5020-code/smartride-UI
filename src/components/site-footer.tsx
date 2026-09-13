import { Link } from "@tanstack/react-router";
import { CarFront, Facebook, Instagram, Linkedin } from "lucide-react";

export function SiteFooter() {
  return <footer className="bg-primary text-primary-foreground">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
      <div className="md:col-span-2"><div className="flex items-center gap-2 font-display text-xl font-bold"><CarFront /> SmartRide</div><p className="mt-4 max-w-sm text-sm leading-7 text-primary-foreground/70">Thoughtfully selected cars, transparent rates, and support that keeps every journey moving.</p></div>
      <div><h3 className="text-sm font-bold">Explore</h3><div className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/70"><Link to="/cars">Browse cars</Link><Link to="/login">My account</Link><a href="mailto:hello@smartride.example">Help center</a></div></div>
      <div><h3 className="text-sm font-bold">Follow the journey</h3><div className="mt-4 flex gap-3"><a href="#" aria-label="Instagram"><Instagram /></a><a href="#" aria-label="Facebook"><Facebook /></a><a href="#" aria-label="LinkedIn"><Linkedin /></a></div></div>
    </div><div className="border-t border-primary-foreground/10 px-5 py-5 text-center text-xs text-primary-foreground/60">© 2026 SmartRide. All rights reserved.</div>
  </footer>;
}