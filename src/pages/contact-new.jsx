import Layout from '../components/layout'
import React from 'react'

const ContactFormPage = () => {
  return (
    <>
      <Layout pageTitle="Contact the Author">
        <h1>Contact the Author</h1>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
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
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
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
              rows="5"
              className="form-control"
              required={true}
            />
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
      </Layout>
    </>
  )
}

export default ContactFormPage
