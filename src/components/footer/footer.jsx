import { Phone, Mail } from "lucide-react";
import { FaTwitter, FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Defence Habitat Housing Co-Operative Society Ltd.
              </h2>
              <div className="text-gray-600 space-y-1">
                <p>Behind Swathi Garden Hotel,</p>
                <p>E Block, Sahakarnagar,</p>
                <p>Bangalore - 560092</p>
                <p>karnataka</p>
              </div>
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Phone:</span>
                  <span >+91-8884735735</span>
                  <span>+91-8188992266</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">Email:</span>
                  <span className="text-blue-600">mail@defencehousingsociety.com</span>
                </div>
              </div>
            </div>

            {/* Office Timings */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Office Timings</h3>
              <div className="space-y-2 text-gray-600">
                <div>
                  <p className="font-medium">Wednesday to Monday</p>
                  <p>9:30 AM - 6:30 PM</p>
                </div>
                <div className="pt-2">
                  <p className="font-medium">Weekly Off</p>
                  <p>Tuesday</p>
                </div>
              </div>
            </div>

            {/* Social Networks */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Our Social Networks</h3>
              <div className="flex gap-4">
                {/* Twitter */}
                {/* <a 
                  href="https://twitter.com/DefenceSociety" 
                  className="relative group w-10 h-10 flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <div className="absolute inset-0 bg-white rounded-full shadow-md transition-all duration-300 group-hover:bg-[#1DA1F2] group-hover:scale-110"></div>
                  <FaTwitter className="relative text-[#1DA1F2] text-xl group-hover:text-white transition-colors duration-300" />
                </a> */}
                <a 
                    href="https://twitter.com/DefenceSociety" 
                    className="relative group w-10 h-10 flex items-center justify-center"
                    aria-label="X (formerly Twitter)"
                  >
                    <div className="absolute inset-0 bg-white rounded-full shadow-md transition-all duration-300 group-hover:bg-black group-hover:scale-110"></div>
                    <FaXTwitter className="relative text-black text-xl group-hover:text-white transition-colors duration-300" />
                  </a>
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/defencehabitat" 
                  className="relative group w-10 h-10 flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <div className="absolute inset-0 bg-white rounded-full shadow-md transition-all duration-300 group-hover:bg-[#4267B2] group-hover:scale-110"></div>
                  <FaFacebookF className="relative text-[#4267B2] text-xl group-hover:text-white transition-colors duration-300" />
                </a>

                {/* Instagram */}
             <a 
                  href="https://www.instagram.com/accounts/login/?next=/defence_habitat/" 
                  className="relative group w-10 h-10 flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <div className="absolute inset-0 bg-white rounded-full shadow-md transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#fdf497] group-hover:via-[#fd5949] group-hover:to-[#d6249f] group-hover:scale-110"></div>
                  <FaInstagram className="relative text-xl transition-colors duration-300 text-[#E1306C] group-hover:text-white" />
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://api.whatsapp.com/send/?phone=918884413931&text&app_absent=0" 
                  className="relative group w-10 h-10 flex items-center justify-center"
                  aria-label="WhatsApp"
                >
                  <div className="absolute inset-0 bg-white rounded-full shadow-md transition-all duration-300 group-hover:bg-[#25D366] group-hover:scale-110"></div>
                  <FaWhatsapp className="relative text-[#25D366] text-xl group-hover:text-white transition-colors duration-300" />
                </a>

                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/@defencehabitathousingsocie1590" 
                  className="relative group w-10 h-10 flex items-center justify-center"
                  aria-label="YouTube"
                >
                  <div className="absolute inset-0 bg-white rounded-full shadow-md transition-all duration-300 group-hover:bg-[#FF0000] group-hover:scale-110"></div>
                  <FaYoutube className="relative text-[#FF0000] text-xl group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">© 2025 DEFENCE HABITAT ALL RIGHT RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;