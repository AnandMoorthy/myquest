import type { Metadata } from "next";
import { TermsOfUse } from "@/components/pages/TermsOfUse";

export const metadata: Metadata = {
  title: "Terms of Use | MyQuest",
  description:
    "The terms that apply when you use MyQuest to join the waitlist, create an account, or discover and host nearby quests.",
};

export default function TermsPage() {
  return <TermsOfUse />;
}
