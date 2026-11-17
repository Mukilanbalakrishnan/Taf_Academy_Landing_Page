import React, { useState } from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { CAREER_OPENINGS, CareerOpening } from '@/data/careers';
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  Send,
  Sparkles,
  FileText,
  X,
} from 'lucide-react';
import { OFFICIAL_CONTACT } from '@/data/contact';

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<CareerOpening | null>(null);
  const [applySubmitted, setApplySubmitted] = useState(false);
  const [applicantData, setApplicantData] = useState({
    name: '',
    phone: '',
    email: '',
    highestQualification: '',
    experienceYears: '',
    preferredLocation: '',
    coverNote: '',
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySubmitted(true);
  };

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <section className="bg-[#F4F7FC] text-[#26344D] py-16 px-4 sm:px-6 border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto space-y-4 text-left">
          <Breadcrumb
            items={[{ label: 'Careers at TAF' }]}
          />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] text-xs font-semibold uppercase tracking-widest shadow-2xs">
            <Briefcase className="w-4 h-4 text-[#E31B23]" />
            <span>Join Our Academic Mission</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#102A78]">
            Careers at TAF IAS Academy
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
            Be part of Tamil Nadu's most impactful competitive educational institution. We invite dedicated subject educators, research scholars, and branch leadership professionals.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12 text-left">
        
        {/* Culture Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F4F7FC] p-6 rounded-3xl border border-[#E5EAF2] shadow-xs space-y-2">
            <h3 className="font-serif text-lg font-bold text-[#102A78]">Academic Autonomy</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Design cutting-edge pedagogy with full editorial backing from Aamu Publication and state rank mentors.
            </p>
          </div>
          <div className="bg-[#F4F7FC] p-6 rounded-3xl border border-[#E5EAF2] shadow-xs space-y-2">
            <h3 className="font-serif text-lg font-bold text-[#102A78]">Statewide Placement</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Opportunities available at our Tenkasi Headquarters, Thanjavur residential campus, and 92 district hub centers.
            </p>
          </div>
          <div className="bg-[#F4F7FC] p-6 rounded-3xl border border-[#E5EAF2] shadow-xs space-y-2">
            <h3 className="font-serif text-lg font-bold text-[#102A78]">Mission of Impact</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Directly empower rural and first-generation graduate youth to step into prestigious government administrative roles.
            </p>
          </div>
        </div>

        {/* Current Openings */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5EAF2]">
            <h2 className="font-serif text-2xl font-bold text-[#102A78]">
              Active Career Openings ({CAREER_OPENINGS.length})
            </h2>
            <span className="text-xs text-[#64748B] font-mono">Academic Year 2025</span>
          </div>

          <div className="space-y-6">
            {CAREER_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl p-8 border border-[#E5EAF2] hover:border-[#102A78]/30 shadow-xs hover:shadow-md transition-all space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#F4F7FC] text-[#102A78] border border-[#E5EAF2]">
                        {job.department}
                      </span>
                      <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-700 border border-slate-200">
                        {job.employmentType}
                      </span>
                      <span className="text-xs text-[#64748B] font-mono">
                        {job.vacanciesCount} Positions
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#102A78]">
                      {job.title}
                    </h3>

                    <div className="flex items-center gap-4 text-xs text-[#64748B] pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#102A78]" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#102A78]" />
                        Min Exp: {job.experienceRequired}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setApplySubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs shrink-0"
                  >
                    Apply Now
                  </button>
                </div>

                <p className="text-sm text-[#26344D] leading-relaxed">
                  {job.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
                  <div className="bg-[#F4F7FC] p-4 rounded-2xl border border-[#E5EAF2] space-y-1.5">
                    <strong className="text-[#102A78] uppercase tracking-wider block">Key Responsibilities:</strong>
                    <ul className="space-y-1 text-[#64748B]">
                      {job.keyResponsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#102A78] shrink-0 mt-1.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#F4F7FC] p-4 rounded-2xl border border-[#E5EAF2] space-y-1.5">
                    <strong className="text-[#102A78] uppercase tracking-wider block">Qualifications Required:</strong>
                    <ul className="space-y-1 text-[#64748B]">
                      {job.qualifications.map((q, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto space-y-5 relative border border-[#E5EAF2] text-left shadow-2xl">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-[#102A78] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs uppercase font-bold text-[#102A78] tracking-wider">
                Position Application
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#102A78]">
                {selectedJob.title}
              </h3>
              <p className="text-xs text-[#64748B]">
                {selectedJob.department} • {selectedJob.location}
              </p>
            </div>

            {applySubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-200">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#102A78]">Application Received</h4>
                <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                  Thank you, <strong>{applicantData.name}</strong>. Your profile for <strong>{selectedJob.title}</strong> has been logged into our central HR repository. Our academic council will reach you if your profile matches the screening parameters.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#102A78] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={applicantData.name}
                      onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none text-[#26344D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={applicantData.phone}
                      onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none text-[#26344D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={applicantData.email}
                      onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none text-[#26344D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                      Highest Qualification *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. M.A. Tamil / M.Sc / B.E."
                      value={applicantData.highestQualification}
                      onChange={(e) => setApplicantData({ ...applicantData, highestQualification: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none text-[#26344D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                      Years of Relevant Experience *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 3 years coaching TNPSC"
                      value={applicantData.experienceYears}
                      onChange={(e) => setApplicantData({ ...applicantData, experienceYears: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none text-[#26344D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                      Preferred Branch / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tenkasi HO / Madurai"
                      value={applicantData.preferredLocation}
                      onChange={(e) => setApplicantData({ ...applicantData, preferredLocation: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none text-[#26344D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#102A78] uppercase tracking-wider mb-1">
                    Brief Statement of Purpose / Academic Highlights
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention prior exam clearing records, publications, or teaching methodology..."
                    value={applicantData.coverNote}
                    onChange={(e) => setApplicantData({ ...applicantData, coverNote: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none resize-none text-[#26344D]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                  >
                    Submit Application (Frontend Demo)
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
