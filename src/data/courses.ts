export interface CourseDetail {
  id: string;
  slug: string;
  route: string;
  name: string;
  category: 'TNPSC' | 'TNSURB' | 'BANKING' | 'SSC' | 'RRB' | 'UPSC' | 'TRB' | 'ONLINE';
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  targetPosts: string[];
  eligibility: {
    education: string;
    ageLimit: string;
    attemptsOrNote?: string;
  };
  learningModes: string[];
  features: string[];
  curriculumHighlights: {
    title: string;
    topics: string[];
  }[];
  heroImage: string;
  batchesInfo: string;
  studyMaterials: string;
}

export const COURSES: CourseDetail[] = [
  {
    id: 'tnpsc-group-1',
    slug: 'group-1',
    route: '/courses/tnpsc/group-1',
    name: 'TNPSC Group 1 Examination',
    category: 'TNPSC',
    badge: 'Premier State Service',
    shortDescription: 'Comprehensive coaching for Deputy Collector, DSP, Commercial Tax Officer, and Assistant Commissioner posts.',
    fullDescription: 'The TNPSC Group 1 examination is the highest administrative recruitment in Tamil Nadu state government. TAF IAS Academy provides an integrated foundation encompassing Prelims objective strategy, high-scoring Mains analytical writing, and mock interviews presided by retired IAS/IPS officers.',
    targetPosts: [
      'Deputy Collector (Civil Services)',
      'Deputy Superintendent of Police (DSP Category 1)',
      'Assistant Commissioner (Commercial Taxes)',
      'Deputy Registrar of Co-operative Societies',
      'Assistant Director of Rural Development',
      'District Employment Officer',
    ],
    eligibility: {
      education: 'Any recognized Bachelor Degree from a recognized university (UG/Graduation).',
      ageLimit: '21 to 39 years (for BC/MBC/SC/ST categories with relaxations as per TNPSC official gazette).',
      attemptsOrNote: 'Verified state eligibility guidelines apply. Official notifications specify relaxations for reserved categories.',
    },
    learningModes: ['Classroom (Regular & Weekend)', 'Hostel Residential Intensive Batch', 'Online Live Interactive'],
    features: [
      'Bilingual lecture delivery in Tamil and English with dedicated subject faculties',
      'Exclusive Unit 8 & Unit 9 specialized coverage with verified Tamil culture references',
      'Rigorous daily 30-minute answer writing practice for Mains Paper II, III, and IV',
      'Complete study kit from Aamu Publication with updated school education books analysis',
      'All Tamil Nadu State-level benchmark test series with detailed performance diagnostics',
    ],
    curriculumHighlights: [
      {
        title: 'Preliminary Exam (Single Paper - 200 Questions)',
        topics: [
          'General Science & Scientific Temperament',
          'Current Events (National & Tamil Nadu Focus)',
          'Geography of India & Tamil Nadu',
          'History & Culture of India and Tamil Nadu',
          'Indian Polity & Constitution',
          'Indian Economy & Tamil Nadu Economic Dynamics',
          'Indian National Movement (INM)',
          'History, Culture, Heritage & Socio-Political Movements in Tamil Nadu (Unit 8)',
          'Development Administration in Tamil Nadu (Unit 9)',
          'Aptitude & Mental Ability Tests (SSLC Standard)',
        ],
      },
      {
        title: 'Main Written Examination (Descriptive)',
        topics: [
          'Paper I: Tamil Eligibility Test (SSLC Standard - Qualifying)',
          'Paper II: Modern Indian History & Tamil Society, Social Issues in India & TN, General Aptitude & Mental Ability',
          'Paper III: Indian Polity & Emerging Political Trends, Science & Technology, Tamil Society & Culture',
          'Paper IV: Indian Economy & Current Socio-Economic Issues, Environment, Biodiversity & Disaster Management',
        ],
      },
      {
        title: 'Interview & Personality Test',
        topics: [
          'Personality assessment, administrative aptitude, situational judgment, and current state affairs.',
        ],
      },
    ],
    heroImage: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    batchesInfo: 'Regular Morning, Evening, and Weekend batches available across all active centers. Residential hostel coaching available at Tenkasi and Thanjavur centers.',
    studyMaterials: 'Full set of Aamu Publication TNPSC Group 1 subject modules, question banks with detailed explanations, and monthly current affairs compilations.',
  },
  {
    id: 'tnpsc-group-2',
    slug: 'group-2',
    route: '/courses/tnpsc/group-2',
    name: 'TNPSC Group 2 & 2A (Combined Civil Services-II)',
    category: 'TNPSC',
    badge: 'High Vacancy Program',
    shortDescription: 'Specialized guidance for Sub-Registrar, Municipal Commissioner, Revenue Assistant, and Secretariat posts.',
    fullDescription: 'The Combined Civil Services Examination II (Group 2 for interview posts and Group 2A for non-interview posts) offers thousands of opportunities in state executive departments. TAF IAS Academy emphasizes solid foundational mastery of General Tamil / General Studies and structured Mains descriptive answer drafting.',
    targetPosts: [
      'Sub-Registrar Grade II',
      'Municipal Commissioner Grade II',
      'Assistant Commercial Tax Officer (ACTO)',
      'Revenue Inspector across districts',
      'Assistant Section Officer (ASO) in TN Secretariat & TNPSC',
      'Senior Inspector of Co-operative Societies',
    ],
    eligibility: {
      education: 'Any Bachelor Degree from a recognized institution. Certain technical posts require specific degree specifications.',
      ageLimit: '18 to 32 years (Relaxations applicable for BC, BCM, MBC, SC, ST as per official government order).',
      attemptsOrNote: 'Detailed category-wise age relaxations apply.',
    },
    learningModes: ['Classroom Offline', 'Weekend Working Professionals Batch', 'Online Portal Interactive'],
    features: [
      'Dual focus on General Tamil (100 Questions) and General Studies (75 GS + 25 Aptitude)',
      'Daily topic-wise test followed by live question-by-question analysis',
      'Specialized focus on Unit 8 (Thirukkural, Tamil literary heritage, Justice Party, Dravidian movement)',
      'Comprehensive Mains descriptive coaching with individual answer sheet evaluation',
      'Extensive question bank practice with over 20,000 previous and model questions',
    ],
    curriculumHighlights: [
      {
        title: 'Preliminary Screening (200 Questions)',
        topics: [
          'Part A: General Tamil (Grammar, Literature, Tamil Scholars & Works) - 100 Questions',
          'Part B: General Studies (Degree Standard) - 75 Questions',
          'Part C: Aptitude & Mental Ability (SSLC Standard) - 25 Questions',
        ],
      },
      {
        title: 'Main Examination',
        topics: [
          'Paper I: Mandatory Tamil Language Eligibility (Qualifying nature)',
          'Paper II: General Studies (Descriptive Degree Standard - Administration, Socio-Economic Issues, Science & Tech, Current Affairs)',
        ],
      },
    ],
    heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    batchesInfo: 'Continuous enrollment for upcoming notification cycles. Morning, evening, and Sunday batches available at all centers.',
    studyMaterials: 'Aamu Publication 3-Part General Tamil Master Series, Unit 8/9 Guides, and bilingual General Studies modules.',
  },
  {
    id: 'tnpsc-group-4',
    slug: 'group-4',
    route: '/courses/tnpsc/group-4',
    name: 'TNPSC Group 4 & VAO Examination',
    category: 'TNPSC',
    badge: 'Most Popular',
    shortDescription: 'Focused preparation for Village Administrative Officer (VAO), Junior Assistant, Typist, and Bill Collector.',
    fullDescription: 'TNPSC Group 4 is the most popular government recruitment examination in Tamil Nadu with millions of aspirants. TAF IAS Academy holds an extraordinary selection track record in Group 4, having guided thousands of rural and town students to secure top ranks through line-by-line Samacheer Kalvi school syllabus mastery.',
    targetPosts: [
      'Village Administrative Officer (VAO)',
      'Junior Assistant (Non-Security & Security)',
      'Bill Collector Grade I',
      'Typist & Steno-Typist Grade III',
      'Field Surveyor & Draftsman',
      'Forest Guard & Forest Watcher',
    ],
    eligibility: {
      education: 'Minimum SSLC (10th Standard) pass. For Typist posts, government technical examination in typewriting is required.',
      ageLimit: '18 to 32 years for General; up to 37 years for BC/MBC; up to 42 years for SC/ST and destitute widows.',
      attemptsOrNote: 'No limit on number of attempts within eligible age limit.',
    },
    learningModes: ['Classroom Regular', 'Crash Revision Batch', 'Hostel Intensive Residential', 'Online App / Live'],
    features: [
      'Complete mastery of 6th to 12th Standard Samacheer Kalvi textbooks line-by-line',
      'Unmatched General Tamil coaching targeting 98+ out of 100 questions',
      'Daily 100-mark OMR model tests simulating real TNPSC hall conditions',
      'Special formula simplification techniques for full 25/25 in Aptitude & Mental Ability',
      'Dedicated counseling and doubt-clearing sessions with past state rank-holders',
    ],
    curriculumHighlights: [
      {
        title: 'Single Paper Objective Format (300 Marks - 200 Questions)',
        topics: [
          'Part A: General Tamil (இலக்கணம், இலக்கியம், தமிழ் அறிஞர்களும் தமிழ்த் தொண்டும்) - 100 Questions',
          'Part B: General Studies (6th to 10th Standard Samacheer Science, Social Science, History, Polity, Geography, Current Affairs) - 75 Questions',
          'Part C: Aptitude & Mental Ability (HCF/LCM, Percentages, Ratio, Compound Interest, Time & Work, Mensuration) - 25 Questions',
        ],
      },
    ],
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    batchesInfo: 'New batches commence fortnightly across 92 centers. Special residential crash batches before notification dates.',
    studyMaterials: 'TAF Aamu Publication Samacheer Question Bank (6th-10th), General Tamil 10,000 Questions Book, and OMR practice bundle.',
  },
  {
    id: 'tnsurb-si',
    slug: 'si',
    route: '/courses/tnsurb/si',
    name: 'TNUSRB Sub-Inspector of Police (SI)',
    category: 'TNSURB',
    badge: 'Pride of Uniform',
    shortDescription: 'Rigorous coaching for Police Sub-Inspector (Taluk, Armed Reserve, and TSP) with physical fitness orientation.',
    fullDescription: 'TAF IAS Academy has carved an undeniable legacy in Tamil Nadu Uniformed Services Recruitment Board (TNUSRB) examinations. Our SI training program merges in-depth academic coaching for Paper I & II with ground physical training guidance for PET/PMT standards.',
    targetPosts: [
      'Sub-Inspector of Police (Taluk)',
      'Sub-Inspector of Police (Armed Reserve - AR)',
      'Sub-Inspector of Police (Tamil Nadu Special Police - TSP)',
    ],
    eligibility: {
      education: 'Any Bachelor Degree from a university recognized by UGC / Government.',
      ageLimit: '20 to 30 years (with standard category relaxations for BC, MBC, SC, ST, and Ex-Servicemen).',
      attemptsOrNote: 'Must fulfill prescribed physical measurements (Height & Chest criteria as per TNUSRB norms).',
    },
    learningModes: ['Classroom Full-Time', 'Hostel Residential Intensive', 'Physical + Written Integrated Weekend'],
    features: [
      'Comprehensive syllabus coverage: General Knowledge, Logical Analysis, Psychology & Numerical Ability',
      'High-scoring Psychology & Logical Reasoning masterclasses designed by senior faculty',
      'Daily OMR-based test practice tailored to the TNUSRB question pattern',
      'Physical fitness mentoring and stamina guidelines for high-star ratings in PET events (Running, Long Jump/High Jump, Rope Climbing)',
      'Mock viva-voce interviews for candidates shortlisted for final selection',
    ],
    curriculumHighlights: [
      {
        title: 'Part I: Tamil Eligibility Test',
        topics: [
          'Objective Tamil Language Proficiency (Qualifying with 40% minimum score requirement).',
        ],
      },
      {
        title: 'Part II: Main Written Examination (140 Questions - 70 Marks)',
        topics: [
          'Section A: General Knowledge (Science, History, Geography, Economics, Polity, National & State Events) - 80 Questions',
          'Section B: Psychology Test (Logical Analysis, Numerical Ability, Mental Ability, Communication Skills, Information Handling) - 60 Questions',
        ],
      },
      {
        title: 'Stage III & IV: Physical Tests & Interview',
        topics: [
          'Physical Measurement Test (PMT) & Endurance Test (ET - 1500m / 400m)',
          'Physical Efficiency Test (PET - Rope Climbing, Long Jump, 100m/400m running for stars)',
          'Viva-Voce / Personality Test (10 Marks)',
        ],
      },
    ],
    heroImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    batchesInfo: 'Dedicated SI batches with morning and evening sessions. Full residential batch with hostel at Tenkasi & Thanjavur.',
    studyMaterials: 'Aamu Publication TNUSRB SI Complete Guide, Psychology Master Question Bank with 5000+ solved problems, and previous years solved papers.',
  },
  {
    id: 'tnsurb-pc',
    slug: 'pc',
    route: '/courses/tnsurb/pc',
    name: 'TNUSRB Police Constable (PC), Jail Warder & Fireman',
    category: 'TNSURB',
    badge: 'Mass Enrolment',
    shortDescription: 'Dedicated coaching for Grade II Police Constable, Jail Warder, and Fireman posts.',
    fullDescription: 'Thousands of young men and women from every district in Tamil Nadu enter uniform service each year through TAF IAS Academy. Our PC coaching is renowned for direct question hits from textbooks, intensive psychological test practice, and disciplined physical training guidelines.',
    targetPosts: [
      'Police Constable Grade II (Armed Reserve)',
      'Police Constable Grade II (Tamil Nadu Special Police)',
      'Jail Warder Grade II',
      'Fireman in TN Fire & Rescue Services',
    ],
    eligibility: {
      education: 'Minimum 10th Standard (SSLC) pass with Tamil language as one of the subjects.',
      ageLimit: '18 to 26 years for General; relaxations up to 28/31/37 years for BC/MBC/SC/ST/Transgender/Destitute Widows/Ex-Servicemen.',
      attemptsOrNote: 'Prescribed height and chest expansion measurements mandatory.',
    },
    learningModes: ['Classroom Regular', 'Hostel Crash Camp', 'Daily Test Series Only'],
    features: [
      'School textbook summary focusing on 6th to 10th science, social science, and general knowledge',
      'Full coverage of the 30-mark Psychology test to ensure full marks',
      'Tamil eligibility preparation ensuring easy qualification',
      'Guidance for physical measurements (PMT), endurance run, and star-earning events',
      'Over 50 full-length model examinations with real OMR evaluation',
    ],
    curriculumHighlights: [
      {
        title: 'Written Examination (70 Marks)',
        topics: [
          'Part A: General Knowledge (45 Questions / 45 Marks) - Physics, Chemistry, Biology, History, Geography, Economics, Civics & Current Affairs',
          'Part B: Psychology (25 Questions / 25 Marks) - Logical Reasoning, Number Series, Coding-Decoding, Visual Patterns, Decision Making',
        ],
      },
      {
        title: 'Physical Efficiency Test (24 Marks)',
        topics: [
          'Rope Climbing, Long Jump / High Jump, and 100m / 400m race scoring maximum 2 stars per event.',
        ],
      },
    ],
    heroImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    batchesInfo: 'Intensive 60-day and 90-day batches available throughout the year across all branches.',
    studyMaterials: 'TAF PC Special Handbook, Psychology shortcuts handbook, and 20 full-length OMR test papers.',
  },
  {
    id: 'banking',
    slug: 'banking',
    route: '/courses/banking',
    name: 'Banking Examinations (IBPS / SBI / RRB)',
    category: 'BANKING',
    badge: 'National Careers',
    shortDescription: 'Speed-math and reasoning coaching for Probationary Officer (PO), Clerical, and Specialist Officer posts.',
    fullDescription: 'Banking careers offer rapid promotions and national job stability. TAF IAS Academy prepares students for SBI PO/Clerk, IBPS PO/Clerk, and Regional Rural Bank exams with computer lab practice, shortcut Vedic math techniques, and mock interview guidance.',
    targetPosts: [
      'SBI Probationary Officer (PO) & Junior Associate (Clerk)',
      'IBPS PO, Clerk & Specialist Officer (SO)',
      'IBPS Regional Rural Banks (RRB) Officer Scale-I & Office Assistant',
      'RBI Assistant & Grade B Officer',
    ],
    eligibility: {
      education: 'Graduation in any discipline from a recognized University.',
      ageLimit: 'Clerk: 20 to 28 years; PO: 20 to 30 years (Standard reservation relaxations apply).',
      attemptsOrNote: 'SBI PO has limited category attempts; IBPS has no attempt limits within age limits.',
    },
    learningModes: ['Classroom Interactive', 'Computer Lab Mock Test Series', 'Online High-Speed Batch'],
    features: [
      'Vedic mathematics and quantitative aptitude calculation speed tricks',
      'High-level reasoning puzzles, seating arrangements, and syllogisms',
      'Daily English grammar, vocabulary builder, and reading comprehension practice',
      'Banking awareness, financial current affairs, and monetary policy modules',
      'Computer-based test (CBT) simulator mirroring official TCS exam interface',
    ],
    curriculumHighlights: [
      {
        title: 'Prelims Structure',
        topics: [
          'Quantitative Aptitude (35 Questions / 20 mins)',
          'Reasoning Ability (35 Questions / 20 mins)',
          'English Language (30 Questions / 20 mins)',
        ],
      },
      {
        title: 'Mains & Descriptive Structure',
        topics: [
          'Advanced Data Analysis & Interpretation',
          'Reasoning & Computer Aptitude',
          'General / Economy / Banking Awareness',
          'English Language & Descriptive Letter / Essay Writing',
        ],
      },
    ],
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    batchesInfo: 'Continuous rolling batches tailored to the annual IBPS and SBI recruitment calendar.',
    studyMaterials: 'Comprehensive Banking Aptitude, Reasoning, Banking Awareness modules and 100+ online mock test credentials.',
  },
  {
    id: 'ssc',
    slug: 'ssc',
    route: '/courses/ssc',
    name: 'Staff Selection Commission (SSC CGL / CHSL / MTS)',
    category: 'SSC',
    badge: 'Central Ministries',
    shortDescription: 'Structured coaching for prestigious Central Government posts across Income Tax, Customs, CBI, and Ministries.',
    fullDescription: 'Staff Selection Commission conducts examinations for thousands of Group B and Group C posts in central ministries and departments. TAF IAS Academy helps Tamil Nadu students break the traditional barrier in central examinations through bilingual guidance and strong mathematical aptitude.',
    targetPosts: [
      'Inspector of Income Tax & GST / Central Excise',
      'Sub-Inspector in CBI & Narcotics',
      'Assistant Section Officer (ASO) in MEA, CSS & Intelligence Bureau',
      'Postal Assistant, Sorting Assistant & Data Entry Operator (CHSL)',
      'Multi-Tasking Staff (MTS) & Havaldar in Central Departments',
    ],
    eligibility: {
      education: 'CGL: Any Bachelor Degree; CHSL: Higher Secondary (12th Pass); MTS: Matriculation (10th Pass).',
      ageLimit: '18 to 30/32 years depending on specific ministry post with applicable category relaxations.',
      attemptsOrNote: 'No limit on number of attempts within age boundary.',
    },
    learningModes: ['Classroom Interactive', 'Online Evening Batch', 'Weekend Foundation'],
    features: [
      'Comprehensive coverage of Tier 1 and Tier 2 revised pattern',
      'Higher mathematics (Algebra, Trigonometry, Geometry, Mensuration) simplified',
      'General English comprehension and vocabulary mastery',
      'General Awareness covering Indian History, Polity, Geography, and Science with bilingual materials',
      'Computer knowledge module & typing practice guidelines',
    ],
    curriculumHighlights: [
      {
        title: 'Tier I Exam (Computer Based)',
        topics: [
          'General Intelligence & Reasoning (25 Qs / 50 Marks)',
          'General Awareness (25 Qs / 50 Marks)',
          'Quantitative Aptitude (25 Qs / 50 Marks)',
          'English Comprehension (25 Qs / 50 Marks)',
        ],
      },
      {
        title: 'Tier II Exam (Advanced)',
        topics: [
          'Session I: Mathematical Abilities & Reasoning and General Intelligence',
          'Session II: English Language & Comprehension and General Awareness',
          'Session III: Computer Knowledge Module & Data Entry Speed Test',
        ],
      },
    ],
    heroImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
    batchesInfo: 'Morning and Evening batches with dedicated computer lab test slots.',
    studyMaterials: 'TAF Bilingual SSC Formula Guide, Previous 10 Years Question Analysis, and Tier 2 practice workbooks.',
  },
  {
    id: 'rrb',
    slug: 'rrb',
    route: '/courses/rrb',
    name: 'Railway Recruitment Board (RRB NTPC / Group D / ALP)',
    category: 'RRB',
    badge: 'Indian Railways',
    shortDescription: 'Complete preparation for Station Master, Goods Guard, Assistant Loco Pilot (ALP), and Technicians.',
    fullDescription: 'Indian Railways is one of the largest employers in the nation. TAF IAS Academy provides specialized coaching in regional languages (Tamil and English) to help state candidates secure prestigious railway careers through focused technical and non-technical training.',
    targetPosts: [
      'Station Master & Goods Guard (NTPC Graduate)',
      'Commercial Apprentice & Traffic Assistant',
      'Junior Clerk, Accounts Clerk & Trains Clerk (NTPC Under-Graduate)',
      'Assistant Loco Pilot (ALP) & Technicians Grade I / III',
      'RRB Group D (Track Maintainer, Pointsman, Helper)',
      'Railway Protection Force (RPF SI & Constable)',
    ],
    eligibility: {
      education: 'NTPC Graduate: Any Degree; NTPC Under-Graduate: 12th Pass; ALP/Tech: ITI / Diploma / Degree; Group D: 10th / ITI.',
      ageLimit: '18 to 33 / 36 years (Relaxations for reserved categories as per RRB official CEN).',
      attemptsOrNote: 'Computer Based Tests available in Tamil and English languages.',
    },
    learningModes: ['Classroom Regular', 'Weekend Intensive', 'Fast-Track Practice Batch'],
    features: [
      'Syllabus mastery in General Science (Physics, Chemistry, Life Sciences up to 10th CBSE/Samacheer)',
      'Quantitative mathematics and analytical reasoning with short-cut methods',
      'Computer-based test (CBT) mock portal identical to official RRB vendor system',
      'Technical trade theory coaching for ALP and Technician aspirants',
      'Psycho Aptitude / Computer Based Aptitude Test (CBAT) preparation for Station Master and ALP posts',
    ],
    curriculumHighlights: [
      {
        title: 'CBT Stage 1 & Stage 2 Non-Technical',
        topics: [
          'General Awareness (Current Events, Indian History, Art, Monuments, Science) - 40/50 Qs',
          'Mathematics (Number System, Decimals, Fractions, LCM/HCF, Ratio, Mensuration) - 30/35 Qs',
          'General Intelligence & Reasoning (Analogies, Venn Diagrams, Syllogisms, Coding) - 30/35 Qs',
        ],
      },
      {
        title: 'Technical & Skill Tests',
        topics: [
          'Part B Trade Syllabus for ITI/Engineering branches (ALP & Technicians)',
          'CBAT Psychological Battery Tests for Station Master & Assistant Loco Pilot',
        ],
      },
    ],
    heroImage: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80',
    batchesInfo: 'Batches synchronized with active RRB Centralized Employment Notices (CEN).',
    studyMaterials: 'Bilingual RRB General Science Master Book, 10,000 Questions Bank, and Chapter-wise Mock Tests.',
  },
  {
    id: 'upsc',
    slug: 'upsc',
    route: '/courses/upsc',
    name: 'UPSC Civil Services Examination (IAS / IPS / IFS)',
    category: 'UPSC',
    badge: 'Apex Civil Service',
    shortDescription: 'Elite mentoring program for Indian Administrative Service, Indian Police Service, and Foreign Service.',
    fullDescription: 'TAF IAS Academy brings world-class Civil Services mentoring to Tamil Nadu aspirants. Our UPSC program combines the pedagogical rigour of premier national standards with personalized mentorship, current affairs synthesis, and comprehensive Mains answer-writing labs.',
    targetPosts: [
      'Indian Administrative Service (IAS)',
      'Indian Police Service (IPS)',
      'Indian Foreign Service (IFS)',
      'Indian Revenue Service (IRS - IT & Customs)',
      'Indian Audit & Accounts Service (IA&AS)',
      'Central Civil Services (Group A & Group B)',
    ],
    eligibility: {
      education: 'Graduate degree from any recognized University or equivalent qualification.',
      ageLimit: '21 to 32 years for General category (6 attempts); 21 to 35 for OBC (9 attempts); 21 to 37 for SC/ST (Unlimited attempts).',
      attemptsOrNote: 'Official UPSC notification guidelines apply strictly.',
    },
    learningModes: ['Classroom Full-Time (1-Year Foundation)', 'Weekend Mentorship Batch', 'Online Live Digital Cohort'],
    features: [
      'Comprehensive syllabus coverage: NCERTs to advanced standard references',
      'Daily Newspaper analysis (The Hindu / Indian Express) and monthly current affairs dossiers',
      'Dedicated Prelims Test Series (PTS) with negative-marking risk optimization',
      'Rigorous Mains Answer Writing Mentorship program with individual faculty review',
      'Ethics, Integrity & Aptitude (GS Paper IV) case-study workshops',
      'Interview Guidance Program with retired senior bureaucrats and diplomats',
    ],
    curriculumHighlights: [
      {
        title: 'Preliminary Examination (Objective)',
        topics: [
          'General Studies Paper I: Current events, Indian History, Geography, Polity & Governance, Economic & Social Development, Environmental Ecology & General Science (200 Marks)',
          'General Studies Paper II (CSAT): Comprehension, Interpersonal skills, Logical reasoning, Decision-making, Basic numeracy (200 Marks - Qualifying 33%)',
        ],
      },
      {
        title: 'Mains Written Examination (9 Papers)',
        topics: [
          'Paper A & B: Compulsory Indian Language (Tamil/any 8th Schedule) & English (Qualifying)',
          'Paper I: Essay (250 Marks)',
          'Paper II (GS I): Indian Heritage, History & Culture, Geography & Society (250 Marks)',
          'Paper III (GS II): Governance, Constitution, Polity, Social Justice & International Relations (250 Marks)',
          'Paper IV (GS III): Technology, Economic Development, Bio-diversity, Security & Disaster Management (250 Marks)',
          'Paper V (GS IV): Ethics, Integrity and Aptitude (250 Marks)',
          'Paper VI & VII: Optional Subject Papers I & II (500 Marks)',
        ],
      },
      {
        title: 'Personality Test',
        topics: [
          'Board Interview at UPSC Dholpur House, New Delhi (275 Marks).',
        ],
      },
    ],
    heroImage: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=1200&q=80',
    batchesInfo: 'Annual 1-Year and 2-Year integrated cohorts commencing June and August.',
    studyMaterials: 'Curated standard text compilation, TAF UPSC Core Modules, Mains Answer Framework booklets, and Monthly Current Affairs Magazine.',
  },
  {
    id: 'junior-ias',
    slug: 'junior-ias',
    route: '/courses/junior-ias',
    name: 'Junior IAS Foundation Program',
    category: 'UPSC',
    badge: 'School & College Youth',
    shortDescription: 'Nurturing leadership, general knowledge, critical thinking, and civic aptitude in school and college students.',
    fullDescription: 'The Junior IAS program is a visionary youth initiative by TAF IAS Academy designed specifically for students from 6th to 12th standards and collegiate undergraduates. It builds strong conceptual clarity in geography, history, Indian constitution, public speaking, and ethical decision-making from a young age.',
    targetPosts: [
      'Early foundation for future UPSC Civil Services Examination',
      'Early foundation for TNPSC Group 1 & State Administrative careers',
      'Leadership & Public Administration awareness for youth',
      'Personality development and communication mastery',
    ],
    eligibility: {
      education: 'School students (Classes 6th to 12th) and Undergraduate college students of any stream.',
      ageLimit: '11 to 21 years.',
      attemptsOrNote: 'Weekend sessions scheduled without disrupting regular academic school/college curriculum.',
    },
    learningModes: ['Weekend Classroom (Saturdays/Sundays)', 'Summer Intensive Camp', 'Online Interactive Evening'],
    features: [
      'Interactive visual learning in Constitution, Indian Geography, and World History',
      'Debates, Elocution, and Model Youth Parliaments for public speaking and articulation',
      'Newspaper reading habit cultivation and analytical essay formulation',
      'Problem solving, logical riddles, and scientific temper development',
      'Inspirational interactions with serving young IAS, IPS, and IFS officers',
      'Special certificates of merit and academic awards for outstanding young achievers',
    ],
    curriculumHighlights: [
      {
        title: 'Module 1: Discovering India & The World',
        topics: [
          'Ancient, Medieval & Modern Indian History through storytelling',
          'Physical and political geography of India and Tamil Nadu',
          'Environmental stewardship and conservation concepts',
        ],
      },
      {
        title: 'Module 2: How Government Works (Civics & Constitution)',
        topics: [
          'The Constitution of India, Fundamental Rights and Duties',
          'Role of the President, Prime Minister, Chief Minister, and District Collectors',
          'Law enforcement, courts, and justice system basics',
        ],
      },
      {
        title: 'Module 3: Leadership & Aptitude',
        topics: [
          'Analytical reasoning and mental maths shortcuts',
          'Current national issues discussions and solutions thinking',
          'Ethical leadership and community welfare values',
        ],
      },
    ],
    heroImage: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80',
    batchesInfo: 'Weekend Batches (Sunday mornings) across regional headquarters and annual summer camps.',
    studyMaterials: 'Illustrated Junior IAS Student Workbooks, Maps Booklet, and Monthly Student Current News Digest.',
  },
  {
    id: 'trb',
    slug: 'trb',
    route: '/courses/trb',
    name: 'Teachers Recruitment Board (TRB / PG TRB / BEO)',
    category: 'TRB',
    badge: 'Education Cadre',
    shortDescription: 'Targeted coaching for PG Assistants, Block Educational Officers (BEO), and Special Teachers in Tamil Nadu.',
    fullDescription: 'TAF IAS Academy supports dedicated educators in Tamil Nadu seeking government teaching appointments through TRB exams. Our courses cover major subject specializations, educational methodology, psychology, and general knowledge modules.',
    targetPosts: [
      'Post Graduate Assistants (Higher Secondary Schools)',
      'Block Educational Officer (BEO)',
      'Graduate Assistants (BT Teachers - TNTET Paper II qualified)',
      'Polytechnic College Lecturers & SCERT positions',
    ],
    eligibility: {
      education: 'Post Graduate Degree with minimum 50% in relevant subject along with B.Ed. degree from a recognized institution.',
      ageLimit: 'As prescribed by TRB official notification (General and reserved categories with appropriate concessions).',
      attemptsOrNote: 'Subject-specific specialization requirements apply.',
    },
    learningModes: ['Classroom Weekend', 'Online Live Batch', 'Subject Test Series'],
    features: [
      'In-depth subject syllabus analysis for Tamil, English, History, Economics, Commerce, Maths, Physics, Chemistry, Botany & Zoology',
      'Educational Methodology & Child Pedagogy high-scoring modules',
      'General Knowledge and Current Events coverage aligned with TRB marks weightage',
      'Topic-wise question banks and previous TRB question paper discussions',
      'Model test series designed by veteran subject professors',
    ],
    curriculumHighlights: [
      {
        title: 'Exam Structure (150 Objective Questions - 150 Marks)',
        topics: [
          'Part A: Subject Specialization (Master Degree standard) - 110 Questions',
          'Part B: Educational Methodology, Teaching Aptitude & Psychology - 30 Questions',
          'Part C: General Knowledge & Current Affairs - 10 Questions',
          'Mandatory Tamil Eligibility Test as per current government policy',
        ],
      },
    ],
    heroImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    batchesInfo: 'Weekend and holiday batches designed for working teachers and B.Ed graduates.',
    studyMaterials: 'Subject-wise TRB master material, Educational Psychology guides, and 30 full-syllabus model tests.',
  },
  {
    id: 'online',
    slug: 'online',
    route: '/courses/online',
    name: 'TAF Digital Online Learning Platform',
    category: 'ONLINE',
    badge: 'Study Anywhere',
    shortDescription: 'Flexible interactive live classes, recorded HD video archives, and online test portal for all competitive exams.',
    fullDescription: 'For working professionals, college students, and remote aspirants unable to attend physical classroom branches, TAF Online delivers the complete classroom experience to your home. Featuring live interactive streaming, digital question solving, downloadable study PDFs, and state-wide online mock test benchmarking.',
    targetPosts: [
      'All TNPSC (Group 1, 2/2A, 4) examinations',
      'TNSURB Police SI & Constable programs',
      'Banking & SSC Bilingual cohorts',
      'UPSC Civil Services Foundation & Test Series',
    ],
    eligibility: {
      education: 'Open to all aspirants meeting respective competitive examination eligibility criteria.',
      ageLimit: 'Subject to respective examination rules.',
      attemptsOrNote: 'Available on mobile app (Android/iOS) and desktop browser.',
    },
    learningModes: ['100% Online Live Interactive', 'Self-Paced Recorded HD Video Library', 'Hybrid (Online + Weekend Branch Tests)'],
    features: [
      'Live two-way audio/chat interaction with senior TAF IAS Academy faculty',
      'Unlimited re-watching of class recordings until examination completion',
      'Digital test series with instant question explanations and statewide percentile rankings',
      'Physical study materials by Aamu Publication couriered directly to student address',
      'Dedicated mentor support groups on WhatsApp/Telegram for doubt clearance within 24 hours',
    ],
    curriculumHighlights: [
      {
        title: 'Digital Platform Features',
        topics: [
          'Live interactive classes with digital whiteboard and real-time polling',
          'Subject-wise organized video archives categorized by paper and chapter',
          'OMR-simulator and CBT-simulator with real exam timing and negative marking',
          'E-notes, class PPTs, and bilingual question banks downloadable as PDFs',
        ],
      },
    ],
    heroImage: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=80',
    batchesInfo: 'Continuous live batches for upcoming notifications. Instant enrollment with 24x7 portal access.',
    studyMaterials: 'Comprehensive digital e-library plus full printed books from Aamu Publication delivered to home.',
  },
];
