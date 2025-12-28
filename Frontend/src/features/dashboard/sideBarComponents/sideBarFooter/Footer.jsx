import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <main className="sideBarFooter">
      <section className="sideBarFooter">
        <div id="footerSohn" className="">
          <ul>
            <li>
              <Link >Settings</Link>
            </li>
            <li>
              <Link>Help & Support</Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Footer;
