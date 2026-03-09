import { useState } from "react";
import AdminSideBar from "../adminSideBarComponents/adminSideBar/AdminSideBar";
import AdminDashboardHeader from "../adminComponents/adminHeaderComponent/AdminDashboardHeader";
import AdminHome from "../adminComponents/AdminHomeComponent/AdminHome";
import ActivitiesMain from "../adminActivitiesComponents/activitiesMain/ActivitiesMain";
import AdminWallet from "../adminComponents/adminwallet/AdminWallet";
import AdminReferrals from "../adminComponents/adminreferralComponents/AdminReferrals";
import UsersMain from "../adminComponents/allUsers/UsersMain";
import BlockedUsers from "../adminComponents/blockedComponents/BlockedUsers";
import AdminAccount from "../adminComponents/adminaccountComponent/AdminAccount";
import AdminInvestment from "../adminComponents/adminnvestments/AdminInvestment";
import ReferralPayouts from "../adminComponents/referralPayouts/ReferralPayouts";
import HistoryLogs from "../adminActivitiesComponents/activitiesMain/HistoryLogs";

const Admin = () => {
  const [selectedSection, setSelectedSection] = useState("admin-dashboard");

  return (
    <main
      id="mainCon"
      className="h-screen overflow-y-scroll dashboard-wrapper hide-scrollbar"
    >
      <section
        id="mainSohn"
        className="grid lg:grid-cols-[14%_auto_28%] w-full "
      >
        {/* Sidebar section start */}
        <main id="dashboardSideBarCon" className="">
          <section>
            <AdminSideBar setSelectedSection={setSelectedSection} />
          </section>
        </main>
        {/* Sidebar section end */}

        {/* center items */}
        <main className="middl">
          <section className="">
            <AdminDashboardHeader setSelectedSection={setSelectedSection} />
          </section>

          {/* Main content area */}
          <section className="mt-[3vh] ">
            <div id="dashboardContentSohn">
              {/* Conditional content rendering based on selected section */}
              <section id="conditionalSec" className="p-2.5 lg:p-1">
                {selectedSection === "adminDashboard" && (
                  <section id="dashboardSecVater" className="">
                    <AdminHome />
                  </section>
                )}
                {selectedSection === "adminHistoryLogs" && (
                  <section id="exploreConDiv">
                    <HistoryLogs/>
                  </section>
                )}
                {selectedSection === "allUsers" && (
                  <section id="investConDiv" className="">
                    <UsersMain />
                  </section>
                )}

                {selectedSection === "blockedUsers" && (
                  <section id="investConDiv" className="">
                    <BlockedUsers />
                  </section>
                )}

                {selectedSection === "adminWallet" && (
                  <section id="adminwalletConDiv" className="">
                    <AdminWallet />
                  </section>
                )}
                {selectedSection === "adminAccount" && (
                  <section id="accountConDiv">
                    <AdminAccount />
                  </section>
                )}
                {selectedSection === "adminInvestments" && (
                  <section className="refferralSon">
                    <AdminInvestment />
                  </section>
                )}
                {selectedSection === "referralPayouts" && (
                  <section className="referralPayouts">
                    <ReferralPayouts />
                  </section>
                )}
                {selectedSection === "notification" && (
                  <section className="refferralSon">
                    <Notifications />
                  </section>
                )}
                {selectedSection === "adminreferral" && (
                  <section className="refferralSon">
                    <AdminReferrals />
                  </section>
                )}
              </section>
            </div>
          </section>
        </main>
        {/* center items */}

        {/* activites page start */}
        <main className="hidden activities lg:block ">
          <section className="activitieSon">
            <ActivitiesMain/>
          </section>
        </main>
      </section>
    </main>
  );
};

export default Admin;
