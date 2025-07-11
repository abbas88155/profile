import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mqabrlrr");

  if (state.succeeded) {
    return <p className="text-green-500 text-center mt-4">✅ Your message has been sent successfully.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg space-y-4">
      <div>
        <label htmlFor="email" className="block mb-1 font-special">Mail-Adresse</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 bg-lightGrey/50 font-special"
          placeholder="Ihre E-Mail-Adresse "
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>

      <div>
        <label  htmlFor="message" className="block mb-1 font-special">ihre Nachricht</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 bg-lightGrey/50 font-special placeholder:white/50"
          placeholder='schreiben Sie hier ihre Nachricht...'
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full font-special bg-darkCyan py-2 bg-blue-600 hover:bg-cyan transition-colors rounded disabled:opacity-50"
      >
        Nachricht senden
      </button>
    </form>
  );
}

export default ContactForm;
