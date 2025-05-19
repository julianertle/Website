import NavBarOwn from './NavBarOwn';
import Content from './Content';
import Footer from './Footer';

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
            </div></div>
            
        </>
    );
}

export default HomeInit;