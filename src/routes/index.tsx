import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Headphones, MapPin, Search, ShieldCheck, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";
import heroImage from "@/assets/smartride-hero.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CarCard } from "@/components/car-card";
import { cars } from "@/lib/cars";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "SmartRide — Modern Car Rental" },
    { name: "description", content: "Find and book the right rental car with transparent rates and flexible pickup." },
    { property: "og:title", content: "SmartRide — Modern Car Rental" },
    { property: "og:description", content: "Your smarter way to travel. Search trusted cars and book in minutes." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function HomePage() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  function search(event: FormEvent) { event.preventDefault(); navigate({ to: "/cars", search: { location: location || undefined } }); }
  return <><SiteHeader /><main>
    <section className="relative min-h-[720px] overflow-hidden bg-primary text-primary-foreground">
      <img src={heroImage} alt="Luxury SmartRide rental sedan overlooking the city" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col justify-center px-5 pb-28 pt-20 lg:px-8">
        <div className="max-w-2xl"><span className="inline-flex items-center gap-2 rounded-full bg-highlight px-4 py-2 text-xs font-bold text-highlight-foreground"><Sparkles className="size-4" /> Premium cars. Clear rates. Zero hassle.</span>
          <h1 className="mt-7 text-5xl font-extrabold leading-[1.08] sm:text-6xl lg:text-7xl">Your Smarter Way to <span className="text-highlight">Travel</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">Choose from quality cars for city breaks, business trips, and open-road weekends.</p>
        </div>
        <form onSubmit={search} className="mt-10 grid max-w-5xl gap-4 rounded-2xl bg-background p-4 text-foreground shadow-2xl md:grid-cols-[1.3fr_1fr_1fr_auto] md:items-end">
          <div><Label htmlFor="location" className="mb-2 flex items-center gap-2"><MapPin className="size-4 text-accent" /> Pickup location</Label><Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City or airport" className="h-12" /></div>
          <div><Label htmlFor="pickup" className="mb-2 block">Pickup date</Label><Input id="pickup" type="date" className="h-12" /></div><div><Label htmlFor="return" className="mb-2 block">Return date</Label><Input id="return" type="date" className="h-12" /></div>
          <Button variant="cta" size="lg" type="submit"><Search /> Search cars</Button>
        </form>
      </div>
    </section>
    <section className="bg-background py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-border bg-card p-7 shadow-sm"><span className="grid size-12 place-items-center rounded-xl bg-secondary/25 text-primary"><ShieldCheck /></span><h3 className="mt-5 text-lg font-bold">Drive with confidence</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Every car is inspected and includes clear protection options.</p></div>
      <div className="rounded-2xl border border-border bg-card p-7 shadow-sm"><span className="grid size-12 place-items-center rounded-xl bg-secondary/25 text-primary"><CalendarCheck /></span><h3 className="mt-5 text-lg font-bold">Plans stay flexible</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Change or cancel eligible bookings without hidden surprises.</p></div>
      <div className="rounded-2xl border border-border bg-card p-7 shadow-sm"><span className="grid size-12 place-items-center rounded-xl bg-secondary/25 text-primary"><Headphones /></span><h3 className="mt-5 text-lg font-bold">Help when you need it</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Friendly support is ready throughout your rental journey.</p></div>
    </div></div></section>
    <section className="bg-muted py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="font-bold text-accent">CURATED FOR EVERY JOURNEY</p><h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Popular cars</h2></div><Button variant="outline" asChild><Link to="/cars">View all cars <ArrowRight /></Link></Button></div><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{cars.slice(0,3).map(car => <CarCard car={car} key={car.id} />)}</div></div></section>
    <section className="bg-background py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="text-center"><p className="font-bold text-accent">SIMPLE FROM START TO FINISH</p><h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">How SmartRide works</h2></div><div className="mt-14 grid gap-10 md:grid-cols-3">{[["01","Search your way","Choose a location, dates, and the ride that fits."],["02","Book in minutes","Review clear pricing and reserve securely."],["03","Pick up & go","Grab the keys and enjoy the road ahead."]].map(([n,t,d])=><div key={n} className="text-center"><span className="mx-auto grid size-14 place-items-center rounded-full bg-primary font-display font-bold text-primary-foreground">{n}</span><h3 className="mt-5 text-xl font-bold">{t}</h3><p className="mt-2 text-muted-foreground">{d}</p></div>)}</div></div></section>
    <section className="bg-highlight py-16"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center lg:px-8"><div><h2 className="text-3xl font-extrabold text-highlight-foreground">Ready for your next drive?</h2><p className="mt-2 text-highlight-foreground/75">A better rental experience is only a few clicks away.</p></div><Button variant="cta" size="lg" asChild><Link to="/cars">Find your car <ArrowRight /></Link></Button></div></section>
  </main><SiteFooter /></>;
}