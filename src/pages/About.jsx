import NavBarOwn from "../components/NavBarOwn";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarOwn />

      <main className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-2xl font-semibold mb-2">Seite noch in Arbeit</h1>
        <p className="text-gray-600">
          Wir sind bald fertig – schau später nochmal rein!
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default About;
