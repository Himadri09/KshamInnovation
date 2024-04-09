import React from 'react'
import './ContactCard.css'


export default function ContactCard() {
  return (
  
    <div className='ContactCard'>
    <h1 className="ContactCardHead">Your satisfaction is our number one focus</h1>
    <p className="contactSubTitle">Please fill in your details below and one of our friendly team members will be in touch shortly.</p>
     <div className='underline'></div>
     <div className='icon_wrapper'>
    <img className='iconimage' src='/images/glass5.png' alt='D'/>
     </div>

      <form className='contactform' target='_blank' action="https://formsubmit.co/kunalumap0123@gmail.com" method="POST" id='contact_form'>
        <div className='contactname'>
          <label for='name'></label>
          <input placeholder='My name is' type="text" name="name" id="name_input" required/>
        </div>

        <div class="contactemail">
      <label for="email"></label>
      <input type="email" placeholder="My e-mail is" name="email" id="email_input" required/>
    </div>
    <div class="contacttelephone">
      <label for="name"></label>
      <input type="text" placeholder="My number is" name="telephone" id="telephone_input" required/>
    </div>

    <div class="contactmessage">
      <label for="message"></label>
      <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
    </div>
    <div class="submit">
      <input type="submit" value="Send Message" id="form_button" />
    </div>

        </form>
    </div>
    
  )
}