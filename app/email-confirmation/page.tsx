import type { Metadata } from "next";
import { EmailConfirmation } from "@/components/pages/EmailConfirmation";

export const metadata: Metadata = {
  title: "Email confirmed | MyQuest",
  description:
    "Your MyQuest account email has been verified. Sign in to the app to start discovering quests near you.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EmailConfirmationPage() {
  return <EmailConfirmation />;
}
