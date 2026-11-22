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
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex flex-col items-center gap-3 group cursor-pointer text-center"
    >
      <div className="size-16 sm:size-18 md:size-20 lg:size-22 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
        <Icon className="size-7 md:size-8 text-primary-foreground" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <p className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
          {label}
        </p>
        {sublabel && (
          <p className="text-xs md:text-sm text-foreground/60 break-all max-w-[150px]">
            {sublabel}
          </p>
        )}
      </div>
    </a>
  );
};

const ContactBar = ({ tag, title, options, textAnimation }: ContactBarProps) => {
  return (
    <section aria-label="Contact section" className="py-20">
      <div className="w-full max-w-6xl px-6 mx-auto">
        <AppearOnScroll variant="slide-up">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 card rounded p-6 md:p-10">
            <div className="flex flex-col gap-2 lg:max-w-1/2 text-center lg:text-left items-center lg:items-start">
              <AppearOnScroll variant="fade">
                <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                  <p>{tag}</p>
                </div>
              </AppearOnScroll>
              <WordByWordReveal
                text={title}
                variant={textAnimation}
                tag="h2"
                className="text-4xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-balance"
              />
            </div>
            <div className="flex items-center justify-center flex-wrap gap-6 md:gap-8 lg:gap-10">
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
