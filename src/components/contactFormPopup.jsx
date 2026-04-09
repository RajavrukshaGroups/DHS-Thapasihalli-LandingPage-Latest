// import React, { useState, useEffect, useRef } from 'react';
// import { FiUser, FiMail, FiMessageSquare, FiX } from 'react-icons/fi';
// import { CiPhone } from "react-icons/ci";
// import toast from 'react-hot-toast';
// import { FaPaperPlane } from 'react-icons/fa';
// import ReCAPTCHA from "react-google-recaptcha";

// const ContactFormPopup = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [showButton, setShowButton] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     subject: "Thapasihalli"
//   });
//   const [loading, setLoading] = useState(false);
//   const popupRef = useRef(null);
//   const reopenTimerRef = useRef(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//      if (!captchaValue) {
//       setStatus({
//         loading: false,
//         ok: false,
//         msg: "Please verify that you are not a robot.",
//       });
//       return false;
//     }

//     if (!form.acceptTerms) {
//       setStatus({
//         loading: false,
//         ok: false,
//         msg: "Please accept Terms & Conditions and Privacy Policy.",
//       });
//       return false;
//     }

//     return true;
//   };

//   // Auto-show popup on initial load
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//     }, 3000);

//     return () => {
//       clearTimeout(timer);
//       clearTimeout(reopenTimerRef.current);
//     };
//   }, []);

//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setShowPopup(false);
//       setIsClosing(false);
//       setShowButton(true); // Show button after closing
      
//       // Set timer to reopen after 10 seconds
//       reopenTimerRef.current = setTimeout(() => {
//         setShowPopup(true);
//         setShowButton(false);
//       }, 10000);
//     }, 500);
//   };

//   const handleButtonClick = () => {
//     // Clear any pending reopen timer when manually opening
//     clearTimeout(reopenTimerRef.current);
//     setShowPopup(true);
//     setShowButton(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Start loading

//     try {
//       const res = await fetch("https://adminpanel.defencehousingsociety.com/defenceWebsiteRoutes/contactus", {
//       // const res = await fetch("http://localhost:4000/defenceWebsiteRoutes/new-contactus", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         toast.success("Message sent successfully!");
//         setFormData({ 
//           name: "", 
//           email: "", 
//           phone: "", 
//           message: "",
//           subject: "Thapasihalli"
//         });
//         handleClose(); // Close the popup after successful submission
//       } else {
//         toast.error("Failed to send message.");
//       }
//     } catch (error) {
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false); // Stop loading regardless of success or failure
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {/* Contact Button - Only shows after popup is closed */}
//       {showButton && !showPopup && !isClosing && (
//         <button
//           onClick={handleButtonClick}
//           className="bg-[#24447c] text-white px-6 py-3 rounded-full shadow-lg hover:bg-sky-700 transition-all duration-300 flex items-center justify-center"
//           style={{
//             boxShadow: '0 4px 15px rgba(59, 130, 246, 0.5)'
//           }}
//         >
//           <FaPaperPlane className="mr-2" />
//           Contact Us
//         </button>
//       )}

//       {/* Contact Form Popup */}
//       {showPopup && (
//         <div 
//           ref={popupRef}
//           className={`bg-white rounded-xl shadow-xl w-80 overflow-hidden transition-all duration-500 transform ${
//             isClosing ? 'animate-slideOut' : 'animate-slideIn'
//           }`}
//           style={{
//             boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
//           }}
//         >
//           <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#24447c] to-blue-600">
//             <h2 className="text-lg font-semibold text-white">Contact Us</h2>
//             <button
//               onClick={handleClose}
//               className="text-white hover:text-gray-200 transition-colors duration-200"
//             >
//               <FiX size={20} />
//             </button>
//           </div>

//           <div className="p-4">
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <div className="relative">
//                 <label className="block text-sm text-gray-600 mb-1">Name</label>
//                 <div className="relative">
//                   <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
//                     placeholder="Your Name"
//                     required
//                   />
//                 </div>
//               </div>
              
//               <div className="relative">
//                 <label className="block text-sm text-gray-600 mb-1">Email</label>
//                 <div className="relative">
//                   <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
//                     placeholder="you@example.com"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="relative">
//                 <label className="block text-sm text-gray-600 mb-1">Mobile No</label>
//                 <div className="relative">
//                   <CiPhone className="text-1xl absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" />
//                   <input
//                     type="number"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
//                     placeholder="Mobile No"
//                     required
//                   />
//                 </div>
//               </div>
              
//               <div className="relative">
//                 <label className="block text-sm text-gray-600 mb-1">Message</label>
//                 <div className="relative">
//                   <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
//                   <textarea
//                     rows="2"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
//                     placeholder="Your message..."
//                     required
//                   ></textarea>
//                 </div>
//               </div>

//               <div className="flex justify-center">
//                   <ReCAPTCHA
//                     ref={recaptchaRef}
//                     sitekey="6LfarqkrAAAAAFUBBVCodI4OdoTheC6uB1hdtITz"
//                     onChange={setCaptchaValue}
//                     onExpired={() => setCaptchaValue(null)}
//                   />
//                 </div>

