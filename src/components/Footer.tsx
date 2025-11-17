export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-slate-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-emerald-800 to-emerald-700 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-6 h-6 text-white"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">EthicalTech</span>
            </div>
            <p className="text-emerald-200 leading-relaxed">
              Building a fairer digital future, one project at a time.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Web development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Digital strategy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Product design
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Our values
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Join our team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:ethicaltechuk@proton.me">
                  ethicaltechuk@proton.me
                </a>
              </li>
              <li className="text-emerald-200">+44 7700 000 000</li>
              <li className="text-emerald-200">England, UK</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-emerald-200 text-sm">
            © 2025 EthicalTech. All rights reserved. Built with integrity.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
