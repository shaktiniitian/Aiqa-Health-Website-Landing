import React, { useState } from 'react';
import axios from 'axios';
import About from './About'
import Individual from '../forms/Individual';
import Business from '../forms/Business';
import Waitlist from '../forms/Waitlist';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Home() {

  const [data, setData] = useState('Hello')

  const [formValues, setFormValues] = useState({
    name: '',
    mobile: '',
    email: ''
  });

  function handleClick(value) {
    setData(value);
  }


  function handleChange(name, value) {
    setFormValues({ ...formValues, name: value })
  }


  function submitClick() {

    axios.post(global.config.apiUrl + 'lead', formValues)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

return (
     <div>
     <section id="home" className="hero-section">
        <div className="container">
            <div className="row align-items-center position-relative">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="hero-content">
                        <h1 className="wow fadeInUp" data-wow-delay=".6s">
                            sampoorna swasthya surakhsha, sirf ₹3 per day se shuru.
                        </h1>
                        <p className="wow fadeInUp" data-wow-delay=".8s"> </p>
                        <a  data-bs-toggle="modal" data-bs-target="#exampleModal" className="main-btn border-btn btn-hover wow fadeInUp" data-wow-delay="1s">Call back paayein</a>
                        <div className="modal fade my-popup" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                  <h5 className="modal-title" id="exampleModalLabel">call back paayein</h5>
                                {data == 'individual' ?

                                <Individual></Individual>
                                : null}


                                {data != 'individual' ?
                                <Business></Business>
                                : null}
                              </div>
                              
                            </div>
                          </div>
                        </div>
                        <a href="#features" className="scroll-bottom">
                            <i className="lni lni-arrow-down"></i></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="hero-img wow fadeInUp" data-wow-delay="1s">
                        <img src="assets/img/slider/slider1.png" alt="Banner" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="features" className="feature-section pt-50">
        <div className="container">
            <div className="row ">
                <div className="col-md-12">
                    <div className="section-title mb-30">
                        <h2 className="text-center mb-25 wow fadeInUp" data-wow-delay=".5s">health subscription </h2>
                        <p className="text-center wow fadeInUp" data-wow-delay=".8s">that caters to everyone needs</p>
                    </div>
                </div>
                </div>
                 <div className="row justify-content-center">
                <div className="col-md-4 col-sm-4 d-flex align-items-stretch">
                        <div className="plan-card card border-0  shadow wow fadeInLeft" data-wow-delay="1s">
                         <div className="card-header text-center text-white border-0"><img src="assets/img/icon/dr.png " alt="Img" />
                             <h3>unlimited doctor consultations </h3>
                         </div>
                         <div className="card-body ">
                             <ul className="list-unstyled">
                                 <li> <i className="fa fa-check-circle"></i> 20 specialties </li>
                                 <li> <i className="fa fa-check-circle"></i> 24/7 availability</li>
                                 <li> <i className="fa fa-check-circle"></i> visit our clinic or use our app</li>
                             </ul>
                         </div>
                     </div>
                 </div>
                 <div className="col-md-4 col-sm-4 d-flex align-items-stretch ">
                     <div className="plan-card card  border-0 shadow wow fadeInUp" data-wow-delay="1s">
                         <div className="card-header text-center text-white border-0"> <img src="assets/img/icon/fm.png " alt="Img" /> 
                             <h3>swasthya beema taaki family rahein nishchint</h3>
                         </div>
                         <div className="card-body ">
                             <ul className="list-unstyled">
                                 <li> <i className="fa fa-check-circle"></i> daily cash for 50 days</li>
                                 <li> <i className="fa fa-check-circle"></i> all hospitals covered</li>
                                 <li> <i className="fa fa-check-circle"></i> no bills required</li>
                             </ul>
                         </div>
                     </div>
                 </div>
                 <div className="col-md-4 col-sm-4 d-flex align-items-stretch">
                     <div className="plan-card card  border-0  shadow wow fadeInRight" data-wow-delay="1s">
                         <div className="card-header text-center text-white border-0"><img src="assets/img/icon/rs.png " alt="Img" />
                             <h3>accident me paiso ki fikar nahi <br/><br/></h3>
                         </div>
                         <div className="card-body ">
                             <ul className="list-unstyled">
                                 <li> <i className="fa  fa-check-circle"></i> 10 lac ₹. tak surakhsit</li>
                                 <li> <i className="fa  fa-check-circle"></i> covers disability and death </li>
                             </ul>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    </section>
    {/* <section id="plan" className="plan-section pt-150">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12">
                    <div className="section-title mb-30 text-center">
                        <h2 className=" mb-25 wow fadeInUp" data-wow-delay=".1s">Plans</h2>
                        <p className=" wow fadeInUp" data-wow-delay=".2s">all inclusive plans starting from 3 ₹. per day per member.</p>
                         <a href="/plan" className="main-btn border-btn btn-hover btn-white mt-50 wow fadeInUp" data-wow-delay=".6s">view Our Plan</a>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    <section id="pricing" className="pricing-section pt-70">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-9">
                    <div className="section-title text-center mb-35">
                        <h2 className="mb-25  wow fadeInUp" data-wow-delay=".2s">
                           aiqahealth vs Standard health insurance
                        </h2>
                     </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="compare-data">
                        {/* <div className="glass"></div> */}
                        <div className="bortable table-responsive">
                            
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>offering </th>
                                    <th>your insurance</th>
                                    <th className="big-font">aiqahealth subscription</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>doctor consultation</td>
                                    <td>paid</td>
                                    <td><b  className="big-font">unlimited free</b></td>
                                </tr>
                                 <tr>
                                    <td>doctor availability</td>
                                    <td>11 am - 5 pm</td>
                                    <td><b  className="big-font">24*7</b></td>
                                </tr>
                                 <tr>
                                    <td>discount on medicines & diagnostics</td>
                                    <td><span><i className="fa fa-times" aria-hidden="true"></i></span></td>
                                    <td><span  className="big-font"><i className="fa fa-check" aria-hidden="true"></i></span></td>
                                </tr>
                                 <tr>
                                    <td>covid 19 monitoring</td>
                                    <td><span><i className="fa fa-times" aria-hidden="true"></i></span></td>
                                    <td><span  className="big-font"><i className="fa fa-check" aria-hidden="true"></i></span></td>
                                </tr>
                                 <tr>
                                    <td>hospital cash benefit</td>
                                    <td><span><i className="fa fa-times" aria-hidden="true"></i></span></td>
                                    <td><span  className="big-font"><i className="fa fa-check" aria-hidden="true"></i></span></td>
                                </tr>
                                 <tr>
                                    <td>personal accident insurance</td>
                                    <td><span><i className="fa fa-times" aria-hidden="true"></i></span></td>
                                    <td><span  className="big-font"><i className="fa fa-check" aria-hidden="true"></i></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    <section id="financial" className="pricing-section suraksha pt-50 pb-50">
        <div className="container">
            <div className="wrap-suraksha heads">
                <div className="row justify-content-center">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                        <div className="section-title text-center mb-35">
                            <h2 className="text-white mb-25 wow fadeInUp" data-wow-delay=".2s">financial suraksha 4 easy steps mein</h2>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="wrap-suraksha">
                <container id="fullpage">
                    <section className="sectionslider">
                        <div className="row  d-flex align-items-center justify-content-center">
                            <div className="col-lg-1 col-md-1 col-sm-1 "></div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <img src="assets/img/slider/suraksha01.png" alt="Img" className="img-fluid" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2"></div>
                            <div className="col-lg-3 col-md-3  col-sm-3">
                                <div className="content">
                                    <h4>call karein ya humari website/app par plan chunein</h4>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1"></div>
                        </div>
                    </section>
                    <section className="sectionslider">
                        <div className="row  d-flex align-items-center justify-content-center">
                            <div className="col-lg-1 col-md-1 col-sm-1"></div>
                            <div className="col-lg-3 col-md-3  col-sm-3">
                                <img src="assets/img/slider/suraksha02.png" alt="Img" className="img-fluid" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2"></div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="content">
                                    <h4>Apni information  bhariye</h4>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1"></div>
                        </div>
                    </section>
                    <section className="sectionslider">
                        <div className="row  d-flex align-items-center justify-content-center">
                            <div className="col-lg-1 col-md-1 col-sm-1"></div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <img src="assets/img/slider/suraksha03.png" alt="Img" className="img-fluid" />
                            </div>
                            <div className="col-lg-2 col-md-2  col-sm-2"></div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="content">
                                    <h4>online payment kariye</h4>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1"></div>
                        </div>
                    </section>
                    <section className="sectionslider">
                        <div className="row  d-flex align-items-center justify-content-center">
                            <div className="col-lg-1 col-md-1 col-sm-1"></div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <img src="assets/img/slider/suraksha04.png" alt="Img" className="img-fluid" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2"></div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="content">
                                    <h4>rahiye  worry free</h4>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1"></div>
                        </div>
                    </section>
                </container>
            </div>
        </div>
    </section>
    <section id="news" className=" pt-70 pb-70">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12">
                    <div className="section-title mb-30 text-center">
                        <h2 className=" mb-25 wow fadeInUp" data-wow-delay=".1s">aiqahealth blog</h2>
                    </div>
                </div>
            </div>    
            <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                   <div className="CardLink_withBackgroundImage__gN8Vs typography_oscar2020_light__1m0RS typography_wrapper_light__1NEWP">
                        <div className="CardLink_shadow__1dCgh CardLink_shadow_1__2_uaG CardLink_oscar2020_light__1bFo4" tabindex="0">
                        	<a className="BasicLink_basicLink__2eHQO CardLink_container__wb7Et CardLink_active__2qLSW CardLink_oscar2020_light__1bFo4" href="#">
                                <div className="BackgroundImage_backgroundImage__36jjy CardLink_background__32Cc2 CardLink_background_1__JtjqI CardLink_background_bottomRight__3WSIH CardLink_oscar2020_light__1bFo4" style={{backgroundImage: `url("assets/img/Homepage_Card_Findplan_101521.png")` }} >
                                    <div className="CardLink_title__1I1vX">
                                        <h3 className="typography_h3__GdtlE">
                                            <p>Questions about a plan?</p>
                                        </h3>
                                    </div>
                                    <div className="CardLink_description__s3J4w">
                                        <p>Learn about your ID card, paying your bill, and your preventative care benefits!</p>
                                    </div><span className="CardLink_link__2Xi7g"><span className="CardLink_linkText__1QMcA typography_subText__2cP3g">Check out FAQs</span>
                                        <figure className="CardLink_arrow__3W5mh"><svg height="19" width="32" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="none" fill-rule="evenodd">
                                                    <path d="M25.596 8l-5.394-5.394L22.5.308l6.894 6.894L31.692 9.5 22.5 18.692l-2.298-2.298L25.596 11H0V8h25.596z" fill="currentColor"></path>
                                                </g>
                                            </svg>
                                        </figure>
                                    </span>
                                </div>
                            </a></div>
                    </div> 
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                   <div className="CardLink_withBackgroundImage__gN8Vs typography_oscar2020_light__1m0RS typography_wrapper_light__1NEWP">
                        <div className="CardLink_shadow__1dCgh CardLink_shadow_1__2_uaG CardLink_oscar2020_light__1bFo4" tabindex="0">
                        	<a className="BasicLink_basicLink__2eHQO CardLink_container__wb7Et CardLink_active__2qLSW CardLink_oscar2020_light__1bFo4" href="#">
                                <div className="BackgroundImage_backgroundImage__36jjy CardLink_background__32Cc2 CardLink_background_1__JtjqI CardLink_background_bottomRight__3WSIH CardLink_oscar2020_light__1bFo4" style={{backgroundImage: `url("assets/img/Homepage_Card_Findplan_101521.png")` }}>
                                    <div className="CardLink_title__1I1vX">
                                        <h3 className="typography_h3__GdtlE">
                                            <p>Questions about a plan?</p>
                                        </h3>
                                    </div>
                                    <div className="CardLink_description__s3J4w">
                                        <p>Learn about your ID card, paying your bill, and your preventative care benefits!</p>
                                    </div><span className="CardLink_link__2Xi7g"><span className="CardLink_linkText__1QMcA typography_subText__2cP3g">Check out FAQs</span>
                                        <figure className="CardLink_arrow__3W5mh"><svg height="19" width="32" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="none" fill-rule="evenodd">
                                                    <path d="M25.596 8l-5.394-5.394L22.5.308l6.894 6.894L31.692 9.5 22.5 18.692l-2.298-2.298L25.596 11H0V8h25.596z" fill="currentColor"></path>
                                                </g>
                                            </svg>
                                        </figure>
                                    </span>
                                </div>
                            </a></div>
                    </div> 
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                   <div className="CardLink_withBackgroundImage__gN8Vs typography_oscar2020_light__1m0RS typography_wrapper_light__1NEWP">
                        <div className="CardLink_shadow__1dCgh CardLink_shadow_1__2_uaG CardLink_oscar2020_light__1bFo4" tabindex="0">
                        	<a className="BasicLink_basicLink__2eHQO CardLink_container__wb7Et CardLink_active__2qLSW CardLink_oscar2020_light__1bFo4" href="#">
                                <div className="BackgroundImage_backgroundImage__36jjy CardLink_background__32Cc2 CardLink_background_1__JtjqI CardLink_background_bottomRight__3WSIH CardLink_oscar2020_light__1bFo4" style={{backgroundImage: `url("assets/img/Homepage_Card_Findplan_101521.png")` }}>
                                    <div className="CardLink_title__1I1vX">
                                        <h3 className="typography_h3__GdtlE">
                                            <p>Questions about a plan?</p>
                                        </h3>
                                    </div>
                                    <div className="CardLink_description__s3J4w">
                                        <p>Learn about your ID card, paying your bill, and your preventative care benefits!</p>
                                    </div><span className="CardLink_link__2Xi7g"><span className="CardLink_linkText__1QMcA typography_subText__2cP3g">Check out FAQs</span>
                                        <figure className="CardLink_arrow__3W5mh"><svg height="19" width="32" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="none" fill-rule="evenodd">
                                                    <path d="M25.596 8l-5.394-5.394L22.5.308l6.894 6.894L31.692 9.5 22.5 18.692l-2.298-2.298L25.596 11H0V8h25.596z" fill="currentColor"></path>
                                                </g>
                                            </svg>
                                        </figure>
                                    </span>
                                </div>
                            </a></div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
    {/* <section id="testimonials" className="testimonial-section">
        <div className="container-fluid">
            <div className="section-title text-center ">
                <h2 className="mb-30 text-white">the team behind aiqahealth</h2>
            </div>
            <div id="testimonialsSlider" className="mixedSlider">
                    <div className="MS-content">
                        <div className="item">
                            <div className="single-testimonial">
                                <div className="row justify-content-center">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex align-items-stretch">
                                        <div className="testimonial-img">
                                            <img src="assets/img/team/sunil-sachdeva.jpg" alt="Team" />
                                            <div className="quote">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 d-flex align-items-stretch">
                                        <div className="content-wrapper">
                                            <div className="content">
                                                <p>I have been in healthcare for the last 20 years and I believe technology-enabled healthcare is the way forward. aiqahealth can have a far higher positive impact on patient outcomes than traditional setups and will serve humanity in a big way.</p>
                                            </div>
                                            <div className="info">
                                                <h4>Sunil Sachdeva</h4>
                                                <p>Co-Founder</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-testimonial">
                                <div className="row justify-content-center">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4  d-flex align-items-stretch">
                                        <div className="testimonial-img">
                                            <img src="assets/img/team/karan-chopra.jpg" alt="Team" />
                                            <div className="quote">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8  d-flex align-items-stretch">
                                        <div className="content-wrapper">
                                            <div className="content">
                                                <p>Quality healthcare in India is centralized around a few clusters. I experienced this first hand growing up in a small city. With aiqahealth , we are building that puts patients first and provides equal access to great healthcare to everyone.</p>
                                            </div>
                                            <div className="info">
                                                <h4>Karan Chopra</h4>
                                                <p>Co-Founder</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-testimonial">
                                <div className="row justify-content-center">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex align-items-stretch">
                                        <div className="testimonial-img">
                                            <img src="assets/img/team/inish-merchant.jpg" alt="Team" />
                                            <div className="quote">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 d-flex align-items-stretch">
                                        <div className="content-wrapper">
                                            <div className="content">
                                                <p>I believe in businesses that have a social impact. Our healthcare infrastructure needs improvement. My primary focus is to make aiqahealth operationally excellent so that we can focus on the delivery of care and make it easily accessible for its members</p>
                                            </div>
                                            <div className="info">
                                                <h4>Inish Merchant</h4>
                                                <p>COO</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-testimonial">
                                <div className="row justify-content-center">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex align-items-stretch">
                                        <div className="testimonial-img">
                                            <img src="assets/img/team/sanjay-mahajan.jpg" alt="Team" />
                                            <div className="quote">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 d-flex align-items-stretch">
                                        <div className="content-wrapper">
                                            <div className="content">
                                                <p>Healthcare consumers today are changing & their expectations for convenience, affordability & quality services are redefining on how they engage at <a href="" data-bs-toggle="modal" data-bs-target="#testimonial1">Read More</a></p>
                                            </div>
                                            <div className="info">
                                                <h4>Sanjay Mahajan</h4>
                                                <p>CTO</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-testimonial">
                                <div className="row justify-content-center">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex align-items-stretch">
                                        <div className="testimonial-img">
                                            <img src="assets/img/team/nitin-kant.jpg" alt="Team" />
                                            <div className="quote">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 d-flex align-items-stretch">
                                        <div className="content-wrapper">
                                            <div className="content">
                                                <p>Technology driven medical assistance would help in rapidly bringing up the quality of healthcare in India. aiqahealth’s take off comes in with the vision of transforming the  <a href="" data-bs-toggle="modal" data-bs-target="#testimonial3">Read More</a></p>
                                            </div>
                                            <div className="info">
                                                <h4>Nitin Kant</h4>
                                                <p>CBO</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-testimonial">
                                <div className="row justify-content-center">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex align-items-stretch">
                                        <div className="testimonial-img">
                                            <img src="assets/img/team/rajat.jpg" alt="Team" />
                                            <div className="quote">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 d-flex align-items-stretch">
                                        <div className="content-wrapper">
                                            <div className="content">
                                                <p>If current scenario has taught us anything it is ,that quick and evidence driven innovation matters and solutions can emerge from crisis.  <a href="" data-bs-toggle="modal" data-bs-target="#testimonial2">Read More</a></p>
                                            </div>
                                            <div className="info">
                                                <h4>Rajat Arora</h4>
                                                <p>Head - Strategic Alliance</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                    <div className="MS-controls">
                        <button className="MS-left"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                        <button className="MS-right"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                    </div>
            </div>
            <div className="testimonial modal fade" id="testimonial1" tabindex="-1" aria-labelledby="testimonial1Label" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Healthcare consumers today are changing & their expectations for convenience, affordability & quality services are redefining on how they engage at each stage of healthcare services. Younger consumers are not satisfied with healthcare status quo and consumer from other generations too are more willing to try nontraditional healthcare services. Hence the providers who will lead this shift, navigate disruption & deliver what healthcare consumers are looking for will earn loyalty.</p>
        <p>aiqahealth is absolutely committed to this cause & launching various innovative technology solutions to exceed our customer expectation.</p>
      </div>
    </div>
  </div>
</div>

<div className="testimonial modal fade" id="testimonial2" tabindex="-1" aria-labelledby="testimonial2Label" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>If current scenario has taught us anything it is ,that quick and evidence driven innovation matters and solutions can emerge from crisis.</p>
        <p>By digitilizing healthcare services to  improve productivity and outcomes of patients, providers and heath system ,aiqa has made high quality healthcare products, affordable  and accessible to all</p>
      </div>
    </div>
  </div>
</div>

<div className="testimonial modal fade" id="testimonial3" tabindex="-1" aria-labelledby="testimonial3Label" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>technology driven medical assistance would help in rapidly bringing up the quality of healthcare in india. aiqahealth’s take off comes in with the vision of transforming the entire medical landscape in the country, making it more affordable, inclusive, qualitative and accessible to all.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    </section> */}
    <section id="contact" className="contact-section pt-100 pb-100">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-3 col-sm-12 d-flex align-items-center">
                    <div className="section-title">
                        <h2 className=" wow fadeInUp" data-wow-delay=".1s">let's connect!</h2>
                    </div>
                </div>
                 <div className="col-md-4 col-sm-12 d-flex align-items-center">
                    <div className="contactbox">
                        <div className="icon"><i className="fa fa-whatsapp" aria-hidden="true"></i></div>
                        <div className="content">
                            <h4>whatsApp us at</h4>
                            <a href="https://wa.me/916262306306">+91-6262306306</a>
                        </div>
                    </div>
                 </div>
                 <div className="col-md-1 col-sm-12 d-flex align-items-center">
                    <div className="section-title">
                        <h2 className=" wow fadeInUp" data-wow-delay=".1s">or</h2>
                    </div>
                </div>
                 <div className="col-md-4 col-sm-12 d-flex align-items-center">
                     <div className="contactbox">
                        <div className="icon"><i className="fa fa-headphones" aria-hidden="true"></i></div>
                        <div className="content">
                            <h4>call us at</h4>
                            <a href="tel:+916262306306">+91-6262306306</a>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </section>
    <section id="clients" className="testimonial-section client-section">
        <div className="container-fluid">
            <div className="section-title text-center ">
                <h2 className="mb-30 text-white">what people think about us</h2>
            </div>
            <div id="clientsSlider" className="mixedSlider">
                    <div className="MS-content">
                        <div className="item">
                            <div className="single-testimonial">
                                <div className="row justify-content-center">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex align-items-stretch">
                                        <div className="testimonial-img">
                                            <img src="assets/img/clients/anupa.jpg" alt="Team" />
                                            <div className="quote">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 d-flex align-items-stretch">
                                        <div className="content-wrapper">
                                            <div className="content">
                                                <p> really do like the service of Doctor On Call. Two weeks ago I started to have a sore throat and I used their service for the first time. I called and got with a Doctor right away and told them my symptoms.</p>
                                            </div>
                                            <div className="info">
                                                <h4>Anupa Sahu</h4>
                                                <p>Mahasamund / Chhattisgarh</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-testimonial">
                                <div className="row justify-content-center">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex align-items-stretch">
                                        <div className="testimonial-img">
                                            <img src="assets/img/clients/koshalaya.jpg" alt="Team" />
                                            <div className="quote">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 d-flex align-items-stretch">
                                        <div className="content-wrapper">
                                            <div className="content">
                                                <p>इस महामारी के समय में Doctor on Call बहुत ही उपयोगी सेवा हैI मैं इस सेवा से बहुत ही खुश हूँI इसके जरिए डॉक्टर से ऑनलाइन अपॉइंटमेंट लेना सरल हो गया है | डॉक्टर साहब ने बहुत ही ध्यानपूर्वक और धैर्य के साथ</p>
                                            </div>
                                            <div className="info">
                                                <h4>कौशल्या देवी</h4>
                                                <p>नीमकाथाना / राजस्थान</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-testimonial">
                                <div className="row justify-content-center">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex align-items-stretch">
                                        <div className="testimonial-img">
                                            <img src="assets/img/clients/rinki.jpg" alt="Team" />
                                            <div className="quote">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 d-flex align-items-stretch">
                                        <div className="content-wrapper">
                                            <div className="content">
                                                <p>There is no qualified doctor in my village and I have to travel 15kms to get a doctor consultation. Swasthya Sewa service enables me to speak to a doctor over the phone which saves my travel and I get instant consultation.</p>
                                            </div>
                                            <div className="info">
                                                <h4>Rinki Devi</h4>
                                                <p> Patna / Bihar</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-testimonial">
                                <div className="row justify-content-center">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex align-items-stretch">
                                        <div className="testimonial-img">
                                            <img src="assets/img/clients/magani.jpg" alt="Team" />
                                            <div className="quote">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 d-flex align-items-stretch">
                                        <div className="content-wrapper">
                                            <div className="content">
                                                <p>मेरा नाम मगनी राम है | में कुछ समय से पेट दर्द से परेशान था | तभी मैंने ऑनलाइन खोज करके स्वास्थ सेवा सुविधा बारे में जाना | तुरंत मैंने डॉक्टर फ़ोन लगाया I डॉक्टर को अपनी परेशानी के बारे बताया | </p>
                                            </div>
                                            <div className="info">
                                                <h4>मगनी राम</h4>
                                                <p>गंज बासौदा / मध्य प्रदेश</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                    <div className="MS-controls">
                        <button className="MS-left"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                        <button className="MS-right"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                    </div>
            </div>
            <div className="testimonial modal fade" id="clients1" tabindex="-1" aria-labelledby="clients1Label" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>I really do like the service of Doctor On Call. Two weeks ago I started to have a sore throat and I used their service for the first time. I called and got with a Doctor right away and told them my symptoms. She listened to me very patiently and prescribed the required medicines. My prescriptions were sent right over to me with no hassle. I did not have to wait long and it was a lot easier for me. I would gladly use this service again!</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="testimonial modal fade" id="clients2" tabindex="-1" aria-labelledby="clients2Label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>इस महामारी के समय में Doctor on Call बहुत ही उपयोगी सेवा हैI मैं इस सेवा से बहुत ही खुश हूँI इसके जरिए डॉक्टर से ऑनलाइन अपॉइंटमेंट लेना सरल हो गया है | डॉक्टर साहब ने बहुत ही ध्यानपूर्वक और धैर्य के साथ मेरी सभी परेशानी को सुना और मुझे दवाइयां बताई, जिससे की मेरा भुखार और खुजली कम होने में मदद मिली</p>
                </div>
                </div>
            </div>
            </div>

            <div className="testimonial modal fade" id="clients3" tabindex="-1" aria-labelledby="clients3Label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>मेरा नाम मगनी राम है | में कुछ समय से पेट दर्द से परेशान था | तभी मैंने ऑनलाइन खोज करके स्वास्थ सेवा सुविधा बारे में जाना | तुरंत मैंने डॉक्टर फ़ोन लगाया I डॉक्टर को अपनी परेशानी के बारे बताया | डॉक्टर साहब ने मेरे लक्षण पूछे और मुझे दवाई बताई I डॉक्टर साहब बताएं अनुसार मैंने दवाई का सेवन किया | और मुझे 2 घंटो के भीतर, मैं पहले बेहतर महसूस कर रहा थाI | Doctor On Call सेवा बहुत ही सुरक्षित और कुशल है | इस सेवा की वजह से मेरा बहुत समय बचा </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    <section id="download" className="download-section pt-100 pb-100">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-8">
                    <div className="section-title mb-30">
                        <h2 className=" mb-20 text-white wow fadeInUp" data-wow-delay=".1s">get the aiqahealth app <br/>for your mobile device</h2>
                        <h5 className=" mb-20 text-white wow fadeInUp" data-wow-delay=".1s">be better everyday with aiqahealth app</h5>
                        <a href="https://apps.apple.com/in/app/aiqahealth/id1588240478" target="_blank"><img src="assets/img/apple-store.png" alt="Img"/></a>
                         <a href="https://play.google.com/store/apps/details?id=com.aiqahealth" target="_blank"><img src="assets/img/play-store.png" alt="Img"/></a>
                    </div>
                </div>
                 <div className="col-md-4">
                      <img src="assets/img/aiqa-phone.png" className="img-fluid" alt="Img"/>
                 </div>
            </div>
        </div>
    </section>
    

    </div>


  );
}
export default Home;