//                 <div className="flex items-start gap-2">
//                   <input
//                     type="checkbox"
//                     name="acceptTerms"
//                     checked={form.acceptTerms}
//                     onChange={handleChange}
//                     className="mt-1 h-4 w-4"
//                   />
//                   <p className="text-sm text-slate-600">
//                     I accept the{" "}
//                     <a
//                       href="https://defencehousingsociety.com/terms-conditions"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="font-semibold underline"
//                     >
//                       Terms & Conditions
//                     </a>{" "}
//                     and{" "}
//                     <a
//                       href="https://defencehousingsociety.com/privacy-policy"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="font-semibold underline"
//                     >
//                       Privacy Policy
//                     </a>
//                   </p>
//                 </div>
              
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full bg-[#24447c] text-white py-2 rounded-md hover:bg-sky-700 transition-colors duration-200 flex items-center justify-center ${
//                   loading ? 'opacity-75 cursor-not-allowed' : ''
//                 }`}
//               >
//                 {loading ? (
//                   <>
//                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     Submit <FaPaperPlane className="ml-2" />
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       <style jsx global>{`
//         @keyframes slideIn {
//           from {
//             transform: translateX(100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }
        
//         @keyframes slideOut {
//           from {
//             transform: translateX(0);
//             opacity: 1;
//           }
//           to {
//             transform: translateX(100%);
//             opacity: 0;
//           }
//         }
        
//         .animate-slideIn {
//           animation: slideIn 0.5s ease-out forwards;
//         }
        
//         .animate-slideOut {
//           animation: slideOut 0.5s ease-in forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactFormPopup;


import React, { useState, useEffect, useRef } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiX } from 'react-icons/fi';
import { CiPhone } from "react-icons/ci";
import toast from 'react-hot-toast';
import { FaPaperPlane } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";

const ContactFormPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const popupRef = useRef(null);
  const recaptchaRef = useRef(null);
  const reopenTimerRef = useRef(null);

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setAcceptTerms(checked);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ✅ AUTO SHOW POPUP
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(reopenTimerRef.current);
    };
  }, []);

  // ✅ CLOSE POPUP
  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
      setShowButton(true);

      // reopenTimerRef.current = setTimeout(() => {
      //   setShowPopup(true);
      //   setShowButton(false);
      // }, 10000);
    }, 500);
  };

  // ✅ BUTTON CLICK
  const handleButtonClick = () => {
    clearTimeout(reopenTimerRef.current);
    setShowPopup(true);
    setShowButton(false);
  };

  // ✅ SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.error("Please verify that you are not a robot");
      return;
    }

    if (!acceptTerms) {
      toast.error("Please accept Terms & Conditions");
      return;
    }

    setLoading(true);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: String(formData.phone),
      message: formData.message.trim(),
      acceptTerms: acceptTerms,
      source: "Tapasihalli landing page",
      captchaValue: captchaValue,
    };

    console.log("POPUP PAYLOAD:", payload);

    try {
      const res = await fetch(
        "https://adminpanel.defencehousingsociety.com/defenceWebsiteRoutes/contactus",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        toast.success("Message sent successfully!");

        // RESET
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setAcceptTerms(false);
        setCaptchaValue(null);
        recaptchaRef.current?.reset();

        handleClose();
      } else {
        const errorText = await res.text();
        console.error("Backend Error:", errorText);
        toast.error(errorText || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">

      {/* BUTTON */}
      {showButton && !showPopup && !isClosing && (
        <button
          onClick={handleButtonClick}
          className="bg-[#24447c] text-white px-6 py-3 rounded-full shadow-lg hover:bg-sky-700 flex items-center"
        >
          <FaPaperPlane className="mr-2" />
          Contact Us
        </button>
      )}

      {/* POPUP */}
      {showPopup && (
        <div className={`bg-white rounded-xl shadow-xl w-80 ${isClosing ? 'animate-slideOut' : 'animate-slideIn'}`}>
          
          {/* HEADER */}
          <div className="flex justify-between p-4 bg-gradient-to-r from-[#24447c] to-blue-600">
            <h2 className="text-white">Contact Us</h2>
            <FiX className="text-white cursor-pointer" onClick={handleClose} />
          </div>

          {/* FORM */}
          <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="relative">
                <FiUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full pl-10 py-2 border rounded"
                  required
                />
              </div>

              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pl-10 py-2 border rounded"
                  required
                />
              </div>

              <div className="relative">
                <CiPhone className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full pl-10 py-2 border rounded"
                  required
                />
              </div>

              <div className="relative">
                <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full pl-10 py-2 border rounded"
                  required
                />
              </div>

              {/* CAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LfarqkrAAAAAFUBBVCodI4OdoTheC6uB1hdtITz"
                  onChange={(val) => setCaptchaValue(val)}
                  onExpired={() => setCaptchaValue(null)}
                />
              </div>

              {/* TERMS */}
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={handleChange}
                />
                <p className="text-sm">
                  I accept the <a  href="https://defencehousingsociety.com/terms-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline">
                        Terms</a> & 
                      <a  href="https://defencehousingsociety.com/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline"> Privacy Policy</a>
                </p>
              </div>

              <button
                disabled={loading}
                className="w-full bg-[#24447c] text-white py-2 rounded"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx global>{`
        .animate-slideIn { animation: slideIn 0.5s forwards; }
        .animate-slideOut { animation: slideOut 0.5s forwards; }

        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideOut {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ContactFormPopup;