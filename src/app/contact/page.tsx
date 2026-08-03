import React from 'react';
import { Metadata } from 'next';
import { SITE_URL } from '@/config/seo';
import { Mail, MapPin, Phone } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Contact Us | MaterialVerse Engineering Database Support",
  description: "Get in touch with the MaterialVerse editorial team for feedback, database audits, and technical correction requests.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 pb-12 space-y-8">
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <div className="space-y-4">
        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">Get In Touch</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Contact Support &amp; Corrections
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
          Have feedback on a material specification or want to request a brand verification audit? Reach out using the details below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="glass-panel p-5 rounded-2xl border border-white/5 space-y-2 flex flex-col items-center text-center">
          <Mail className="w-5 h-5 text-blue-400" />
          <h3 className="font-bold text-white text-xs uppercase tracking-wider">Email</h3>
          <p className="text-xs text-gray-300 font-mono">support@materialverse.app</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-white/5 space-y-2 flex flex-col items-center text-center">
          <MapPin className="w-5 h-5 text-emerald-400" />
          <h3 className="font-bold text-white text-xs uppercase tracking-wider">Office</h3>
          <p className="text-xs text-gray-350 font-light leading-relaxed">
            Tech Park, Civil Lines, Jaipur, RJ 302006, India
          </p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-white/5 space-y-2 flex flex-col items-center text-center">
          <Phone className="w-5 h-5 text-indigo-400" />
          <h3 className="font-bold text-white text-xs uppercase tracking-wider">Phone</h3>
          <p className="text-xs text-gray-300 font-mono">+91 141 555 0192</p>
        </div>
      </div>
    </div>
  );
}
