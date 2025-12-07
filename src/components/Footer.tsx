import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Column - Spans full width on mobile for better logo spacing */}
          <div className="col-span-2 md:col-span-1 space-y-6">
             <Link href="/" className="flex items-center">
              <Logo className="h-8 md:h-10 w-auto text-ink-primary" />
            </Link>

            <div className="space-y-4">
               <div className="flex items-center gap-3">
                 <span className="text-xs text-ink-tertiary font-semibold uppercase">Backed by</span>
                 <div className="h-8 md:h-10 w-auto relative">
                   <img src="/images/badges/yc-logo-transparent.png" alt="Y Combinator" className="h-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
                 </div>
               </div>
               <div className="h-10 md:h-12 w-auto relative">
                  <img src="/images/badges/google_cloud_partner.png" alt="Google Cloud Partner" className="h-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
               </div>
               <iframe
                 src="https://status.skyhook.io/badge?theme=light"
                 width="250"
                 height="30"
                 frameBorder="0"
                 scrolling="no"
                 className="block max-w-full"
                 style={{ colorScheme: 'normal' }}
                 title="Skyhook Status"
               />
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className="font-semibold text-ink-primary mb-4 text-base md:text-lg">Company</h4>
            <ul className="space-y-2 md:space-y-3">
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
          <div className="col-span-1">
             <h4 className="font-semibold text-ink-primary mb-4 text-base md:text-lg">Resources</h4>
             <ul className="space-y-2 md:space-y-3">
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

          {/* SOC2 - Spans full width on mobile to sit comfortably at bottom */}
          <div className="col-span-2 md:col-span-1 pt-4 md:pt-0">
             <div className="h-20 md:h-24 w-auto relative">
                <img src="/images/badges/soc2.png" alt="AICPA SOC 2" className="h-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
             </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-left">
          <p className="text-sm text-ink-tertiary">
            &copy; {new Date().getFullYear()} Skyhook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
