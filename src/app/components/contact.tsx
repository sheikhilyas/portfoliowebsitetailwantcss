function Contact(){
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-3 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="w-full p-3 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Message Textarea */}
          <textarea
            placeholder="Your message"
            className="w-full p-3 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 h-32"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
