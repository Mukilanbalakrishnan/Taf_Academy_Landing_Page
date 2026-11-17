import React, { useState } from 'react';
import { Send, Phone, MessageCircle, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { DISTRICT_LIST } from '@/data/branches';
import { OFFICIAL_CONTACT } from '@/data/contact';

export const AdmissionEnquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    course: 'TNPSC Group 1',
    center: 'Tenkasi Head Office',
    learningMode: 'Classroom Regular',
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
    <section className="bg-[#F4F7FC] py-14 sm:py-16 px-4 sm:px-8 lg:px-12 border-b border-[#E5EAF2]" id="admissions">
      <div className="w-full max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Callout (5 Cols) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#102A78]">
              <Sparkles className="w-4 h-4 text-[#E31B23]" />
              <span>Admissions Open 2026</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A78] tracking-tight leading-tight">
              Begin Your Government Career Today.
            </h2>

            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-[#E5EAF2]">
                <MapPin className="w-5 h-5 text-[#102A78] shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#102A78] uppercase tracking-wider">
                    Tenkasi Head Office & 92 Centers
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Tamil Nadu Statewide Campus Network
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-[#E5EAF2]">
                <Phone className="w-5 h-5 text-[#102A78] shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#102A78] uppercase tracking-wider">
                    Admission Helpline
                  </h4>
                  <p className="text-xs text-[#102A78] font-bold">
                    {OFFICIAL_CONTACT.phones.primary} • {OFFICIAL_CONTACT.phones.secondary}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <a
                href={OFFICIAL_CONTACT.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Admission Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5EAF2] shadow-sm relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-300">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#102A78]">
                    Enquiry Submitted Successfully
                  </h3>
                  <p className="text-sm text-[#64748B] max-w-md mx-auto">
                    Thank you, <strong className="text-[#102A78]">{formData.fullName}</strong>. An academic counselor will contact you at <strong className="text-[#102A78]">{formData.mobile}</strong> to confirm course curriculum, fee structure, and batch schedule.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-[#102A78] text-white hover:bg-[#174A9C] text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="border-b border-[#E5EAF2] pb-3 mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#102A78]">
                      Admission & Guidance Application
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Fill out the form below. Our counselors will reach you within 24 business hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                        Full Name <span className="text-[#E31B23]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. S. Karthikeyan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none transition-all text-[#26344D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                        Mobile Number <span className="text-[#E31B23]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        placeholder="10-digit mobile number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none transition-all text-[#26344D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none transition-all text-[#26344D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                        Interested Course <span className="text-[#E31B23]">*</span>
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none bg-white transition-all font-medium text-[#26344D]"
                      >
                        <option value="TNPSC Group 1">TNPSC Group 1 (Deputy Collector / DSP)</option>
                        <option value="TNPSC Group 2 / 2A">TNPSC Group 2 / 2A</option>
                        <option value="TNPSC Group 4 & VAO">TNPSC Group 4 & VAO</option>
                        <option value="TNSURB Police SI">TNSURB Police SI (Taluk / AR)</option>
                        <option value="TNSURB Police Constable">TNSURB Police Constable</option>
                        <option value="UPSC Civil Services">UPSC Civil Services (IAS / IPS)</option>
                        <option value="Junior IAS Foundation">Junior IAS Foundation</option>
                        <option value="Banking (IBPS / SBI)">Banking (IBPS / SBI)</option>
                        <option value="SSC (CGL / CHSL)">SSC (CGL / CHSL)</option>
                        <option value="RRB Railways">RRB Railways</option>
                        <option value="Online Digital Live">100% Online Digital Live Batch</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                        Preferred Center / District
                      </label>
                      <select
                        value={formData.center}
                        onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none bg-white transition-all font-medium text-[#26344D]"
                      >
                        <option value="Tenkasi Head Office">Tenkasi Head Office (Residential)</option>
                        <option value="Thanjavur Campus">Thanjavur Campus (Residential)</option>
                        <option value="Chennai Center">Chennai Hub</option>
                        <option value="Madurai Center">Madurai Center</option>
                        <option value="Tiruchirappalli Center">Tiruchirappalli Center</option>
                        <option value="Salem Center">Salem Junction</option>
                        <option value="Coimbatore Center">Coimbatore Gandhipuram</option>
                        <option value="Tirunelveli Center">Tirunelveli Junction</option>
                        <option value="Virudhunagar Center">Virudhunagar Center</option>
                        {DISTRICT_LIST.filter(d => d !== 'All Districts').map(d => (
                          <option key={d} value={`${d} Branch`}>{d} District Branch</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                        Preferred Learning Mode
                      </label>
                      <select
                        value={formData.learningMode}
                        onChange={(e) => setFormData({ ...formData, learningMode: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none bg-white transition-all font-medium text-[#26344D]"
                      >
                        <option value="Classroom Regular">Classroom Regular (Mon - Fri)</option>
                        <option value="Residential Hostel Intensive">Residential Hostel (Tenkasi / Thanjavur)</option>
                        <option value="Weekend Batch">Weekend Batch (Sat & Sun)</option>
                        <option value="100% Online Live Portal">100% Online Live Portal</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                      Message / Special Queries (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Inquiring about hostel availability, upcoming batch start dates or Tamil medium material..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 text-sm rounded-lg border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none transition-all resize-none text-[#26344D]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white font-bold text-sm tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <span>Processing Your Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Admission Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748B] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your contact details are encrypted and maintained with absolute confidentiality.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
