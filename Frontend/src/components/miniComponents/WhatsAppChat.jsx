import React, { useEffect, useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";

const WhatsAppChat = () => {
  const [WhatsAppChat, setWhatsAppChat] = useState(false);
  const phoneNumber = +14148854567;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setWhatsAppChat(true);
      } else {
        setWhatsAppChat(false);
      }
    });
  }, []);

  return (
    <>
      <main>
        {WhatsAppChat && (
          <section className="fixed lg:bottom-[150px] bottom-[15vh] lg:right-[64px] md:right-[30px] right-[26px] lg:text-[40px] md:text-[100px] text-[60px] z-50  flex items-center justify-center  bg-teal-700 hover:bg-teal-600 rounded-full p-1.5 transition duration-100 ease-in-out ">
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600"
            >
              <RiWhatsappFill />
            </a>
          </section>
        )}
      </main>
    </>
  );
};

export default WhatsAppChat;
