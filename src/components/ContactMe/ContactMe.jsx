import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <div className='contact-container'>
      <h5>Contact ME</h5>
      <div className="contact-content">
        <div style={{flex:1}}>
            <ContactInfoCard
            className="img1"
            iconUrl="./assets/images/gmail.png"
            text="koudenoukpoabiola@gmail.com"
            />
            <ContactInfoCard
            iconUrl="./assets/images/git.png"
            text="koudenoukpoabiola@gmail.com"
            />
        </div>
        <div style={{flex:2}}>
            <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
