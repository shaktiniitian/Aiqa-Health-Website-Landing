import React, { useState } from 'react';

function Footer() {

    const [data, setData] = useState('Hello')

    function handleClick(value) {
        setData(value);
      }

    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="widget-wrapper">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <div className="logo mb-30">
                                    <a href="/">
                                        <img src="assets/img/logo-white.png" alt="Logo" />
                                    </a>
                                </div>
                                <p className="desc mb-30 text-white">
                                    Doctor On Call, 5th Floor, Tower B, SAS Tower, Sector 38, Gurugram, Haryana 122001
                                </p>
                                <p className="desc mb-30 text-white"> <strong>Phone:</strong>  <a href="tel:+916262306306" className="text-white">+91 6262 306 306</a><br />
                                    <strong>Email:</strong> <a className="text-white" href="mailto:care@aiqahealth.com">care@aiqahealth.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="footer-widget">
                                <h3>Useful Links</h3>
                                <ul className="links">
                                    <li><a className="page-scroll" href="/">Home</a></li>
                                    <li><a className="page-scroll" href="/plan">Plan</a></li>
                                    {/* <li><a className="page-scroll" href="/news">News</a></li> */}
                                    <li><a className="page-scroll" href="/#download">Download</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3>Important Link</h3>
                                <ul className="links">
                                    <li><a href="/how-to-reach">How to reach</a></li>
                                    <li><a href="/privacy-policy">Privacy policy</a></li>
                                    <li><a href="/terms">Terms of service</a></li>
                                    <li><a href="/customer-grievances-redressal-policy">Customer Grievances Redressal Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3>Our Social Networks</h3>
                                <ul className="socials">
                                    <li>
                                        <a href="https://fb.watch/aAJb6ruaIo/">
                                            <i className="lni lni-facebook-filled"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/posts/doctoroncallindia_commoncold-cough-covidguidelines-activity-6888345117518913536-Js9h">
                                            <i className="lni lni-linkedin-original"></i>
                                        </a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="footer-widget">
                                <p className="copyright text-white text-center">© Copyright <strong><span>aiqahealth</span></strong>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        <a href="#" className="scroll-top btn-hover">
                <i className="lni lni-chevron-up"></i>
            </a>
            </footer>
        

    )
}

export default Footer