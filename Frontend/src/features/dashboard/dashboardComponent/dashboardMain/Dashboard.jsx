import { useState } from "react";
import DashboardHome from "../dashboardHomeComponent/DashboardHome";
import DashboardHeader from "../headerComponent/DashboardHeader";
import TransactionHistory from "../transactionHistoryComponent/TransactionHistory";
import Deposit from "../depositComponent/Deposit";
import Withdraw from "../withdrawalComponent/Withdraw";
import Referrals from "../referralComponents/Referrals";
import SideBar from "../../sideBarComponents/sideBar/SideBar";
import ActivityLogs from "../dashoardActivityLogs/ActivityLogs";
import Transfer from "../transferComponent/Transfer";
import Cards from "../cardsComponent/Cards";
import Loans from "../loansComponent/Loans";
import Notification from "../notificationComponent/Notification";
import Settings from "../settingsComponent/Settings";
import Support from "../helpsupportComponent/Support";
import Profile from "../userProfileComponent/Profile";
import Accounts from "../accountsComponent/Accounts";
import Grants from "../grantsComponent/Grants";

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState("dashboard");

  return (
    <main id="mainCon" className="">
      <section id="mainSohn" className="flex min-h-screen">
        {/* Sidebar section start */}
        <section id="dashboardSideBarCon" className="">
          <div>
            <SideBar setSelectedSection={setSelectedSection} />
          </div>
        </section>
        {/* Sidebar section end */}

        {/* ConTent Below */}
        {/* dashboardContentHeaderSection start*/}
        <section className="header">
          <DashboardHeader setSelectedSection={setSelectedSection} />
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
                  <DashboardHome  setSelectedSection={setSelectedSection} />
                </section>
              )}
              {selectedSection === "transfer" && (
                <section id="transfer">
                  <Transfer />
                </section>
              )}
              {selectedSection === "History" && (
                <section id="transactionHistoryCon">
                  <TransactionHistory />
                </section>
              )}
              {selectedSection === "deposit" && (
                <section id="depositConDiv" className="">
                  <Deposit />
                </section>
              )}
              {selectedSection === "withdraw" && (
                <section id="withdrawConDiv">
                  <Withdraw />
                </section>
              )}
              {selectedSection === "referral" && (
                <section className="refferralSon">
                  <Referrals />
                </section>
              )}
              {selectedSection === "activityLogs" && (
                <section className="activityLog">
                  <ActivityLogs />
                </section>
              )}
              {selectedSection === "cards" && (
                <section className="cards">
                  <Cards />
                </section>
              )}
              {selectedSection === "loans" && (
                <section className="loans">
                  <Loans />
                </section>
              )}
              {selectedSection === "notification" && (
                <section className="notification">
                  <Notification />
                </section>
              )}
              {selectedSection === "settings" && (
                <section className="settings">
                  <Settings />
                </section>
              )}
              {selectedSection === "usersupport" && (
                <section className="usersupport">
                  <Support />
                </section>
              )}
              {selectedSection === "profile" && (
                <section className="profile">
                  <Profile />
                </section>
              )}
              {selectedSection === "accounts" && (
                <section className="accounts">
                  <Accounts />
                </section>
              )}

              {selectedSection === "grants" && (
                <section className="grants">
                  <Grants/>
                </section>
              )}
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
