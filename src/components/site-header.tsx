import { Link, useNavigate } from "@tanstack/react-router";
import { CarFront, Menu, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data } = supabase.auth.onAuthStateChange((_event, session) => setUser(session?.user ?? null));
    return () => data.subscription.unsubscribe();
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    await navigate({ to: "/" });
  }

  const links = <>
    <Link to="/" activeProps={{ className: "text-accent" }} className="text-sm font-semibold hover:text-accent">Home</Link>
    <Link to="/cars" activeProps={{ className: "text-accent" }} className="text-sm font-semibold hover:text-accent">Browse cars</Link>
    <a href="mailto:hello@smartride.example" className="text-sm font-semibold hover:text-accent">Contact</a>
  </>;

  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
    <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
      <Link to="/" className="flex min-w-0 items-center gap-2 font-display text-xl font-extrabold text-primary">
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground"><CarFront className="size-5" /></span>
        <span className="truncate">Smart<span className="text-accent">Ride</span></span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex">{links}</nav>
      <div className="hidden items-center justify-end gap-3 md:flex">
        {user ? <><span className="max-w-40 truncate text-sm text-muted-foreground">{user.email}</span><Button variant="outline" onClick={signOut}>Sign out</Button></> : <><Button variant="ghost" asChild><Link to="/login"><UserRound /> Log in</Link></Button><Button variant="cta" asChild><Link to="/register">Create account</Link></Button></>}
      </div>
      <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <div className="border-t border-border bg-background px-5 py-5 md:hidden"><nav className="flex flex-col gap-5" onClick={() => setOpen(false)}>{links}<div className="flex gap-3 pt-2">{user ? <Button variant="outline" onClick={signOut}>Sign out</Button> : <><Button variant="outline" asChild><Link to="/login">Log in</Link></Button><Button variant="cta" asChild><Link to="/register">Register</Link></Button></>}</div></nav></div>}
  </header>;
}