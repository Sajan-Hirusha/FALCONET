import falconetLogo from '../../assets/falconetLogo.png';
import './Header.css';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Typed from "typed.js";

function Header({Link1, router1, Link2, router2, Link3, router3, Link4, router4}) {
        const [scrolled, setScrolled] = useState(false);

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);

    useEffect(() => {
        const options = {
            strings: ['Contact Now'],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true,
        };

        const typed = new Typed('#contactNow', options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="header" id={scrolled ? "header" : "headerNotScrolled"}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img id="logo" src={falconetLogo} alt="falconetLogo"/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {Link1 && (
                                <li className="nav-item ">
                                    <Link className="nav-link" to={router1}>{Link1}</Link>
                                </li>
                            )}
                            {Link2 && (
                                <li className="nav-item ">
                                    <a className="nav-link" href={router2}>{Link2}</a>
                                </li>
                            )}
                            {Link3 && (
                                <li className="nav-item ">
                                    <a className="nav-link" href={router3}>{Link3}</a>
                                </li>
                            )}
                            {Link4 && (
                                <li className="nav-item  ">
                                    <a className="nav-link" href={router4}>{Link4}</a>
                                </li>
                            )}
                        </ul>
                        <form className="d-flex" role="search">
                            <button id="contactNow" className="btn btn-outline-success" type="submit">

                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

Header.propTypes = {
    Link1: PropTypes.string,
    router1: PropTypes.string,
    Link2: PropTypes.string,
    router2: PropTypes.string,
    Link3: PropTypes.string,
    router3: PropTypes.string,
    Link4: PropTypes.string,
    router4: PropTypes.string,
};

export default Header;
