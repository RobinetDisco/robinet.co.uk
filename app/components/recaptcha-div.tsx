'use client'

import ReCAPTCHA from 'react-google-recaptcha'

export default function ReCAPTCHADiv() {
  return (
    <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string} />
  )
}
