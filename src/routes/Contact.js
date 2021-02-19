

import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";
import { ContactSection } from "../components/contact-form";
import { BusinessCards } from "../components/business-cards";
import { MapSection } from "../components/map";

function Contact() {
  return (
    <>
      <MapSection />
      <ContactSection />
      <BusinessCards />
      <Partners />
      <Newsletter />
    </>
  );
}

export default Contact;