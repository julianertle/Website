import NavBarOwn from './NavBarOwn';
import Content from './Content';
import Footer from './Footer';

function HomeInit() {
    return (
        <>
            <div>
                <NavBarOwn />
            </div>
            <div>
                <Content />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default HomeInit;