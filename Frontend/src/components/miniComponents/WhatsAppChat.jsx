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
          <section className="fixed lg:bottom-[180px] bottom-[19vh] lg:right-[64px] md:right-[30px] right-[26px] lg:text-[40px] md:text-[100px] z-50  flex items-center justify-center  ease-in-out    text-[32px] bg-teal-700 text-teal-100 hover:bg-teal-600 rounded-full p-2 shadow-md transition duration-200">
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
