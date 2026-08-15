import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Logo } from "@/components/ui/Logo";
import { withBasePath } from "@/lib/basePath";

const CONTACT_EMAIL = "hello@myquest.live";
const LAST_UPDATED = "15 August 2026";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/70">
        {children}
      </div>
    </section>
  );
}

export function TermsOfUse() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="relative flex flex-1 flex-col items-center px-6 py-16 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          <div className="h-80 w-80 rounded-full bg-primary/15 blur-[100px] animate-glow-pulse" />
          <div className="absolute h-56 w-56 rounded-full bg-orange/10 blur-[80px] animate-glow-pulse" />
        </div>

        <div className="relative w-full max-w-3xl">
          <div className="mb-10 flex justify-center">
            <Logo href={withBasePath("/")} priority />
          </div>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-gradient">Terms of Use</span>
            </h1>
            <p className="mt-3 text-sm text-foreground/50">
              Last updated: {LAST_UPDATED}
            </p>

            <div className="mt-8 space-y-8">
              <p className="text-sm leading-relaxed text-foreground/70">
                These terms apply when you use MyQuest: the website at{" "}
                <a
                  href={withBasePath("/")}
                  className="text-accent underline-offset-2 hover:underline"
                >
                  myquest.live
                </a>
                , the waitlist, and the MyQuest app. By using MyQuest, you
                agree to these terms. If you do not agree, please do not use
                the service.
              </p>

              <Section id="who-we-are" title="1. Who we are">
                <p>
                  MyQuest is a map for nearby activities (quests) that you can
                  discover, join, or host in the real world. Questions about
                  these terms:{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </Section>

              <Section id="eligibility" title="2. Who can use MyQuest">
                <p>
                  You must be 18 or older. Some quests may ask for a higher
                  age in their description (for example, 21+ at certain
                  venues). You are responsible for meeting any extra
                  requirements a host lists.
                </p>
              </Section>

              <Section id="waitlist" title="3. Waitlist">
                <p>
                  Joining the waitlist means we may email you when MyQuest
                  launches or reaches your area. It is not a guaranteed invite,
                  a reserved city, or an account. We roll out city by city
                  during early access.
                </p>
              </Section>

              <Section id="accounts" title="4. Accounts">
                <p>
                  You need an account to use the app. Keep your login details
                  safe, and use an email you control. You are responsible for
                  activity on your account. Tell us if you think someone else
                  is using it.
                </p>
                <p>
                  We may suspend or close an account that breaks these terms,
                  harms other people, or puts the service at risk.
                </p>
              </Section>

              <Section id="quests" title="5. Hosting and joining quests">
                <p>
                  A quest is a real-world meetup that someone hosts on the
                  map. Hosts set the place, time, group size (usually 4 to 12
                  people), and description. People nearby can join if there is
                  space.
                </p>
                <p>
                  If you join, you can leave up to 30 minutes before the quest
                  starts. After that, please show up or let the host know if
                  you cannot. Hosts can cancel or reschedule, and everyone who
                  joined is notified.
                </p>
                <p>
                  Joining a quest is a commitment to other people. Do not
                  create fake quests, join without intending to go, or use
                  MyQuest to spam or harass anyone.
                </p>
              </Section>

              <Section id="safety" title="6. Real-world meetups">
                <p>
                  MyQuest helps people find each other. We do not run the
                  meetups, and we are not a party to them. You decide whether
                  to host, join, or walk away.
                </p>
                <p>When you meet in person:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Choose well-lit public places by default, and trust your
                    instincts
                  </li>
                  <li>You can see who is joining before you go</li>
                  <li>
                    You are responsible for your own safety and for how you
                    treat others
                  </li>
                </ul>
                <p>
                  We are building reporting tools and community guidelines as
                  we grow. If something feels wrong, leave and contact us at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </Section>

              <Section id="conduct" title="7. What is not allowed">
                <p>Do not use MyQuest to:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Break the law or encourage others to</li>
                  <li>Harass, threaten, or impersonate anyone</li>
                  <li>
                    Post sexual, violent, or otherwise harmful content, or
                    involve anyone under 18
                  </li>
                  <li>
                    Scrape, spam, or try to break into the service
                  </li>
                  <li>
                    Use the map or people’s details for anything other than
                    joining or hosting a quest in good faith
                  </li>
                </ul>
              </Section>

              <Section id="content" title="8. Your content">
                <p>
                  You keep ownership of what you post (quest titles,
                  descriptions, profile details). You give us permission to
                  show that content on MyQuest so the product can work: other
                  people need to see a quest in order to join it.
                </p>
                <p>
                  Do not post content you do not have the right to share. We
                  may remove content that breaks these terms.
                </p>
              </Section>

              <Section id="early-access" title="9. Early access and features">
                <p>
                  Browsing, joining, and hosting are free during early access.
                  Features may change, and we may add optional paid features
                  later. We will say so clearly if we do.
                </p>
                <p>
                  The app may be unavailable at times while we improve it. We
                  do not promise that MyQuest will be in every city, or that
                  a particular quest will happen as planned.
                </p>
              </Section>

              <Section id="disclaimer" title="10. Our role and limits">
                <p>
                  MyQuest is provided as is. To the extent the law allows, we
                  are not liable for what happens at a meetup, for other
                  people’s behavior, or for quests that are cancelled, moved,
                  or never take place.
                </p>
                <p>
                  If a court finds that we are liable anyway, our
                  responsibility is limited to the greater of the amount you
                  paid us in the last 12 months (if any) or a small nominal
                  amount. Some places do not allow these limits, so they may
                  not apply to you.
                </p>
              </Section>

              <Section id="privacy" title="11. Privacy">
                <p>
                  How we collect and use information is explained in our{" "}
                  <a
                    href={withBasePath("/privacy")}
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </Section>

              <Section id="changes" title="12. Changes">
                <p>
                  We may update these terms as MyQuest grows. We will change
                  the “Last updated” date above. If a change is significant,
                  we will try to let you know. Continuing to use MyQuest after
                  an update means you accept the new terms.
                </p>
              </Section>

              <Section id="contact" title="13. Contact">
                <p>
                  Questions about these terms:{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </Section>
            </div>
          </article>

          <p className="mt-8 text-center">
            <a
              href={withBasePath("/")}
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Back to homepage
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
