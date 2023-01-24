import React from 'react';
import { NavLink } from 'react-router-dom';
const inde = () => {
  return (
    <>

      <section className=''>
        <div>
          <ul className="section-ul2">
            <li > <a>
              <NavLink to="/" className="section-ul-li2-2">
                Overwiew
              </NavLink>
            </a> </li>
            <li>
              <a >
                <NavLink to="/repos" className="section-ul-li2-2">
                  Repositories
                </NavLink></a>
            </li>
            <li className="section-ul-li2-3"><a href="https://github.com/victus-i7?tab=projects">Projects</a> </li>
            <li className="section-ul-li2-4"><a href="https://github.com/victus-i7?tab=packages"> Packages</a></li>
            <li className="section-ul-li2-5"><a href="https://github.com/victus-i7?tab=stars">Stars</a> </li>
          </ul>
        </div>

      </section>
      <div className="container">  <p className='p-teg-2'>
        ______________________________________________________________________________________________________________________________________________________________________________________________________________________________________ </p></div>


      <aside>
        <div className='container'>
          <img src="https://avatars.githubusercontent.com/u/109217433?v=4" alt="image" className='images' />
          <p className='p-teg2'>
            victus-i7
          </p>
          <div className='click'>
            Edit profile
          </div>
          <div className='follow'>
            <p className='pflolll'>
              <a href="https://api.github.com/users/victus-i7/followers" className='followers'>
                <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-people">
                  <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                </svg><b>1</b>followers</a>•
              <a href="https://github.com/victus-i7?tab=following" className='following'><b>3</b>following</a>
            </p>
          </div>
        </div>
      </aside>
      <div className="container ">

        <input type="text" placeholder='Find a repository…' className='find df-justify-content-center text-color-white' />

        <div className='btn1'>
          <button type="button" className="btn btn-outline-secondary">Type</button>
          <button type="button" className="btn btn-outline-secondary">Language</button>
          <button type="button" className="btn btn-outline-secondary">Sort</button>
        </div>
        <a href="https://github.com/new" className="text-center btn btn3 ml-3" >
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo newa">
            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
          </svg>
          New
        </a>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/exam--4" className='imtihon-3'>exam--4</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''>SCSS</p>
              <p className='update'> Updated on Dec 15, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/exam-4" className='imtihon-3'>exam-4</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            HTML SCSS JAVASCRIPT
          </p>
          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''>SCSS</p>
              <p className='update'> Updated on Dec 15, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/homework-4_7" className='imtihon-3'>homework-4_7</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>

          <div className="class">
            <div className="kl">
              <p className='publicss'></p>
              <p className=''>JavaScript</p>
              <p className='update'>Updated on Dec 6, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/homework-4-7" className='imtihon-3'>homework-4-7</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            HTML CSS JAVA SCRIPT
          </p>
          <div className="class">
            <div className="kl">
              <p className='publicss'></p>
              <p className=''>JavaScript</p>
              <p className='update'>Updated on Dec 6, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/exam-_3" className='imtihon-3'>exam-_3</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>

          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''>SCSS</p>
              <p className='update'>Updated on Nov 17, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/exam_3" className='imtihon-3'>exam_3</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            HTML SCSS CSS JAVASCRIPT
          </p>
          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''> SCSS </p>
              <p className='update'>Updated on Nov 16, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/exam-2-oy" className='imtihon-3'>exam-2-oy</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>

          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''> SCSS </p>
              <p className='update'>Updated on Oct 19, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/exam-2oy" className='imtihon-3'>exam-2oy</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            HTML SASS CSS
          </p>
          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''> SCSS </p>
              <p className='update'>Updated on Oct 19, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/exam2-1.4" className='imtihon-3'>exam2-1.4</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            HTML SASS CSS
          </p>
          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''> SCSS </p>
              <p className='update'>Updated on Oct 19, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/exam2-1.3" className='imtihon-3'>exam2-1.3</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            HTML SASS CSS
          </p>
          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''> SCSS </p>
              <p className='update'>Updated on Oct 19, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/exam2-1.2" className='imtihon-3'>exam2-1.2</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            HTML SASS CSS http://exam2-1-2.vercel.app/
          </p>
          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''> SCSS </p>
              <p className='update'>Updated on Oct 19, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/exam2-1-2" className='imtihon-3'>exam2-1-2</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>

          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''> SCSS </p>
              <p className='update'>Updated on Oct 19, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/exam2-1-3" className='imtihon-3'>exam2-1-3</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>

          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''> SCSS </p>
              <p className='update'>Updated on Oct 19, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/exam2-1-4" className='imtihon-3'>exam2-1-4</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>

          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''> SCSS </p>
              <p className='update'>Updated on Oct 19, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/exam-3" className='imtihon-3'>exam-3</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>

          <div className="class">
            <div className="kl">
              <p className='codecss'></p>
              <p className=''>CSS </p>
              <p className='update'>Updated on Sep 7, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/imtihon-3" className='imtihon-3'>imtihon-3</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            Java Script
          </p>
          <div className="class">
            <div className="kl">
              <p className='codecss'></p>
              <p className=''> CSS </p>
              <p className='update'>Updated on Sep 7, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/IbrakhimIsmoiljon-js" className='imtihon-3'>IbrakhimIsmoiljon-js</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>

          <div className="class">
            <div className="kl">
              <p className='codecss'></p>
              <p className=''> CSS </p>
              <p className='update'>Updated on Aug 31, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/homework-10js" className='imtihon-3'>homework-10js</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>

          <div className="class">
            <div className="kl">
              <p className='codecss'></p>
              <p className=''> CSS </p>
              <p className='update'>Updated on Aug 31, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/homework-js10" className='imtihon-3'>homework-js10 </a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>

          <div className="class">
            <div className="kl">
              <p className='codecss'></p>
              <p className=''> CSS </p>
              <p className='update'>Updated on Aug 31, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/homework-js-10" className='imtihon-3'>homework-js-10 </a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            Java Script
          </p>
          <div className="class">
            <div className="kl">

              <p className='updates'>Updated on Aug 31, 2022</p>

            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/homework10--js" className='imtihon-3'>homework10--js</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>

          <div className="class">
            <div className="kl">
              <p className='codecss'></p>
              <p className=''> CSS </p>
              <p className='update'>Updated on Aug 31, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/homework-10-js" className='imtihon-3'>homework-10-js </a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>

          <div className="class">
            <div className="kl">
              <p className='codecss'></p>
              <p className=''> CSS </p>
              <p className='update'>Updated on Aug 31, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/homework10-js" className='imtihon-3'>homework10-js </a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            Java Script
          </p>
          <div className="class">
            <div className="kl">
              <p className='codecss'></p>
              <p className=''> CSS </p>
              <p className='update'>Updated on Aug 31, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/homework-7-js" className='imtihon-3'>homework-7-js</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>

          <div className="class">
            <div className="kl">
              <p className='codecss'></p>
              <p className=''> CSS </p>
              <p className='update'>Updated on Aug 24, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/homework7-js" className='imtihon-3'>homework7-js</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            Java Script
          </p>
          <div className="class">
            <div className="kl">
              <p className='codecss'></p>
              <p className=''> CSS </p>
              <p className='update'>Updated on Aug 24, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/homework-5-6" className='imtihon-3'>homework-5-6</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>

          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''> SCSS </p>
              <p className='update'>Updated on Aug 21, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/homework5-6" className='imtihon-3'>homework5-6 </a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            Java-script
          </p>
          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''> SCSS </p>
              <p className='update'>Updated on Aug 21, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/homework4-js" className='imtihon-3'>homework4-js </a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            JavaScript
          </p>
          <div className="class">
            <div className="kl">
              <p className='publicss'></p>
              <p className=''>  JavaScript </p>
              <p className='update'>Updated on Aug 17, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/lesson2" className='imtihon-3'>lesson2</a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            js
          </p>
          <div className="class">
            <div className="kl">
              <p className='publics'></p>
              <p className=''>  JavaScript </p>
              <p className='update'>Updated on Aug 12, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

      <div className="container">
        <div className='cards'>
          <p className='pi-teg0'>

          </p>
          <p className="priv">
            <h5>
              <a href="https://github.com/victus-i7/exam--4" className='imtihon-3'>exam-2 </a>
            </h5>

            <p className='private'>
              Private
            </p>
          </p>
          <p className='text_priv'>
            html
          </p>
          <div className="class">
            <div className="kl">

              <p className='updates'>Updated on Aug 8, 2022</p>
            </div>

            <div className='cheack'>

              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block patz">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>Star
            </div>


          </div>


        </div>
      </div>

    </>
  );
};

export default inde;