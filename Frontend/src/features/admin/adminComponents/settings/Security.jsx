import React from "react";

const Security = ({ setSelectedSection }) => {
  return (
    <main>
      <section>
        <ul id="sideBarList" className=" ">
          <li>
            <button
              onClick={() => setSelectedSection("portfolio")}
              className="  "
            >
              Settings
            </button>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Security;
