import React, { useState } from 'react';
import Loader from "react-loader-spinner";
import axios from 'axios';
import $ from 'jquery';
var API_URL = 'http://127.0.0.1:8000/';

function Business() {

    const [formValues, setFormValues] = useState({
        type: 'business'
    })
    const [message, setMessage] = useState(false)
    const [loader, setLoader] = useState(false)


    function handleChange(key, value) {
        return setFormValues({ ...formValues, [key]: value })
    }

    function submitClick() {
        setLoader(true);

        axios.post(API_URL + 'api/lead', formValues)
            .then(function (response) {
                console.log(response);
                setMessage(true)
                setLoader(false);

                $('#leadform')[0].reset();

                setTimeout(() => {
                    setMessage(false)
                }, 2000);

            })
            .catch(function (error) {
                setMessage(false)
                setLoader(false);

            });
    }

    return (
        <form >

            <div className="modal-body">
                {message ?
                    <div className="alert alert-success alert-dismissible">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Thanks, Your request has been created successfully </strong>
                    </div>
                    : ''}
                <div className="row row-cols-1 row-cols-lg-2">

                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="coverage">Your Name<span className="star">*</span></label>
                            <input type="text"
                                className="form-control" onChange={(e) => handleChange(e.target.name, e.target.value)} name="name" />


                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Your Phone Number</label>
                            <input type="number" onChange={(e) => handleChange(e.target.name, e.target.value)} className="form-control"
                                name="mobile" />

                        </div>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="email">Your Email Address <span className="star">*</span></label>
                            <input onChange={(e) => handleChange(e.target.name, e.target.value)} type="email" className="form-control" name="email" />

                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="pin">Pin code<span className="star">*</span></label>
                            <input type="number" name="pin" onChange={(e) => handleChange(e.target.name, e.target.value)} className="form-control"
                            />

                        </div>
                    </div>

                </div>

                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="pin">Name Of Your Organization<span className="star">*</span></label>
                            <input type="text" onChange={(e) => handleChange(e.target.name, e.target.value)} className="form-control" name="business_name" />

                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="employee">Total employees covered <span className="star">*</span></label>
                            <input type="number" onChange={(e) => handleChange(e.target.name, e.target.value)} className="form-control"
                                name="employee" />
                        </div>
                    </div>

                </div>
                <div className="row row-cols-1 row-cols-lg-1">

                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="employee">Your Message</label>
                            <textarea onChange={(e) => handleChange(e.target.name, e.target.value)} className="form-control" name="message">
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-footer">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={20}
                width={20}
                visible={loader}
            />
            {!loader ? 
                <button type="button"
                    className="btn btn-danger " onClick={submitClick}>Submit</button>
                    : ''}

            </div>
        </form>
    )
}

export default Business