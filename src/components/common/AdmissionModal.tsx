import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, PhoneCall, Send, ShieldCheck, MessageCircle } from 'lucide-react';
import { DISTRICT_LIST } from '@/data/branches';
import { OFFICIAL_CONTACT } from '@/data/contact';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
  defaultCenter?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = 'TNPSC Group 1',
  defaultCenter = 'Tenkasi Head Office',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    course: defaultCourse,
    center: defaultCenter,
    learningMode: 'Classroom Regular',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean frontend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl bg-white border border-[#E5EAF2] rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Header */}
            <div className="bg-[#F4F7FC] text-[#26344D] px-6 py-5 relative border-b border-[#E5EAF2]">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-[#64748B] hover:text-[#102A78] transition-colors p-1.5 rounded-full hover:bg-slate-200/60"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block w-2 h-2 rounded-full bg-[#E31B23] animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-[#102A78] font-bold">
                  Official Admission Desk
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-[#102A78]">
                Begin Your Civil Service Journey
              </h3>
              <p className="text-xs text-[#64748B] mt-1">
                Direct enrollment counselling with senior academic coordinators across our 92 centers.
              </p>
            </div>

            {/* Content Body */}
            <div className="p-6">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-200">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#102A78]">
                    Enquiry Received Successfully
                  </h4>
                  <p className="text-sm text-[#64748B] max-w-md mx-auto">
                    Thank you, <strong className="text-[#102A78]">{formData.fullName}</strong>. Your enquiry for <strong className="text-[#102A78]">{formData.course}</strong> at our <strong className="text-[#102A78]">{formData.center}</strong> center has been recorded. An academic counselor will reach you at <strong className="text-[#102A78]">{formData.mobile}</strong> shortly.
                  </p>

                  <div className="bg-[#F4F7FC] border border-[#E5EAF2] rounded-2xl p-4 text-xs text-[#26344D] text-left space-y-1 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Selected Course:</span>
                      <span className="font-semibold text-[#102A78]">{formData.course}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Learning Format:</span>
                      <span className="font-semibold text-[#102A78]">{formData.learningMode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Preferred Center:</span>
                      <span className="font-semibold text-[#102A78]">{formData.center}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={OFFICIAL_CONTACT.whatsapp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors shadow-2xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp Now
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl border border-[#E5EAF2] bg-white text-[#102A78] hover:bg-slate-50 text-sm font-semibold transition-colors shadow-2xs"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-[#E31B23]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. S. Karthikeyan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none transition-all text-[#26344D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1.5">
                        Mobile Number <span className="text-[#E31B23]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        placeholder="10-digit mobile number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none transition-all text-[#26344D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none transition-all text-[#26344D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1.5">
                        Interested Course <span className="text-[#E31B23]">*</span>
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none bg-white transition-all text-[#26344D]"
                      >
                        <option value="TNPSC Group 1">TNPSC Group 1</option>
                        <option value="TNPSC Group 2 / 2A">TNPSC Group 2 / 2A</option>
                        <option value="TNPSC Group 4 & VAO">TNPSC Group 4 & VAO</option>
                        <option value="TNSURB Police SI">TNSURB Police SI</option>
                        <option value="TNSURB Police Constable">TNSURB Police Constable</option>
                        <option value="Banking (IBPS / SBI)">Banking (IBPS / SBI)</option>
                        <option value="SSC (CGL / CHSL / MTS)">SSC (CGL / CHSL / MTS)</option>
                        <option value="RRB Railways">RRB Railways</option>
                        <option value="UPSC Civil Services">UPSC Civil Services</option>
                        <option value="Junior IAS Foundation">Junior IAS Foundation</option>
                        <option value="TRB Teachers Recruitment">TRB Teachers Recruitment</option>
                        <option value="Online Digital Live Batch">Online Digital Live Batch</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1.5">
                        Preferred Center / District
                      </label>
                      <select
                        value={formData.center}
                        onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none bg-white transition-all text-[#26344D]"
                      >
                        <option value="Tenkasi Head Office">Tenkasi Head Office (Residential)</option>
                        <option value="Thanjavur Campus">Thanjavur Campus (Residential)</option>
                        <option value="Chennai Center">Chennai Hub</option>
                        <option value="Madurai Center">Madurai Center</option>
                        <option value="Tiruchirappalli Center">Tiruchirappalli (Trichy)</option>
                        <option value="Salem Center">Salem Junction</option>
                        <option value="Coimbatore Center">Coimbatore Gandhipuram</option>
                        <option value="Tirunelveli Center">Tirunelveli Junction</option>
                        <option value="Virudhunagar Center">Virudhunagar</option>
                        <option value="Cuddalore Center">Cuddalore</option>
                        <option value="Villupuram Center">Villupuram</option>
                        {DISTRICT_LIST.filter(d => d !== 'All Districts').map(d => (
                          <option key={d} value={`${d} Branch`}>{d} District Branch</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1.5">
                        Preferred Mode
                      </label>
                      <select
                        value={formData.learningMode}
                        onChange={(e) => setFormData({ ...formData, learningMode: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none bg-white transition-all text-[#26344D]"
                      >
                        <option value="Classroom Regular (Mon-Fri)">Classroom Regular (Mon-Fri)</option>
                        <option value="Residential Hostel Intensive (Tenkasi / Thanjavur)">Residential Hostel Intensive (Tenkasi / Thanjavur)</option>
                        <option value="Weekend Batch (Sat & Sun)">Weekend Batch (Sat & Sun)</option>
                        <option value="100% Online Live Interactive">100% Online Live Interactive</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1.5">
                      Your Query or Educational Background (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Currently in final year degree, interested in next TNPSC Group 1 batch schedule"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none transition-all resize-none text-[#26344D]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Admission Enquiry</span>
                        </>
                      )}
                    </button>

                    <a
                      href={OFFICIAL_CONTACT.whatsapp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-2xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748B] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your details are confidential. Direct official guidance from TAF IAS Academy.</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
