import React from 'react'
import ReCAPTCHADiv from '../components/recaptcha-div'

export const metadata = {
  title: 'Contact the Author',
}

export default function ContactFormPage() {
  return (
    <>
      <h1>Contact the Author</h1>
      <form
        name="contact"
        method="POST"
        action="/thank-you"
        data-netlify="true"
        data-netlify-recaptcha="true">
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
          <ReCAPTCHADiv />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary me-2">
            Send
          </button>
          <button type="reset" className="btn btn-secondary">
            Clear
          </button>
        </div>
      </form>
    </>
  )
}
