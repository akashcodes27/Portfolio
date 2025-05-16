import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen mt-[-3rem] pt-24 pb-20 px-8 bg-redwood text-apricot rounded-t-[3rem] shadow-[0_-8px_20px_rgba(0,0,0,0.1)]"
    >
      <h2 className="text-4xl font-extrabold text-cosmos text-center mb-12 relative inline-block">
        Contact
        <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-cosmos rounded-full"></span>
      </h2>

      <motion.form
        className="max-w-2xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Name */}
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl bg-apricot text-redwood placeholder:text-mapleGray outline-none border border-softSilver focus:ring-2 focus:ring-cosmos transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl bg-apricot text-redwood placeholder:text-mapleGray outline-none border border-softSilver focus:ring-2 focus:ring-cosmos transition"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            rows="5"
            placeholder="Type your message here..."
            className="w-full px-4 py-3 rounded-xl bg-apricot text-redwood placeholder:text-mapleGray outline-none border border-softSilver focus:ring-2 focus:ring-cosmos transition resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-2">
          <button
            type="submit"
            className="bg-cosmos text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-cordovan hover:shadow-lg transition hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
