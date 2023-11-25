import * as React from 'react'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>
        We could not find the page you were looking for. Please try navigating
        from the <Link href="/">home page</Link>.
      </p>
    </>
  )
}
