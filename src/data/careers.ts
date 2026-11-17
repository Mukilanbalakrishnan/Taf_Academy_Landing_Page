export interface CareerOpening {
  id: string;
  title: string;
  department: 'Academic Faculty' | 'Publication & Research' | 'Center Administration' | 'Digital & Media';
  location: string;
  employmentType: 'Full-Time' | 'Part-Time / Visiting' | 'Contractual';
  experienceRequired: string;
  vacanciesCount: number;
  description: string;
  keyResponsibilities: string[];
  qualifications: string[];
  deadlineNotice?: string;
}

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: 'fac-tamil',
    title: 'Senior Faculty — General Tamil & Tamil Literature (பொதுத்தமிழ் பேராசிரியர்)',
    department: 'Academic Faculty',
    location: 'Tenkasi HO / Thanjavur / Madurai / Statewide Centers',
    employmentType: 'Full-Time',
    experienceRequired: '3+ years coaching for TNPSC Group 4 & Group 2',
    vacanciesCount: 6,
    description: 'We are seeking passionate scholars of Tamil literature and grammar capable of delivering engaging lectures that help students master line-by-line Samacheer Kalvi textbooks with 98+ target accuracy.',
    keyResponsibilities: [
      'Conduct regular classroom and digital live lectures for General Tamil across beginner and advanced batches.',
      'Design daily high-yield OMR practice tests and compile chapter-wise shortcut notes.',
      'Mentor students individually to diagnose and rectify linguistic and grammatical errors.',
    ],
    qualifications: [
      'Master Degree (M.A. Tamil) / M.Phil or cleared TNPSC / TRB / NET exams.',
      'Proven track record of high student satisfaction in competitive exam coaching.',
      'Exceptional bilingual articulation skills.',
    ],
    deadlineNotice: 'Rolling recruitments for the upcoming academic cycle.',
  },
  {
    id: 'fac-aptitude',
    title: 'Senior Faculty — Quantitative Aptitude & Mental Ability',
    department: 'Academic Faculty',
    location: 'Tenkasi Residential Campus / Regional Hubs',
    employmentType: 'Full-Time',
    experienceRequired: '2+ years in TNPSC, Banking, or SSC maths coaching',
    vacanciesCount: 4,
    description: 'Looking for dynamic mathematics instructors who excel in simplifying complex quantitative formulas into rapid shortcut tricks for non-maths students.',
    keyResponsibilities: [
      'Deliver concept clarity on 25 TNPSC Aptitude chapters and Banking arithmetic puzzles.',
      'Develop formula cheat-sheets and speed-calculation modules.',
      'Evaluate student progress through weekly timed mock evaluations.',
    ],
    qualifications: [
      'Bachelor or Master Degree in Mathematics, Statistics, or Engineering.',
      'Deep familiarity with recent question patterns of TNPSC, Banking, and SSC.',
    ],
  },
  {
    id: 'res-content',
    title: 'Content Developer & Researcher — Aamu Publication (Unit 8 & 9 Specialist)',
    department: 'Publication & Research',
    location: 'Tenkasi Publication Headquarters',
    employmentType: 'Full-Time',
    experienceRequired: '1+ years in content development / TNPSC Mains appeared',
    vacanciesCount: 3,
    description: 'Join the editorial think-tank behind Aamu Publication. Analyze state government policy notes, archaeological reports, and academic journals to synthesize premier study materials.',
    keyResponsibilities: [
      'Author and update bilingual textbooks, question banks, and monthly current affairs compilations.',
      'Verify historical and archaeological facts with authentic gazettes and excavation findings.',
      'Draft detailed solutions with pedagogical clarity for state rank test series.',
    ],
    qualifications: [
      'Postgraduate degree in History, Political Science, Economics, or Public Administration.',
      'Prior experience appearing for TNPSC Group 1 Mains or UPSC Civil Services Mains preferred.',
    ],
  },
  {
    id: 'adm-branch',
    title: 'Center Director / Academic Branch Coordinator',
    department: 'Center Administration',
    location: 'District Hub Centers Across Tamil Nadu',
    employmentType: 'Full-Time',
    experienceRequired: '2+ years in academic institution or branch operations',
    vacanciesCount: 8,
    description: 'Oversee center operations, student admissions, faculty scheduling, test hall coordination, and student counseling at regional branch campuses.',
    keyResponsibilities: [
      'Drive student admissions counseling with empathy, integrity, and clarity.',
      'Maintain rigorous classroom discipline, timetable schedules, and library resources.',
      'Liaise with the Tenkasi Head Office for prompt material distribution and test synchronization.',
    ],
    qualifications: [
      'Any Bachelor Degree with strong communication skills in Tamil and English.',
      'Demonstrated operational and team leadership capabilities.',
    ],
  },
];
