import {
  Compass,
  Handshake,
  MapPin,
  Radio,
  Search,
  Sparkles,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";

export type QuestPin = {
  id: string;
  emoji: string;
  title: string;
  duration: string;
  distance: string;
  joined: number;
  x: number;
  y: number;
};

export const questPins: QuestPin[] = [
  {
    id: "1",
    emoji: "🎸",
    title: "Guitar Jam",
    duration: "1 hr",
    distance: "0.6 km",
    joined: 5,
    x: 18,
    y: 28,
  },
  {
    id: "2",
    emoji: "☕",
    title: "Coffee Walk",
    duration: "45 min",
    distance: "0.3 km",
    joined: 8,
    x: 72,
    y: 22,
  },
  {
    id: "3",
    emoji: "🏸",
    title: "Badminton Match",
    duration: "1.5 hr",
    distance: "1.2 km",
    joined: 4,
    x: 55,
    y: 55,
  },
  {
    id: "4",
    emoji: "🎬",
    title: "Movie Night",
    duration: "3 hr",
    distance: "2.1 km",
    joined: 12,
    x: 82,
    y: 48,
  },
  {
    id: "5",
    emoji: "🚴",
    title: "Morning Ride",
    duration: "2 hr",
    distance: "0.8 km",
    joined: 6,
    x: 32,
    y: 68,
  },
  {
    id: "6",
    emoji: "🎹",
    title: "Piano Meetup",
    duration: "1 hr",
    distance: "1.5 km",
    joined: 3,
    x: 65,
    y: 78,
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Compass,
    title: "Discover nearby quests",
    description:
      "Find spontaneous micro activities happening right around you, from coffee walks to sunset rides.",
  },
  {
    icon: MapPin,
    title: "Host your own activities",
    description:
      "Create a quest in minutes and invite people nearby to join your real world experience.",
  },
  {
    icon: Radio,
    title: "Real time participation",
    description:
      "See who's joining live, chat with participants, and know exactly when a quest is starting.",
  },
  {
    icon: Sparkles,
    title: "Micro social experiences",
    description:
      "Small group adventures designed for genuine connection, not endless scrolling.",
  },
  {
    icon: Users,
    title: "Lightweight spontaneous meetups",
    description:
      "No heavy planning. Drop a pin, set a time, and meet people who share your vibe.",
  },
];

export type HowItWorksStep = {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: "Discover a Quest",
    description:
      "Browse nearby pins on the map and find experiences that match your mood.",
    icon: Search,
  },
  {
    step: 2,
    title: "Join or Host",
    description:
      "Tap to join an existing quest or create your own and invite the community.",
    icon: UserPlus,
  },
  {
    step: 3,
    title: "Meet & Explore",
    description:
      "Show up, connect in person, and turn spontaneous moments into memories.",
    icon: Handshake,
  },
];

export type FeedItem = {
  id: string;
  name: string;
  action: "joined" | "hosted";
  quest: string;
  count?: number;
  time: string;
  avatar: string;
};

/** Reserved for Community section (not rendered on landing page yet) */
export const communityFeed: FeedItem[] = [
  {
    id: "1",
    name: "Rahul",
    action: "joined",
    quest: "Sunset Ride",
    time: "2m ago",
    avatar: "R",
  },
  {
    id: "2",
    name: "Ananya",
    action: "hosted",
    quest: "Coffee Meetup",
    time: "5m ago",
    avatar: "A",
  },
  {
    id: "3",
    name: "Priya",
    action: "joined",
    quest: "Board Game Night",
    count: 12,
    time: "8m ago",
    avatar: "P",
  },
];

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#howitworks" },
];
