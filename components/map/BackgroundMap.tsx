import { MapGrid, MapPattern } from "./MapPattern";

export function BackgroundMap() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <MapGrid className="absolute inset-0 opacity-[0.07]" />

      <div className="absolute inset-0 animate-map-drift opacity-[0.18]">
        <MapPattern className="h-[120%] w-[120%] -translate-x-[10%] -translate-y-[10%] text-accent" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,transparent_50%,rgba(10,10,15,0.75)_100%)]" />
    </div>
  );
}
