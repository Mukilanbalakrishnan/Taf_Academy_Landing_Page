export interface AcademyEvent {
  id: string;
  title: string;
  category: 'Functions' | 'Achiever Program' | 'Institutional Seminars';
  badge?: string;
  dateLabel: string;
  location: string;
  summary: string;
  description: string;
  coverImage: string;
  gallery: string[];
  highlights: string[];
  chiefGuestsOrHost?: string;
}

export const ACADEMY_EVENTS: AcademyEvent[] = [
  {
    id: '18th-year-celebration',
    title: '18th Year Institutional Foundation Celebration',
    category: 'Functions',
    badge: 'Historic Milestone',
    dateLabel: 'Commemorative Institutional Event',
    location: 'Tenkasi Grand Auditorium & Convention Center',
    summary: 'A grand convention honouring 18 years of transformative competitive exam mentoring across Tamil Nadu.',
    description: 'Marking eighteen illustrious years since our foundational inception in 2009, this celebratory function unites academy alumni, serving civil servants, respected dignitaries, senior faculty, and current batch aspirants under one roof. The day commemorated over 16,000 government officers produced by TAF and announced future scholarships for rural aspirants.',
    coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80',
    ],
    highlights: [
      'Presided over by Founder Mr. J. Aagasa Moorthy',
      'Felicitation of over 200 state rank-holders and department toppers',
      'Unveiling of the upgraded Aamu Publication bilingual textbook series',
      'Release of the Rural Aspirant Educational Endowment Fund',
    ],
    chiefGuestsOrHost: 'Founder Mr. J. Aagasa Moorthy alongside retired District Collectors and SPs',
  },
  {
    id: 'state-achievers-felicitation',
    title: 'State Achievers Felicitation & Gold Medal Ceremony',
    category: 'Achiever Program',
    badge: 'Annual Mega Event',
    dateLabel: 'Annual Achievers Conclave',
    location: 'Kalaivanar Arangam / Regional Convention Hall',
    summary: 'Honouring top state rankers and successfully selected candidates across TNPSC Group 1, 2, 4 and Uniformed Services.',
    description: 'The annual Achiever Program is the crown jewel of TAF IAS Academy. Every student who achieves their dream of wearing the police uniform or donning the mantle of an administrative officer is awarded a ceremonial gold medal, citation, and shawl in the presence of their proud parents and mentors.',
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
    ],
    highlights: [
      'Ceremonial mementos and citations presented to 850+ freshly appointed officers',
      'Emotional parent addresses and inspiring journeys shared from grassroots rural backgrounds',
      'Panel discussion on integrity in public administration by serving senior bureaucrats',
    ],
    chiefGuestsOrHost: 'Distinguished State Government Executives and TAF Academic Council',
  },
  {
    id: 'tnusrb-stars-parade',
    title: 'TNUSRB Sub-Inspector & Police Achievers Recognition',
    category: 'Achiever Program',
    badge: 'Uniform Service Honour',
    dateLabel: 'Post-Results Special Gathering',
    location: 'Tenkasi Residential Grounds',
    summary: 'Special felicitation meet honoring newly inducted Sub-Inspectors and Constables trained at TAF campuses.',
    description: 'Celebrating the incredible hard work of candidates who conquered both the written cutoff and physical fitness tests (rope climbing, 1500m endurance, and high jumps). Instructors and physical mentors join together to celebrate another record-breaking year of uniform service placements.',
    coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80',
    ],
    highlights: [
      'Felicitating State 1st Ranker in TNUSRB SI selection',
      'Special memento presentation to physical training master instructors',
      'Experience sharing session for the next batch aspirants',
    ],
    chiefGuestsOrHost: 'Retired Police Officers and TAF Uniform Wing Head',
  },
  {
    id: 'civil-services-orientation',
    title: 'Statewide Civil Services Awakening & Guidance Summit',
    category: 'Institutional Seminars',
    badge: 'Public Guidance',
    dateLabel: 'Quarterly Academic Seminar',
    location: 'Regional Hub Centers Across Tamil Nadu',
    summary: 'Free competitive examination awareness seminars conducted across districts to demystify UPSC & TNPSC for rural youth.',
    description: 'True to the core mission established by Founder Mr. J. Aagasa Moorthy, TAF IAS Academy conducts free orientation summits across remote taluks and college campuses, dismantling misconceptions about language barriers and equipping first-generation graduates with actionable roadmaps.',
    coverImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    ],
    highlights: [
      'Over 5,000 college final-year students attended across 8 districts',
      'Complimentary copy of Exam Strategy Blueprint distributed to all participants',
      'Free talent-spotting scholarship test conducted',
    ],
    chiefGuestsOrHost: 'TAF Senior Academic Deans and Alumni Bureaucrats',
  },
];
