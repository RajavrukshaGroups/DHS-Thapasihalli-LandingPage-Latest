import { Phone, Mail, Twitter, Facebook, Instagram, MessageCircle, Youtube } from "lucide-react"

const Footer=()=> {
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
                  <span>+91-8884 735 735</span>
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
              <div className="flex gap-3">
                <a
                  href="https://twitter.com/DefenceSociety"
                  className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/defencehabitat"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/accounts/login/?next=/defence_habitat"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=918884413931&text&app_absent=0"
                  className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@defence_habitat"
                  className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
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
  )
}

export default Footer