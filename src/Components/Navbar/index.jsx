import React from 'react';

const index = () => {
  return (
    <>
      <div className="container">
        <nav className='navbar'>
          <ul className='nav-ul'>
            <li className='nav-ul-li1'><div className="Header-item mt-n1 mb-n1  d-none d-md-flex">
              <a className="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage " data-turbo="false" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;}">
                <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                  <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>

            </div></li>
            <li className='nav-ul-li2'><input type="text" placeholder='Search or jump to...' className='search ' />
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" className="mr-1 header-search-key-slash nav-in"><path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path></svg></li>
            <li className='nav-ul-li3'><a href="https://github.com/pulls">Pull requests</a> </li>
            <li className="nav-ul-li4"><a href="https://github.com/issues">Issues</a> </li>
            <li className="nav-ul-li44"><a href="https://github.com/codespaces">Codespaces</a></li>
            <li className="nav-ul-li5"><a href="https://github.com/marketplace">Marketplace</a></li>
            <li className="nav-ul-li6"><a href="https://github.com/explore">Explore</a></li>
            <li className="nav-ul-li7">
              <div className="Header-item mr-0 mr-md-3 flex-order-1 flex-md-order-none">


                <notification-indicator data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTA5MjE3NDMzIiwidCI6MTY3NDU2NDcyOX0=--13e1ae5c5c352f1f4eaa351fe40f9be5541a497ff7a950789deac0c17f648433" data-indicator-mode="global" data-tooltip-global="You have unread notifications" data-tooltip-unavailable="Notifications are unavailable at the moment." data-tooltip-none="You have no unread notifications" data-view-component="true" className="js-socket-channel" data-catalyst="">
                  <a id="AppHeader-notifications-button" href="/notifications" className="Header-link notification-indicator position-relative tooltipped tooltipped-sw" data-hotkey="g n" data-target="notification-indicator.link" aria-label="You have unread notifications" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to notifications&quot;,&quot;label&quot;:&quot;icon:unread&quot;}">

                    <span data-target="notification-indicator.badge" className="mail-status unread">
                    </span>

                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-bell">
                      <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fill-rule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path>
                    </svg>
                  </a>

                </notification-indicator>
              </div></li>
            <li className='nav-ul-li8'>
              <div className="Header-item position-relative d-none d-md-flex">
                <details className="details-overlay details-reset detal">
                  <summary className="Header-link" aria-label="Create new…" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;create new&quot;,&quot;label&quot;:&quot;icon:add&quot;}" aria-haspopup="menu" role="button">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-plus">
                      <path fill-rule="evenodd" d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path>
                    </svg> <span className="dropdown-caret"></span>
                  </summary>
                  <details-menu className="dropdown-menu dropdown-menuy dropdown-menu-sw" role="menu">
                    <div className="dropdown-menuu">
                      <a role="menuitem" className="dropdown-item dropdown-item1" href="https://github.com/new" data-ga-click="Header, create new repository">
                        New repository
                      </a>

                      <a role="menuitem" className="dropdown-item dropdown-item1" href="https://github.com/new/import" data-ga-click="Header, import a repository">
                        Import repository
                      </a>

                      <a role="menuitem" className="dropdown-item dropdown-item1" href="https://github.com/codespaces/new">
                        New codespace
                      </a>

                      <a role="menuitem" className="dropdown-item dropdown-item1" href="https://gist.github.com/" data-ga-click="Header, create new gist">
                        New gist
                      </a>

                      <a role="menuitem" className="dropdown-item dropdown-item1" href="https://github.com/organizations/new" data-ga-click="Header, create new organization">
                        New organization
                      </a>
                    </div>

                  </details-menu>
                </details>

              </div></li>












            <li className='nav-ul-li9'>
              <details className="details-overlay details-reset detalv drop-up">
                <summary className="Header-link" aria-label="View profile and more" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;show menu&quot;,&quot;label&quot;:&quot;icon:avatar&quot;}" aria-haspopup="menu" role="button">
                  <img src="https://avatars.githubusercontent.com/u/109217433?s=40&amp;v=4" alt="@victus-i7" size="20" height="20" width="20" data-view-component="true" className="avatar ava avatar-small circle" />
                  <span className="unread-indicator js-feature-preview-indicator" hidden=""></span>
                  <span className="dropdown-caret"></span>
                </summary>

                <details-menu className="dropdown-menu dropdown-menu-sw dropdown-up" preload="" role="menu">
                  <div className="header-nav-current-user css-truncate"><a role="menuitem" className="no-underline user-profile-link  d-block" href="https://github.com//victus-i7" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong className="css-truncate-target">victus-i7</strong></a></div>











                  <a role="menuitem" className="dropdown-item dropdown-item2 " href="https://github.com//victus-i7" data-ga-click="Header, go to profile, text:your profile" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;target&quot;:&quot;YOUR_PROFILE&quot;,&quot;originating_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;user_id&quot;:109217433}}" data-hydro-click-hmac="71263df6c07488f21f69c2b1c4513b606ab8bd7329eb8c66522b136454a0f0c3">Your profile</a>

                  <a role="menuitem" className="dropdown-item dropdown-item2" href="https://github.com//victus-i7?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;target&quot;:&quot;YOUR_REPOSITORIES&quot;,&quot;originating_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;user_id&quot;:109217433}}" data-hydro-click-hmac="d8448f3ba5477a3f0a138248d13f39c8fa8da4b4fe5884b148caf732a0cd3593">Your repositories</a>




                  <a role="menuitem" className="dropdown-item dropdown-item2" href="https://github.com//victus-i7?tab=projects" data-ga-click="Header, go to projects, text:your projects" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;target&quot;:&quot;YOUR_PROJECTS&quot;,&quot;originating_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;user_id&quot;:109217433}}" data-hydro-click-hmac="20c87e5056c4a1292480e8156686c100ce1e8e42eba874975ad0e7f8982a0e61">Your projects</a>


                  <a role="menuitem" className="dropdown-item dropdown-item2" href="https://github.com//victus-i7?tab=stars" data-ga-click="Header, go to starred repos, text:your stars" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;target&quot;:&quot;YOUR_STARS&quot;,&quot;originating_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;user_id&quot;:109217433}}" data-hydro-click-hmac="994d9348175e274b09a3dc44984e2947a03ac24be97138da96b4a08ae6deb9c6">Your stars</a>

                  <a role="menuitem" className="dropdown-item dropdown-item2" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;target&quot;:&quot;YOUR_GISTS&quot;,&quot;originating_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;user_id&quot;:109217433}}" data-hydro-click-hmac="de5d6023baf302cbab5ac8702f6136b5bcf17716d9398369cfaef6fab848b2f5">Your gists</a>

                  <a role="menuitem" className="dropdown-item dropdown-item2" data-ga-click="Header, go to GitHub Sponsors accounts page, text:your sponsors" data-hydro-click="{&quot;event_type&quot;:&quot;sponsors.button_click&quot;,&quot;payload&quot;:{&quot;button&quot;:&quot;HEADER_SPONSORS_DASHBOARD&quot;,&quot;sponsorable_login&quot;:&quot;victus-i7&quot;,&quot;originating_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;user_id&quot;:109217433}}" data-hydro-click-hmac="9b89150f73a26452025bc1654152a46a2d4109c47f9dabfb65fcd4d1687a8903" href="https://github.com//sponsors/accounts">Your sponsors</a>



                  <a role="menuitem" className="dropdown-item dropdown-item2" href="https://github.com//account/choose?action=upgrade" data-ga-click="Header, go to compare plans, text:upgrade" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;target&quot;:&quot;UPGRADE&quot;,&quot;originating_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;user_id&quot;:109217433}}" data-hydro-click-hmac="9abc7229ad2c3c4e07425305f9ca6db697b7db8e429ac9277a9ab76b078756f4">Upgrade</a>
                  <a role="menuitem" className="dropdown-item dropdown-item2" href="https://github.com//organizations/enterprise_plan?ref_cta=Try%2520Enterprise&amp;ref_loc=user_drawer_side_panel&amp;ref_page=Header+Avatar" data-analytics-event="{&quot;category&quot;:&quot;start_a_trial&quot;,&quot;action&quot;:&quot;click_to_set_up_enterprise_trial&quot;,&quot;label&quot;:&quot;ref_loc:side_panel;ref_cta:start_a_trial&quot;}">Try Enterprise</a>

                  <div id="feature-enrollment-toggle" className="hide-sm hide-md unread-indicator-container position-relative dropdown-item2">
                    <button type="button" className="dropdown-item btn-link" role="menuitem" data-feature-preview-trigger-url="/users/victus-i7/feature_previews" data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;originating_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;user_id&quot;:109217433}}" data-feature-preview-close-hmac="405ac7d18b9ee977ea62a62021f852bdad13537f7c6580072bbe897674ddd194" data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;originating_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;user_id&quot;:109217433}}" data-hydro-click-hmac="af53bd88f2148ff1679658d098fc3bd1a99739a913bf8456391ac9b20acdb9f8">
                      Feature preview
                    </button>
                    <span className="unread-indicator js-feature-preview-indicator" hidden=""></span>
                  </div>

                  <a role="menuitem" className="dropdown-item dropdown-item2" href="https://docs.github.com" data-ga-click="Header, go to help, text:help" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;target&quot;:&quot;HELP&quot;,&quot;originating_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;user_id&quot;:109217433}}" data-hydro-click-hmac="b3fd407e830ed7892265f16090692b6b99f9f8980c87bda4abf274a4a974d8c5">Help</a>
                  <a role="menuitem" className="dropdown-item dropdown-item2" href="https://github.com/settings/profile" data-ga-click="Header, go to settings, icon:settings" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;target&quot;:&quot;SETTINGS&quot;,&quot;originating_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;user_id&quot;:109217433}}" data-hydro-click-hmac="331853d907175d803a255ede642a4cdf9eabb35722b4d16e88214944fc77d9ae">Settings</a>

                  <button type="submit" class="dropdown-item dropdown-item2 dropdown-signout" data-ga-click="Header, sign out, icon:logout" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;target&quot;:&quot;SIGN_OUT&quot;,&quot;originating_url&quot;:&quot;https://github.com/users/109217433/menu&quot;,&quot;user_id&quot;:109217433}}" data-hydro-click-hmac="3da3112c5296bb73dfa362df090445d9c3ab80dfd802b726771efed5b3a6d252" role="menuitem">
                    Sign out
                  </button>

                </details-menu>
              </details>







            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default index;