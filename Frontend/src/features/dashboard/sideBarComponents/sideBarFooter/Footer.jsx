import React from "react";

const Footer = ({ setSelectedSection }) => {
  return (
    <footer className="sideBarFooter">
      <ul>
        <li>
          <button
            className="text-white hover:underline"
            onClick={() => setSelectedSection("settings")}
          >
            Settings
          </button>
        </li>

        <li>
          <button
            className="text-white hover:underline mt-1 flex items-center gap-1.5"
            onClick={() => setSelectedSection("usersupport")}
          >
            Help & Support
          </button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
