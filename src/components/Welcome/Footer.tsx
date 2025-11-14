export default function Footer() {
  return (
    <>
      <footer class="bg-emerald-900 text-slate-300 py-16 px-6">
        <div class="max-w-7xl mx-auto">
          <div class="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div class="flex items-center gap-2 mb-4">
                <div class="w-10 h-10 bg-linear-to-br from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center">
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
                    class="lucide lucide-heart w-6 h-6 text-white"
                    data-source-location="pages/Home:350:18"
                    data-dynamic-content="false"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <span class="text-2xl font-bold text-white">EthicalTech</span>
              </div>
              <p class="text-slate-400 leading-relaxed">
                Building a fairer digital future, one project at a time.
              </p>
            </div>
            <div>
              <h4 class="font-bold text-white mb-4">Services</h4>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="hover:text-emerald-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-emerald-400 transition-colors">
                    Digital Strategy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-emerald-400 transition-colors">
                    Product Design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-white mb-4">Company</h4>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="hover:text-emerald-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-emerald-400 transition-colors">
                    Our Values
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-emerald-400 transition-colors">
                    Join Our Team
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-white mb-4">Contact</h4>
              <ul class="space-y-2">
                <li class="text-slate-400">
                  <a href="mailto:ethicaltechuk@proton.me">
                    ethicaltechuk@proton.me
                  </a>
                </li>
                <li class="text-slate-400">+44 7700 000 000</li>
                <li class="text-slate-400">San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div class="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-slate-400 text-sm">
              © 2025 EthicalTech. All rights reserved. Built with integrity.
            </p>
            <div class="flex gap-6 text-sm">
              <a href="#" class="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" class="hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer class="text-center text-sm text-gray-500 py-6 border-t">
        &copy; 2025 EthicalTech UK.
      </footer>
    </>
  );
}
