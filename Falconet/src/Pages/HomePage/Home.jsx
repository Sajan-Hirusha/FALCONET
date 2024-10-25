import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import './Home.css'
import AboutImage from  '../../assets/about us.png';

function Home() {
    return (
        <div id="home">
            <Header
                router1={"/"} Link1={"Home"}
                router2={"#aboutUs"} Link2={"About"}
                router3={"#services"} Link3={"Services"}
            />

            <div id="homeHeader">
                <div id="homeHeaderTxt">
                    <p className="p1">Hi,We are</p>
                    <p className="p2">FALCONET</p>
                    <p className="p3">some text</p>
                    <p className="p4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/>
                        nisi ut aliquip.</p><br/>
                    <button type="button" className="btn btn-primary">Contact Now</button>
                </div>
            </div>
            <div id="homeMiddle">
                    <h5>ABOUT US</h5>
                <h1>Get to know Us Better</h1>
                <div className="row">
                    <div className="firstDiv col-md-6">
                        <br/><br/><br/>
                        At &nbsp; <span id="aboutFalconet">FALCONET</span> ,
                        <p>we are a dynamic and innovative team dedicated to providing top-tier
                            technology solutions. Our expertise spans across various domains, allowing us
                            to tackle projects of any scale with precision and creativity</p>
                        <br/>
                        <p>We pride ourselves on being problem solvers, crafting solutions that are not only functional but also efficient and forward-thinking.
                            With a focus on delivering high-quality results, we work closely with our clients to understand their needs and transform their ideas into reality. Our team of experts ensures that each project is handled with the utmost professionalism, from concept to completion.
                            At FALCONET, we don’t just complete projects – we build lasting partnerships, ensuring that our solutions continue to deliver value long after they’re implemented.</p>
                    </div>
                    <div className="col-md-4 ms-5">
                        <img src={AboutImage} alt="aboutUsImg"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;