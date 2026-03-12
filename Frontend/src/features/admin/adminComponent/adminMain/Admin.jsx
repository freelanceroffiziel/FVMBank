import { useState } from "react";
import AdminSideBar from "../../sideBarComponents/adminSideBar/AdminSideBar";
import AdminHome from "../adminHomeComponent/AdminHome";
import AdminHeader from "../headerComponent/AdminHeader";
import AdminActivityLogs from "../adminActivityLogs/AdminActivityLogs";
import AdminTransfer from "../transferComponent/AdminTransfer";
import AdminDeposit from "../depositComponent/AdminDeposit";
import AdminWithdraw from "../withdrawalComponent/AdminWithdraw";
import AdminCards from "../admincardsComponent/AdminCards";
import AdminLoans from "../loansComponent/AdminLoans";
import AdminNotification from "../notificationComponent/AdminNotification";
import AdminReferrals from "../referralComponents/AdminReferrals";
import AdminProfile from "../adminProfileComponent/AdminProfile";
import AdminSupport from "../AdminsupportComponent/AdminSupport";
import AdminSettings from "../settingsComponent/AdminSettings";

const Admin = () => {
  const [selectedSection, setSelectedSection] = useState("dashboard");

  return (
    <main id="mainCon" className="">
      <section id="mainSohn" className="flex min-h-screen">
        {/* Sidebar section start */}
        <section id="dashboardSideBarCon" className="">
          <div>
            <AdminSideBar setSelectedSection={setSelectedSection} />
          </div>
        </section>
        {/* Sidebar section end */}

        {/* ConTent Below */}
        {/* dashboardContentHeaderSection start*/}
        <section className="header">
          <AdminHeader setSelectedSection={setSelectedSection} />
        </section>
        {/* dashboardContentHeaderSection end*/}

        <section
          id="dashboardContentVater"
          className="w-full lg:flex-1 lg:px-6 lg:ml-[255px]  "
        >
          <section id="dashboardContentSohn">
            {/* Conditional content rendering based on selected section */}
            <section id="conditionalSec" className="p-2 lg:p-0">
              {selectedSection === "dashboard" && (
                <section id="dashboardSecVater" className="">
                  <AdminHome />
                </section>
              )}
              {selectedSection === "admintransfer" && (
                <section id="transfer">
                  <AdminTransfer />
                </section>
              )}

              {selectedSection === "admindeposit" && (
                <section id="depositConDiv" className="">
                  <AdminDeposit />
                </section>
              )}
              {selectedSection === "adminwithdraw" && (
                <section id="withdrawConDiv">
                  <AdminWithdraw />
                </section>
              )}
              {selectedSection === "adminreferral" && (
                <section className="refferralSon">
                  <AdminReferrals />
                </section>
              )}
              {selectedSection === "adminactivityLogs" && (
                <section className="activityLog">
                  <AdminActivityLogs />
                </section>
              )}
              {selectedSection === "admincards" && (
                <section className="cards">
                  <AdminCards />
                </section>
              )}
              {selectedSection === "adminloans" && (
                <section className="loans">
                  <AdminLoans />
                </section>
              )}
              {selectedSection === "adminnotification" && (
                <section className="notification">
                  <AdminNotification />
                </section>
              )}
              {selectedSection === "adminsettings" && (
                <section className="settings">
                  <AdminSettings />
                </section>
              )}
              {selectedSection === "adminusersupport" && (
                <section className="usersupport">
                  <AdminSupport />
                </section>
              )}
              {selectedSection === "adminprofile" && (
                <section className="profile">
                  <AdminProfile />
                </section>
              )}
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Admin;
