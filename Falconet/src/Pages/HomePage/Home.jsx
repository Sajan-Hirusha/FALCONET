import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

function Home() {
    return (
        <div>
            <Header
                router1={"/"} Link1={"Home"}
                router2={"#aboutUs"} Link2={"About"}
                router3={"#services"} Link3={"Services"}
            />
            <Footer/>
            <div className="header"></div>
        </div>
    )
}

export default Home;