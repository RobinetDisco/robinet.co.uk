'use client'

import { FormEvent, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      setStatus('pending')
      setError(null)
      const formData = new FormData(event.target as HTMLFormElement)
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })
      if (res.status === 200) {
        setStatus('ok')
      } else {
        setStatus('error')
        setError(`${res.status} ${res.statusText}`)
      }
    } catch (e) {
      setStatus('error')
      setError(`${e}`)
    }
  }

  if (status === 'ok') {
    return (
      <div>
        <h2>Thank you</h2>
        <p> Thanks for your message!</p>
      </div>
    )
  } else if (status === 'error') {
    return (
      <div>
        <h2>Sorry</h2>
        <p>There was a problem sending your message</p>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <form name="contact" onSubmit={handleFormSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <input
        type="hidden"
        name="subject"
        value="robinet.co.uk Contact Form Message"
      />
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          required={true}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          required={true}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message-subject" className="form-label">
          Subject
        </label>
        <input
          type="text"
          name="message-subject"
          id="message-subject"
          className="form-control"
          required={true}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          className="form-control"
          required={true}
        />
      </div>
      <div className="mb-3">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        />
      </div>
      <div className="mb-3">
        <button
          type="submit"
          className="btn btn-primary me-2"
          disabled={status === 'pending'}>
          Send
        </button>
        <button type="reset" className="btn btn-secondary">
          Clear
        </button>
      </div>
    </form>
  )
}
