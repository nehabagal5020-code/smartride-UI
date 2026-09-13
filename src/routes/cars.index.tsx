import { createFileRoute } from "@tanstack/react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { z } from "zod";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CarCard } from "@/components/car-card";
import { cars } from "@/lib/cars";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/cars")({
  validateSearch: z.object({ location: z.string().optional() }),
  head: () => ({ meta: [{ title: "Browse Rental Cars — SmartRide" },{ name: "description", content: "Compare SmartRide SUVs, sedans, and sports cars with clear daily rates." },{ property: "og:title", content: "Browse Rental Cars — SmartRide" },{ property: "og:description", content: "Find the right rental car for your next journey." },{ property: "og:type", content: "website" },{ name: "twitter:card", content: "summary_large_image" }] }), component: CarsPage,
});

function CarsPage() {
  const { location } = Route.useSearch(); const [category, setCategory] = useState("All"); const [maxPrice, setMaxPrice] = useState(180); const [query, setQuery] = useState("");
  const filtered = useMemo(() => cars.filter(c => (category === "All" || c.category === category) && c.price <= maxPrice && c.name.toLowerCase().includes(query.toLowerCase())), [category,maxPrice,query]);
  return <><SiteHeader /><main className="min-h-screen bg-muted"><section className="bg-primary py-14 text-primary-foreground"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="font-bold text-highlight">SMARTER CHOICES, BETTER DRIVES</p><h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">Find your ideal car</h1><p className="mt-4 text-primary-foreground/70">{location ? `Available near ${location}` : "A carefully selected fleet for every kind of journey."}</p></div></section>
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[260px_1fr] lg:px-8"><aside className="h-fit rounded-2xl border border-border bg-card p-5 shadow-sm"><h2 className="flex items-center gap-2 font-bold"><SlidersHorizontal className="size-5 text-accent" /> Filters</h2><div className="mt-6"><Label htmlFor="car-search">Search</Label><div className="relative mt-2"><Search className="absolute left-3 top-3 size-4 text-muted-foreground" /><Input id="car-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Car name" className="pl-9" /></div></div><div className="mt-6"><Label>Vehicle type</Label><div className="mt-3 grid grid-cols-2 gap-2">{["All","SUV","Sedan","Sports"].map(c=><Button key={c} variant={category===c?"navy":"outline"} size="sm" onClick={()=>setCategory(c)}>{c}</Button>)}</div></div><div className="mt-7"><div className="flex justify-between"><Label htmlFor="price">Daily price</Label><span className="text-sm font-bold text-accent">Up to ${maxPrice}</span></div><input id="price" type="range" min="80" max="180" value={maxPrice} onChange={e=>setMaxPrice(Number(e.target.value))} className="mt-4 w-full accent-accent" /></div></aside>
    <div><div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4"><p className="min-w-0 text-sm text-muted-foreground"><strong className="text-foreground">{filtered.length}</strong> cars available</p><select aria-label="Sort cars" className="shrink-0 rounded-xl border border-input bg-background px-3 py-2 text-sm"><option>Recommended</option><option>Price: low to high</option></select></div><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map(car=><CarCard key={car.id} car={car} />)}</div>{!filtered.length && <div className="py-20 text-center text-muted-foreground">No cars match those filters.</div>}</div></section></main><SiteFooter /></>;
}