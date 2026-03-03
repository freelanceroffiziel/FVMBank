import React from "react";
import defaultImg from "../../../../assets/icons/icons-careers.webp";
// import useAuth from "../../../../context/useAuth";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import AdminLogoutModal from "../../adminComponents/admindashboardmini/AdminLogoutModal";

const AdminFooter = ({ setSelectedSection }) => {
  // const { user } = useAuth();
  // console.log("dashboard firstname and email", user);

  return (
    <main className="sideBarFooter">
      <ToastContainer />
      <section className="sideBarFooter bg-whit pl-3 rounded-bl-2xl border-t-[1px] border-gray-200">
        <div id="footerSohn" className="space-y-3">
          <strong className=" lg:text-[20px] text-teal-800 ">
            Preferences
          </strong>

          <ul className="lg:text-[14px] tracking-wide space-y-2 pt-1.5 ">
            <li className=" ">
              <button
                className="hover:text-teal-800 hover:underline"
                onClick={() => setSelectedSection("portfolio")}
              >
                Settings
              </button>
            </li>
            <li className="lg:text-[20px] text-teal-800 rounded mt-1 flex flex-row items-center gap-1.5 border-teal-800 border-[1px] hover:text-teal-50 transition ease-in-out duration-200 hover:bg-teal-800 focus:bg-teal-900  py-1.5 px-4 w-fit ">
              <span>
                {" "}
                <RiLogoutBoxRLine />{" "}
              </span>
              <button className=" lg:text-[16px]">
                <AdminLogoutModal />{" "}
              </button>
            </li>
          </ul>

          <div className="border-t-[1px] border-gray-200 rounded-bl-2xl  py-3 flex flex-row gap-2.5 items-center ">
            <div>
              <img
                // src={user?.profileImageUrl || defaultImg}
                alt="Profile"
                loading="lazy"
                className="h-8 w-8 rounded-full"
              />
            </div>
            {/* {user ? (
              <ul>
                <li className="text-[14px] font-medium">
                  {user.firstName} {user?.lastName}{" "}
                </li>
                <li className="text-[10px] pr-2 text-teal-700 overflow-hidden ">
                  {user.email}
                </li>
              </ul>
            ) : (
              <p className="text-xs italic text-gray-400">
                Loading user info...
              </p>
            )} */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminFooter;
