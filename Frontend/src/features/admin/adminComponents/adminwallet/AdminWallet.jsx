import { useState } from "react";
import TransactionsHistory from "./TransactionsHistory";
import UsdTransaction from "./UsdTransaction";
import NgnTransaction from "./NgnTransaction";
import AdminPaymentUpSlide from "../../adminPaymentmaquee/AdminPaymentUpSlide";

const AdminWallet = () => {
  const [activeWallet, setActiveWallet] = useState("USD");

  return (
    <main className=" ">
      <section className="lg:pt-[8vh] pt-[8vh] pb-1 px-0.5 grid lg:grid-cols-2 gap-2">
        <aside className="">
          {activeWallet === "USD" ? (
            <UsdTransaction setActiveWallet={setActiveWallet} />
          ) : (
            <NgnTransaction setActiveWallet={setActiveWallet} />
          )}
        </aside>

        <aside className="">
          <TransactionsHistory />
        </aside>
      </section>

      <section className=" ">
        <AdminPaymentUpSlide />
      </section>
    </main>
  );
};

export default AdminWallet;
