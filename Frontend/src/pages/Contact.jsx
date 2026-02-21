import ContactForm from "../components/contactComponent/ContactForm";
import ContactOne from "../components/contactComponent/ContactOne";
import ContactStars from "../components/contactComponent/ContactStars";

const Contact = () => {
  return (
    <main className="relative min-h-screen lg:pt-[5vh] pt-[4vh]  overflow-hidden">
      <section className="contactSonCon ">
        <section className=" secContactOne bg-teal-950/75">
          <ContactOne />
        </section>

        <section className="px-6 lg:mt-6 contactForm lg:px-16 mt-[6vh]">
          <ContactForm />
        </section>

        <section className="px-6 lg:mt-10 lg:px-16 ">
          <ContactStars/>
        </section>
      </section>
    </main>
  );
};

export default Contact;
