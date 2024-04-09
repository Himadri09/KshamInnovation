import React from 'react';
import './MyAbout.css';

const MyAbout = () => {
  return (
    <div>
    <div>
      	<h1 className='aboutsectionheading'>
		<span class="Ksham">KSHAM</span> 
		<span class="innovation">INNOVATION</span>
	</h1>
    </div>

      <div className="AboutPart">
         
      <div class="quote"> 
          <blockquote>
          <h2 className="aboutSecHead">
              What We Do
          </h2>
            <p>We at Ksham Innovation work to provide smart aid glasses for Deaf, Mute and Blind. The Able glasses uses patented bone conduction to enable Deaf to Listen, interpret sign language for mute, the sensory audio-based information enables the blind to visualize. The open ear design makes able glasses a complete smart glasses device for everyone.</p>
            <p>Our mission is to make Information, Education & Entertainment accessible through Smart Wearable Solutions.</p>
          </blockquote>
        </div>

        
        <div class="animated-border-quote">
          <blockquote>
          <h2 className="abthead2">Our Vision</h2>
      <p className="abttext">
        <span>"Empowering a World Without Communication Barriers"</span>
        : Our vision is to leverage cutting-edge technology to empower individuals with hearing, speech, or visual impairments, fostering a more inclusive and accessible world. We envision a future where our smart glasses become a bridge to communication, independence, and endless possibilities, allowing everyone, regardless of their abilities, to connect, express themselves, and thrive in our interconnected society.
      </p>
          </blockquote>
        </div>


                <div class="square-brackets-quote">
          <blockquote>
          <h2 className="discAbt">Description</h2>
      <p className="disTxt">At Ksham Innovation, we break down barriers and make technology accessible to everyone. We believe that everyone deserves the opportunity to hear, speak, and navigate the world in real-time, regardless of having hearing, speech, or visual impairment.</p>
      <p className="disTxt">Our technology is designed to empower those with disabilities, allowing them to learn, communicate & perform their daily chores with greater ease and independence. But our work doesn't stop there. We dream & envision creating a smart and safer alternative to traditional earbuds and headphones, extending the age during which people may face difficulties in hearing.</p>
      <p className="disTxt">By doing so, we are not only improving the lives of those with hearing loss, but also providing a solution for anyone who wants to enjoy music, information access in a safer way, and audio content while minimizing the risk of damaging their hearing.</p>
      
          </blockquote>
        </div>

      </div>
      
  
  </div>
  );
}

export default MyAbout;
