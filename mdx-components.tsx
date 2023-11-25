import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}

// Modified from https://nickymeuleman.netlify.app/blog/math-gatsby-mdx
// import React from 'react'
// import TeX from '@matejmazur/react-katex'
// import { MDXProvider } from '@mdx-js/react'
// import Layout from './layout'
// import Print from '../images/print.svg'
// import { Link } from 'gatsby'

// function getAnchor(text) {
//   return text
//     .toLowerCase()
//     .replace(/[^a-z0-9 ]/g, '')
//     .replace(/[ ]/g, '-')
// }

// const components = {
//   a: (props) => {
//     if (props.href.startsWith('/')) {
//       return (
//         <Link {...props} to={props.href}>
//           {props.children}
//         </Link>
//       )
//     }
//     return <a {...props}>{props.children}</a>
//   },
//   div: (props) => {
//     if (props.className.includes('math-display')) {
//       import('../scss/katex-custom.scss')
//       return <TeX block math={props.children} />
//     }
//     return <div {...props} />
//   },
//   h2: (props) => {
//     const anchor = getAnchor(props.children)
//     return <h2 id={anchor}>{props.children}</h2>
//   },
//   h3: (props) => {
//     const anchor = getAnchor(props.children)
//     return <h3 id={anchor}>{props.children}</h3>
//   },
//   span: (props) => {
//     if (props.className.includes('math-inline')) {
//       import('../scss/katex-custom.scss')
//       return (
//         <span className="katex-inline">
//           <TeX math={props.children} />
//         </span>
//       )
//     }
//     return <span {...props} />
//   },
// }

// export function MDXLayout(props) {
//   const pageTitle = props.pageContext?.frontmatter?.title

//   return (
//     <MDXProvider components={components}>
//       <Layout pageTitle={pageTitle}>
//         <div className="row">
//           <div className="col">
//             <h1 className="mb-3">{pageTitle}</h1>
//           </div>
//           <div className="col-auto d-print-none ms-2 mt-2">
//             <button
//               type="button"
//               className="btn btn-outline-secondary"
//               onClick={() => {
//                 window.print()
//                 return false
//               }}>
//               <img
//                 src={Print}
//                 height="15"
//                 width="15"
//                 alt="Print"
//                 title="Print this page"
//               />
//             </button>
//           </div>
//         </div>
//         {props.children}
//       </Layout>
//     </MDXProvider>
//   )
// }
