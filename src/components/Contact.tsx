import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary-dark p-8">
      <h2 className="text-4xl font-bold text-accent-green mb-6">Contact Me</h2>
      <p className="text-lg text-center text-gray-300 max-w-xl mb-6">
        Feel free to reach out via email or connect with me on LinkedIn!
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg text-gray-300 mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 rounded-lg border border-gray-700 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 rounded-lg border border-gray-700 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg text-gray-300 mb-2">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full p-2 rounded-lg border border-gray-700 bg-gray-800 text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-accent-green text-white rounded-lg hover:bg-accent-teal transition-colors"
        >
          Send Message
        </button>
        {status && <p className="text-center text-lg text-gray-300">{status}</p>}
      </form>
      <div className="flex flex-col items-center space-y-4 mt-8">
        <a href="mailto:smummareddy9@gmail.com" className="text-xl text-accent-green underline">
          smummareddy9@gmail.com
        </a>
        <a href="https://linkedin.com/in/smummareddy" target="_blank" className="text-xl text-accent-green underline">
          linkedin.com/in/smummareddy
        </a>
        <p className="text-xl text-gray-300">(480) 524-2237</p>
      </div>
    </div>
  );
};

export default Contact;
