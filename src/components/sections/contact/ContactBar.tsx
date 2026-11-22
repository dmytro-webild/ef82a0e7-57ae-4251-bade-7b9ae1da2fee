import type { LucideIcon } from "lucide-react";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";

type ContactOption = {
  icon: LucideIcon;
  label: string;
  sublabel?: string;
  href: string;
};

type ContactBarProps = {
  tag: string;
  title: string;
  options: ContactOption[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
};

const ContactOptionButton = ({ icon: Icon, label, sublabel, href }: ContactOption) => {
  const ctaText = label.toLowerCase().includes("email")
    ? "Send Email →"
    : label.toLowerCase().includes("instagram")
      ? "Visit Instagram →"
      : "Contact Us →";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex flex-col items-center justify-between p-6 sm:p-8 md:p-10 rounded-[var(--radius-card)] bg-muted/60 hover:bg-muted/90 border border-border/80 hover:border-primary/60 transition-all duration-300 group cursor-pointer text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 w-full"
    >
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="size-20 sm:size-24 md:size-28 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform group-hover:scale-110 shadow-xl group-hover:bg-primary/95">
          <Icon className="size-10 sm:size-12 md:size-14 text-primary-foreground" strokeWidth={1.5} />
        </div>
        <div className="flex flex-col items-center gap-1.5 w-full">
          <p className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
            {label}
          </p>
          {sublabel && (
            <p className="text-sm md:text-base text-foreground/80 font-medium break-all max-w-[240px]">
              {sublabel}
            </p>
          )}
        </div>
      </div>
      <div className="mt-6 px-5 py-2.5 text-sm md:text-base font-semibold rounded-full bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        {ctaText}
      </div>
    </a>
  );
};

const ContactBar = ({ tag, title, options, textAnimation }: ContactBarProps) => {
  return (
    <section aria-label="Contact section" className="py-20 md:py-28">
      <div className="w-full max-w-6xl px-6 mx-auto">
        <AppearOnScroll variant="slide-up">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 card rounded-[var(--radius-card)] p-8 sm:p-10 md:p-14">
            <div className="flex flex-col gap-4 lg:max-w-md text-center lg:text-left items-center lg:items-start">
              <AppearOnScroll variant="fade">
                <div className="px-4 py-1.5 text-sm card rounded-full border border-border/60 w-fit">
                  <p className="font-medium tracking-wide">{tag}</p>
                </div>
              </AppearOnScroll>
              <WordByWordReveal
                text={title}
                variant={textAnimation}
                tag="h2"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-semibold text-balance"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full lg:w-auto flex-1 lg:max-w-2xl">
              {options.map((opt) => (
                <ContactOptionButton key={opt.label} {...opt} />
              ))}
            </div>
          </div>
        </AppearOnScroll>
      </div>
    </section>
  );
};

export default ContactBar;
