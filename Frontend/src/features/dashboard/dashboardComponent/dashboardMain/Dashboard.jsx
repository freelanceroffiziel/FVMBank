import { useState } from "react";
import ImageUploader from "../accountComponent/ImageUploader";
import DashboardHome from "../dashboardHomeComponent/DashboardHome";
import StartInvesting from "../startInvestingComponent/StartInvesting";
import DashboardHeader from "../headerComponent/DashboardHeader";
import TransactionHistory from "../transactionHistoryComponent/TransactionHistory";
import Deposit from "../depositComponent/Deposit";
import Withdraw from "../withdrawalComponent/Withdraw";
import Referrals from "../referralComponents/Referrals";
import SideBar from "../../sideBarComponents/sideBar/SideBar";

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
          className="w-full lg:flex-1 lg:p-8 lg:ml-[255px] mt-[9vh] lg:pt-14 "
        >
          <section id="dashboardContentSohn">
            {/* Conditional content rendering based on selected section */}
            <section id="conditionalSec" className="p-6 lg:p-0">
              {selectedSection === "dashboard" && (
                <section id="dashboardSecVater" className="">
                  <DashboardHome />
                </section>
              )}
              {selectedSection === "startInvesting" && (
                <section id="startInvestingConDiv">
                  <StartInvesting />
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
              {selectedSection === "account" && (
                <section id="accountVaterDiv">
                  <div id="accountSonDiv">
                    <ImageUploader />
                  </div>
                </section>
              )}
              {selectedSection === "referral" && (
                <section className="refferralSon">
                  <Referrals />
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
