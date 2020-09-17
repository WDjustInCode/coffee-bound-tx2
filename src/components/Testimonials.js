import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Testimonials = ({ testimonials }) => (
  <div className="py-5">
    {/*{testimonials.childrenGooglePlacesReview.map((testimonial) => (
      <article key={v4()} className="message">
        <div className="message-body">
          {testimonial.author_name}
          <br />
          <cite> – {testimonial.text}</cite>
        </div>
      </article>
    ))}*/}
  </div>
)

export default Testimonials
