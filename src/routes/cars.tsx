import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/cars")({
  component: CarsLayout,
});

function CarsLayout() {
  return <Outlet />;
}