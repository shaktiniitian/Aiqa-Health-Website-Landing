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
    email: '',
    pin: '',
    message: ''
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
      <section id="hero" className="pt-0">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className=" col-lg-7 py-5 py-lg-0 order-2 order-lg-1" data-aos=" fade-right ">
              <div className="container">
                <div className="row">
                  <div className="col-10 offset-2 pl-5">

                    <h1>₹0 upfront premium for your health cover coming soon </h1>

                    <Waitlist></Waitlist>


                  </div>
                </div>
              </div>
            </div>
            <div className=" col-lg-5 order-1 order-lg-2 hero-img " data-aos=" fade-left ">
              <img src=" assets/img/banner.png " className=" img-fluid " alt=" " />
            </div>
          </div>
        </div>

      </section>
      <main id="main mt-5 ">
        <section className="section-bg welcome section pb-0">
          <div className="container ">
            <div className="row ">
              <div className="col pb-4" ata-aos="fade-in ">
                <h3 data-aos="fade-in " data-aos-delay="100 ">Hey, nice to meet you. We're aiqahealth</h3>
                <p className="font-23" data-aos="fade-in " data-aos-delay="100 ">Welcome to care that meets your need.
                  See how we are building a better experience for people just like you.</p>
              </div>
            </div>
          </div>
        </section>
        <section id=" team " className=" team section-bg ">
          <div className=" container ">

            <div className=" row row-cols-1 row-cols-md-3 fadeInUp ">

              <div className=" col">
                <div className=" member" data-aos-delay="100 ">
                  <div className=" heading col-12 pt-4 text-left ">Unlimited Doctor Consultation</div>
                  <img src=" assets/img/online-doctor.PNG " className=" img-fluid " alt=" " />
                </div>
              </div>

              <div className=" col ">
                <div className=" member aos-init aos-animate" data-aos=" fade-up " data-aos-delay=" 200 ">
                  <div className=" heading col pt-4 text-left "> ₹0 Upfront Cost Health Cover 
                 
                  </div>

                  <img src=" assets/img/hospitalization.png " className="img-fluid  " alt=" " />
                </div>
              </div>

              <div className=" col ">
                <div className=" member aos-init aos-animate " data-aos=" fade-in " data-aos-delay=" 300 ">
                  <div className=" heading col pt-4 text-left ">Digital Lifestyle and Health Tracker </div>


                  <img src=" assets/img/checkup.PNG" className=" img-fluid " alt=" " />
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* <section className="section-plan  section ">
          <div className="container ">
            <div className="row ">

              <div className="col-lg-9 col-md-9 d-flex align-items-center  aos-init aos-animate" ata-aos="fade-in ">
              <div className=" section-title ">
                <h2>Plans</h2>
                <p className="font-23">Kare sabse phle apni dekhbal. Paye 360 degree medical care,  swastha beema aur dhurghatna beema</p>
                <p>Rs. 2.5/daily se shuru.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 d-flex align-items-center  aos-init aos-animate " ata-aos="fade-in ">
              <Link to="/plan" className="btn-get-started">View Our Plan</Link>
              </div>
            </div>
          </div>
        </section>             */}
        

        <section className=" section-bg ">
          <div className=" container " data-aos=" zoom-in ">
            <div className=" section-title ">
              <h2>Mutual Aid</h2>
              <p className="font-23">Forget everything you know about insurance! aiqahealth reverses the traditional
                insurance model</p>
            </div>
            <div className=" row justify-content-around">
              <div className="col offset-4">
                <img src="assets/img/mutual-card.png" className="img-responsive"></img>

              </div>
              <h4 className="text-danger p-2"> I am for everyone, everyone is for me</h4>
              <p className="text-center font-23 p-2">You only pay when a member claims. If the community does not fall
                sick,
                you pay ₹0.</p>
            </div>
          </div>
        </section>


        <section id="services" className="services section-bg">
          <div className="container aos-init aos-animate" data-aos="fade-up">

            <div className="section-title">
              <h2>How is aqiahealth different <br /> from traditional health insurance
              </h2>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in"
                data-aos-delay="100">
                <div className="icon-box iconbox-blue">
                  <div className="icon">
                    <img src="assets/img/upfront-premium.png" className="img-responsive">
                    </img>
                  </div>
                  <h4><a href="">No upfront premium</a></h4>
                  <p>We at aiqahealth we only do postpaid fortnightly premium. Also if nobody in the community is falling sick, we don't take any money. Full transparency.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate"
                data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box iconbox-orange ">
                  <div className="icon">
                    <img src="assets/img/co-pay.png" className="img-responsive">
                    </img>

                  </div>
                  <h4><a href="">No co-pay</a></h4>
                  <p>We at aiqahealth don't believe in co-pay, you entire hospital bill is picked up by the community.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 aos-init aos-animate"
                data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box iconbox-pink">
                  <div className="icon">
                    <img src="assets/img/disease.png" className="img-responsive">
                    </img>
                  </div>
                  <h4><a href="">No disease sub-limit</a></h4>
                  <p>We at aiqahealth don't believe in co-pay, you entire hospital bill is picked up by the community.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate" data-aos="zoom-in"
                data-aos-delay="100">
                <div className="icon-box iconbox-yellow">
                  <div className="icon">

                    <img src="assets/img/no-waiting.png" className="img-responsive">
                    </img>
                  </div>
                  <h4><a href="">No long waiting period</a></h4>
                  <p>We at aiqahealth only have a 6 month waiting period for 5 diseases unlike traditional insurance which makes you wait for 2 (or sometimes 4) years before claiming hospital bills.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate" data-aos="zoom-in"
                data-aos-delay="200">
                <div className="icon-box iconbox-red">
                  <div className="icon">
                    <img src="assets/img/treatment.png" className="img-responsive">
                    </img>

                  </div>
                  <h4><a href="">Daycare treatment is covered</a></h4>
                  <p>
                  We at aiqahealth will cover your daycare treatments unlike traditional insurance which insist to cover treatment involving a minimum of 24 hours at the hospital.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate" data-aos="zoom-in"
                data-aos-delay="300">
                <div className="icon-box iconbox-teal">
                  <div className="icon">
                    <img src="assets/img/consult.png" className="img-responsive">
                    </img>

                  </div>
                  <h4><a href="">Fit-care, not sick-care</a></h4>
                  <p>We at aiqahealth support you with digital health trackers and unlimited OPDs work to keep you fit.</p>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <section id=" plan-detail " className=" plan-detail section-plan section-bg">
        <div className=" container " data-aos=" zoom-in ">
       
          <div className=" section-title text-center">
            <h2>Learn more about our plans</h2>
            {/* <p className="font-23">Kare sabse phle apni dekhbal. Paye 360 degree medical care,  swastha beema aur dhurghatna beema</p>
                <p>Rs. 3/daily se shuru.</p>
                <Link to="/plan" className="btn-get-started">View Our Plan</Link> */}
          </div>
          <div className=" row justify-content-around">
            <div className="col col-lg-9  ">

              <div className=" card mb-3 " id="individual">

                <div className=" card-body pointer" data-toggle="modal" data-target="#myModal" onClick={() => handleClick('individual')} >
                  <div className="row row-cols-1 row-cols-md-2">
                    <div className="col col-lg-5 ">
                      <img src=" assets/img/family.jpg " width=" 350 "></img>
                    </div>
                    <div className="col col-lg-7 pt-5 ">

                      <h3 className=" heading ">
                        Plans for Individual & Family</h3>
                      <p>Health plan made for you! aiqahealth gives you affordable health plan that fits your life with unlimited doctor consults -  anytime, anywhere. </p>


                    </div>
                  </div>
                </div>
              </div>

              <div className=" card " id="business">

                <div className=" card-body pointer" data-toggle="modal" data-target="#myModal" onClick={() => handleClick('business')} >
                  <div className=" row row-cols-1 row-cols-md-2 ">

                    <div className="col col-lg-5 ">
                      <img src=" assets/img/business.jpg " width=" 350 ">

                      </img>
                    </div>
                    <div className="col col-lg-7 pt-5 ">
                      <h3 className=" heading ">Plans for Business</h3>

                      <p>Affordable plans that save your money! You save on business health insurance and with aiqahealth get treated at hospital of your choice and consult with hundreds of doctor available on a click of a button.

                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">Request a quote </h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

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


  );
}
export default Home;