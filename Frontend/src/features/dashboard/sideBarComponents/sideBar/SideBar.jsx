import SideBarContent from "../sideBarContent/SideBarContent";
import Footer from "../sideBarFooter/Footer";
import Header from "../sideBarHeader/Header";

const SideBar = ({ setSelectedSection }) => {
  return (
    <main className="sideBar">
      <section className="sideBar">
        <section
          id="dashboardSideBarCon"
          className="fixed lg:w-[20%] w-64  text-gray-100 bg-teal-800 hidden lg:block z-50 "
        >
          <div
            id="dashboardSideBarSohn"
            className="flex flex-col justify-between h-screen px-3 py-2 bg-teal-900 rounded shadow-lg "
          >
            <div id="ulCon" className="sideBarContent">
              <div id="ulSon" className="space-y-10">
                <header id="logoHeaderCon">
                  <Header />
                </header>

                <div>
                  <SideBarContent setSelectedSection={setSelectedSection} />
                </div>
              </div>
            </div>

            <footer id="footerCon" className="mt-auto">
              <Footer />
            </footer>
          </div>
        </section>
      </section>
    </main>
  );
};

export default SideBar;
