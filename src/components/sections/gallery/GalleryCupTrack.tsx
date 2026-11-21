import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import HorizontalScrollSection from "@/components/animation/HorizontalScrollSection";
import JoesHeader from "@/components/kit/JoesHeader";
import { useImageReady, useKitMotion } from "@/components/kit/kitMotion";
import { MotionMedia } from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type GalleryItem = { title?: string; imageSrc: string; imageAlt?: string };

type GalleryCupTrackProps = {
  tag?: string;
  title?: string;
  items?: GalleryItem[];
  ariaLabel?: string;
  className?: string;
};

const TRAVEL = 0.14;
const SHIFT = (TRAVEL / (1 + 2 * TRAVEL)) * 100;
const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const px = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1000`;

const DEFAULT_ITEMS: GalleryItem[] = [
  { title: "Morning pour", imageSrc: px(1307698) },
  { title: "The bar", imageSrc: px(1449773) },
  { title: "Fresh roast", imageSrc: px(1695052) },
  { title: "Window seat", imageSrc: px(1855214) },
];

const SHAPES = [
  { frame: "mt-0", photo: "h-[min(50svh,32rem)] w-[min(37.5svh,24rem)]" },
  { frame: "mt-[9svh]", photo: "h-[min(38svh,25rem)] w-[min(38svh,25rem)]" },
  { frame: "mt-[3svh]", photo: "h-[min(44svh,29rem)] w-[min(35.2svh,23.2rem)]" },
];

const TILTS = [-2, 1.5, -1, 2];

const TrackCard = ({ item, index, drift, reduce, duration, ease }: { item: GalleryItem; index: number; drift: MotionValue<string>; reduce: boolean; duration: number; ease: [number, number, number, number] }) => {
  const shape = SHAPES[index % SHAPES.length];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0, margin: "0px 50% 0px 0px" });
  const ready = useImageReady(ref, inView);
  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 48, scale: 0.92, rotate: TILTS[index % TILTS.length] }}
      animate={inView && ready ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : undefined}
      transition={{ duration, ease, delay: (index % 3) * 0.06 }}
      className={cn("kit-card p-1 lg:p-2", shape.frame)}
    >
      <div className={cn("relative overflow-hidden rounded-[var(--radius-image)]", shape.photo)}>
        <MotionMedia
          src={item.imageSrc}
          alt={item.imageAlt ?? item.title ?? ""}
          loading="lazy"
          decoding="async"
          style={reduce ? undefined : { x: drift, left: `${-TRAVEL * 100}%`, width: `${(1 + 2 * TRAVEL) * 100}%` }}
          className="absolute inset-y-0 left-0 h-full w-full max-w-none object-cover will-change-transform"
        />
        {item.title && (
          <div className="kit-card absolute inset-x-1 bottom-1 rounded-[calc(var(--radius-image)-0.25rem)] px-3 py-1.5 text-center lg:inset-x-2 lg:bottom-2 lg:py-2">
            <p className="text-balance text-[length:var(--text-h3)] leading-[1.1] [font-family:var(--font-heading)] [overflow-wrap:anywhere]">{item.title}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const GalleryCupTrack = ({ tag = "Around the shop", title = "A few corners of the shop", items = DEFAULT_ITEMS, ariaLabel, className }: GalleryCupTrackProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = Boolean(useReducedMotion());
  const kit = useKitMotion();
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, (p) => `${-SHIFT + clamp01(p) * 2 * SHIFT}%`);

  return (
    <section data-scene aria-label={ariaLabel ?? title} className={cn("relative py-20 text-foreground", className)}>
      <div ref={wrapRef}>
        <HorizontalScrollSection
          compact
          progress={false}
          header={<JoesHeader tag={tag} title={title} />}
          trackClassName="items-start gap-[clamp(1rem,2.2vw,2rem)] md:gap-[clamp(1rem,2.2vw,2rem)] px-[calc((100vw-min(100vw-2*var(--gutter),var(--max-w)))/2)]"
        >
          {items.map((item, index) => (
            <TrackCard key={index} item={item} index={index} drift={drift} reduce={reduce} duration={kit.slow} ease={kit.ease} />
          ))}
        </HorizontalScrollSection>
      </div>
    </section>
  );
};

export default GalleryCupTrack;
