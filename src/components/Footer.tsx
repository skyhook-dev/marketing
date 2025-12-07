import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
             <Link href="/" className="flex items-center">
              <Logo className="h-10 w-auto text-ink-primary" />
            </Link>

            <div className="space-y-4">
               <div className="flex items-center gap-3">
                 <span className="text-xs text-ink-tertiary font-semibold uppercase">Backed by</span>
                 <div className="h-10 w-auto relative">
                   <img src="/images/badges/yc_backed.png" alt="Y Combinator" className="h-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
                 </div>
               </div>
               <div className="h-12 w-auto relative">
                  <img src="/images/badges/google_cloud_partner.png" alt="Google Cloud Partner" className="h-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
               </div>
               <iframe
                 src="https://status.skyhook.io/badge?theme=light"
                 width="250"
                 height="30"
                 frameBorder="0"
                 scrolling="no"
                 className="block"
                 style={{ colorScheme: 'normal' }}
                 title="Skyhook Status"
               />
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-ink-primary mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/pricing" className="text-sm text-ink-secondary hover:text-ink-primary hover:underline decoration-1 underline-offset-4 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-ink-secondary hover:text-ink-primary hover:underline decoration-1 underline-offset-4 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="mailto:contact@skyhook.io" className="text-sm text-ink-secondary hover:text-ink-primary hover:underline decoration-1 underline-offset-4 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
             <h4 className="font-semibold text-ink-primary mb-4">Resources</h4>
             <ul className="space-y-3">
               <li>
                 <a href="https://docs.skyhook.io" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-secondary hover:text-ink-primary hover:underline decoration-1 underline-offset-4 transition-colors">
                   Documentation
                 </a>
               </li>
               <li>
                 <Link href="/changelog" className="text-sm text-ink-secondary hover:text-ink-primary hover:underline decoration-1 underline-offset-4 transition-colors">
                   Changelog
                 </Link>
               </li>
               <li>
                 <Link href="/status" className="text-sm text-ink-secondary hover:text-ink-primary hover:underline decoration-1 underline-offset-4 transition-colors">
                   Status
                 </Link>
               </li>
               <li>
                 <a href="https://trust.skyhook.io" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-secondary hover:text-ink-primary hover:underline decoration-1 underline-offset-4 transition-colors">
                   Trust Center
                 </a>
               </li>
             </ul>
          </div>

          {/* SOC2 */}
          <div>
             <div className="h-24 w-auto relative">
                <img src="/images/badges/soc2.png" alt="AICPA SOC 2" className="h-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
             </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center md:text-left">
          <p className="text-sm text-ink-tertiary">
            &copy; {new Date().getFullYear()} Skyhook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
