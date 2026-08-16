import type { ReactNode } from "react";
import {
  Bell,
  MapPin,
  MessageCircle,
  Navigation,
  Users,
} from "lucide-react";
import { MapGrid, MapPattern } from "@/components/map/MapPattern";
import type { AppScreenshotId } from "@/data/mockData";

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pb-1 pt-8 text-[10px] font-medium text-foreground/70">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-3.5 rounded-[1px] bg-foreground/70" />
        <span className="h-2 w-4 rounded-sm border border-foreground/70">
          <span className="ml-px mt-px block h-1 w-2.5 rounded-[1px] bg-emerald-400" />
        </span>
      </span>
    </div>
  );
}

function MapPlaceholder() {
  const pins = [
    { emoji: "☕", x: "28%", y: "32%" },
    { emoji: "🎸", x: "68%", y: "28%" },
    { emoji: "🏸", x: "52%", y: "48%" },
    { emoji: "🚴", x: "74%", y: "58%" },
  ];

  return (
    <div className="relative flex h-full flex-col bg-background">
      <div className="absolute inset-0">
        <MapGrid className="absolute inset-0 opacity-[0.12]" />
        <MapPattern className="absolute inset-0 h-full w-full text-accent opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>
      <StatusBar />
      <div className="relative z-10 mx-3 mt-1 rounded-xl border border-white/10 bg-white/8 px-3 py-2 backdrop-blur-md">
        <p className="text-[10px] text-foreground/50">Near you</p>
        <p className="text-xs font-semibold text-foreground">Indiranagar</p>
      </div>
      {pins.map((pin) => (
        <div
          key={pin.emoji}
          className="absolute z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/40 bg-primary/25 text-sm shadow-lg shadow-primary/20"
          style={{ left: pin.x, top: pin.y }}
        >
          {pin.emoji}
        </div>
      ))}
      <div className="absolute inset-x-2 bottom-3 z-10 rounded-2xl border border-white/10 bg-[#12141c]/95 p-3 shadow-xl backdrop-blur-md">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/20" />
        <p className="text-[10px] font-medium uppercase tracking-wider text-accent">
          Nearby
        </p>
        <p className="mt-1 text-sm font-semibold text-foreground">Coffee Walk</p>
        <p className="mt-0.5 text-[11px] text-foreground/55">
          0.3 km · 8 joined · starts in 20 min
        </p>
      </div>
    </div>
  );
}

function QuestDetailsPlaceholder() {
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="relative h-[38%] overflow-hidden bg-gradient-to-br from-primary/40 via-primary/15 to-orange/20">
        <StatusBar />
        <div className="absolute inset-0 flex items-center justify-center text-5xl">
          ☕
        </div>
      </div>
      <div className="flex flex-1 flex-col px-4 pt-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-orange">
          Coffee & walks
        </p>
        <h3 className="mt-1 text-lg font-bold leading-tight text-foreground">
          Coffee Walk
        </h3>
        <div className="mt-3 space-y-2 text-[11px] text-foreground/65">
          <p className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            Third Wave, Indiranagar
          </p>
          <p className="flex items-center gap-2">
            <Navigation className="h-3.5 w-3.5 text-accent" />
            Today · 5:30 PM · 45 min
          </p>
          <p className="flex items-center gap-2">
            <Users className="h-3.5 w-3.5 text-accent" />
            8 of 12 joined
          </p>
        </div>
        <div className="mt-4 flex -space-x-2">
          {["A", "R", "P", "M"].map((initial) => (
            <span
              key={initial}
              className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-primary/30 text-[10px] font-semibold text-accent"
            >
              {initial}
            </span>
          ))}
        </div>
        <div className="mt-auto mb-6 rounded-xl bg-primary py-2.5 text-center text-xs font-semibold text-white shadow-lg shadow-primary/30">
          Join quest
        </div>
      </div>
    </div>
  );
}

function ChatPlaceholder() {
  const messages = [
    { fromMe: false, text: "Anyone at the cafe yet?" },
    { fromMe: true, text: "On my way — 5 mins!" },
    { fromMe: false, text: "Grabbed a table by the window." },
    { fromMe: true, text: "Perfect, see you there ☕" },
  ];

  return (
    <div className="flex h-full flex-col bg-background">
      <StatusBar />
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2">
        <MessageCircle className="h-4 w-4 text-accent" />
        <div>
          <p className="text-xs font-semibold text-foreground">Coffee Walk</p>
          <p className="text-[10px] text-foreground/45">4 in chat</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-end gap-2 px-3 py-3">
        {messages.map((message) => (
          <div
            key={message.text}
            className={`max-w-[78%] rounded-2xl px-3 py-2 text-[11px] leading-snug ${
              message.fromMe
                ? "ml-auto rounded-br-md bg-primary text-white"
                : "rounded-bl-md bg-white/8 text-foreground/85"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="mb-5 mx-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-foreground/40">
        Message the group…
      </div>
    </div>
  );
}

function NotificationsPlaceholder() {
  const items = [
    {
      icon: Bell,
      title: "Guitar Jam nearby",
      body: "Starts in 20 min · 0.6 km",
      time: "now",
      accent: true,
    },
    {
      icon: Users,
      title: "Ananya hosted a quest",
      body: "Coffee Meetup · Indiranagar",
      time: "5m",
      accent: false,
    },
    {
      icon: MapPin,
      title: "Rahul joined your quest",
      body: "Morning Ride now has 6 people",
      time: "12m",
      accent: false,
    },
    {
      icon: Bell,
      title: "New match for you",
      body: "Movie Night · 2.1 km away",
      time: "1h",
      accent: false,
    },
  ];

  return (
    <div className="flex h-full flex-col bg-background">
      <StatusBar />
      <div className="px-4 pb-2 pt-1">
        <h3 className="text-base font-bold text-foreground">Notifications</h3>
      </div>
      <div className="flex-1 space-y-1 px-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex gap-2.5 rounded-xl px-2 py-2.5"
            >
              <div
                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  item.accent
                    ? "bg-orange/20 text-orange"
                    : "bg-primary/15 text-accent"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="text-[10px] text-foreground/50">{item.body}</p>
              </div>
              <span className="shrink-0 text-[10px] text-foreground/35">
                {item.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const placeholders: Record<AppScreenshotId, () => ReactNode> = {
  map: MapPlaceholder,
  "quest-details": QuestDetailsPlaceholder,
  chat: ChatPlaceholder,
  notifications: NotificationsPlaceholder,
};

export function ScreenshotPlaceholder({ id }: { id: AppScreenshotId }) {
  const Placeholder = placeholders[id];
  return <Placeholder />;
}
