import React from 'react'

const GetInTouch = () => {
  return (
    <div className="get_in_touch_section">


      <div className="get_in_touch_left">
        <h3>GET IN TOUCH</h3>
        <h2>We're here to help you <br /> and your pup!</h2>
        <form className="get_in_touch_form">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" placeholder="Jane Smith" required />

          <label htmlFor="email">Email address *</label>
          <input type="email" id="email" placeholder="email@website.com" required />

          <label htmlFor="phone">Phone number *</label>
          <input type="tel" id="phone" placeholder="555-555-5555" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Type your message here"></textarea>

          <div className="get_in_touch_checkbox">
            <input type="checkbox" id="consent" required />
            <label htmlFor="consent">
              I allow this website to store my submission <br /> so they can respond to my inquiry. *
            </label>
          </div>

          <button type="submit" className="get_in_touch_submit">SUBMIT</button>
        </form>
      </div>


      <div className="get_in_touch_right">
        <h3>Get in touch</h3>
        <p>📧 peacekay60@gmail.com</p>
        <h3>Location</h3>
        <p>📍 Accra, AA GH</p>
        <h3>Hours</h3>
        <ul>
          <li>Monday: 9:00am – 10:00pm</li>
          <li>Tuesday: 9:00am – 10:00pm</li>
          <li>Wednesday: 9:00am – 10:00pm</li>
          <li>Thursday: 9:00am – 10:00pm</li>
          <li>Friday: 9:00am – 10:00pm</li>
          <li>Saturday: 9:00am – 6:00pm</li>
          <li>Sunday: 9:00am – 12:00pm</li>
        </ul>
      </div>



    </div>
  );
};

export default GetInTouch