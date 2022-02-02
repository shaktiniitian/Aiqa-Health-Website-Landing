import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loader from "react-loader-spinner";
import axios from 'axios';
import $ from 'jquery';

function Business() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    //   const onSubmit = (data) => console.log(data);
    const onSubmit = (data) => {
        setLoader(true);
        data.type = 'business'
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
        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                 {message ?
                    <div className="alert alert-success alert-dismissible">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>HAPPY TO HELP. OUR TEAM WILL REACH OUT TO YOU WITH THE BEST POSSIBLE PLAN FOR YOU  </strong>
                    </div>
                    : ''}
                    <div className="col-md-12 ">
                        <label for="name" class="form-label">Name*</label>
                        <input type="text" placeholder="enter your name*" className="form-control" {...register('name', { required: true, pattern: /^[A-Za-z]/i })} name="name" />
                                {errors.name && <small class="error">Name is required.</small>}
                        
                    </div>
                    <div className="col-md-12">
                        <label for="phone" class="form-label">Phone*</label>
                        <input type="number" placeholder="enter your phone*" {...register('mobile', { required: true, maxLength: 10, minLength: 10 })} className="form-control"
                                name="mobile" />{errors.mobile && <small class="error">Phone No. is required.</small>}
                       
                    </div>
                    <div className="col-md-12">
                    <label for="email" class="form-label">Email*</label>
                            <input {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} type="email" placeholder="enter your email*" className="form-control" name="email" />
                            {errors.email && <small class="error">Email is required.</small>}
                    </div>
                    <div class="col-12">
                    <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={20}
                    width={20}
                    visible={loader}
                />
                {!loader ?
                    <button type="submit"
                        className="btn btn-primary" >Submit</button>
                    : ''}
                    </div>

            
        </form>
    )
}

export default Business