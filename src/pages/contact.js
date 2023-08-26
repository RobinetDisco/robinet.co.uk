import Layout from '../components/layout'
import axios from 'axios'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'

const ContactFormPage = () => {
  const [serverState, setServerState] = useState({ ok: true, message: '' })
  const [showForm, setShowForm] = useState(true)
  const recaptchaSiteKey = process.env.GATSBY_RECAPTCHA_V3_SITE_KEY
  const { contactForm } = useForm()

  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const submitData = async (values, recaptchaToken) => {
    try {
      setShowForm(false)
      setServerState({ ok: true, message: 'Submitting...' })

      const { 'bot-field': botField, email, message, name, subject } = values
      await axios({
        url: '/api/submit-message',
        method: 'POST',
        data: {
          botField,
          email,
          message,
          name,
          recaptchaToken,
          subject,
        },
      })
      setServerState({
        ok: true,
        message: 'Thanks for your message!',
      })
    } catch (error) {
      if (error.response) {
        console.log('Server responded with non 2xx code: ', error.response.data)
      } else if (error.request) {
        console.log('No response received: ', error.request)
      } else {
        console.log('Error setting up response: ', error.message)
      }
      setServerState({ ok: false, message: error.message })
    }
  }

  const onSubmit = (data) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(recaptchaSiteKey, { action: 'submit' })
        .then((token) => {
          submitData(data, token)
        })
    })
  }

  if (!showForm) {
    return (
      <Layout pageTitle="Contact the Author">
        <p>{serverState.message}</p>
      </Layout>
    )
  }

  return (
    <>
      <Helmet>
        <script
          key="recaptcha"
          type="text/javascript"
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
        />
      </Helmet>
      <Layout pageTitle="Contact the Author">
        <h1>Contact the Author</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              {...register('name', { required: true })}
              disabled={isSubmitting}
            />
            {errors.name && (
              <div className="text-danger">Please enter your name</div>
            )}
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
              ref={contactForm}
              {...register('email', { required: true, pattern: emailRegExp })}
              disabled={isSubmitting}
            />
            {errors.email && (
              <div className="text-danger">
                Please enter a valid email address
              </div>
            )}
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
              {...register('subject', { required: true })}
              disabled={isSubmitting}
            />
            {errors.subject && (
              <div className="text-danger">Subject is required</div>
            )}
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
              {...register('message', { required: true })}
              disabled={isSubmitting}
            />
            {errors.message && (
              <div className="text-danger">Message is required</div>
            )}
          </div>
          <input
            type="hidden"
            name="bot-field"
            id="bot-field"
            aria-hidden
            {...register('bot-field')}
          />
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary me-2"
              disabled={isSubmitting}>
              Send
            </button>
            <button
              type="reset"
              className="btn btn-secondary"
              disabled={isSubmitting}>
              Clear
            </button>
          </div>
        </form>
      </Layout>
    </>
  )
}

export default ContactFormPage
