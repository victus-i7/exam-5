import React from 'react';
import { NavLink } from 'react-router-dom';
const index = () => {
  return (
    <>

      <div className="container">
        <section>
          <div>
            <ul className="section-ul">
              <li > <a>
                <NavLink to="/" className="section-ul-li2">
                  Overwiew
                </NavLink>
              </a> </li>
              <li>
                <a >
                  <NavLink to="/repos" className="section-ul-li2">
                    Repositories
                  </NavLink></a>
              </li>
              <li className="section-ul-li2-3"><a href="https://github.com/victus-i7?tab=projects">Projects</a> </li>
              <li className="section-ul-li2-4"><a href="https://github.com/victus-i7?tab=packages"> Packages</a></li>
              <li className="section-ul-li2-5"><a href="https://github.com/victus-i7?tab=stars">Stars</a> </li>
            </ul>
          </div>

        </section>
        <div className="container">
          <p className='p-teg'>
            _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________
          </p>
        </div>


        <aside>
          <div>
            <img src="https://avatars.githubusercontent.com/u/109217433?v=4" alt="image" className='images' />
            <p className='p-teg2'>
              victus-i7
            </p>
            <div className='click'>
              Edit profile
            </div>
            <div className='follow'>
              <p className='pfloll'>
                <a href="https://api.github.com/users/victus-i7/followers" className='followers'>
                  <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-people">
                    <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                  </svg><b>1</b>followers</a>•
                <a href="https://github.com/victus-i7?tab=following" className='following'><b>3</b>following</a>

              </p>

            </div>
          </div>
        </aside>
        <p className='pName'>
          <h5 className='popular'>
            Popular repositories
          </h5>
          <h5 className='popular1'>
            Customize your
          </h5></p>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body1">
                <h5 class="card-title"><a href="https://github.com/victus-i7/first-name" className='maket'>first-name</a>

                </h5>
                <p className='p-text'>html,css</p>
                <p className='public'>
                  public
                </p>

                <p className='p-code2'>

                </p>
                <p className='p-css2'>
                  HTML
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body2">
                <h5 class="card-title"><a href="https://github.com/victus-i7/homework" className='maket'>homework</a> </h5>
                <p className='public'>
                  public
                </p>

              </div>
            </div>
          </div>

          <div class="col-sm-6 mt-3">
            <div class="card">
              <div class="card-body3">
                <h5 class="card-title"><a href="https://github.com/victus-i7/asistent-lesson5" className='maket'>asistent-lesson5</a></h5>
                <p className='p-text'>lesson-5</p><p className='public'>
                  public
                </p>

                <p className='p-code3'>

                </p>
                <p className='p-scss'>
                  scss
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mt-3">
            <div class="card">
              <div class="card-body4">
                <h5 class="card-title"><a href="https://github.com/victus-i7/homework4" className='maket'>homework4</a></h5>        <p className='p-text'>scss</p>
                <p className='public'>
                  public
                </p>

                <p className='p-code3'>

                </p>
                <p className='p-scss'>
                  scss
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 mt-3">
            <div class="card">
              <div class="card-body5">
                <h5 class="card-title"><a href="https://github.com/victus-i7/web-group-55" className='maket'>web-group-55</a></h5>   <p className='p-text'>homework1-2oy</p>
                <p className='public'>
                  public
                </p>

                <p className='p-code2'>

                </p>
                <p className='p-css2'>
                  HTML
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mt-3">
            <div class="card">
              <div class="card-body6">
                <h5 class="card-title"><a href="https://github.com/victus-i7/homework5" className='maket'>homework5</a></h5>
                <p className='p-text'>html</p>
                <p className='public'>
                  public
                </p>
                <p className='p-code3'>

                </p>
                <p className='p-scss'>
                  scss
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default index;