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
          description="Handmade in Gold Coast, Australia. We craft luxury chocolate sticks and teddy bears using premium Australian ingredients and fine Belgian chocolate."
          primaryButton={{
            text: "Hand-Dipped Selections",
            href: "#menu"
          }}
          secondaryButton={{
            text: "Our Brand Story",
            href: "#services"
          }}
          videoSrc="https://videos.pexels.com/video-files/4458588/4458588-sd_960_506_24fps.mp4"
          floatingCards={[
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795313023436-slywe6pb.png?_wi=1",
              name: "Chocolate Sticks"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795314013510-94u99mqt.png?_wi=1",
              name: "Teddy Bears"
            }
          ]}
        />
      </div>

      <div id="gallery" data-webild-section="GalleryCupTrack" data-webild-section-id="GalleryCupTrack-1" data-section="gallery" data-scene>
        <GalleryCupTrack
          tag="Gold Coast Atelier"
          title="Handmade with Australian Ingredients & Belgian Chocolate"
          items={[
            {
              title: "Belgian chocolate",
              imageSrc: "https://img.b2bpic.net/free-photo/dark-white-milk-chocolate-pieces-top-view_2831-819.jpg",
              imageAlt: "Dark, white and milk Belgian chocolate pieces"
            },
            {
              title: "Australian fruits",
              imageSrc: "https://img.b2bpic.net/free-photo/side-close-up-view-dessert-appetizing-cake-with-strawberries-chocolate-grey-plate-bowls-with-strawberries-chocolate-cream-dark-background_140725-110422.jpg?_wi=1",
              imageAlt: "Fresh Australian strawberries and fruits"
            },
            {
              title: "Chocolate sticks",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795313023436-slywe6pb.png?_wi=2",
              imageAlt: "Luxury Belgian chocolate sticks topped with berries and nuts"
            },
            {
              title: "Chocolate teddy bears",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795314013510-94u99mqt.png?_wi=2",
              imageAlt: "Handcrafted Belgian chocolate teddy bears with gold accents"
            },
            {
              title: "Chocolate catering table",
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-tasty-gourmet-snack-table_23-2148405916.jpg?_wi=1",
              imageAlt: "Luxury chocolate catering table display"
            },
            {
              title: "Artisanal tempering",
              imageSrc: "https://img.b2bpic.net/free-photo/sweet-dessert-with-dark-chocolate_74190-7176.jpg?_wi=1",
              imageAlt: "Artisanal hand tempering of chocolate"
            },
            {
              title: "Gold Coast handmade",
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-cake-slices-with-cookies-sweets-white-surface_140725-90753.jpg?_wi=1",
              imageAlt: "Gold Coast handmade chocolate delicacies"
            }
          ]}
        />
      </div>

      <div id="services" data-webild-section="FeaturesGridSplitLarge" data-webild-section-id="FeaturesGridSplitLarge-1" data-section="services">
        <FeaturesGridSplitLarge
          textAnimation="fade-blur"
          tag="Brand Story"
          title="Handmade quality with Australian ingredients & Belgian chocolate"
          description="Based in Gold Coast, Australia, Dolcea Chocolate crafts artisanal confections by hand. We pair locally harvested Australian fresh fruits with rich Belgian chocolate."
          topItems={[
            {
              title: "Fresh Australian Ingredients",
              description: "Plump, sweet Australian strawberries, berries, and fruits harvested directly from local growers.",
              imageSrc: "https://img.b2bpic.net/free-photo/wooden-plate-full-nuts-crackers-dried-apricots-marble-surface_114579-42785.jpg"
            },
            {
              title: "Premium Belgian Chocolate",
              description: "Authentic, silky Belgian dark, milk, and ruby chocolate tempered fresh daily for a smooth, glossy coating.",
              imageSrc: "https://img.b2bpic.net/free-photo/sweet-dessert-with-dark-chocolate_74190-7176.jpg?_wi=2"
            }
          ]}
          bottomItem={{
            title: "Gold Coast Handcrafted Quality",
            description: "Each chocolate stick and handcrafted chocolate teddy bear is dipped and decorated by hand in Gold Coast, Australia.",
            imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795313023436-slywe6pb.png?_wi=3",
            primaryButton: {
              text: "Order Custom Gifts",
              href: "#contact"
            }
          }}
        />
      </div>

      <div id="menu" data-webild-section="FeaturesFilterGrid" data-webild-section-id="FeaturesFilterGrid-1" data-section="menu">
        <FeaturesFilterGrid
          textAnimation="fade-blur"
          tag="Handmade Delicacies"
          title="Hand-Dipped Selections"
          description="Exclusively featuring our signature chocolate sticks and handcrafted teddy bears."
          categories={[
            "Chocolate Sticks",
            "Teddy Bears"
          ]}
          items={[
            {
              name: "Signature Chocolate Sticks Box",
              category: "Chocolate Sticks",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795313023436-slywe6pb.png?_wi=4"
            },
            {
              name: "Belgian Berry & Nut Chocolate Sticks",
              category: "Chocolate Sticks",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795313023436-slywe6pb.png?_wi=5"
            },
            {
              name: "Gold Coast Luxury Chocolate Sticks",
              category: "Chocolate Sticks",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795313023436-slywe6pb.png?_wi=6"
            },
            {
              name: "Artisan Chocolate Teddy Bear Pair",
              category: "Teddy Bears",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795314013510-94u99mqt.png?_wi=3"
            },
            {
              name: "Belgian Milk Chocolate Teddy Bears",
              category: "Teddy Bears",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795314013510-94u99mqt.png?_wi=4"
            },
            {
              name: "Gold-Brushed Red & Milk Teddy Bears",
              category: "Teddy Bears",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795314013510-94u99mqt.png?_wi=5"
            }
          ]}
          allLabel="All Selections"
        />
      </div>

      <div id="metrics" data-webild-section="MetricsCupCounters" data-webild-section-id="MetricsCupCounters-1" data-section="metrics">
        <MetricsCupCounters
          tag="Catering & Events"
          title="Crafted for celebrations"
          imageSrc="https://img.b2bpic.net/free-photo/top-view-tasty-gourmet-snack-table_23-2148405916.jpg?_wi=2"
          imageAlt="Luxury chocolate catering table with Belgian chocolate sticks and chocolate teddy bears"
          items={[
            {
              value: 10,
              suffix: "k+",
              label: "Boxes delivered"
            },
            {
              value: 100,
              suffix: "%",
              label: "Handmade quality"
            },
            {
              value: 50,
              suffix: "+",
              label: "Catering tables set"
            },
            {
              value: 100,
              suffix: "%",
              label: "Belgian chocolate"
            }
          ]}
        />
      </div>

      <div id="faq" data-webild-section="FaqGlassRows" data-webild-section-id="FaqGlassRows-1" data-section="faq">
        <FaqGlassRows
          tag="Gold Coast Details"
          title="Before you order"
          description="Clear answers regarding our Australian ingredients, Gold Coast location, local pickup, and temperature-controlled shipping."
          imageSrc="https://img.b2bpic.net/free-photo/dried-fruits-berries-wooden-platter_114579-26504.jpg"
          imageAlt="Belgian chocolate coated Australian fruits on wooden platter"
          imageLabel="Gold Coast, Australia"
          items={[
            {
              title: "Where is Dolcea Chocolate located?",
              description: "We are located in Gold Coast, Australia. All order creations are handcrafted fresh in our Gold Coast kitchen with available local pickup and temperature-controlled delivery."
            },
            {
              title: "What selections do you offer?",
              description: "We feature exclusively signature handcrafted specialties: artisan chocolate sticks decorated with fresh fruits and nuts, and handcrafted chocolate teddy bears made entirely out of Belgian chocolate."
            },
            {
              title: "What ingredients do you use?",
              description: "We combine fresh, sweet Australian fruits sourced locally from Australian growers with authentic premium Belgian dark, milk, and ruby chocolate."
            },
            {
              title: "Do you offer chocolate catering tables for events?",
              description: "Yes! We design bespoke luxury chocolate catering tables for weddings, birthdays, and corporate celebrations across Gold Coast and South East Queensland."
            },
            {
              title: "How should I store handcrafted chocolate items?",
              description: "Keep your confections in a cool, dry place between 16°C and 20°C (60°F–68°F) away from direct sunlight for peak freshness and glossy finish."
            },
            {
              title: "Can I customize orders for gifts or parties?",
              description: "Absolutely. You can request custom assortments of chocolate sticks or chocolate teddy bear arrangements. Contact us via email or WhatsApp."
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactBar" data-webild-section-id="ContactBar-1" data-section="contact">
        <ContactBar
          textAnimation="fade-blur"
          tag="Gold Coast, Australia"
          title="Order your custom chocolate creations"
          options={[
            {
              icon: Mail,
              label: "Email Gold Coast Studio",
              href: "mailto:hello@dolceachocolate.com"
            },
            {
              icon: MessageCircle,
              label: "WhatsApp Gold Coast",
              href: "https://wa.me/"
            }
          ]}
        />
      </div>
    </>
  );
}
