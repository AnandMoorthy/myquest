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

export function PrivacyPolicy() {
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
              <span className="text-gradient">Privacy Policy</span>
            </h1>
            <p className="mt-3 text-sm text-foreground/50">
              Last updated: {LAST_UPDATED}
            </p>

            <div className="mt-8 space-y-8">
              <p className="text-sm leading-relaxed text-foreground/70">
                MyQuest (“we”, “us”) is the map for nearby micro activities:
                quests you can discover, join, or host in the real world. This
                policy explains what we collect on{" "}
                <a
                  href={withBasePath("/")}
                  className="text-accent underline-offset-2 hover:underline"
                >
                  myquest.live
                </a>{" "}
                and in the MyQuest app, how we use it, and the choices you have.
              </p>

              <Section id="who-we-are" title="1. Who we are">
                <p>
                  MyQuest is operated from the website myquest.live. For
                  privacy questions, access requests, or deletion requests,
                  email{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </Section>

              <Section id="scope" title="2. What this policy covers">
                <p>This policy covers:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Our website, including the waitlist and marketing pages
                  </li>
                  <li>
                    The MyQuest app (early access), including accounts, the
                    map, quests, and notifications
                  </li>
                </ul>
                <p>
                  The decorative map on the website does not read your device
                  location. Location is only requested in the app, when you
                  use features that need it.
                </p>
              </Section>

              <Section id="collect" title="3. Information we collect">
                <p className="font-medium text-foreground/80">Website waitlist</p>
                <p>
                  If you join the waitlist, we collect your email address and
                  an optional signup source (for example, that you signed up
                  from the landing page). We store a short-lived, hashed
                  record of your IP address and email so we can limit abuse
                  and spam. We do not store your raw IP address.
                </p>
                <p className="font-medium text-foreground/80">App accounts</p>
                <p>
                  When you create an account, we collect your email address.
                  Your password is handled by our authentication provider and
                  is stored hashed, so we cannot see it. We may also store a
                  minimal profile (such as a display name) that you choose to
                  add.
                </p>
                <p className="font-medium text-foreground/80">Location</p>
                <p>
                  In the app, we use your location to show nearby quests and
                  to send interest-based alerts when a matching quest is
                  hosted around you. We do not track your location in the
                  background.
                </p>
                <p className="font-medium text-foreground/80">Quests and activity</p>
                <p>
                  If you host a quest, we store what you publish: a map pin,
                  time, capacity, and description. If you join a quest, we
                  store that you are participating so hosts and other joiners
                  can see who is going.
                </p>
                <p className="font-medium text-foreground/80">
                  Device and usage
                </p>
                <p>
                  We may collect technical information needed to run the
                  product, such as app version or basic device type, to keep
                  things working and fix bugs. We do not use advertising
                  identifiers or analytics SDKs on the website today.
                </p>
              </Section>

              <Section id="use" title="4. How we use information">
                <p>We use this information to:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Notify you when MyQuest launches or becomes available in
                    your area
                  </li>
                  <li>Create and secure your account</li>
                  <li>
                    Show nearby quests, let you join or host, and notify you
                    about matching activity
                  </li>
                  <li>Protect the service from spam and abuse</li>
                  <li>Respond to your requests and improve the product</li>
                </ul>
                <p>We do not sell your personal information.</p>
              </Section>

              <Section id="location" title="5. Location">
                <p>
                  Location is core to MyQuest: quests are nearby, real-world
                  meetups. We use it only to power those features: browsing
                  the map, dropping a pin when you host, and alerting you to
                  matching quests nearby.
                </p>
                <p>
                  You can deny or later revoke location permission in your
                  device settings. Without it, nearby discovery and alerts
                  will not work as intended. We do not continuously track you
                  in the background.
                </p>
              </Section>

              <Section id="sharing" title="6. How we share information">
                <p>
                  Other people on MyQuest can see information you make part
                  of a quest: that you hosted or joined, and the public
                  details of the meetup (place, time, who’s going). Profiles
                  are kept minimal by design.
                </p>
                <p>
                  We share data with service providers who help us operate
                  MyQuest, under instructions that limit how they use it:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Supabase: database, authentication, and waitlist
                    infrastructure
                  </li>
                  <li>GitHub Pages: hosting for this website</li>
                </ul>
                <p>
                  We may also disclose information if required by law, or to
                  protect people using MyQuest.
                </p>
              </Section>

              <Section id="cookies" title="7. Cookies and similar technologies">
                <p>
                  The website does not set advertising or analytics cookies,
                  and it does not use local storage to track you. The waitlist
                  form only sends the email you enter (plus a hidden field
                  used to catch bots).
                </p>
                <p>
                  The app uses session credentials so you stay signed in.
                  Those are for authentication, not advertising.
                </p>
              </Section>

              <Section id="retention" title="8. How long we keep information">
                <p>
                  Waitlist emails are kept until we have notified you about
                  launch, or until you ask us to delete them. Hashed
                  rate-limit records are removed automatically after a short
                  period (about 48 hours).
                </p>
                <p>
                  Account, profile, and quest data are kept while your
                  account is active. If you delete your account or ask us to
                  erase your data, we will delete or de-identify it unless we
                  need to keep something for legal or security reasons.
                </p>
              </Section>

              <Section id="rights" title="9. Your rights">
                <p>
                  Depending on where you live, you may have the right to
                  access, correct, or delete your personal information, or to
                  object to or restrict certain processing. To make a
                  request, email{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <p>
                  You can leave a quest up to 30 minutes before it starts, and you can stop
                  using the app or ask us to remove your waitlist email at
                  any time.
                </p>
              </Section>

              <Section id="children" title="10. Children">
                <p>
                  MyQuest is for people 18 and older. We do not knowingly
                  collect personal information from anyone under 18. If you
                  believe we have, please contact us and we will delete it.
                </p>
              </Section>

              <Section
                id="transfers"
                title="11. International transfers"
              >
                <p>
                  We use cloud providers that may process data in countries
                  other than yours. Those providers apply contractual and
                  technical safeguards. By using MyQuest, you understand that
                  your information may be processed outside your home
                  country.
                </p>
              </Section>

              <Section id="changes" title="12. Changes">
                <p>
                  We may update this policy as MyQuest grows (for example, if
                  we add optional premium features). We will change the “Last
                  updated” date above, and we will provide additional notice
                  if a change is material.
                </p>
              </Section>

              <Section id="contact" title="13. Contact">
                <p>
                  Questions about this policy or your data:{" "}
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
