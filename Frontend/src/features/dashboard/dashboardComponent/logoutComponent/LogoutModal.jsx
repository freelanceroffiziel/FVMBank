import React, { useState } from "react";
import useAuth from "../../../../context/useAuth"; // correct path
import { ToastContainer } from "react-toastify";
import { RiLogoutBoxLine } from "react-icons/ri";

const LogoutModal = () => {
  const [modal, setModal] = useState(false);
  const { logout } = useAuth(); // now this will work

  return (
    <div>
      <ToastContainer />
      <button
        onClick={() => setModal(true)}
        className="flex text-center justify-center  p-2 transition-all bg-teal-500 rounded shadow hover:bg-teal-600"
      >
        <RiLogoutBoxLine className="text-[30px]" />
      </button>

      {modal && (
        <div
          onClick={() => setModal(false)}
          className="fixed inset-0 flex items-center justify-center bg-black/35"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-80 p-6 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-center text-gray-800">
              Are you sure you want to logout?
            </h3>
            <div className="flex justify-between mt-8 space-x-4">
              <button
                className="w-full px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition"
                onClick={logout}
              >
                Yes
              </button>
              <button
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition"
                onClick={() => setModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutModal;
