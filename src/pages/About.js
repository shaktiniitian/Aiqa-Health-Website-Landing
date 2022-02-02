import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function About() {
    return (
        <main id="main">
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>About us</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>About us</li>
                        </ol>
                    </div>

                </div>
            </section>

            <section className="inner-page about">
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">

                            <p><span className="text-danger">aiqahealth </span>is for its members</p>
                            <p className="pt-5">
                                <span className="text-danger">aiqahealth </span> is on a mission to resolve unequal access to
                                healthcare in India. While India’s middle class, and above, in Metros have very good access to
                                the best healthcare facilities, of the
                                doctors and the hospitals, people in tier 2 and tier 3 cities and blue-collar workers in metros
                                don’t have such luxury. This stems from both, the lack of affordability and dearth of good
                                medical specialists serving in tier
                                2 and 3 cities. Hence, most patients, whether due to lack of affordability or lack of
                                availability, are forced to seek health care from untrained and unqualified providers. <span
                                    className="text-danger">aiqahealth </span> products
                                provides affordable continued care for the in tier 2 and tier 3 cities and also in metros.
                            </p>

                            <h5 className="pt-4">We won’t stop thinking</h5>

                            <p>Healthcare in India is not perfect yet. It’s our dream no matter where a patient is located,
                                (s)he should get a great healthcare experience. We’ll work hard to continue putting the member’s
                                needs first. We want to create the best
                                healthcare ecosystem for India.</p>

                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>The team behind aiqahealth
                        </h2>

                    </div>

                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={6100}
                    >
                        <div>
                            <img src="assets/img/sunil-sachdeva.png" className="img-fluid" alt="" />
                            <div className="myCarousel">
                                <h3>Sunil Sachdeva</h3>
                                <h4>Co-Founder</h4>
                                <p>
                                    I have been in healthcare for the last 20 years and I believe technology-enabled
                                    healthcare is the way forward. <b className="text-danger">aiqahealth </b> can have a far
                                    higher positive impact on patient outcomes than traditional
                                    setups and will serve humanity in a big way.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src="assets/img/karan-chopra.jpg" className="img-fluid" alt="" />
                            <div className="myCarousel">
                                <h3>Karan Chopra</h3>
                                <h4>Co-Founder</h4>
                                <p>
                                    Quality healthcare in India is centralized around a few clusters. I experienced this
                                    first hand growing up in a small city. With <b className="text-danger">aiqahealth </b> , we
                                    are building that puts patients first and provides
                                    equal access to great healthcare to everyone.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src="assets/img/inish-merchant.png" className="img-fluid" alt="" />
                            <div className="myCarousel">
                                <h3>Inish Merchant</h3>
                                <h4>COO</h4>
                                <p>
                                    I believe in businesses that have a social impact. Our healthcare infrastructure needs
                                    improvement. My primary focus is to make <b className="text-danger">aiqahealth </b>
                                    operationally excellent so that we can focus on the
                                    delivery of care and make it easily accessible for its members.
                                </p>
                            </div>
                        </div>
                    </Carousel>

                </div>
            </section>

        </main>
    )
}

export default About;