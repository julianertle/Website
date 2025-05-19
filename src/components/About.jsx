import { Link } from "react-router-dom"; // Import the Link component
import NavBarOwn from "./NavBarOwn";
import Footer from "./Footer";

function About() {
    return (
        <>
            <div>
                <NavBarOwn />
            </div>
            <h1>
                This is a test.
            </h1>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default About;