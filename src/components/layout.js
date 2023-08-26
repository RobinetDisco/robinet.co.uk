import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, withPrefix } from 'gatsby'

import '../scss/custom.scss'

export default function Layout({ pageTitle, children }) {
  const navItems = [
    { name: 'Home', url: '/', key: 'home' },
    {
      name: 'Audio Amplifier Design',
      url: '/amplifier-design',
      key: 'amplifier-design',
    },
    { name: 'Discographer', url: '/disco', key: 'disco' },
    { name: 'About Me', url: '/about', key: 'about' },
    { name: 'Contact Form', url: '/contact', key: 'contact' },
  ]

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}>
        <meta charSet="utf-8" />
        <meta name="icon" href={withPrefix('/favicon.ico')} />
        <title>{pageTitle}</title>
      </Helmet>
      <div className="custom-page-wrapper">
        <div className="container">
          <div className="custom-header row d-print-none" role="banner">
            <div className="col mx-1 mx-sm-3" name="top">
              <Link to="/">John's Technical Musings</Link>
            </div>
          </div>
          <nav>
            <ul className="nav nav-tabs mx-sm-3 my-2 mt-sm-3 d-print-none">
              {navItems.map((navItem) => {
                return (
                  <li className="nav-item" key={`nav-item-${navItem.key}`}>
                    <Link
                      className="nav-link"
                      activeClassName="active"
                      to={navItem.url}>
                      {navItem.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <main>
            <div className="row px-1 px-sm-3">
              <div className="col py-2 py-sm-3">{children}</div>
            </div>
          </main>
          <footer>
            <div className="row px-1 px-sm-3 d-none d-print-block">
              <div className="col">
                'Audio Amplifier with Defined Output Impedance' by John Howard
                is licensed under a Creative Commons
                Attribution-NonCommercial-ShareAlike 4.0 International License.
                Visit www.robinet.co.uk for the latest version of this document.
              </div>
            </div>
            <div className="custom-footer row px-1 px-sm-3 py-2 py-sm-3 d-print-none">
              <div className="col">
                <span xmlnsdct="http://purl.org/dc/terms/" property="dct:title">
                  All designs and other content on this website
                </span>{' '}
                by{' '}
                <span
                  xmlnscc="http://creativecommons.org/ns#"
                  property="cc:attributionName">
                  John Howard
                </span>{' '}
                are licensed under a{' '}
                <a
                  rel="license"
                  href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                  Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                  International License
                </a>
                .
              </div>
              <div className="col-auto d-print-none">
                <a
                  rel="license"
                  href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                  <img
                    alt="Creative Commons License"
                    style={{ borderWidth: 0 }}
                    src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
                    className="float-end"
                  />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
