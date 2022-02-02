import React, { useState } from 'react';
import axios from 'axios';
import Individual from '../forms/Individual';
import Business from '../forms/Business';

function Plan() {
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
            <section  className="page-banner planpage">
    <div className="container">
        <div className="row align-items-center position-relative">
            <div className="col-lg-12">
                <div className="section-title text-center page-caption">
                    <h1>Plan</h1>
                    <p className="wow fadeInUp" data-wow-delay=".4s">kare sabse phle apni dekhbal. Paye 360 degree medical care,  swastha beema aur dhurghatna beema </p>
                    <p className="wow fadeInUp" data-wow-delay=".6s"><b>₹ 3/daily se shuru.</b></p>
                </div>
           </div>
        </div>
    </div>
</section>
<section  className="pricing-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div className="section-title text-center mb-35">
                        <h2 className="mt-25 mb-25 wow fadeInUp" data-wow-delay=".2s">Get a customised plan for you loved ones</h2>
                     </div>
                </div>
            </div>
            <div className="row my-popup">
                        <div className="col-md-6 offset-md-3">
                            <div className="modal-body">
                            {data == 'individual' ?

                            <Individual></Individual>
                            : null}


                            {data != 'individual' ?
                            <Business></Business>
                            : null}
                              </div>
                        </div>
                    </div>
            <div className="row justify-content-center">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div className="section-title text-center mb-35">
                        <p><b>To get more details on our health care services and plans you can get in touch with us on <a href="tel:+91 6262306306" >+91 6262306306</a></b></p>
                     </div>
                </div>
            </div>
        </div>
    </section>
    <section  className="download-section pt-100 pb-100">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 text-center">
                    <div className="section-title mb-30">
                        <h2 className="mb-20 text-white wow fadeInUp" data-wow-delay=".1s" >to know more about our plans <br/> download the app for your mobile device </h2>
                        {/* <h2 className="mb-20 text-white wow fadeInUp" data-wow-delay=".1s" >get the aiqahealth app for your mobile device</h2> */}
                        {/* <h5 className="mb-20 text-white wow fadeInUp" data-wow-delay=".1s" >be better everyday with aiqahealth app</h5> */}
                        <a href="https://apps.apple.com/in/app/aiqahealth/id1588240478" target="_blank"><img src="assets/img/apple-store.png" alt="Img" /></a>
                         <a href="https://play.google.com/store/apps/details?id=com.aiqahealth" target="_blank"><img src="assets/img/play-store.png" alt="Img" /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Plan;