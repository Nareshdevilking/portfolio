import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Contact(){

const form = useRef();

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm(
"service_7uxaiap",
"template_my5lorw",
form.current,
"XqmVwziCNtg8UaWXI"
)
.then(
(result) => {
alert("Message sent successfully!");
},
(error) => {
alert("Failed to send message.");
}
);

e.target.reset();
};

return(

<section className="contact-section" id="contact">

<h2 className="section-title">Contact Me</h2>

<p className="contact-subtitle">
Have a project in mind or want to collaborate? Let's create something amazing together.
</p>

<div className="contact-container">

{/* LEFT SIDE */}

<div className="contact-left">

<p className="contact-desc">
I'm always interested in hearing about new projects and opportunities. 
Whether you have a question or just want to say hi, feel free to reach out!
</p>

<a href="mailto:nareshkumar27102003@gmail.com" className="contact-card">
<FaEnvelope className="contact-icon"/>
<span>nareshkumar27102003@gmail.com</span>
</a>

<a href="tel:+918946003807" className="contact-card">
<FaPhone className="contact-icon"/>
<span>+91 8946003807</span>
</a>

<a 
href="https://www.linkedin.com/in/umashankar-sivakumar-b470a922b/" 
target="_blank" 
rel="noopener noreferrer"
className="contact-card"
>
<FaLinkedin className="contact-icon"/>
<span>LinkedIn</span>
</a>

<a 
href="https://github.com/umashankar-027" 
target="_blank" 
rel="noopener noreferrer"
className="contact-card"
>
<FaGithub className="contact-icon"/>
<span>GitHub</span>
</a>

<a 
href="https://www.instagram.com/yaa_its.naresh/" 
target="_blank" 
rel="noopener noreferrer"
className="contact-card"
>
<FaInstagram className="contact-icon"/>
<span>Instagram</span>
</a>

</div>

{/* RIGHT SIDE */}

<div className="contact-right">

<form ref={form} onSubmit={sendEmail} className="contact-form">

<label>Your Name</label>
<input 
type="text"
name="user_name"
placeholder="John Doe"
required
/>

<label>Your Email</label>
<input 
type="email"
name="user_email"
placeholder="your@email.com"
required
/>

<label>Subject</label>
<input 
type="text"
name="subject"
placeholder="Project Inquiry"
/>

<label>Message</label>
<textarea
name="message"
placeholder="Tell me about your project..."
required
></textarea>

<button type="submit" className="send-btn">
Send Message
</button>

</form>

</div>

</div>

</section>

)
}

export default Contact;