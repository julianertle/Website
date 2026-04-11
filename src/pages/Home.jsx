import NavBarOwn from "../components/NavBarOwn";
import Content from "../components/Content";
import Footer from "../components/Footer";

function HomeInit() {
  return (
    <>
      <div>
        <NavBarOwn />
      </div>
      <div className="pt-16">
        <div>
          <Content />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomeInit;
