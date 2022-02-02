import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import Moment from 'react-moment';


function Blogdetails() {

  const [item, setData] = useState()
  const [isActive, active] = useState(true)
  const [recents, recentPost] = useState([])

  let { slug } = useParams();

  useEffect(() => {

    axios.get(global.config.apiUrl + 'blog-detail/' + slug)
      .then(function (response) {
        setData(response.data.item);
        recentPost(response.data.recents);
        debugger;
        active('');
      })
      .catch(function (error) {
        active('');

      });

  }, [])

  return (
    <div>
      <LoadingOverlay
        active={isActive}
        spinner={<BounceLoader />}
        text='Loading blogs...'>
        {item ?
          <section className="breadcrumbs">
            <div className="container p-3">

              <div className="d-flex justify-content-between align-items-center">
                <h2>{item.title}</h2>
                <ol>
                  <li><a href="{{ url('/') }}">Home</a></li>
                  <li><Link to="/blog">Blogs</Link></li>
                </ol>
              </div>

            </div>
            <section id="blog" className="inner-page blog  blog-detail">
              <div className="container">

                <div className="row">

                  <div className="col-12">
                    <div className="row">

                      <div className="col-md-8">
                        <div className="blog-item aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                          <div className="pic">
                            <img src={item.path} className="img-responsive"></img>

                          </div>

                          <div className="member-info text-left pt-4">
                            <h1 className="heading">{item.title}</h1>
                            <small><i className="fa fa-calendar"></i>
                              {item.created_at}</small>
                            <p dangerouslySetInnerHTML={{ __html: item.description }}></p>

                          </div>

                        </div>
                      </div>


                      <div className="col-md-4 ">
                        <h4 className="text-left text-danger">Recent Posts</h4>

                        {recents.map((recent) =>

                          <div className="card mb-2">
                            <div className="card-body">
                              <Link to={item.slug}>
                                <div className="row blog-item aos-init aos-animate" data-aos="zoom-in"
                                  data-aos-delay="100">
                                  <div className="col-4 pic">
                                    <img src={recent.path} alt=""
                                      className="img-responsive" width="100%" />
                                  </div>
                                  <div className="col-8 text-left">
                                    <h5>{recent.title}</h5>
                                    <small><i className="fa fa-calendar"></i>
                                      <Moment format="DD/MM/YYYY" date={new Date(recent.created_at)} />

                                    </small>

                                  </div>

                                </div>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>


                    </div>

                  </div>


                </div>

              </div>
            </section>
          </section>


          : ''}
      </LoadingOverlay>

    </div>
  )
}
export default Blogdetails;