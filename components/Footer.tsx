import React from 'react';
import { MessageSquare, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-gradient-to-tr from-brand-500 to-emerald-300 p-1.5 rounded-lg">
                <MessageSquare className="h-5 w-5 text-dark-900" />
              </div>
              <span className="text-xl font-bold text-white">Verse</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              The operating system for social commerce. Built for modern brands that want to scale through conversation.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/gatitu_mwangi" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="https://ke.linkedin.com/in/petergat2" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/platform" className="hover:text-brand-400">Platform</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-400">Pricing</Link></li>
              <li><a href="#" className="hover:text-brand-400">Integrations</a></li>
              <li><a href="#" className="hover:text-brand-400">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-brand-400">About</Link></li>
              <li><a href="#" className="hover:text-brand-400">Careers</a></li>
              <li><a href="#" className="hover:text-brand-400">Blog</a></li>
              <li><a href="#" className="hover:text-brand-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400">Community</a></li>
              <li><a href="#" className="hover:text-brand-400">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-400">API Docs</a></li>
              <li><a href="#" className="hover:text-brand-400">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400">Privacy</a></li>
              <li><a href="#" className="hover:text-brand-400">Terms</a></li>
              <li><a href="#" className="hover:text-brand-400">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Verse Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500"></div>
             <span className="text-gray-400 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};