import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loader from "react-loader-spinner";
import axios from 'axios';
import $ from 'jquery';

function Individual() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    //   const onSubmit = (data) => console.log(data);
    const onSubmit = (data) => {
        setLoader(true);
        data.type = 'individual'
        axios.post(global.config.apiUrl + 'lead', data)
            .then(function (response) {
                console.log(response);
                setMessage(true)
                setLoader(false);

                $('#leadform')[0].reset();

                setTimeout(() => {
                    setMessage(false)
                }, 8000);

            })
            .catch(function (error) {

                debugger;
                setMessage(false)
            });
    };

    const [message, setMessage] = useState(false)
    const [loader, setLoader] = useState(false)

    return (
        <div>

            <form id="leadform" onSubmit={handleSubmit(onSubmit)}>
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
                                <input {...register('name', { required: true, pattern: /^[A-Za-z]/i })} type="text"
                                    className="form-control" name="name" />
                                {errors.name && <small class="error">Name is required.</small>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Your Phone Number</label>
                                <input {...register('mobile', { required: true, maxLength: 10, minLength:10 })} type="number" className="form-control"
                                    name="mobile" />
                                {errors.mobile && <small class="error">Mobile is required.</small>}

                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="email">Your Email Address <span className="star">*</span></label>
                                <input type="email" {...register('email', { required: true,  pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} className="form-control"
                                    name="email" className="form-control" />
                                {errors.email && <small class="error">Email is required.</small>}

                            </div>
                        </div>

                        {/* <div className="col">
                            <div className="form-group">
                                <label htmlFor="pin">Pin code<span className="star">*</span></label>
                                <input type="number" {...register('pin', { required: true, maxLength: 6, minLength:6 })} className="form-control  " />
                                {errors.pin && <small class="error">Pin code is required.</small>}

                            </div>
                        </div> */}

                    </div>

                    {/* <div className="row row-cols-1 row-cols-lg-1">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="employee">Your Message</label>
                                <textarea  {...register('message', { required: false })} className="form-control" name="message">
                                </textarea>
                            </div>
                        </div>
                    </div> */}
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

                        <button type="submit"
                            className="btn btn-danger " >Submit</button>
                        : ''}

                </div>
            </form>
        </div>
    )
}

export default Individual;