export interface Book {
  id: string;
  title: string;
  tamilTitle?: string;
  publisher: string;
  category: 'TNPSC' | 'TNSURB' | 'Question Banks' | 'General Tamil' | 'Samacheer Kalvi';
  medium: 'Tamil' | 'English' | 'Bilingual';
  pages: number;
  edition: string;
  description: string;
  coverImage: string;
  topicsCovered: string[];
  features: string[];
  recommendedFor: string[];
  isBestSeller?: boolean;
}

export const PUBLISHER_INFO = {
  name: 'Aamu Publication & TAF Publications',
  description: 'The specialized publishing house of TAF IAS Academy, providing authentic, syllabus-aligned textbooks, Samacheer Kalvi line-by-line analyses, and bilingual question banks trusted by lakhs of aspirants.',
  headquarters: 'Tenkasi, Tamil Nadu',
};

export const BOOKS: Book[] = [
  {
    id: 'book-tamil-part-1-3',
    title: 'General Tamil Masterwork Combo (Parts 1, 2 & 3)',
    tamilTitle: 'பொதுத்தமிழ் முழுமைத் தொகுதி (பகுதி அ, ஆ, இ)',
    publisher: 'Aamu Publication (TAF)',
    category: 'General Tamil',
    medium: 'Tamil',
    pages: 820,
    edition: '2024-2025 Revised Edition',
    description: 'The definitive masterwork for TNPSC Group 4 and Group 2/2A General Tamil. Covers the complete Samacheer Kalvi Tamil literature, grammar rules with examples, and biographies of prominent Tamil scholars with extensive objective questions.',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    topicsCovered: [
      'பகுதி (அ) - இலக்கணம்: பொருத்துதல், பிரித்தெழுதுக, எதிர்ச்சொல், சந்திப்பிழை நீக்குதல், மரபுப்பிழைகள்',
      'பகுதி (ஆ) - இலக்கியம்: திருக்குறள், நாலடியார், சீவகசிந்தாமணி, கம்பராமாயணம், எட்டுத்தொகை, பத்துப்பாட்டு',
      'பகுதி (இ) - தமிழ் அறிஞர்களும் தமிழ்த் தொண்டும்: பாரதியார், பாரதிதாசன், நாமக்கல் கவிஞர், திராவிட இயக்க அறிஞர்கள்',
    ],
    features: [
      'Line-by-line coverage from 6th to 12th Standard Tamil textbooks',
      'Over 6,500 multiple-choice questions with answers',
      'Detailed commentary on 25 Thirukkural official chapters',
    ],
    recommendedFor: ['TNPSC Group 4 & VAO', 'TNPSC Group 2 & 2A', 'TNPSC Group 1 Prelims Language Eligibility'],
    isBestSeller: true,
  },
  {
    id: 'book-unit-8-9',
    title: 'Unit 8 & Unit 9: Heritage, Culture & Administration in Tamil Nadu',
    tamilTitle: 'அலகு 8 & அலகு 9: தமிழ்நாடு வரலாறு, பண்பாடு & தமிழகத்தில் வளர்ச்சி நிர்வாகம்',
    publisher: 'Aamu Publication (TAF)',
    category: 'TNPSC',
    medium: 'Bilingual',
    pages: 560,
    edition: '2024 Edition',
    description: 'An exhaustive research-backed volume explicitly targeting Unit 8 and Unit 9 of TNPSC Group 1, 2 and 4 syllabi. Blends archaeology discoveries (Keeladi, Porunai, Sivagalai), literary heritage, social justice movements, and Tamil Nadu e-governance policies.',
    coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80',
    topicsCovered: [
      'History of Tamil Society, Archaeological Discoveries & Sangam Literature',
      'Thirukkural as a secular philosophical and administrative treatise',
      'Role of Tamil Nadu in Indian Freedom Struggle & Early agitations against British rule',
      'Evolution of 19th & 20th Century Socio-Political movements (Justice Party, Self-Respect Movement)',
      'Tamil Nadu Human Development Indicators (HDI) & Economic Geography',
      'Social Welfare Schemes, E-Governance & Industrial achievements of Tamil Nadu',
    ],
    features: [
      'Archaeological excavation photographs and site charts included',
      'Comprehensive Thirukkural analysis with socio-economic perspectives',
      'Official statistical data from Tamil Nadu government policy notes',
    ],
    recommendedFor: ['TNPSC Group 1 Prelims & Mains', 'TNPSC Group 2 / 2A Prelims & Mains'],
    isBestSeller: true,
  },
  {
    id: 'book-polity-bilingual',
    title: 'Indian Polity & Governance Question Bank',
    tamilTitle: 'இந்திய ஆட்சியியல் & அரசியலமைப்பு வினா வங்கி',
    publisher: 'Aamu Publication (TAF)',
    category: 'Question Banks',
    medium: 'Bilingual',
    pages: 480,
    edition: '2024 Constitutional Updates Edition',
    description: 'Complete Indian Constitution and Governance practice guide with constitutional articles, schedules, key Supreme Court landmark judgments, and 3,500+ objective questions with bilingual explanations.',
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
    topicsCovered: [
      'Preamble, Salient Features, Union and its Territory, Citizenship',
      'Fundamental Rights, Directive Principles of State Policy (DPSP), Fundamental Duties',
      'Union Executive, Parliament, Supreme Court & High Courts',
      'Panchayati Raj & Urban Local Bodies (73rd & 74th Amendments)',
      'Constitutional & Statutory Bodies (Election Commission, CAG, UPSC, Finance Commission)',
      'Centre-State Relations and Emergency Provisions',
    ],
    features: [
      'Latest constitutional amendments incorporated up to 106th CAA',
      'OMR sheets included for realistic self-evaluation',
      'Previous 15 years TNPSC and UPSC question analysis',
    ],
    recommendedFor: ['TNPSC All Groups', 'UPSC Prelims', 'SSC CGL'],
    isBestSeller: false,
  },
  {
    id: 'book-si-complete-guide',
    title: 'TNUSRB Sub-Inspector & Police Exam Master Guide',
    tamilTitle: 'காவல் சார்பு ஆய்வாளர் (SI) & காவலர் தேர்வு முழுமையான வழிகாட்டி',
    publisher: 'Aamu Publication (TAF)',
    category: 'TNSURB',
    medium: 'Tamil',
    pages: 640,
    edition: 'Latest TNUSRB Syllabus Edition',
    description: 'Specially engineered for Police Sub-Inspector and Constable aspirants. Includes General Knowledge, Science breakdown, logical psychology formulas, reasoning puzzles, and Tamil eligibility model papers.',
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    topicsCovered: [
      'Physics, Chemistry, Botany, Zoology Samacheer Summary',
      'Indian History, National Movement & Indian Geography',
      'Psychology: Logical Analysis, Coding-Decoding, Blood Relations, Direction Sense',
      'Mental Aptitude: Simplifications, Work & Time, Speed & Distance, Percentages',
      'Tamil Eligibility Test Model Question Papers',
    ],
    features: [
      'Exclusive shortcut methods for 60 Psychology questions',
      'Previous 5 TNUSRB SI official question papers solved with steps',
      'Physical fitness standard guide and star-rating preparation checklist',
    ],
    recommendedFor: ['TNUSRB SI (Taluk/AR/TSP)', 'TNUSRB Police Constable & Fireman'],
    isBestSeller: true,
  },
  {
    id: 'book-samacheer-science-social',
    title: 'Samacheer Kalvi 6th to 10th Core Question Bank (Science & Social)',
    tamilTitle: 'சமச்சீர் கல்வி 6 முதல் 10 வரை அறிவியல் & சமூக அறிவியல் வினா வங்கி',
    publisher: 'Aamu Publication (TAF)',
    category: 'Samacheer Kalvi',
    medium: 'Tamil',
    pages: 710,
    edition: 'Samacheer Master Edition',
    description: 'An indispensable asset for every TNPSC aspirant. Extracts every crucial line, box data, "Do You Know?" callout, and book-back question from 6th to 10th Standard Tamil Nadu Government textbooks into organized objective format.',
    coverImage: 'https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80',
    topicsCovered: [
      '6th - 10th Standard Science (Physics, Chemistry, Biology)',
      '6th - 10th Standard Social Science (History, Civics, Geography, Economics)',
      'Special "Do You Know?" compilation and highlighted facts',
    ],
    features: [
      'Over 8,000 objective questions indexed by class and chapter',
      'Bolded keywords for rapid memory retention',
      'Direct correlation with TNPSC Group 4 and Group 2 syllabus',
    ],
    recommendedFor: ['TNPSC Group 4 / VAO', 'TNPSC Group 2 Prelims', 'TNSURB PC'],
    isBestSeller: false,
  },
  {
    id: 'book-aptitude-shortcuts',
    title: 'Aptitude & Mental Ability 25/25 Master Formula Book',
    tamilTitle: 'கணிதம் & உளவியல் 25/25 முழுமதிப்பெண் சூத்திரக் கையேடு',
    publisher: 'Aamu Publication (TAF)',
    category: 'Question Banks',
    medium: 'Bilingual',
    pages: 350,
    edition: '2024 Simplified Tricks Edition',
    description: 'Designed specifically to help aspirants conquer the 25 Aptitude questions in TNPSC and scoring sections in Central/Banking exams without lengthy algebra.',
    coverImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
    topicsCovered: [
      'LCM and HCF Shortcuts',
      'Ratio & Proportion, Percentages & Profit/Loss',
      'Simple and Compound Interest formulas made easy',
      'Time & Work, Pipes & Cisterns',
      'Mensuration 2D & 3D Formulas & Geometry patterns',
      'Puzzles, Dice, Visual Reasoning, Alpha-Numeric series',
    ],
    features: [
      'Step-by-step bilingual solutions for non-maths background candidates',
      '1,500 solved practice questions with timed difficulty tiers',
      'Formula cheat sheets at the end of each module',
    ],
    recommendedFor: ['TNPSC All Groups', 'TNSURB SI', 'RRB NTPC', 'SSC CHSL/MTS'],
    isBestSeller: true,
  },
];
