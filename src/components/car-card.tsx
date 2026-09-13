import { Link } from "@tanstack/react-router";
import { Fuel, Gauge, Star, Users } from "lucide-react";
import type { Car } from "@/lib/cars";
import { Button } from "@/components/ui/button";

export function CarCard({ car }: { car: Car }) {
  return <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="relative aspect-[16/10] overflow-hidden bg-muted"><img src={car.image} alt={`${car.name} rental car`} loading="lazy" width={1000} height={650} className="h-full w-full object-cover transition duration-500 hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">{car.category}</span></div>
    <div className="p-5"><div className="flex items-start justify-between gap-3"><div><h3 className="text-lg font-bold">{car.name}</h3><div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground"><Star className="size-4 fill-highlight text-highlight" /> {car.rating} <span>({car.reviews})</span></div></div><p className="shrink-0 font-display text-xl font-bold text-accent">${car.price}<span className="font-sans text-xs font-medium text-muted-foreground">/day</span></p></div>
      <div className="my-5 grid grid-cols-3 gap-2 border-y border-border py-4 text-xs text-muted-foreground"><span className="flex items-center gap-1"><Users className="size-4" /> {car.seats} seats</span><span className="flex items-center gap-1"><Gauge className="size-4" /> Auto</span><span className="flex items-center gap-1"><Fuel className="size-4" /> {car.fuel}</span></div>
      <Button variant="navy" className="w-full" asChild><Link to="/cars/$carId" params={{ carId: car.id }}>View details</Link></Button>
    </div>
  </article>;
}