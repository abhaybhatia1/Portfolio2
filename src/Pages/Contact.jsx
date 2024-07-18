import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_zas5i9d', 'template_mc15f7a', formData, 'WJXk3KZAqBA3Z7BL6')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white px-8 py-3 rounded-lg w-full max-w-[80vw] mx-4 space-y-1 mt-2">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2">Contact Me</h1>
        <p className="text-center text-gray-600">
          Feel free to reach out to me through the form below or directly via email or phone.
        </p>
        <div className="text-center space-y-2">
          <p className="text-gray-700"><strong>Email:</strong> abhaybhatia0898@gmail.com</p>
          <p className="text-gray-700"><strong>Phone:</strong> 9873057300</p>
          <p className="text-gray-700"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/abhay-bhatia-202935229" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Profile</a></p>
        </div>
        <p className="text-center text-gray-600 font-semibold">Fill this form to contact me.</p>
        <form onSubmit={handleSubmit} className="space-y-1">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
            <input 
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              rows='1'
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="2"
              required 
            ></textarea>
          </div>
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
