import AdminSideBarContent from "../adminSideBarContent/AdminSideBarContent";
import AdminFooter from "../adminSideBarFooter/AdminFooter";
import AdminHeader from "../adminSideBarHeader/AdminHeader";

const AdminSideBar = ({ setSelectedSection }) => {
  return (
    <main className="sideBar">
      <section className="fixed lg:w-[14%] w-64  pb-1.5 hidden lg:block z-50 ">
        <div
          id="dashboardSideBarSohn"
          className="flex flex-col justify-between min-h-screen border-gray-200 bg-white shadow "
        >
          <div id="ulCon" className="sideBarContent">
            <div id="ulSon" className="">
              <header id="logoHeaderCon">
                <AdminHeader />
              </header>

              <div>
                <AdminSideBarContent setSelectedSection={setSelectedSection} />
              </div>
            </div>
          </div>

          <footer id="footerCon" className="mt-auto">
            <AdminFooter setSelectedSection={setSelectedSection} />
          </footer>
        </div>
      </section>
    </main>
  );
};

export default AdminSideBar;
