import { useState } from "react";
import toast from "react-hot-toast";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    message: "",
    subject: "Thapasihalli",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Start loading
    
    try {
      const res = await fetch("http://localhost:4000/defenceWebsiteRoutes/new-contactus", {
      // const res = await fetch("https://adminpanel.defencehousingsociety.com/defenceWebsiteRoutes/new-contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstname} ${formData.lastname}`,
          email: formData.email,
          phone: formData.phoneno,
          message: formData.message,
          subject: formData.subject,
        }),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phoneno: "",
          message: "",
          subject: "Thapasihalli",
        });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Heading with gradient text */}
      <div className="text-center text-1xl font-semibold mb-2 bg-gradient-to-r from-gray-600 via-purple-800 to-cyan-400 bg-clip-text text-transparent underline font-['Poppins']">
        FOR ANY QUERIES, PLEASE FILL OUT THE FORM, AND OUR TEAM WILL GET IN TOUCH WITH YOU.
      </div>

      {/* Form container */}
      <form id="contactForm" className="pt-8" onSubmit={handleSubmit}>
        {/* First row - First Name & Last Name */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="relative flex-1 group">
            <input 
              name="firstname" 
              value={formData.firstname}
              onChange={handleChange} 
              id="firstname" 
              type="text" 
              required 
              className="w-full pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer"
            />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 origin-left transform scale-x-0 transition-transform duration-300 peer-focus:scale-x-100 peer-valid:scale-x-100"></div>
            <label 
              htmlFor="firstname" 
              className="absolute left-0 bottom-2 text-gray-500 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-focus:text-sm peer-valid:-translate-y-6 peer-valid:text-blue-500 peer-valid:text-sm"
            >
              First Name
            </label>
          </div>

          <div className="relative flex-1 group">
            <input 
              type="text" 
              name="lastname" 
              id="lastname" 
              value={formData.lastname}
              onChange={handleChange}
              required 
              className="w-full pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer"
            />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 origin-left transform scale-x-0 transition-transform duration-300 peer-focus:scale-x-100 peer-valid:scale-x-100"></div>
            <label 
              htmlFor="lastname" 
              className="absolute left-0 bottom-2 text-gray-500 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-focus:text-sm peer-valid:-translate-y-6 peer-valid:text-blue-500 peer-valid:text-sm"
            >
              Last Name
            </label>
          </div>
        </div>

        {/* Second row - Email & Phone */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="relative flex-1 group">
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange} 
              id="email" 
              required 
              className="w-full pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer"
            />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 origin-left transform scale-x-0 transition-transform duration-300 peer-focus:scale-x-100 peer-valid:scale-x-100"></div>
            <label 
              htmlFor="email" 
              className="absolute left-0 bottom-2 text-gray-500 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-focus:text-sm peer-valid:-translate-y-6 peer-valid:text-blue-500 peer-valid:text-sm"
            >
              Email Address
            </label>
          </div>

          <div className="relative flex-1 group">
            <input 
              id="phoneno" 
              name="phoneno" 
              type="text" 
              value={formData.phoneno}
              onChange={handleChange}
              required 
              className="w-full pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer"
            />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 origin-left transform scale-x-0 transition-transform duration-300 peer-focus:scale-x-100 peer-valid:scale-x-100"></div>
            <label 
              htmlFor="phoneno" 
              className="absolute left-0 bottom-2 text-gray-500 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-focus:text-sm peer-valid:-translate-y-6 peer-valid:text-blue-500 peer-valid:text-sm"
            >
              Phone Number
            </label>
          </div>
        </div>

        {/* Message textarea */}
        <div className="relative mb-8 group">
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            id="message" 
            rows="2" 
            required 
            className="w-full pt-2 pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer resize-none"
          ></textarea>
          <div className="absolute bottom-0 left-0 w-full h-0.5 origin-left transform scale-x-0 transition-transform duration-300 peer-focus:scale-x-100 peer-valid:scale-x-100"></div>
          <label 
            htmlFor="message" 
            className="absolute left-0 top-2 text-gray-500 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-focus:text-sm peer-valid:-translate-y-6 peer-valid:text-blue-500 peer-valid:text-sm"
          >
            Write your message
          </label>
        </div>

        {/* Success/Error messages */}
        <div id="success-message" className="hidden text-green-500 text-center mb-4">
          Thank you! Our Executives from Defence Housing Society will get in touch with you shortly.
        </div>
        <div id="error-message" className="hidden text-red-500 mb-4">
          There was an issue submitting the form. Please try again later.
        </div>

        <div className="flex justify-center">
          <div className="relative overflow-hidden w-full md:w-1/4 h-12 group">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-purple-800 to-cyan-400 transition-all duration-400 -left-full group-hover:left-0"></div>
            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full h-full bg-transparent text-white font-medium uppercase tracking-wider cursor-pointer z-10 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;