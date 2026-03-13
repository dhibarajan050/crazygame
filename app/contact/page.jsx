import Layout from "@/app/pageLayout/layout";

export default function ContactPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hi? We'd love to
            hear from you! Please send an email to{" "}
            <a
              href="mailto:support@gameportal.example.com"
              className="text-blue-600 underline hover:text-blue-700 transition"
            >
              support@gameportal.example.com
            </a>
            , or use the form below to get in touch.
          </p>
        </div>

        {/* Form Wrapper with Blinking Border */}
        <div className="relative mt-8">

          {/* Blinking Border */}
          <div className="absolute -inset-[2px] rounded-xl border-2 border-blue-500 animate-pulse pointer-events-none"></div>

          {/* Form */}
          <form className="relative space-y-6 p-8 rounded-xl border border-gray-200 bg-transparent">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>

              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent outline-none resize-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition active:scale-95 shadow-md"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </Layout>
  );
}