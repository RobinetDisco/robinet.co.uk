import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// import { Inter } from 'next/font/google'
import 'katex/dist/katex.min.css'
import './scss/custom.scss'
import NavItems from './components/nav-items'

// const inter = Inter({ subsets: ['latin'] }) // TODO is this better than the fonts.scss approach?

export const metadata: Metadata = {
  title: 'robinet.co.uk',
  description: `John's Technical Musings`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="custom-page-wrapper">
          <div className="container">
            <div className="custom-header row d-print-none" role="banner">
              <div className="col mx-1 mx-sm-3">
                <Link href="/">John's Technical Musings</Link>
              </div>
            </div>
            <NavItems />
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
                  Attribution-NonCommercial-ShareAlike 4.0 International
                  License. Visit www.robinet.co.uk for the latest version of
                  this document.
                </div>
              </div>
              <div className="custom-footer row px-1 px-sm-3 py-2 py-sm-3 d-print-none">
                <div className="col">
                  <span
                    data-xmlnsdct="http://purl.org/dc/terms/"
                    property="dct:title">
                    All designs and other content on this website
                  </span>{' '}
                  by{' '}
                  <span
                    data-xmlnscc="http://creativecommons.org/ns#"
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
                    <Image
                      alt="Creative Commons License"
                      style={{ borderWidth: 0 }}
                      src={'/images/by-nc-sa_4_88x31.png'}
                      width="88"
                      height="31"
                      className="float-end"
                    />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
