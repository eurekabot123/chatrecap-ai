export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-gray-900">ChatRecap</span>
              <span className="text-primary-500 font-semibold">AI</span>
            </div>
            <p className="text-gray-600 max-w-sm">
              Advanced AI-powered chat analysis to help you understand your conversations better.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-gray-900">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} ChatRecap AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 