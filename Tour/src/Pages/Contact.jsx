import React from 'react';
 import {  toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const Saveinformation = async (e) => {
  e.preventDefault();

  toast.success("Your message has been sent successfully!");
  console.log(formData);

  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await response.json();
    console.log('Success:', data);

    // ✅ Reset form after successful submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });

  } catch (error) {
    console.error('Error:', error);
  }
};

  return (

    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl mt-10 font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.
        </p>

        {/* Contact Form */}
        <form className="space-y-6 bg-white p-8 rounded-lg shadow-md" onSubmit={Saveinformation}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium text-gray-700">First Name *</label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gray-500 focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Last Name *</label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gray-500 focus:border-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Message *</label>
            <textarea
              rows="5"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gray-500 focus:border-gray-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-3 rounded-md font-medium hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">TripNest Office</h3>
          <p className="text-gray-600">500 Terry Francine Street</p>
          <p className="text-gray-600">San Francisco, CA 94158</p>
          <p className="text-gray-600 mt-2">Tel: 123-456-7890</p>
          <p className="text-gray-600">Fax: 123-456-7891</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;