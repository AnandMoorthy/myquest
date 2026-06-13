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
  /** Position within the hero map (percent) */
  x: number;
  y: number;
  /** Optional override for quest info card position */
  cardPlacement?: "above" | "below" | "left" | "right";
  /** Hide below this breakpoint when the pin would overlap hero copy */
  showFrom?: "md" | "lg";
};

/**
 * Hero safe zones (desktop):
 * - Left column (~0–52% x): headline + store buttons → pins only top-left (y < 30%)
 * - Center corridor (~52–70% x): open map between copy and right edge
 * - Right column (~70–94% x): primary pin field
 * - Avoid y > 68% on x < 50% (store button row)
 */
export const questPins: QuestPin[] = [
  {
    id: "1",
    emoji: "🎸",
    title: "Guitar Jam",
    duration: "1 hr",
    distance: "0.6 km",
    joined: 5,
    x: 8,
    y: 26,
    cardPlacement: "right",
    showFrom: "md",
  },
  {
    id: "2",
    emoji: "☕",
    title: "Coffee Walk",
    duration: "45 min",
    distance: "0.3 km",
    joined: 8,
    x: 86,
    y: 26,
    cardPlacement: "below",
  },
  {
    id: "3",
    emoji: "🏸",
    title: "Badminton Match",
    duration: "1.5 hr",
    distance: "1.2 km",
    joined: 4,
    x: 62,
    y: 44,
    cardPlacement: "below",
    showFrom: "lg",
  },
  {
    id: "4",
    emoji: "🎬",
    title: "Movie Night",
    duration: "3 hr",
    distance: "2.1 km",
    joined: 12,
    x: 88,
    y: 52,
    cardPlacement: "left",
  },
  {
    id: "5",
    emoji: "🚴",
    title: "Morning Ride",
    duration: "2 hr",
    distance: "0.8 km",
    joined: 6,
    x: 72,
    y: 66,
    cardPlacement: "above",
  },
  {
    id: "6",
    emoji: "🎹",
    title: "Piano Meetup",
    duration: "1 hr",
    distance: "1.5 km",
    joined: 3,
    x: 90,
    y: 70,
    cardPlacement: "left",
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
};

export const features: Feature[] = [
  {
    icon: Compass,
    title: "Discover nearby quests",
    description: "Browse live activities on the map around you.",
    highlight: true,
  },
  {
    icon: MapPin,
    title: "Host your own activities",
    description: "Create a quest in minutes and invite people nearby.",
  },
  {
    icon: Radio,
    title: "Real time participation",
    description: "See who's joining and when a quest starts.",
    highlight: true,
  },
  {
    icon: Sparkles,
    title: "Micro social experiences",
    description: "Small groups built for real connection.",
  },
  {
    icon: Users,
    title: "Lightweight real-world live meetups",
    description: "Drop a pin, set a time, and meet up.",
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
      "Browse nearby pins on the map and find experiences that match your mood, from sports to study sessions.",
    icon: Search,
  },
  {
    step: 2,
    title: "Join or Host",
    description:
      "Tap to join an existing quest or create your own in under two minutes and invite the community.",
    icon: UserPlus,
  },
  {
    step: 3,
    title: "Meet & Explore",
    description:
      "Show up, connect in person, and turn real-world live moments into memories you'll actually remember.",
    icon: Handshake,
  },
];

export type QuestCategory = {
  emoji: string;
  title: string;
  description: string;
};

export const questCategories: QuestCategory[] = [
  {
    emoji: "☕",
    title: "Coffee & walks",
    description: "Casual chats and neighborhood strolls",
  },
  {
    emoji: "🏸",
    title: "Sports & fitness",
    description: "Pick-up games, runs, and gym buddies",
  },
  {
    emoji: "🎸",
    title: "Music & jam sessions",
    description: "Open mics, jam nights, and instrument swaps",
  },
  {
    emoji: "🎬",
    title: "Movies & watch parties",
    description: "Theatre trips and living-room screenings",
  },
  {
    emoji: "📚",
    title: "Study & coworking",
    description: "Focus sessions at cafés or libraries",
  },
  {
    emoji: "🍳",
    title: "Food & cooking",
    description: "Potlucks, tastings, and recipe swaps",
  },
  {
    emoji: "🚴",
    title: "Outdoor adventures",
    description: "Rides, hikes, and sunset viewings",
  },
  {
    emoji: "🎨",
    title: "Arts & creativity",
    description: "Sketch walks, gallery visits, and crafts",
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
  {
    id: "4",
    name: "Arjun",
    action: "hosted",
    quest: "Morning Yoga",
    time: "12m ago",
    avatar: "Ar",
  },
  {
    id: "5",
    name: "Meera",
    action: "joined",
    quest: "Street Food Walk",
    time: "15m ago",
    avatar: "M",
  },
  {
    id: "6",
    name: "Vikram",
    action: "joined",
    quest: "Guitar Jam",
    count: 5,
    time: "18m ago",
    avatar: "V",
  },
];

export function getActivityChips(feed: FeedItem[], limit = 4): string[] {
  return feed.slice(0, limit).map((item) => {
    const verb = item.action === "hosted" ? "hosted" : "joined";
    const suffix = item.count ? ` · ${item.count} joined` : "";
    return `${item.name} ${verb} ${item.quest}${suffix}`;
  });
}

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "cost",
    question: "Is MyQuest free to use?",
    answer:
      "Yes. Browsing quests, joining activities, and hosting your own meetups are free during early access. We may introduce optional premium features later, but real-world live local connection will always be at the core.",
  },
  {
    id: "safety",
    question: "How do you keep meetups safe?",
    answer:
      "Quests happen in public places by default, and you can see who's joining before you go. We're building verification, reporting tools, and community guidelines as we grow. Always meet in well-lit, public locations and trust your instincts.",
  },
  {
    id: "host",
    question: "How do I host a quest?",
    answer:
      "Tap Host, drop a pin on the map, set a time and capacity, and publish. People nearby get notified and can join in one tap. Most hosts are live in under two minutes.",
  },
  {
    id: "cities",
    question: "Which cities is MyQuest available in?",
    answer:
      "We're rolling out city by city during early access. Join the waitlist to get notified when we launch in your area and to help us prioritize your city.",
  },
  {
    id: "privacy",
    question: "What data do you collect?",
    answer:
      "We use your location only to show nearby quests, not to track you in the background. Profile details are minimal by design. Full privacy policy will be published before public launch.",
  },
  {
    id: "age",
    question: "Is there a minimum age?",
    answer:
      "You must be 18 or older to use MyQuest. Some quests may set additional requirements in their description (e.g. 21+ for certain venues).",
  },
  {
    id: "cancel",
    question: "What if I need to cancel?",
    answer:
      "You can leave a quest anytime before it starts. Hosts can cancel or reschedule with one tap, and participants get notified immediately.",
  },
  {
    id: "group-size",
    question: "How many people can join a quest?",
    answer:
      "Hosts set the cap, usually 4 to 12 people for micro experiences. Smaller groups mean better conversations and less awkwardness when you arrive.",
  },
];

export const trustBullets = [
  "Free to join during early access",
  "Local quests only. No random DMs",
  "Host a quest in under 2 minutes",
];

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#howitworks" },
  { label: "FAQ", href: "#faq" },
];
