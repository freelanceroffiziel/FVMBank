import React, { useState } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";

const LogoutModal = () => {
  const [modal, setModal] = useState(false);

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="logoutModal">
      <ToastContainer />
      <section className="logoutModal">
        {/*  */}
        <button onClick={() => setModal(true)} className="flex text-center justify-center ">
          <RiLogoutBoxLine className="text-[30px]" />
        </button>
        {/*  */}

        {/* Modal for Logout Confirmation */}
        {modal && (
          <div
            onClick={() => setModal(false)}
            className="fixed inset-0 z-50  w-full flex items-center justify-center bg-opacity-50 bg-black/35"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-80 p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-medium text-center text-gray-800">
                Are you sure you want to logout?
              </h3>

              <div className="flex justify-between mt-8 space-x-4">
                <button
                  className="w-full px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition"
                  onClick={handleLogout}
                >
                  Yes
                </button>
                <button
                  className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition"
                  onClick={() => setModal(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
        {/*  */}
      </section>
    </div>
  );
};

export default LogoutModal;
