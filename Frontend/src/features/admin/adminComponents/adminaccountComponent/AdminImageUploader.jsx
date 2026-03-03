import AccountInfoUpdate from "./AccountInfoUpdate";
import PasswordUpdate from "./PasswordUpdate";
import NameEmailUpdate from "./NameEmailUpdate";
import ImageUploaderCom from "./ImageUploaderCom";
import AdminKyc from "../adminwallet/AdminKyc";
import AdminPinVerification from "../adminwallet/AdminPinVerification";

const AdminImageUploader = () => {
  return (
    <main id="vater" className="">
      <section id="sohn" className="">
        <div id="firstDivCon" className="grid gap-2.5 lg:gap-2 lg:grid-cols-2 ">
          <div id="firstDivSohnCon" className=" space-y-2.5  ">
            <div className="profileDiv">
              <ImageUploaderCom />
            </div>

            <div id="passwordUpdateCon">
              <NameEmailUpdate />
            </div>
          </div>

          <div id="accountInFoUpdate" className=" space-y-2.5  ">
            <div>
              <AccountInfoUpdate />
            </div>

            <div id="passwordUpdateCon">
              <PasswordUpdate />
            </div>
          </div>
        </div>
      </section>

      <div className="PinVerification">
        <AdminPinVerification />
      </div>

      <div id="kyc">
        <AdminKyc />
      </div>
    </main>
  );
};

export default AdminImageUploader;
