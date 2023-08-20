import React, { useRef  } from "react";
import emailjs from '@emailjs/browser';


function ContactForm({ darkMode }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5c0rnhp', 'template_gjogj0s', form.current, 'h4O4UJXzWO6y3cs3Q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
   <form ref={form} onSubmit={sendEmail} className={` text-center p-6 rounded-md ${darkMode ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-800'} max-w-md mx-auto`}>
    <label className={darkMode ? 'text-white' : 'text-gray-800'}>Name</label>
    <input type="text" name="user_name" className={`w-full rounded-md p-2 my-1 ${darkMode ? 'bg-blue-800 text-white' : 'bg-white text-gray-800'}`} />
    <label className={darkMode ? 'text-white' : 'text-gray-800'}>Email</label>
    <input type="email" name="user_email" className={`w-full rounded-md p-2 my-1 ${darkMode ? 'bg-blue-800 text-white' : 'bg-white text-gray-800'}`} />
    <label className={darkMode ? 'text-white' : 'text-gray-800'}>Message</label>
    <textarea name="message" className={`w-full rounded-md p-2 my-1 ${darkMode ? 'bg-blue-800 text-white' : 'bg-white text-gray-800'}`} />
    <button type="submit" className={`py-2 px-4 rounded-md mt-3 ${darkMode ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>Send</button>
   </form>
  );
}

export default ContactForm;