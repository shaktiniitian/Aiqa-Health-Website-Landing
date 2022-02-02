import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'

function Blog() {

  const [items, setData] = useState([])
  const [isActive, active] = useState(true)


  useEffect(() => {

    axios.get(global.config.apiUrl + 'blogs')
      .then(function (response) {
        setData(response.data.blogs);
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
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>Blog</h2>
            <ol>
              <li><Link to="/">Home</Link></li>
              <li>Blogs {isActive}</li>
            </ol>
          </div>

        </div>
      </section>
      <section id="blog" className="inner-page blog">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <div className="row row-cols-1 row-cols-lg-3">

                {items.map((item) =>

                  <div className="col">
                    <Link to={item.slug}>
                      <div className="blog-item aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                        <div className="pic">
                          <img src={item.path} alt=""
                            className="img-responsive" width="100%" />

                        </div>
                        <div className="member-info">
                          <h4>{item.title}</h4>
                          <p dangerouslySetInnerHTML={{ __html: item.description.substring(0, 180) }}>

                          </p>

                        </div>
                      </div>
                    </Link>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </section>
      </LoadingOverlay>

    </div>
  )
}
export default Blog;