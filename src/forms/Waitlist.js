import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loader from "react-loader-spinner";
import axios from 'axios';

function Waitlist() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const onSubmit = (data) => console.log(data);
  const onSubmit = (data) => {
    debugger;
    setLoader(true);
    axios.post(global.config.apiUrl + 'email', data)
      .then(function (response) {
        console.log(response);
        setMessage(true)
        setLoader(false);
        setTimeout(() => {
          // setMessage(false)
        }, 8000);

      })
      .catch(function (error) {
        setMessage(false)
      });
  };

  const [message, setMessage] = useState(false)
  const [loader, setLoader] = useState(false)


  return (
    <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="waitlist pt-3">
        {message ?
          <div className="col-md-12 mb-3 text-white">
            <h5>We will cover you soon!</h5>
            <p>To let us know it's really you and that you'd like to receive emails from us,
              please
              click the link in the confirmation email we just sent you. You can
              unsubscribe from
              these emails at any time.
            </p>
          </div> : ''}
          {!message ? 
        <div className="form-wrap">
          <input type="text" placeholder="Enter Your Email" {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
            className="form-control" name="email" />
          {errors.email && <small className="text-white">Email is required.</small>}
          <Loader
            type="Puff"
            color="#00BFFF"
            height={20}
            width={20}
            visible={loader}
          />
          {!loader && !message?
            <button type="submit" className="btn-get-started scrollto">Join the waitlist</button>
            : ''}
        </div>
        : ''}
        

      </div>
    </form>

  )

}

export default Waitlist;