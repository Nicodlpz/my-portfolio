import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="my-12 p-8 bg-blue-600 rounded-3xl shadow-xl text-white">
      <h2 className="text-3xl font-bold mb-4">Connect with me</h2>
      
      
      {submitted ? (
        <div className="bg-white text-blue-600 p-6 rounded-xl font-bold text-center">
          ✅ Connection Established! I'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-slate-900">
          <input 
            type="email" 
            placeholder="Your Email" 
            required 
            className="w-full p-3 rounded-lg border-none focus:ring-4 focus:ring-blue-300"
          />
          <textarea 
            placeholder="Your Message" 
            required 
            className="w-full p-3 rounded-lg border-none focus:ring-4 focus:ring-blue-300 h-32"
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition shadow-lg"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;