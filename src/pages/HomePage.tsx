import HeroBillboardBrandFloatingCards from "@/components/sections/hero/HeroBillboardBrandFloatingCards";
import GalleryCupTrack from "@/components/sections/gallery/GalleryCupTrack";
import FeaturesGridSplitLarge from "@/components/sections/features/FeaturesGridSplitLarge";
import FeaturesFilterGrid from "@/components/sections/features/FeaturesFilterGrid";
import MetricsCupCounters from "@/components/sections/metrics/MetricsCupCounters";
import FaqGlassRows from "@/components/sections/faq/FaqGlassRows";
import ContactBar from "@/components/sections/contact/ContactBar";
import AuroraBackground from "@/components/backgrounds/AuroraBackground";
import LoaderSwirl from "@/components/loaders/LoaderSwirl";
import { Mail, MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <AuroraBackground
        className="fixed"
      />

      <LoaderSwirl

      />

      <div id="hero" data-webild-section="HeroBillboardBrandFloatingCards" data-webild-section-id="HeroBillboardBrandFloatingCards-1" data-section="hero">
        <HeroBillboardBrandFloatingCards
          textAnimation="fade-blur"
          brand="Dolcea Chocolate"
          description="Handcrafted Belgian chocolate-coated fruits and nuts, custom made for your special celebrations and everyday moments."
          primaryButton={{
            text: "Our Collection",
            href: "#menu"
          }}
          secondaryButton={{
            text: "Our Process",
            href: "#gallery"
          }}
          videoSrc="https://videos.pexels.com/video-files/4458588/4458588-sd_960_506_24fps.mp4"
          floatingCards={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/handmade-chocolate-mediants-cookies-bites-candies-nuts-copyspace-top-view_114579-4839.jpg",
              name: "Berry Medley"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/chocolate-candies-nuts-sackcloth_176420-7430.jpg",
              name: "Nut Clusters"
            }
          ]}
        />
      </div>

      <div id="gallery" data-webild-section="GalleryCupTrack" data-webild-section-id="GalleryCupTrack-1" data-section="gallery" data-scene>
        <GalleryCupTrack
          tag="Our process"
          title="Belgian chocolate, picked fruit, real nuts"
          items={[
            {
              title: "Belgian cocoa",
              imageSrc: "https://img.b2bpic.net/free-photo/dark-white-milk-chocolate-pieces-top-view_2831-819.jpg",
              imageAlt: "Dark, white and milk chocolate pieces. Top view"
            },
            {
              title: "Hand tempering",
              imageSrc: "https://img.b2bpic.net/free-photo/view-hot-herbal-tea-soft-cake-with-fruits-chocolate-bars-mixed-color-table_140725-86518.jpg",
              imageAlt: "Above view of hot herbal tea soft cake with fruits chocolate bars on mixed color table"
            },
            {
              title: "Picked dried fruit",
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-different-kind-snacks-as-nuts-chips-napkin-white-wooden-surface-horizontal_176474-976.jpg",
              imageAlt: "Top view of different kind of snacks as nuts and chips on napkin on white wooden surface horizontal"
            },
            {
              title: "Roasted hazelnut",
              imageSrc: "https://img.b2bpic.net/free-photo/hazelnuts-concrete_114579-7920.jpg",
              imageAlt: "Hazelnuts on concrete"
            },
            {
              title: "Artisanal coating",
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-cake-slices-with-cookies-sweets-white-surface_140725-90753.jpg",
              imageAlt: "Top view cake slices with cookies and sweets on a white surface"
            },
            {
              title: "Selected walnuts",
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-tasty-gourmet-snack-table_23-2148405916.jpg",
              imageAlt: "Top view tasty gourmet snack on the table"
            },
            {
              title: "Fruit confections",
              imageSrc: "https://img.b2bpic.net/free-photo/side-close-up-view-dessert-appetizing-cake-with-strawberries-chocolate-grey-plate-bowls-with-strawberries-chocolate-cream-dark-background_140725-110422.jpg",
              imageAlt: "Side close-up view dessert appetizing cake with strawberries and chocolate on grey plate next to bowls with strawberries and chocolate cream on the dark background"
            },
            {
              title: "Small batch craft",
              imageSrc: "https://img.b2bpic.net/free-photo/spoon-with-peanuts-hazelnuts_23-2147803727.jpg",
              imageAlt: "Spoon with peanuts on hazelnuts"
            }
          ]}
        />
      </div>

      <div id="services" data-webild-section="FeaturesGridSplitLarge" data-webild-section-id="FeaturesGridSplitLarge-1" data-section="services">
        <FeaturesGridSplitLarge
          textAnimation="fade-blur"
          tag="The standard"
          title="Why every bite tastes precise"
          description="We source whole ingredients directly from orchards and temper classic Belgian cocoa daily."
          topItems={[
            {
              title: "Selected Orchards",
              description: "Sourced from grower partners for whole, plump fruit and crisp nut kernels.",
              imageSrc: "https://img.b2bpic.net/free-photo/wooden-plate-full-nuts-crackers-dried-apricots-marble-surface_114579-42785.jpg"
            },
            {
              title: "Belgian Cocoa",
              description: "Authentic Belgian chocolate blends formulated specifically for coating fruit and roasted nuts.",
              imageSrc: "https://img.b2bpic.net/free-photo/sweet-dessert-with-dark-chocolate_74190-7176.jpg"
            }
          ]}
          bottomItem={{
            title: "Hand-Finished Detail",
            description: "Finished individually with delicate gold leaf dust, roasted cocoa nibs, or crushed pralines.",
            imageSrc: "https://img.b2bpic.net/free-photo/chocolate-cookies-with-glass-tea-white-plate_114579-16055.jpg",
            primaryButton: {
              text: "Get in Touch",
              href: "#contact"
            }
          }}
        />
      </div>

      <div id="menu" data-webild-section="FeaturesFilterGrid" data-webild-section-id="FeaturesFilterGrid-1" data-section="menu">
        <FeaturesFilterGrid
          textAnimation="fade-blur"
          tag="Our Delicacies"
          title="Hand-Dipped Selections"
          description="Choose from our signature range of chocolate-coated fruits and nuts, made to order."
          categories={[
            "Coated Fruits",
            "Coated Nuts",
            "Mixed Boxes"
          ]}
          items={[
            {
              name: "Strawberry Dream",
              category: "Coated Fruits",
              imageSrc: "https://img.b2bpic.net/free-photo/side-view-popcorn-bowl-white-wooden-table-horizontal_176474-4209.jpg"
            },
            {
              name: "Golden Almonds",
              category: "Coated Nuts",
              imageSrc: "https://img.b2bpic.net/free-photo/handmade-chocolate-mediants-cookies-bites-candies-nuts-copyspace-top-view_114579-4843.jpg"
            },
            {
              name: "Raspberry Bliss",
              category: "Coated Fruits",
              imageSrc: "https://img.b2bpic.net/free-photo/dark-plate-with-blackberries-dark-table_23-2148340424.jpg"
            },
            {
              name: "Walnut Rich",
              category: "Coated Nuts",
              imageSrc: "https://img.b2bpic.net/free-photo/cooked-fresh-mushrooms-wooden-board-top-view_114579-66128.jpg"
            },
            {
              name: "Apricot Delight",
              category: "Coated Fruits",
              imageSrc: "https://img.b2bpic.net/free-photo/delectable-seed-bowl-marble-surface_114579-79661.jpg"
            },
            {
              name: "Pecan Luxury",
              category: "Coated Nuts",
              imageSrc: "https://img.b2bpic.net/free-photo/walnuts-walnut-kernels-wooden-bowl-high-quality-photo_114579-38016.jpg"
            },
            {
              name: "Hazelnut Crunch",
              category: "Coated Nuts",
              imageSrc: "https://img.b2bpic.net/free-photo/easter-sweets-board_23-2147748732.jpg"
            },
            {
              name: "Artisan Sampler",
              category: "Mixed Boxes",
              imageSrc: "https://img.b2bpic.net/free-photo/glass-jar-full-healthy-walnuts-gray-surface_114579-77110.jpg"
            },
            {
              name: "Dark Fig Delights",
              category: "Coated Fruits",
              imageSrc: "https://img.b2bpic.net/free-photo/dried-organic-fruits-assortment_114579-49248.jpg"
            },
            {
              name: "Pistachio Cluster",
              category: "Coated Nuts",
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-nougat-slices-with-nuts-dark-grey-space_140725-76351.jpg"
            }
          ]}
          allLabel="All"
        />
      </div>

      <div id="metrics" data-webild-section="MetricsCupCounters" data-webild-section-id="MetricsCupCounters-1" data-section="metrics">
        <MetricsCupCounters
          tag="In numbers"
          title="Crafted for celebrations"
          imageSrc="https://img.b2bpic.net/free-photo/wooden-plate-full-heart-shaped-jelly-candies-with-christmas-balls_114579-32001.jpg"
          imageAlt="A wooden plate full of heart shaped jelly candies with Christmas balls ."
          items={[
            {
              value: 10,
              suffix: "k+",
              label: "Boxes delivered"
            },
            {
              value: 25,
              label: "Artisanal awards"
            },
            {
              value: 50,
              suffix: "+",
              label: "Cities shipped to"
            },
            {
              value: 100,
              suffix: "%",
              label: "Belgian cocoa"
            }
          ]}
        />
      </div>

      <div id="faq" data-webild-section="FaqGlassRows" data-webild-section-id="FaqGlassRows-1" data-section="faq">
        <FaqGlassRows
          tag="Common details"
          title="Before you order"
          description="Clear answers regarding ingredients, temperature-controlled delivery, and proper storage."
          imageSrc="https://img.b2bpic.net/free-photo/dried-fruits-berries-wooden-platter_114579-26504.jpg"
          imageAlt="Dried fruits and berries on wooden platter."
          imageLabel="Belgian fruits"
          items={[
            {
              title: "Are your ingredients vegan and dairy-free?",
              description: "We offer selected vegan options made with our 70% dark Belgian chocolate line. All ingredients and allergens are clearly labeled on every custom box."
            },
            {
              title: "Do you ship across the country and internationally?",
              description: "Yes, we ship to over 50 cities using temperature-controlled insulated packaging with ice packs to ensure fresh, unblemished delivery."
            },
            {
              title: "How should I store handcrafted chocolate-coated fruits?",
              description: "Keep your confections in a cool, dry place between 60°F and 68°F away from direct sunlight. Avoid refrigeration to protect the glossy temper and crisp texture."
            },
            {
              title: "Can I customize chocolate boxes for gifts and events?",
              description: "Yes. You can select custom combinations of dried fruits, premium nuts, and Belgian chocolate finishes. Contact hello@dolceachocolate.com for personalized orders."
            },
            {
              title: "What is the shelf life of your chocolate-coated confections?",
              description: "Our dark chocolate dipped fruits and roasted nuts remain optimal for 3 to 4 weeks when stored properly in their sealed gift packaging."
            },
            {
              title: "Are your nuts roasted in-house before dipping?",
              description: "We source premium pecans, hazelnuts, and walnuts, then small-batch roast them in-house immediately before coating in authentic Belgian chocolate."
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactBar" data-webild-section-id="ContactBar-1" data-section="contact">
        <ContactBar
          textAnimation="fade-blur"
          tag="Custom gifts"
          title="Order your custom chocolate box"
          options={[
            {
              icon: Mail,
              label: "Email",
              href: "mailto:hello@dolceachocolate.com"
            },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              href: "https://wa.me/"
            }
          ]}
        />
      </div>
    </>
  );
}
