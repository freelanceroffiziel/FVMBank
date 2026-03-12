import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = ({ setSelectedSection }) => {
  return (
    <main className="sideBarFooter">
      <section className="sideBarFooter">
        <div id="footerSohn" className="">
          <ul className="">
            <li className="">
              <button
                className="text hover:underline"
                onClick={() => setSelectedSection("adminsettings")}
              >
                Settings
              </button>
            </li>
            <li className="text-white hover:underline mt-1 flex items-center gap-1.5"
            onClick={() => setSelectedSection("adminusersupport")}>
              <button>Help & Support</button>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Footer;
