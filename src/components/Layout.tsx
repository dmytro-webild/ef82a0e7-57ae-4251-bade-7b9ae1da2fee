import { Outlet } from "react-router-dom";
import NavbarFullscreen from "@/components/navbars/NavbarFullscreen";
import FooterBrand from "@/components/sections/footer/FooterBrand";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="filled" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarFullscreen
          logo="Dolcea Chocolate"
          navItems={[
            {
              name: "Selections",
              href: "#menu"
            },
            {
              name: "Belgian Craft",
              href: "#gallery"
            },
            {
              name: "Custom Gifts",
              href: "#services"
            },
            {
              name: "FAQ",
              href: "#faq"
            }
          ]}
          ctaButton={{
            text: "Custom Order",
            href: "#contact"
          }}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="filled" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterBrand
          brand="Dolcea Chocolate"
          columns={[
            {
              items: [
                {
                  label: "Selections",
                  href: "#menu"
                },
                {
                  label: "Artisan Quality",
                  href: "#gallery"
                },
                {
                  label: "Our Craft",
                  href: "#services"
                }
              ]
            },
            {
              items: [
                {
                  label: "Custom Orders",
                  href: "#contact"
                },
                {
                  label: "Ordering FAQ",
                  href: "#faq"
                },
                {
                  label: "About Us",
                  href: "#gallery"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact Us",
                  href: "#contact"
                },
                {
                  label: "Highlights",
                  href: "#metrics"
                },
                {
                  label: "Corporate Gifting",
                  href: "#contact"
                }
              ]
            }
          ]}
        />
      </footer>
    </div>
  );
}
