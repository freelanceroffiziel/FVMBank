import ContactForm from "../components/contactComponent/ContactForm";
import ContactOne from "../components/contactComponent/ContactOne";
import ContactStars from "../components/contactComponent/ContactStars";

const Contact = () => {
  return (
    <main className="relative min-h-screen pt-[10vh]  overflow-hidden">
      <section className="contactSonCon ">
        <section className=" secContactOne bg-teal-950/75 lg:px-16">
          <ContactOne />
        </section>

        <section className="lg:mt-10 contactForm ">
          <ContactForm />
        </section>

        <section className="lg:mt-10 lg:px-16 ">
          <ContactStars/>
        </section>
      </section>
    </main>
  );
};

export default Contact;
