'use client'

import Image from 'next/image'

export default function PrintButton() {
  return (
    <button
      type="button"
      className="btn btn-outline-secondary float-end d-print-none"
      onClick={() => {
        window.print()
        return false
      }}>
      <Image
        alt="Print"
        title="Print this page"
        src={'/images/print.svg'}
        width="15"
        height="15"
      />
    </button>
  )
}
