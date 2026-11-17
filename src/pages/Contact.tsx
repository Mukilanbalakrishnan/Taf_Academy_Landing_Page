import React, { useState } from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { OFFICIAL_CONTACT } from '@/data/contact';
import { DISTRICT_LIST } from '@/data/branches';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Building,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    district: 'Tenkasi',
    inquiryType: 'Course Admission & Batch Timings',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <section className="bg-[#F4F7FC] text-[#26344D] py-16 px-4 sm:px-6 border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto space-y-4 text-left">
          <Breadcrumb
            items={[{ label: 'Contact Us' }]}
          />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] text-xs font-semibold uppercase tracking-widest shadow-2xs">
            <Phone className="w-4 h-4 text-[#E31B23]" />
            <span>Official Helpdesk & Branch Coordinates</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#102A78]">
            Connect With TAF IAS Academy
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
            Reach out directly to our central admissions team in Tenkasi or your regional district center for guidance on batches, study materials, and hostel accommodations.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Head Office Card */}
          <div className="bg-[#F4F7FC] rounded-3xl p-8 border border-[#E5EAF2] shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#102A78] border border-[#E5EAF2] flex items-center justify-center font-bold shadow-2xs">
              <MapPin className="w-6 h-6 text-[#102A78]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#102A78]">
              Central Head Office
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              {OFFICIAL_CONTACT.headOffice.address}
            </p>
            <div className="pt-2">
              <a
                href={OFFICIAL_CONTACT.headOffice.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#102A78] hover:text-[#174A9C] flex items-center gap-1 transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Calling Lines Card */}
          <div className="bg-[#F4F7FC] rounded-3xl p-8 border border-[#E5EAF2] shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#102A78] border border-[#E5EAF2] flex items-center justify-center font-bold shadow-2xs">
              <Phone className="w-6 h-6 text-[#102A78]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#102A78]">
              Official Helpline Numbers
            </h3>
            <div className="space-y-1.5 text-xs text-[#64748B]">
              <div>
                <span className="text-[#64748B] block text-[10px] uppercase font-bold">Admissions Primary:</span>
                <a href={`tel:${OFFICIAL_CONTACT.phones.primary}`} className="font-bold text-[#102A78] hover:text-[#174A9C] text-sm">
                  {OFFICIAL_CONTACT.phones.primary}
                </a>
              </div>
              <div>
                <span className="text-[#64748B] block text-[10px] uppercase font-bold">Alternate Line:</span>
                <a href={`tel:${OFFICIAL_CONTACT.phones.secondary}`} className="font-semibold text-[#102A78] hover:text-[#174A9C]">
                  {OFFICIAL_CONTACT.phones.secondary}
                </a>
              </div>
              <div>
                <span className="text-[#64748B] block text-[10px] uppercase font-bold">General Inquiries:</span>
                <a href={`tel:${OFFICIAL_CONTACT.phones.inquiry}`} className="font-semibold text-[#102A78] hover:text-[#174A9C]">
                  {OFFICIAL_CONTACT.phones.inquiry}
                </a>
              </div>
            </div>
          </div>

          {/* Electronic & Social Card */}
          <div className="bg-[#F4F7FC] rounded-3xl p-8 border border-[#E5EAF2] shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#102A78] border border-[#E5EAF2] flex items-center justify-center font-bold shadow-2xs">
              <Mail className="w-6 h-6 text-[#102A78]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#102A78]">
              Email & WhatsApp
            </h3>
            <div className="space-y-2 text-xs text-[#64748B]">
              <div>
                <span className="text-[#64748B] block text-[10px] uppercase font-bold">Official Email:</span>
                <a href={`mailto:${OFFICIAL_CONTACT.emails.headOffice}`} className="font-semibold text-[#102A78] hover:text-[#174A9C]">
                  {OFFICIAL_CONTACT.emails.headOffice}
                </a>
              </div>
              <div>
                <span className="text-[#64748B] block text-[10px] uppercase font-bold">Student Helpdesk:</span>
                <a href={`mailto:${OFFICIAL_CONTACT.emails.general}`} className="font-semibold text-[#102A78] hover:text-[#174A9C]">
                  {OFFICIAL_CONTACT.emails.general}
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={OFFICIAL_CONTACT.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {OFFICIAL_CONTACT.whatsapp.displayNumber}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form & Hours Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form (8 Cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-[#E5EAF2] shadow-sm text-left">
            <h2 className="font-serif text-2xl font-bold text-[#102A78]">
              Send an Official Enquiry
            </h2>
            <p className="text-xs text-[#64748B] mt-1 mb-6">
              Our central academic coordinators will reach out via call or WhatsApp with detailed course brochures and fee schedules.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#102A78]">Enquiry Successfully Dispatched</h3>
                <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your enquiry has been routed to the <strong>{formData.district}</strong> academic coordination desk. Expect a call shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#102A78] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Karthikeyan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] outline-none text-[#26344D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] outline-none text-[#26344D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] outline-none text-[#26344D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                      District / Center Location
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] outline-none bg-white font-medium text-[#26344D]"
                    >
                      {DISTRICT_LIST.filter(d => d !== 'All Districts').map((d) => (
                        <option key={d} value={d}>{d} District</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] outline-none bg-white font-medium text-[#26344D]"
                  >
                    <option value="Course Admission & Batch Timings">Course Admission & Batch Timings</option>
                    <option value="Residential Hostel Accommodation (Tenkasi/Thanjavur)">Residential Hostel Accommodation (Tenkasi/Thanjavur)</option>
                    <option value="Aamu Publication Books & Study Kit Purchase">Aamu Publication Books & Study Kit Purchase</option>
                    <option value="Online Digital Live Class Portal">Online Digital Live Class Portal</option>
                    <option value="Scholarship Evaluation & Fee Concessions">Scholarship Evaluation & Fee Concessions</option>
                    <option value="General Academic Counseling">General Academic Counseling</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details about your educational background, target examination, or queries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] outline-none resize-none text-[#26344D]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span>Transmitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Official Enquiry</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#64748B] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Your details are maintained under institutional privacy protocols.</span>
                </div>
              </form>
            )}
          </div>

          {/* Working Hours & Guidance (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="bg-[#F4F7FC] rounded-3xl p-6 border border-[#E5EAF2] shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-[#102A78] font-serif font-bold text-lg">
                <Clock className="w-5 h-5 text-[#102A78]" />
                <span>Operating Timings</span>
              </div>
              <div className="space-y-2 text-xs text-[#64748B] leading-relaxed border-t border-[#E5EAF2] pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-[#102A78]">Monday – Saturday:</span>
                  <span>{OFFICIAL_CONTACT.hours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#102A78]">Sunday / Mock Tests:</span>
                  <span>{OFFICIAL_CONTACT.hours.sunday}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F4F7FC] text-[#26344D] rounded-3xl p-6 border border-[#E5EAF2] space-y-3 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#102A78]">
                Direct WhatsApp Hotline
              </span>
              <h3 className="font-serif text-xl font-bold text-[#102A78]">
                Instant Response for Aspirants
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Connect with our academic counselors on WhatsApp for instant batch schedules, question bank sample chapters, and center addresses.
              </p>
              <div className="pt-1">
                <a
                  href={OFFICIAL_CONTACT.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
