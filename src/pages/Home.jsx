import NavBar from "../components/NavBar";
import Content from "../components/Content";
import Footer from "../components/Footer";

function HomeInit() {
  return (
    <>
      <div>
        <NavBar />
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
