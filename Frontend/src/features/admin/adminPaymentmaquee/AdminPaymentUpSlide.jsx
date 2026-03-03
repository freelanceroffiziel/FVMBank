import React from "react";
import PaymentMaquee2 from "./AdminPaymentMaquee2.jsx";
import PaymentMaquee from "./AdminPaymentMaquee.jsx";
import AdminPaymentMaquee from "./AdminPaymentMaquee.jsx";
import AdminPaymentMaquee2 from "./AdminPaymentMaquee2.jsx";

const AdminPaymentUpSlide = () => {
  return (
    <main>
      <section className="lg:w-[57.4vw] w-[95vw] overflow-y-hidden  space-y-1 ">
        <aside className="firstSlide">
          <AdminPaymentMaquee />
        </aside>

        <aside className="secondSlide">
          <AdminPaymentMaquee2 />
        </aside>
      </section>
    </main>
  );
};

export default AdminPaymentUpSlide;
