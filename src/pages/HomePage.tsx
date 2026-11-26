import HeroBillboardBrandFloatingCards from "@/components/sections/hero/HeroBillboardBrandFloatingCards";
import GalleryCupTrack from "@/components/sections/gallery/GalleryCupTrack";
import FeaturesGridSplitLarge from "@/components/sections/features/FeaturesGridSplitLarge";
import FeaturesFilterGrid from "@/components/sections/features/FeaturesFilterGrid";
import MetricsCupCounters from "@/components/sections/metrics/MetricsCupCounters";
import FaqGlassRows from "@/components/sections/faq/FaqGlassRows";
import ContactBar from "@/components/sections/contact/ContactBar";
import AuroraBackground from "@/components/backgrounds/AuroraBackground";
import LoaderSwirl from "@/components/loaders/LoaderSwirl";
import { Mail, Instagram } from "lucide-react";

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
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795316277131-ausuo4yw.png?_wi=1",
              imageAlt: "Simple chocolate bar cracked into small pieces",
              imageClassName: "object-cover"
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
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795314311757-4shb2y1m.png?_wi=1",
              imageAlt: "Luxury chocolate catering table display"
            },
            {
              title: "Artisanal tempering",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795316702274-tzyz1w29.png",
              imageAlt: "Artisanal hand tempering of silky melted Belgian chocolate"
            },
            {
              title: "Gold Coast handmade",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795314441451-70jc11sn.png",
              imageAlt: "Gold Coast handmade chocolate process and craftsmanship",
              objectPosition: "left"
            }
          ]}
        />
      </div>

      <div id="services" data-webild-section="FeaturesGridSplitLarge" data-webild-section-id="FeaturesGridSplitLarge-1" data-section="services">
        <FeaturesGridSplitLarge
          textAnimation="fade-blur"
          tag="Brand Story"
          title="Handmade quality with local ingredients & premium chocolate"
          description="Based in Gold Coast, Australia, Dolcea Chocolate crafts artisanal confections by hand. We pair locally harvested Australian fresh fruits with rich Belgian chocolate."
          topItems={[
            {
              title: "Fresh Australian Ingredients",
              description: "Plump, sweet Australian strawberries, berries, and fruits harvested directly from local growers.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795317163815-eczbrd46.png"
            },
            {
              title: "Premium Belgian Chocolate",
              description: "Authentic, silky Belgian dark, milk, and ruby chocolate tempered fresh daily for a smooth, glossy coating.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795317163816-ftm6aea6.png",
              zoom: 0,
              imageClassName: "object-cover"
            }
          ]}
          bottomItem={{
            title: "Gold Coast Handcrafted Quality",
            description: "Each chocolate stick and handcrafted chocolate teddy bear is dipped and decorated by hand in Gold Coast, Australia.",
            imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795316980015-uadhx3fd.png",
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
          description="Exclusively featuring our signature stick box, teddy bear box, donut box, and mix box."
          categories={[
            "Stick Box",
            "Teddy Bear Box",
            "Donut Box",
            "Mix Box"
          ]}
          items={[
            {
              name: "Signature box",
              category: "Stick Box",
              price: "$60 AUD",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795320846544-mqfxoxdg.png"
            },
            {
              name: "Teddy bear box",
              category: "Teddy Bear Box",
              price: "$70 AUD",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795314013510-94u99mqt.png?_wi=3"
            },
            {
              name: "Donut box",
              category: "Donut Box",
              price: "$80 AUD",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795320890359-22271udb.png"
            },
            {
              name: "Mix box",
              category: "Mix Box",
              price: "$100 AUD",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795320920382-h131965e.png"
            }
          ]}
          allLabel="All Selections"
        />
      </div>

      <div id="metrics" data-webild-section="MetricsCupCounters" data-webild-section-id="MetricsCupCounters-1" data-section="metrics">
        <MetricsCupCounters
          tag="Catering & Events"
          title="Crafted for celebrations"
          imageSrc="https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795314311757-4shb2y1m.png?_wi=2"
          imageAlt="Luxury chocolate catering table display"
          items={[
            {
              value: 100,
              suffix: "+",
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
          imageSrc="https://storage.googleapis.com/webild/users/user_3MPo9I4ymqKRFl8EggCcfZpPIAj/uploaded-1795321778098-8tnnfckq.png"
          imageAlt="Belgian chocolate coated Australian fruits on wooden platter"
          imageLabel="Gold Coast, Australia"
          items={[
            {
              title: "Where is Dolcea Chocolate located?",
              description: "We are located in Biggera Waters, 4216. All order creations are handcrafted fresh in our Gold Coast kitchen with available local pickup and temperature-controlled delivery for bulk orders."
            },
            {
              title: "What selections do you offer?",
              description: "We feature exclusively signature handcrafted specialties: artisan chocolate sticks and donuts decorated with fresh fruits and nuts, and handcrafted chocolate teddy bears made entirely out of Belgian chocolate."
            },
            {
              title: "What ingredients do you use?",
              description: "We combine fresh, sweet Australian fruits sourced locally from Australian growers with authentic premium VELICHE gourmet Belgian milk, white and dark chocolate."
            },
            {
              title: "Do you offer chocolate catering tables for events?",
              description: "Yes! We design bespoke luxury chocolate catering tables for weddings, birthdays, and corporate celebrations across Gold Coast and Brisbane. "
            },
            {
              title: "How should I store handcrafted chocolate items?",
              description: "Keep your confections in a cool, dry place between 2°C and 5°C (refrigerator temperature) away from direct sunlight for peak freshness and glossy finish. Best to be consumed within 24-48 hours. "
            },
            {
              title: "Can I customize orders for gifts or parties?",
              description: "Absolutely. You can request custom assortments of chocolate sticks or chocolate teddy bear arrangements. Contact us via email (dolceachocolates@gmail.com) or Instagram (@dolcea.choc)."
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
              label: "Email",
              sublabel: "dolceachocolates@gmail.com",
              href: "mailto:dolceachocolates@gmail.com"
            },
            {
              icon: Instagram,
              label: "Instagram",
              sublabel: "dolcea.choc",
              href: "https://instagram.com/dolcea.choc"
            }
          ]}
        />
      </div>
    </>
  );
}
