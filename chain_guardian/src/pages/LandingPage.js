import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../public/crypto/wp-content/images/ChainGuardian.png'

import '../public/crypto/wp-content/cache/autoptimize/19/css/autoptimize_504645c3edd2f8dd01dd835906df8aef.css'
import '../public/crypto/wp-content/cache/autoptimize/19/css/autoptimize_541e2ced151704f4ff1844c6de47ec02.css'
import '../public/crypto/css/landingPageStyles.css'

const landingPageClassNames = `
  home page-template-default page page-id-430 theme-jevelin woocommerce-no-js
  wpb-js-composer js-comp-ver-6.7.0 vc_responsive sh-header-mobile-spacing-compact
  sh-body-header-sticky sh-blog-style2 carousel-dot-style1
  carousel-dot-spacing-5px carousel-dot-size-standard
`;

const LandingPage = () => {
  document.body.className = landingPageClassNames;
  return (
    <>
      <div id="page-container" className>
        <div role="banner" itemScope="itemscope" itemType="http://schema.org/WPHeader">
          <header className="primary-mobile primary-mobile-light">
            <div id="header-mobile" className="sh-header-mobile">
              <div className="sh-header-mobile-navigation">
                <div className="container">
                  <div className="sh-table">
                    <div className="sh-table-cell sh-group">
                      {/* logo */}
                      <div className="header-logo sh-group-equal">
                        <Link to="/" className="header-logo-container sh-table-small" rel="home">
                          <div className="sh-table-cell">
                            <img className="sh-standard-logo" src={Logo} alt="" style={{width:'75px',height:'75px'}}/>
                            <img className="sh-sticky-logo" src={Logo} alt="" style={{width:'75px',height:'75px'}}/>
                            <img className="sh-light-logo" src={Logo} alt="" style={{width:'75px',height:'75px'}}/>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="sh-table-cell">
                      <nav id="header-navigation-mobile" className="header-standard-position">
                        <div className="sh-nav-container">
                          <ul className="sh-nav">
                            <li className="menu-item sh-nav-dropdown">
                              <a>
                                <div className="sh-table-full">
                                  <div className="sh-table-cell">
                                    <span className="c-hamburger c-hamburger--htx">
                                      <span>Toggle menu</span>
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="sh-header-mobile-dropdown">
                <div className="container sh-nav-container">
                  <ul className="sh-nav-mobile"></ul>
                </div>
                <div className="container sh-nav-container">
                </div>
              </nav>
            </div>
          </header>
          <header className="primary-desktop primary-desktop-light">
            <div className="sh-header-height">
              <div className="sh-header sh-header-1 sh-sticky-header sh-header-small-icons">
                <div className="container">
                  <div className="sh-table">
                    <div className="sh-table-cell sh-group">
                      {/* logo */}
                      <div className="header-logo sh-group-equal">
                        <Link to="/" className="header-logo-container sh-table-small" rel="home">
                          <div className="sh-table-cell">
                            <img className="sh-standard-logo" src={Logo} alt="" style={{width:'75px',height:'75px'}}/>
                            <img className="sh-sticky-logo" src={Logo} alt="" style={{width:'75px',height:'75px'}}/>
                            <img className="sh-light-logo" src={Logo} alt="" style={{width:'75px',height:'75px'}}/>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="sh-table-cell">
                      <nav id="header-navigation" className="header-standard-position">
                        <div className="sh-nav-container">
                          <ul id="menu-menu-1" className="sh-nav">
                            <li id="menu-item-758"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-758"><a
                                href="#backtotop">Home</a></li>
                            <li id="menu-item-741"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-741"><a
                                href="#services">Features</a></li>
                            <li id="menu-item-958"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-958"><a
                                href="#roadmap">How It Works</a></li>

                            <li id="menu-item-1753"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1753"><a
                                href="#contacts">Contacts</a></li>

                            <li id="menu-item-738"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-738"><a
                                href="#about">About</a></li>
                            <a className="color-login" href="#blog">News</a>

                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div id="wrapper">
          <div className="content-container sh-page-layout-full">
            <div id="content" className="page-content ">
              <div className="fw-page-builder-content">
                <section
                  className="sh-section sh-section-c483c8cff833905d38ec4da2f6cd2711 fw-main-row sh-section-visibility-everywhere">
                  {/* <script type="text/javascript">
                jQuery(document).ready(function ($) {
                  if ($(window).width() >= 800) {
                    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
                      $('.sh-section-c483c8cff833905d38ec4da2f6cd2711').css('background-attachment', 'fixed');
                    } else {
                      $('.sh-section-c483c8cff833905d38ec4da2f6cd2711').jarallax({
                        speed: 0.2
                      });
                    }
                  }
                });
              </script> */}
                  <div className="sh-section-container container">
                    <div className="fw-row">
                      <div
                        className="sh-column sh-column-10e1d1ad669dd9f9deb8f214d7b1590c fw-col-xs-12 fw-col-sm-6 sh-column-mobile-padding sh-animated fadeIn"
                        data-wow-duration="2s">
                        <div className="sh-column-wrapper">
                          <div className="sh-heading sh-heading-style1 sh-animated zoomIn"
                            id="heading-938089247c036d0590514a0e95386899" data-wow-duration="&quot;2s&quot;">
                            <h1 className="sh-heading-content size-m">
                              <span style={{ textAlign: 'left' }}>ChainGuardian</span>
                            </h1>
                          </div>
                          <div className="sh-empty-space" id="empty-space-84aca73ab9b9b241626d02d9a9941637"></div>
                          <div className="sh-heading sh-heading-style1 sh-animated zoomIn"
                            id="heading-b1316b8eaf7a35cd0b313396b8069bda"
                            data-wow-duration="&quot;2s&quot;data-wow-delay=&quot;1s&quot;">
                            <h1 className="sh-heading-content size-xxl">
                              <span style={{ textAlign: 'left' }}>Your Trusted </span><span
                                style={{ textAlign: 'left' }}>Cryptocurrency Data Analysis Tool</span><span style={{ textAlign: 'left' }} />
                            </h1>
                          </div>
                          <div className="sh-empty-space" id="empty-space-ebe4749662855624e7541068a6af6020"></div>
                          <div id="text-block-2c6901a4bbc217b2f69631bfaa972d18" className="sh-text-block">
                            <p><span style={{ fontSize: '16px' }}>Unlock the Secrets of Cryptocurrency Transactions with Chain Guardian and Empower Your Validation, Analysis, and Secure Cryptocurrency Transactions.</span></p>
                          </div>

                        </div>
                      </div>
                      <div className="sh-column sh-column-e3a4db4ac1bfab0640794af64525d688 fw-col-xs-12 fw-col-sm-6">
                        <div className="sh-column-wrapper">
                        </div>
                      </div>
                    </div>
                    <div className="fw-row">
                      <div
                        className="sh-column sh-column-0727d5f0ad961c5144f5c1efcf28ae60 fw-col-xs-12 fw-col-sm-2 sh-animated zoomIn"
                        data-wow-duration="1s">
                        <div className="sh-column-wrapper">
                          <div id="button-4f9d3fba0f31cf799095f9515088e51d" className="sh-button-container  sh-button-style-1">
                            <div className="sh-element-margin">
                              <Link to="/signup" className="sh-button sh-button-large ">
                                <span className="sh-button-icon">
                                  <i className="fa-sharp fa-solid fa-magnifying-glass-dollar fa-sm" style={{ color: '#4e4c46' }}></i>
                                </span>
                                <span className="sh-button-text">
                                  Get Started </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="sh-column sh-column-68b04a4e0033191406af44a1d2de30a7 fw-col-xs-12 fw-col-sm-2 sh-animated zoomIn"
                        data-wow-duration="1s">
                        <div className="sh-column-wrapper">
                          <div id="button-16f174007b35358724c761c465661663" className="sh-button-container  sh-button-style-1">
                            <div className="sh-element-margin">
                              <Link to="/login" target="_self" className="sh-button sh-button-large sh-button-icon-left">
                                <span className="sh-button-text">
                                  Login </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sh-column sh-column-35d8d01dbd81ddfeef137d4fffa8fe1e fw-col-xs-12 fw-col-sm-8">
                        <div className="sh-column-wrapper">
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="sh-section sh-section-a1e1e5633740cb443ad703fb0c224a25 fw-main-row sh-section-visibility-everywhere"
                  id="services">
                  <div className="sh-section-container container">
                    <div className="fw-row">
                      <div
                        className="sh-column sh-column-07abc248f745ad9b8e7b7b56505839f8 fw-col-xs-12 fw-col-sm-4 sh-column-mobile-padding sh-animated fadeIn"
                        data-wow-duration="2s">
                        <div className="sh-column-wrapper">
                          <div id="icon-5d9354487b85b175e2f2591cdd4fe500" className="sh-icon  sh-icon-left">
                            <div className="sh-element-margin">
                              <div className="sh-icon-container">
                                <i className="sh-icon-data icon-eyeglass"></i>
                              </div>
                            </div>
                          </div>
                          <div className="sh-heading sh-heading-style1" id="heading-666765c883d071658dbc98efd4587cd0">
                            <h1 className="sh-heading-content size-xs">
                              <span style={{ textAlign: 'left' }}>GET TO KNOW</span>
                            </h1>
                          </div>
                          <div className="sh-empty-space" id="empty-space-a4c1327ed2056180d60418005f23ea98"></div>
                          <div className="sh-heading sh-heading-style1" id="heading-048298abf445bf8e82354a7a3d955c40">
                            <h1 className="sh-heading-content size-l">
                              <span style={{ textAlign: 'left' }}>Key Features</span><span style={{ textAlign: 'left' }}>of ChainGuardian</span>
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div
                        className="sh-column sh-column-48a4b125d1127ab87ffc2002397e4238 fw-col-xs-12 fw-col-sm-4 sh-column-mobile-padding sh-animated fadeIn"
                        data-wow-duration="2s" data-wow-delay="0.5s">
                        <div className="sh-column-wrapper">
                          <div id="icon-6f55673f9696fbdcca336ddbfd2946b9"
                            className="sh-icon  sh-icon-center sh-animated fadeInDown" data-wow-duration="2s">
                            <div className="sh-element-margin">
                              <div className="sh-icon-container">
                                <i className="sh-icon-data icon-wallet"></i>
                              </div>
                            </div>
                          </div>
                          <div className="sh-empty-space" id="empty-space-cc569f8e2bbf25e994eff24c5202c911"></div>
                          <div className="sh-heading sh-heading-style1" id="heading-117f37a4d2987ba49ccddf9dde3c705f">
                            <h1 className="sh-heading-content size-m">
                              <span style={{ textAlign: 'center', color: '#f4d157' }}>Transaction Validation</span>
                            </h1>
                          </div>
                          <div className="sh-empty-space" id="empty-space-5c18ff8780865b8fcf4c1e89bfa33792"></div>
                          <div id="text-block-63d5e28417d37148b0bbe88465067cfb" className="sh-text-block">
                            <p style={{ textAlign: 'center' }}><span style={{ fontSize: '14px' }}>Ensure the authenticity of cryptocurrency transactions. Verify addresses, track transaction history, and maintain the integrity of your crypto assets.</span></p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="sh-column sh-column-51b6dfa9f1142b9cd1a68191f0ca2211 fw-col-xs-12 fw-col-sm-4 sh-column-mobile-padding sh-animated fadeIn"
                        data-wow-duration="2s" data-wow-delay="0.5s">
                        <div className="sh-column-wrapper">
                          <div id="icon-1fbc3b2152dc77f7d787830721ca7bbc"
                            className="sh-icon  sh-icon-center sh-animated fadeInDown" data-wow-duration="2s">
                            <div className="sh-element-margin">
                              <div className="sh-icon-container">
                                <i className="sh-icon-data icon-action-undo"></i>
                              </div>
                            </div>
                          </div>
                          <div className="sh-empty-space" id="empty-space-0e1656083d723b6767075331a909be92"></div>
                          <div className="sh-heading sh-heading-style1" id="heading-dcfbe20e6621d8c7f6351a2bb20fe488">
                            <h1 className="sh-heading-content size-m">
                              <span style={{ textAlign: 'center', color: '#f4d157' }}>Wallet ID Tracking</span>
                            </h1>
                          </div>
                          <div className="sh-empty-space" id="empty-space-5368c3cb250821508ff627b2446c9580"></div>
                          <div id="text-block-5cf45ddb89657e8e8e31a9a053fd04c1" className="sh-text-block">
                            <p style={{ textAlign: 'center' }}><span style={{ fontSize: '14px' }}>Easily track and identify wallet addresses associated with specific users or transactions. Gain insights into the ownership and purpose of crypto assets.</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fw-row">
                      <div
                        className="sh-column sh-column-5cc4f7af9a6f92962a5f5e738442042d fw-col-xs-12 fw-col-sm-4 sh-column-mobile-padding sh-animated fadeIn"
                        data-wow-duration="2s">
                        <div className="sh-column-wrapper">
                          <div id="icon-a8c87a640ffc0039f03eb743d3465000"
                            className="sh-icon  sh-icon-center sh-animated fadeInDown" data-wow-duration="2s">
                            <div className="sh-element-margin">
                              <div className="sh-icon-container">
                                <i className="sh-icon-data icon-ban"></i>
                              </div>
                            </div>
                          </div>
                          <div className="sh-empty-space" id="empty-space-ac5aac6afc17bb61b01c3907e828925d"></div>
                          <div className="sh-heading sh-heading-style1" id="heading-295d9546f086b1a07601e3f9c4d777c6">
                            <h1 className="sh-heading-content size-m">
                              <span style={{ textAlign: 'center', color: '#f4d157' }}>Blockchain Network Monitoring</span>
                            </h1>
                          </div>
                          <div className="sh-empty-space" id="empty-space-f37d2ccf9dc464f350e99257975757fc"></div>
                          <div id="text-block-1431f14a40d2e7f6a2a8d9bf7bca48a3" className="sh-text-block">
                            <p style={{ textAlign: 'center' }}><span style={{ fontSize: '14px' }}>Stay informed about cryptocurrency transactions across various blockchain networks. ChainGuardian provides real-time monitoring to keep you updated on crypto activity.</span></p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="sh-column sh-column-c6a1006d46fbb3c52edd618fa97a2587 fw-col-xs-12 fw-col-sm-4 sh-column-mobile-padding sh-animated fadeIn"
                        data-wow-duration="2s">
                        <div className="sh-column-wrapper">
                          <div id="icon-a89d30e3bb246ea4df7b0aee555933df"
                            className="sh-icon  sh-icon-center sh-animated fadeInDown" data-wow-duration="2s">
                            <div className="sh-element-margin">
                              <div className="sh-icon-container">
                                <i className="sh-icon-data icon-globe-alt"></i>
                              </div>
                            </div>
                          </div>
                          <div className="sh-empty-space" id="empty-space-85dd442a89875cb4bbb62fcb91d66c8c"></div>
                          <div className="sh-heading sh-heading-style1" id="heading-9ecbb52a973367a4337c5a5d2908b536">
                            <h1 className="sh-heading-content size-m">
                              <span style={{ textAlign: 'center', color: '#f4d157' }}>Data Extraction and Processing</span>
                            </h1>
                          </div>
                          <div className="sh-empty-space" id="empty-space-b640eafcdd96f74f5bd764a21c2b30dc"></div>
                          <div id="text-block-1d3d3cd5c76de3a02b06319f5ebb70b0" className="sh-text-block">
                            <p style={{ textAlign: 'center' }}><span style={{ fontSize: '14px' }}>Effortlessly extract and process data from different blockchain networks APIs. Our advanced algorithms will automatically detect the chain of the particular address.</span></p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="sh-column sh-column-a2e969c871e50343ccf1a6076d185caa fw-col-xs-12 fw-col-sm-4 sh-column-mobile-padding sh-animated fadeIn"
                        data-wow-duration="2s">
                        <div className="sh-column-wrapper">
                          <div id="icon-360513889dd4e895458f2773bb5c0a4c"
                            className="sh-icon  sh-icon-center sh-animated fadeInDown" data-wow-duration="2s">
                            <div className="sh-element-margin">
                              <div className="sh-icon-container">
                                <i class="fa-regular fa-circle-check" style={{ color: '#f3ba40' }}></i>
                              </div>
                            </div>
                          </div>
                          <div className="sh-empty-space" id="empty-space-0f534521ab13a4deb718b8da5c11bab5"></div>
                          <div className="sh-heading sh-heading-style1" id="heading-c97c155a58b283c24360913d626b32e9">
                            <h1 className="sh-heading-content size-m">
                              <span style={{ textAlign: 'center', color: '#f4d157' }}>Visual Merkel Tree Analysis</span>
                            </h1>
                          </div>
                          <div className="sh-empty-space" id="empty-space-73c0fb3cf42248c87a73fd600e008bd3"></div>
                          <div id="text-block-3a8e93699f8feee776735950f7a661b0" className="sh-text-block">
                            <p style={{ textAlign: 'center' }}><span style={{ fontSize: '14px' }}>Experience the power of visual Merkel tree analysis with ChainGuardian. Explore the transaction history like never before and easily spot suspicious transactions or accounts. Enhance your ability to secure and protect your cryptocurrency assets.</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="sh-section sh-section-daadd86b8da7092c1319188026e3426e fw-main-row sh-section-visibility-everywhere"
                  id="roadmap">
                  <div className="sh-section-container container-fluid">
                    <div className="fw-row">
                      <div
                        className="sh-column sh-column-44cb243046c17af2ef0ca10d54ade79b fw-col-xs-12 fw-col-sm-6 sh-animated slideInLeft"
                        data-wow-duration="2s">
                        <div className="sh-column-wrapper">
                          <div id="single-image-7dffa64bffccf95ef215d6258e52cd3e" className="sh-single-image  ">
                            <div className="sh-element-margin">
                              <div className="sh-single-image-container">
                                <img className="sh-image-url"
                                  src="https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-network-bitcoin-technology-blockchain-big-data-elements-5dthe-internetbitcoinvirtual-currencytechnologyblockchainbreathablebig-png-image_657544.jpg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="sh-column sh-column-6e2667542b698c4eec328f069df046e3 fw-col-xs-12 fw-col-sm-6 sh-column-mobile-padding">
                        <div className="sh-column-wrapper">
                          <div className="sh-heading sh-heading-style1" id="heading-3773adbe4e1916a8822f803ebb12f139">
                            <h1 className="sh-heading-content size-l">
                              <span style={{ textAlign: 'left' }}>How ChainGuardian Works</span>
                            </h1>
                          </div>
                          <div className="sh-empty-space" id="empty-space-0d28a7933ff5f4d7b5977707dfbaaa6d"></div>
                          <div id="text-block-3b865619c2b119bc5c1a8f513f152a4b" className="sh-text-block">
                            <p>ChainGuardian streamlines the process of <span style={{ color: '#f3ba40' }}>identifying suspicious or illicit cryptocurrency transactions</span> by seamlessly integrating blockchain APIs and advanced algorithms. It starts by fetching the latest transaction data from relevant blockchain networks and determines the specific network associated with the provided address, be it Bitcoin, Ethereum, or others.</p>
                            <p>ChainGuardian then employs sophisticated <span style={{ color: '#f3ba40' }}>algorithms to analyze transaction histories and data, automatically detecting anomalies and irregular behaviors</span>. It subsequently assesses the data for potentially suspicious activities, providing users with actionable insights to enhance security and compliance, all in a single, seamless process.</p>

                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="fw-row">
                      <div
                        className="sh-column sh-column-de15eb78d3cc8240bd107be5ba548d45 fw-col-xs-12 fw-col-sm-6 sh-column-mobile-padding">
                        <div className="sh-column-wrapper">
                          <div className="sh-heading sh-heading-style1" id="heading-f67213704a6aaee6ea1fb6f674989027">
                            <h1 className="sh-heading-content size-l">
                              <span style={{ textAlign: 'left' }}>Our Transaction Analysis Process</span>
                            </h1>
                          </div>
                          <div className="sh-empty-space" id="empty-space-768d3e68d2668284d2187acbff812bd2"></div>
                          <div className="sh-iconbox sh-iconbox-style12 sh-iconbox-left improved-responsiveness"
                            id="iconbox-dde2ea5eb3db052912a6aca769be9dfa">
                            <div className="sh-iconbox-icon">
                              <div className="sh-iconbox-icon-shape sh-iconbox-circle">
                                <i class="fa-regular fa-circle-check" style={{ color: '#f3ba40' }}></i>
                              </div>
                            </div>
                            <div className="sh-iconbox-aside">
                              <div className="sh-iconbox-title">
                                <h3>Input Transaction Data</h3>
                              </div>
                              <div className="sh-iconbox-seperator"></div>
                              <div className="sh-iconbox-content">
                                <p><span style={{ fontSize: '14px' }}>Begin your cryptocurrency data analysis journey by entering the transaction data or account address you want to explore. Whether it's a transaction ID, a public user ID, or a wallet address, we're ready to start the investigation.</span></p>
                              </div>
                            </div>
                          </div>
                          <div className="sh-empty-space" id="empty-space-b19b71580a2dbf9a4f0c6bd25df2fa7a"></div>
                          <div className="sh-iconbox sh-iconbox-style12 sh-iconbox-left improved-responsiveness"
                            id="iconbox-33d8fd9d8ef8760d17eb1e2f75929715">
                            <div className="sh-iconbox-icon">
                              <div className="sh-iconbox-icon-shape sh-iconbox-circle">
                                <i class="fa-regular fa-circle-check" style={{ color: '#f3ba40' }}></i>
                              </div>
                            </div>
                            <div className="sh-iconbox-aside">
                              <div className="sh-iconbox-title">
                                <h3>Blockchain Network Identification</h3>
                              </div>
                              <div className="sh-iconbox-seperator"></div>
                              <div className="sh-iconbox-content">
                                <p><span style={{ fontSize: '14px' }}>With address in hand, we identify the specific blockchain network associated with the address. Whether it's Bitcoin, Ethereum, or any other cryptocurrency network, we ensure the analysis is directed toward the right destination.</span></p>
                              </div>
                            </div>
                          </div>
                          <div className="sh-empty-space" id="empty-space-5f666da29f7540724e0e895229c3d897"></div>
                          <div className="sh-iconbox sh-iconbox-style12 sh-iconbox-left improved-responsiveness"
                            id="iconbox-3bff5c91284673edc7adbbaeadda364e">
                            <div className="sh-iconbox-icon">
                              <div className="sh-iconbox-icon-shape sh-iconbox-circle">
                                <i class="fa-regular fa-circle-check" style={{ color: '#f3ba40' }}></i>
                              </div>
                            </div>
                            <div className="sh-iconbox-aside">
                              <div className="sh-iconbox-title">
                                <h3>API Data Retrieval</h3>
                              </div>
                              <div className="sh-iconbox-seperator"></div>
                              <div className="sh-iconbox-content"><p><span style={{ fontSize: '12px' }}>Next, we tap into secure and reliable blockchain APIs to retrieve the most up-to-date data from the pertinent blockchain networks. This is the foundational step to ensure we have the latest, accurate information at our fingertips.</span></p>
                              </div>
                            </div>
                          </div>
                          <div className="sh-empty-space" id="empty-space-a2fc3538875e596e21fa4fcc91daa547"></div>
                          <div className="sh-iconbox sh-iconbox-style12 sh-iconbox-left improved-responsiveness"
                            id="iconbox-2e848f3caa247fa90e286cf1d795d5f5">
                            <div className="sh-iconbox-icon">
                              <div className="sh-iconbox-icon-shape sh-iconbox-circle">
                                <i class="fa-regular fa-circle-check" style={{ color: '#f3ba40' }}></i>
                              </div>
                            </div>
                            <div className="sh-iconbox-aside">
                              <div className="sh-iconbox-title">
                                <h3>Algorithmic Analysis</h3>
                              </div>
                              <div className="sh-iconbox-seperator"></div>
                              <div className="sh-iconbox-content">
                                <p><span style={{ fontSize: '14px' }}>Our journey takes a deeper dive as we introduce advanced algorithms, meticulously designed to scrutinize every aspect of the transaction history and associated data. These algorithms are the guiding compass in our quest for anomalies and suspicious activities.</span></p>
                              </div>
                            </div>
                          </div>
                          <div className="sh-empty-space" id="empty-space-12a2546748ed8d10dcba65e32132618c"></div>
                          <div className="sh-iconbox sh-iconbox-style12 sh-iconbox-left improved-responsiveness"
                            id="iconbox-ab5ceb3a1a3547cca78cb83b5395012d">
                            <div className="sh-iconbox-icon">
                              <div className="sh-iconbox-icon-shape sh-iconbox-circle">
                                <i class="fa-regular fa-circle-check" style={{ color: '#f3ba40' }}></i>
                              </div>
                            </div>
                            <div className="sh-iconbox-aside">
                              <div className="sh-iconbox-title">
                                <h3>Anomaly Detection and Assessment</h3>
                              </div>
                              <div className="sh-iconbox-seperator"></div>
                              <div className="sh-iconbox-content">
                                <p><span style={{ fontSize: '14px' }}> Our automated systems are programmed to detect anomalies within the data. This includes recognizing unusual transaction behaviors, irregular patterns, or any activity that may raise suspicion. By identifying anomalies, ChainGuardian takes a proactive stance in ensuring data integrity and user security.</span></p>
                                <p><span style={{ fontSize: '14px' }}> After detecting anomalies, ChainGuardian's assessment mechanisms step in to thoroughly evaluate the data. This evaluation process allows us to pinpoint and assess potentially suspicious activities, ensuring that our users have the necessary insights to take appropriate actions, whether for security or compliance purposes.</span></p>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="sh-column sh-column-5f7bbfbdcb51cc0ea80ddb9b59d0d6d3 fw-col-xs-12 fw-col-sm-6 sh-column-mobile-padding sh-animated slideInRight"
                        data-wow-duration="2s">
                        <div className="sh-column-wrapper">
                          <div id="video-player-848155afe41809e9a17a098e1c6fb419"
                            className="sh-video-player sh-video-player-style1 sh-placement-right sh-video-player-image-placeholder sh-video-player-image-placeholder-noicon">
                            <div className="sh-video-player-container">
                              <div className="sh-video-player-content">
                                <iframe title="Jevelin Theme - Getting Started (outdated)" width="500" height="281"
                                  src="" frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen></iframe>
                              </div>
                            </div>
                            <div className="sh-video-player-image-container">
                              <div className="sh-video-player-image">
                                <img
                                  src="https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-network-bitcoin-technology-blockchain-big-data-elements-5dthe-internetbitcoinvirtual-currencytechnologyblockchainbreathablebig-png-image_657544.jpg"
                                />
                              </div>
                              <div className="sh-video-player-image-play">
                                <i className="icon-control-play"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  className="sh-section sh-section-e6c8f4d23049f579b3a6bfb95b9d8e8d fw-main-row sh-section-visibility-everywhere"
                  id="blog">
                  <div className="sh-section-container container">
                    <div className="fw-row">
                      <div
                        className="sh-column sh-column-be3dead6995cd843d8f1cb551a33d7ea fw-col-xs-12 sh-column-mobile-padding">
                        <div className="sh-column-wrapper">
                          <div className="sh-heading sh-heading-style1" id="heading-892cfa4f47c8d88b6b32a2d9186b58b4">
                            <h1 className="sh-heading-content size-xs">
                              <span style={{ textAlign: 'center' }}>READ OUR</span>
                            </h1>
                          </div>
                          <div className="sh-empty-space" id="empty-space-3ee34429f55a941b1637c80407342337"></div>
                          <div className="sh-heading sh-heading-style1" id="heading-b4cfcb97f55298be186cb4598922db76">
                            <h1 className="sh-heading-content size-xl">
                              <span style={{ textAlign: 'center' }}>Market News</span>
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fw-row">
                      <div className="sh-column sh-column-e4099c7a4c80453a3ccfdd50413eb07b fw-col-xs-12">
                        <div className="sh-column-wrapper">
                          <div className="sh-recent-posts" id="recent-posts-82d7f48efe526caf43603191bf2a2589" data-id="3">
                            <div className="sh-group blog-list blog-style-largedate">
                              <article id="post-1"
                                className="post-item post-1 post type-post status-publish format-standard hentry category-sales tag-bitcoin tag-ethereum">
                                <div className="post-container">
                                  <div className="sh-table">
                                    <div className="sh-table-cell-top post-custom-date">
                                      <div className="post-comments">
                                        1 </div>
                                      <div className="post-day">
                                        01 </div>
                                      <div className="post-month">
                                        Sep </div>
                                    </div>
                                    <div className="sh-table-cell-top">
                                      <a href="#" className="post-title">
                                        <h2>Bitcoin, Ethereum and Ripple Trimming Gains</h2>
                                      </a>
                                      <div className="post-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum
                                          a elit in sollicitudin. Donec eu ipsum luctus, aliquam augue eu, pretium dolor. In
                                          pharetra auctor dapibus.Morbi diam nibh, venenatis ac arcu vitae, feugiat lobortis
                                          sapien. Duis euismod orci in convallis condimentum. Suspendisse id leo&#8230;</p>
                                      </div>
                                      <div className="post-meta post-meta-two">
                                        <div className="sh-columns post-meta-comments">
                                          <span className="post-meta-categories">
                                            <i className="icon-tag"></i>
                                            <a href="#"  rel="category tag">Sales</a> </span>
                                          <meta itemProp="interactionCount" content="UserComments:1" />
                                          <a href="#"  className="post-meta-comments">
                                            <i className="icon-speech"></i>
                                            1 </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                              <article id="post-305"
                                className="post-item post-305 post type-post status-publish format-standard hentry category-bitcoin category-sales">
                                <div className="post-container">
                                  <div className="sh-table">
                                    <div className="sh-table-cell-top post-custom-date">
                                      <div className="post-comments">
                                        0 </div>
                                      <div className="post-day">
                                        04 </div>
                                      <div className="post-month">
                                        Jun </div>
                                    </div>
                                    <div className="sh-table-cell-top">
                                      <a href="#" className="post-title">
                                        <h2>Bitcoin and Altcoins Primed for Further Gains</h2>
                                      </a>
                                      <div className="post-content">
                                        <p>Curabitur hendrerit viverra orci et bibendum. Sed volutpat nisi a mi rutrum
                                          pharetra. Morbi quis augue ut neque facilisis malesuada. Pellentesque eget tellus
                                          sagittis, maximus ligula ut, sodales enim. Sed tortor neque, sollicitudin suscipit
                                          lacus eu, tincidunt dapibus orci. Fusce euismod sem tempor bibendum
                                          finibus&#8230;.</p>
                                      </div>
                                      <div className="post-meta post-meta-two">
                                        <div className="sh-columns post-meta-comments">
                                          <span className="post-meta-categories">
                                            <i className="icon-tag"></i>
                                            <a href="#"
                                              rel="category tag">Bitcoin</a>, <a href="#"
                                                rel="category tag">Sales</a> </span>
                                          <meta itemProp="interactionCount" content="UserComments:0" />
                                          <a href="#" className="post-meta-comments">
                                            <i className="icon-speech"></i>
                                            0 </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                              <article id="post-318"
                                className="post-item post-318 post type-post status-publish format-video hentry category-news category-sales post_format-post-format-video">
                                <div className="post-container">
                                  <div className="sh-table">
                                    <div className="sh-table-cell-top post-custom-date">
                                      <div className="post-comments">
                                        0 </div>
                                      <div className="post-day">
                                        25 </div>
                                      <div className="post-month">
                                        May </div>
                                    </div>
                                    <div className="sh-table-cell-top">
                                      <a href="#" className="post-title">
                                        <h2>Bahamas Looking to Enable Blockchain-powered Undersea Exploration</h2>
                                      </a>
                                      <div className="post-content">
                                        <p>Vivamus luctus tincidunt metus, ut condimentum ligula molestie sit amet. Nullam
                                          pulvinar ultrices lorem in rutrum. Sed vehicula, quam sed maximus venenatis,
                                          mauris magna malesuada nisi, iaculis tincidunt turpis elit eget velit. Etiam a
                                          turpis ornare, aliquet erat a, malesuada felis. Nulla eget velit et&#8230;</p>
                                      </div>
                                      <div className="post-meta post-meta-two">
                                        <div className="sh-columns post-meta-comments">
                                          <span className="post-meta-categories">
                                            <i className="icon-tag"></i>
                                            <a href="#"
                                              rel="category tag">News</a>, <a href="#"
                                                rel="category tag">Sales</a> </span>
                                          <meta itemProp="interactionCount" content="UserComments:0" />
                                          <a href="#" className="post-meta-comments">
                                            <i className="icon-speech"></i>
                                            0 </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                              <article id="post-309"
                                className="post-item post-309 post type-post status-publish format-standard hentry category-news tag-news">
                                <div className="post-container">
                                  <div className="sh-table">
                                    <div className="sh-table-cell-top post-custom-date">
                                      <div className="post-comments">
                                        0 </div>
                                      <div className="post-day">
                                        08 </div>
                                      <div className="post-month">
                                        May </div>
                                    </div>
                                    <div className="sh-table-cell-top">
                                      <a href="#" className="post-title">
                                        <h2>What Has Been Happening with Ethereum in 2018?</h2>
                                      </a>
                                      <div className="post-content">
                                        <p>Morbi non nulla consequat, dictum massa nec, euismod sapien. Duis sit amet
                                          euismod massa. Vivamus luctus tincidunt metus, ut condimentum ligula molestie sit
                                          amet. Nullam pulvinar ultrices lorem in rutrum. Sed vehicula, quam sed maximus
                                          venenatis, mauris magna malesuada nisi, iaculis tincidunt turpis elit eget&#8230;
                                        </p>
                                      </div>
                                      <div className="post-meta post-meta-two">
                                        <div className="sh-columns post-meta-comments">
                                          <span className="post-meta-categories">
                                            <i className="icon-tag"></i>
                                            <a href="#" rel="category tag">News</a> </span>
                                          <meta itemProp="interactionCount" content="UserComments:0" />
                                          <a href="#" className="post-meta-comments">
                                            <i className="icon-speech"></i>
                                            0 </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                              <article id="post-311"
                                className="post-item post-311 post type-post status-publish format-standard hentry category-tips-tricks tag-hacks">
                                <div className="post-container">
                                  <div className="sh-table">
                                    <div className="sh-table-cell-top post-custom-date">
                                      <div className="post-comments">
                                        0 </div>
                                      <div className="post-day">
                                        07 </div>
                                      <div className="post-month">
                                        May </div>
                                    </div>
                                    <div className="sh-table-cell-top">
                                      <a href="#"
                                        className="post-title">
                                        <h2>MyEtherWallet DNS Hack</h2>
                                      </a>
                                      <div className="post-content">
                                        <p>Duis scelerisque venenatis imperdiet. Phasellus iaculis odio in orci placerat,
                                          sit amet faucibus libero euismod. Lorem ipsum dolor sit amet, consectetur
                                          adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                          posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                          Morbi&#8230;</p>
                                      </div>
                                      <div className="post-meta post-meta-two">
                                        <div className="sh-columns post-meta-comments">
                                          <span className="post-meta-categories">
                                            <i className="icon-tag"></i>
                                            <a href="#"
                                              rel="category tag">Tips &amp; tricks</a> </span>
                                          <meta itemProp="interactionCount" content="UserComments:0" />
                                          <a href="#"
                                            className="post-meta-comments">
                                            <i className="icon-speech"></i>
                                            0 </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                              <article id="post-316"
                                className="post-item post-316 post type-post status-publish format-quote hentry category-bitcoin category-news category-sales post_format-post-format-quote">
                                <div className="post-container">
                                  <div className="sh-table">
                                    <div className="sh-table-cell-top post-custom-date">
                                      <div className="post-comments">
                                        0 </div>
                                      <div className="post-day">
                                        06 </div>
                                      <div className="post-month">
                                        May </div>
                                    </div>
                                    <div className="sh-table-cell-top">
                                      <a href="#"
                                        className="post-title post-title-format">
                                        <h2><i className="post-format-icon ti-quote-left"></i> As with any other type of money,
                                          there are specific issues Bitcoin users need to know about in order to keep their
                                          funds safe.</h2>
                                      </a>
                                      <div className="post-content">
                                        <p>Robert Brarult</p>
                                      </div>
                                      <div className="post-meta post-meta-two">
                                        <div className="sh-columns post-meta-comments">
                                          <span className="post-meta-categories">
                                            <i className="icon-tag"></i>
                                            <a href="#"
                                              rel="category tag">Bitcoin</a>, <a
                                                href="#"
                                                rel="category tag">News</a>, <a
                                                  href="#"
                                                  rel="category tag">Sales</a> </span>
                                          <meta itemProp="interactionCount" content="UserComments:0" />
                                          <a href="#"
                                            className="post-meta-comments">
                                            <i className="icon-speech"></i>
                                            0 </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="sh-section sh-section-e03ebcdcb6a83a1b6fc1ddc6c204cfec fw-main-row sh-section-visibility-everywhere"
                  id="contacts">
                  <div className="sh-section-container container">
                    <div className="fw-row">
                      <div className="sh-column sh-column-231cc956e227100bbbad2cd51f1222ef fw-col-xs-12 fw-col-sm-3">
                        <div className="sh-column-wrapper">
                        </div>
                      </div>
                      <div
                        className="sh-column sh-column-812d2f5dd900fb3e983d4f11d11bae3e fw-col-xs-12 fw-col-sm-6 sh-animated fadeIn"
                        data-wow-duration="2s">
                        <div className="sh-column-wrapper">
                          <div className="sh-heading sh-heading-style1" id="heading-83652019948c73aa1c58aabc9d547ef9">
                            <h1 className="sh-heading-content size-xl">
                              <span style={{ textAlign: 'center' }}>Subscribe to ChainGuardian Updates</span>
                            </h1>
                          </div>
                          <div className="sh-empty-space" id="empty-space-2dddb7357fccda96d9d5a111a0a65de4"></div>
                          <div id="text-block-3a60f78df9b02d88d6eaa76d34f54e41" className="sh-text-block">
                            <p style={{ textAlign: 'center' }}><span style={{ fontSize: '14px' }}>Stay informed with our latest features and news.</span>
                            </p>
                          </div>
                          <div id="contact-form-4a050c6eb614144f62eb11f446151787" className="form-wrapper contact-form">
                            <form data-fw-form-id="fw_form" method="post" action="#"
                              className="fw_form_fw_form" data-fw-ext-forms-type="contact-forms"><input type="hidden" name="fwf"
                                value="fw_form" /><input type="hidden" id="_nonce_fe51fc0f8db6f06eb346bee574855ecf"
                                  name="_nonce_fe51fc0f8db6f06eb346bee574855ecf" value="84e4f7eec8" /><input type="hidden"
                                    name="_wp_http_referer" value="/crypto/" /><input type="hidden"
                                      name="fw_ext_forms_form_type" value="contact-forms" /><input type="hidden"
                                        name="fw_ext_forms_form_id" value="4a050c6eb614144f62eb11f446151787" />
                              <div className="wrap-forms">
                                <div className="fw-row"></div>
                                <div className="fw-row">
                                  <div className="fw-col-xs-12 form-builder-item">
                                    <div className="field-text">
                                      <label htmlFor="id-1">Email <sup>*</sup> </label>
                                      <input type="text" name="email_c7335b4" placeholder="Enter your email.." value
                                        id="id-1" required="required" />
                                    </div>
                                  </div>
                                </div>
                                <div className="fw-row"></div>
                              </div>
                              <div>
                                <input type="submit" value="Subscribe" />
                              </div>
                            </form>
                          </div>
                          <div className="sh-heading  " id="heading-ab488aed2e5b737812df45ff0cf40114">
                            <div className="sh-element-margin">
                              <h3 className="sh-heading-content size-custom text-center">
                                Follow us on </h3>
                            </div>
                          </div>
                          <div id="icon-group-33440dacd017da0c684df9e0e69732f5"
                            className="sh-icon-group sh-icon-group-center sh-icon-group-style2">
                            <div className="sh-icon-group-item">
                              <div className="sh-icon-group-item-container">
                                <a href="#" target="_blank">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </div>
                            </div>
                            <div className="sh-icon-group-item">
                              <div className="sh-icon-group-item-container">
                                <i className="fa fa-twitter"></i>
                              </div>
                            </div>
                            <div className="sh-icon-group-item">
                              <div className="sh-icon-group-item-container">
                                <i className="fa fa-linkedin"></i>
                              </div>
                            </div>
                            <div className="sh-icon-group-item">
                              <div className="sh-icon-grousp-item-container">
                                <i className="fa fa-google-plus"></i>
                              </div>
                            </div>
                            <div className="sh-icon-group-item">
                              <div className="sh-icon-group-item-container">
                                <i className="fa fa-medium"></i>
                              </div>
                            </div>
                            <div className="sh-icon-group-item">
                              <div className="sh-icon-group-item-container">
                                <i className="fa fa-send"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sh-column sh-column-25de76ae6d6aef04779a05716d09fa9e fw-col-xs-12 fw-col-sm-3">
                        <div className="sh-column-wrapper">
                        </div>
                      </div>
                    </div>
                    <div className="fw-row">
                      <div
                        className="sh-column sh-column-6df817cecf94fb5c54117d544b4539ec fw-col-xs-12 fw-col-sm-6 sh-column-shadow sh-animated slideInUp"
                        data-wow-duration="2s">
                        <div className="sh-column-wrapper">
                          <div className="sh-empty-space" id="empty-space-a076aef544df41fbf0d2e7eb31113c94"></div>
                          <div id="single-image-e1d60ceb69b10701380aae2f1f685ad1" className="sh-single-image  ">
                            <div className="sh-element-margin">
                              <div className="sh-single-image-container">
                                <a href="//jevelin.shufflehound.com/crypto/wp-content/uploads/sites/19/2018/04/Vector-Smart-Object-copy-3.png"
                                  rel="lightbox">
                                  <img className="sh-image-url"
                                    src="https://jevelin.shufflehound.com/crypto/wp-content/uploads/sites/19/2018/04/Vector-Smart-Object-copy-3.png"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="sh-empty-space" id="empty-space-b04ed79846c5df4ee3d2be88da482cce"></div>
                          <div className="sh-heading sh-heading-style1" id="heading-39a783fa771d9242fe5c4457b000b6c1">
                            <h1 id="about" className="sh-heading-content size-s">
                              <span style={{ textAlign: 'left' }}>Date:</span>
                            </h1>
                          </div>
                          <div className="sh-empty-space" id="empty-space-8a822d0be0551fb4d3bbff0777abb45d"></div>
                          <div id="text-block-14cfdb6ff4e8c8b5c91fc7fb9757c163" className="sh-text-block">
                            <p>Oct 21, 2018</p>
                          </div>
                          <div className="sh-empty-space" id="empty-space-2d168eb67ff407cbff5eeb7b13b1afbc"></div>
                          <div id="text-block-9d24625e6aabc7bc1dbb9b7ad6e3310c" className="sh-text-block">
                            <p>1 ETH = 1,35,821.30 INR</p>
                          </div>
                          <div className="sh-empty-space" id="empty-space-6865141b47e5d32b40cd9ef11828f17b"></div>
                        </div>
                      </div>
                      <div
                        className="sh-column sh-column-8dd191990a1c3ae61799fb2f8d5acf4e fw-col-xs-12 fw-col-sm-6 sh-column-shadow sh-animated slideInUp"
                        data-wow-duration="2s">
                        <div className="sh-column-wrapper">
                          
                          <div id="countdown-7b41eb182ce32e59b306a6737b0fa389"
                            className="sh-countdown sh-countdown-style1 sh-countdown-small sh-countdown-alignment-left"></div>
                          <div className="sh-empty-space" id="empty-space-1ef91cf8b7d7e8d09d40fbd8aa6e090d"></div>
                          <div id="button-91d939963c1faf3651632eb94c46677e" className="sh-button-container  sh-button-style-1">
                            <div className="sh-element-margin">
                              <Link to="/signup" target="_self" className="sh-button sh-button-large ">
                                <span className="sh-button-text">
                                  Get Started </span>
                              </Link>
                            </div>
                          </div>
                          <div className="sh-empty-space" id="empty-space-d34b837a3b666686b3db84daac359519"></div>
                          <div className="sh-heading sh-heading-style1" id="heading-d840755e434d71da04fb21638903428a">
                            <h1 className="sh-heading-content size-s">
                              <span style={{ textAlign: 'left' }}>Daily Users: <strong>100+</strong></span>
                            </h1>
                          </div>
                          <div id="divider-c2e0168e3d1d469793887e5f57af8a5b"
                            className="sh-divider sh-divider-center sh-divider-content-none">
                            <div className="sh-divider-line"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="sh-clear"></div>
            </div>
          </div>
          <footer className="sh-footer" role="contentinfo" itemScope="itemscope" itemType="http://schema.org/WPFooter">
            <div className="sh-footer-widgets">
              <div className="container">
                <div className="sh-footer-columns">
                  <div id="image-1" className="widget_social_links widget-item widget_image">
                    <div className="wrap-image">
                      <h3 className="widget-title">ChainGuardian</h3>
                      <div className="sh-image-widgets">
                        <p className="sh-image-widgets-description">Your Trusted Crypto Transaction Analysis Tool for Enhanced Security and Transparency.</p>
                        
                      </div>
                    </div>
                  </div>
                  <div id="recent_posts-1" className="widget_social_links widget-item widget_recent_posts">
                    <div className="wrap-recent-posts">
                      <h3 className="widget-title">Latest News</h3>
                      <div className="sh-recent-posts-widgets">
                        <div className="sh-recent-posts-widgets-item">
                          <span className="post-meta-categories">
                            <a href="#" rel="category tag">Sales</a>
                          </span>
                          <a
                            href="#">
                            <h6>Bitcoin, Ethereum and Ripple Trimming Gains</h6>
                          </a>
                        </div>
                        <div className="sh-recent-posts-widgets-item">
                          <span className="post-meta-categories">
                            <a href="#"
                              rel="category tag">Bitcoin</a>, <a
                                href="#" rel="category tag">Sales</a>
                          </span>
                          <a
                            href="#">
                            <h6>Bitcoin and Altcoins Primed for Further Gains</h6>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="contacts-2" className="widget_social_links widget-item widget_contacts">
                    <div className="wrap-social">
                      <h3 className="widget-title">Contacts</h3>
                      <div className="sh-contacts-widget-item">
                        <i className="icon-map"></i>
                        India
                      </div>
                      <div className="sh-contacts-widget-item">
                        <i className="icon-phone"></i>
                        +91 8090808090
                      </div>
                      <div className="sh-contacts-widget-item">
                        <i className="icon-envelope"></i>
                        <a href="#" className="__cf_email__"
                          >techcreed.info@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sh-copyrights">
              <div className="container container-padding">
                <div className="sh-copyrights-style2">
                  <div className="sh-table-full">
                    <div className="sh-table-cell">
                      <div className="sh-copyrights-text">
                        <span className="developer-copyrights ">
                          Design And Developed by <a href="https://github.com/tech-creed/BITS-3.0-ChainGuardian"
                            target="blank"> <strong>TechCreed Team</strong> </a> During <a href="https://unstop.com/hackathons/bits-pilani-postman-api-hackathon-30-bits-pilani-753638"
                            target="blank"><strong>BITS Pilani Postman API Hackathon 3.0</strong>.</a>
                        </span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="sh-notifications"></div>
      <div className="sh-notification-item-example">
        <strong className="sh-notification-item-name"></strong> has been added to the cart. <a
          href="#">
          <strong>
            View Cart </strong>
        </a>
        <span className="sh-notification-item-close">
          <i className="ti-close"></i>
        </span>
      </div>
      <script type="text/javascript">
        window.RS_MODULES = window.RS_MODULES || { };
        window.RS_MODULES.modules = window.RS_MODULES.modules || { };
        window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
        window.RS_MODULES.defered = true;
        window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || { };
        window.RS_MODULES.type = 'compiled';
      </script>
      <style id="rs-plugin-settings-inline-css" type="text/css">
        #rs-demo-id { }
      </style>
      <script type="text/javascript"
        src="https://jevelin.shufflehound.com/crypto/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.7"
        id="regenerator-runtime-js"></script>
      <script type="text/javascript"
        src="https://jevelin.shufflehound.com/crypto/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0"
        id="wp-polyfill-js"></script>
    </>

  )
}

export default LandingPage