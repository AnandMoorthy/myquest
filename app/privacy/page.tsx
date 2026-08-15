import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/pages/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | MyQuest",
  description:
    "How MyQuest collects, uses, and protects your information when you join the waitlist or use the app to discover and host nearby quests.",
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
