// components/HireMe/HireMeForm.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Hire.css';

const HireMeForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let emailSuccess = false;

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      emailSuccess = true;
      alert('✅ Email sent successfully!');
    } catch (err) {
      emailSuccess = false;
      alert('❌ Email sending failed.');
      console.error(err);
    }

    const userConfirmed = window.confirm(
      `${emailSuccess ? 'Email was sent successfully.' : 'Email failed to send.'} Do you want to send this message on WhatsApp too?`
    );

    if (userConfirmed) {
      const whatsappMessage = `Hello, I'm ${formData.name}. My email is ${formData.email}. Here's what I need help with: ${formData.message}`;
      const whatsappNumber ='+9779812044994';
      const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappLink, '_blank');
    }

    setFormData({ name: '', email: '', message: '' });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>×</button>
        <h2>Hire Me</h2>
        <form onSubmit={handleSubmit} className="hire-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Project Details"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default HireMeForm;
