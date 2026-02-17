// src/components/SmartSupp.js
import React, { useEffect } from "react";

const SmartSupp = () => {
  useEffect(() => {
    if (window.smartsupp) return;

    // Initialize Smartsupp
    const initScript = document.createElement("script");
    initScript.innerHTML = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = 'd73ffe55c8f802303105d6876a965b793ed2af90';
      window.smartsupp||(function(d){
        var s,c,o=smartsupp=function(){ o._.push(arguments)};
        o._=[];
        s=d.getElementsByTagName('script')[0];
        c=d.createElement('script');
        c.type='text/javascript';
        c.charset='utf-8';
        c.async=true;
        c.src='https://www.smartsuppchat.com/loader.js?';
        s.parentNode.insertBefore(c,s);
      })(document);
    `;
    document.body.appendChild(initScript);

    // Wait for the chat widget to load and then reposition it
    const interval = setInterval(() => {
      const chatBubble = document.querySelector("#smartsupp-chat"); // ID of the chat container
      if (chatBubble) {
        chatBubble.style.right = "30vw"; // Tailwind-like right-[10vw]
        chatBubble.style.bottom = "2rem"; // Optional: control bottom spacing
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default SmartSupp;
