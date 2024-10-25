import './Footer.css'
import falconetLogo from '../../assets/falconetLogo.png';
import faceBookLogo from '../../assets/facebook.svg';
import linkdinLogo from '../../assets/linkedin.svg';
import gitHubLogo from '../../assets/github.svg';
import whatsappLogo from '../../assets/whatsapp.svg';
function Footer() {
    return (
        <div id="footer" className="text-center py-3">
            <div className="row">
                <div id="section01" className="col-6">
                    <p><img id="logo" src={falconetLogo} alt="footerLogo"/></p>
                    <p>The purpose of a FAQ is generally to provide <br/>
                        information on frequent questions or <br/>
                        concerns.</p>
                    <p>
                        <img id="fb" src={faceBookLogo} alt="fbLogo"/>
                        <img id="fb" src={linkdinLogo} alt="linkdinLogo"/>
                        <img id="fb" src={gitHubLogo} alt="gitHubLogo"/>
                        <img id="fb" src={whatsappLogo} alt="gitHubLogo"/>
                    </p>
                </div>
                <div id="section02" className="col-2">
                    <h5>Company</h5>
                    <p>Service</p>
                    <p>About Us</p>
                    <p>Contact</p>

                </div>
                <div id="section03" className="col-3">
                    <h5>Help</h5>
                    <p>Customer Support</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <div id="footerTxt"> &copy; Copyright 2024, All Rights Reserved by Transparent</div>
        </div>
    );
}

export default Footer;