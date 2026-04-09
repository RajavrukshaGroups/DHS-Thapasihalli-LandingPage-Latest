import React, { useState, useRef, useEffect } from "react";
import { Send, X, MessageSquare, Phone, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion, AnimatePresence } from "framer-motion";

const StickyContactForm = () => {
  const recaptchaRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    acceptTerms: false,
  });

  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });
  
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;
    
    setForm((s) => ({
      ...s,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Please fill required fields.",
      });
      return false;
    }

    const re = /\S+@\S+\.\S+/;
    if (!re.test(form.email)) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Please enter a valid email.",
      });
      return false;
    }

    if (!captchaValue) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Please verify that you are not a robot.",
      });
      return false;
    }

    if (!form.acceptTerms) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Please accept Terms & Conditions and Privacy Policy.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "" });

    if (!validate()) return;

    try {
      const endpoint = "https://adminpanel.defencehousingsociety.com/defenceWebsiteRoutes/contactus";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          Source: "Tapasihalli landing page",
          captchaValue,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          loading: false,
          ok: true,
          msg: "Message sent. Thank you!",
        });

        // ✅ Clear form
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          acceptTerms: false,
        });

        // ✅ Reset captcha
        setCaptchaValue(null);
        recaptchaRef.current?.reset();
        
        // Auto close after success? Maybe wait a bit
        setTimeout(() => {
          setIsMinimized(true);
          setStatus({ loading: false, ok: null, msg: "" });
        }, 3000);
      } else {
        throw new Error(data?.message || "Failed to send");
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        ok: false,
        msg: err.message || "Error sending message.",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Floating Trigger Button (when minimized) */}
      <AnimatePresence>
        {isMinimized && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsMinimized(false)}
            className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-dhs-blue text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-800 transition-colors group"
          >
            <MessageSquare className="w-7 h-7 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-2 -right-2 bg-dhs-gold text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">
              Enquire
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Popup */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] z-50 bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col border-l border-slate-100"
          >
            {/* Header */}
            <div className="relative h-48 bg-dhs-blue overflow-hidden flex flex-col items-center justify-center text-center p-6">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
              </div>
              
              <button 
                onClick={() => setIsMinimized(true)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg mx-auto">
                   <span className="text-dhs-blue font-serif font-bold text-xl">DHS</span>
                </div>
                <h2 className="text-2xl font-serif font-semibold text-white tracking-wide">
                  Enquire Now
                </h2>
                <p className="text-white/70 text-sm font-light mt-1 max-w-[280px]">
                  Defence Habitat Housing Co-operative Society Ltd.
                </p>
              </div>
            </div>

            {/* Form Body */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                      Full Name*
                    </label>
                    <div className="relative">
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-dhs-gold/20 focus:border-dhs-gold outline-none transition-all font-sans"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-dhs-gold/20 focus:border-dhs-gold outline-none transition-all font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Email Address*
                      </label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-dhs-gold/20 focus:border-dhs-gold outline-none transition-all font-sans"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                      Message*
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="I'm interested in site visits and pricing..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-dhs-gold/20 focus:border-dhs-gold outline-none transition-all font-sans resize-none"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LfarqkrAAAAAFUBBVCodI4OdoTheC6uB1hdtITz"
                    onChange={setCaptchaValue}
                    onExpired={() => setCaptchaValue(null)}
                  />
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    id="acceptTerms"
                    checked={form.acceptTerms}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-dhs-blue focus:ring-dhs-blue"
                  />
                  <label htmlFor="acceptTerms" className="text-[11px] leading-relaxed text-slate-600">
                    I accept the{" "}
                    <a
                      href="https://defencehousingsociety.com/terms-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-dhs-blue hover:underline"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://defencehousingsociety.com/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-dhs-blue hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full bg-dhs-blue text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-900 active:scale-[0.98] transition-all disabled:opacity-70 shadow-lg shadow-blue-900/20"
                >
                  {status.loading ? "Processing..." : "Submit Enquiry"}
                  {!status.loading && <Send size={18} />}
                </button>

                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {status.ok === true && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg border border-green-100"
                    >
                      <CheckCircle2 size={18} />
                      <p className="text-sm font-medium">{status.msg}</p>
                    </motion.div>
                  )}
                  {status.ok === false && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-100"
                    >
                      <AlertCircle size={18} />
                      <p className="text-sm font-medium">{status.msg}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Footer Info */}
            <div className="p-6 border-top border-slate-100 bg-slate-50/50">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-slate-500">
                   <Phone size={16} className="text-dhs-gold" />
                   <span className="text-xs font-medium">+91 91481 94444</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                   <Mail size={16} className="text-dhs-gold" />
                   <span className="text-xs font-medium">info@defencehousingsociety.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyContactForm;
