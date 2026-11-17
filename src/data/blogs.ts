export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'TNPSC Preparation' | 'UPSC Preparation' | 'Current Affairs' | 'Examination Strategy' | 'Study Tips' | 'Government Job Updates' | 'Student Guidance';
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  coverImage: string;
  excerpt: string;
  content: string[];
  tags: string[];
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'how-to-score-95-plus-in-tnpsc-general-tamil',
    title: 'How to Score 95+ in TNPSC General Tamil: A Step-by-Step Blueprint',
    category: 'TNPSC Preparation',
    author: 'Senior Tamil Faculty',
    authorRole: 'Head of Department - Tamil Studies, TAF IAS Academy',
    date: 'January 15, 2025',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'General Tamil carries 100 questions in TNPSC Group 4 and Group 2. Discover how to master Part A, B, and C with textbook line-by-line synthesis to secure a 95+ score.',
    content: [
      'In both TNPSC Group 4 and Group 2/2A preliminary examinations, General Tamil accounts for exactly half of the total question paper (100 questions out of 200). It is universally acknowledged by state toppers that scoring anything below 95 in Tamil severely diminishes your rank chances. In this guide, our academic council outlines the proven methodology that produces our top rankers year after year.',
      '1. Master the Samacheer Kalvi Textbooks Chronologically: The foundation of General Tamil lies exclusively within the 6th to 12th Standard Tamil textbooks prescribed by the Tamil Nadu State Board. Rather than jumping directly into market guidebooks, read the original textbooks at least three times. Pay special attention to poets\' birthplaces, awards, journals they edited, and obscure vocabulary notes at the foot of each poem.',
      '2. Dissecting Part A (இலக்கணம் - Grammar): Grammar is purely mathematical in nature. Once you understand the rules of வேற்றுமை உருபுகள் (case markers), புணர்ச்சி விதிகள் (sandhi rules), and வல்லினம் மிகும் / மிகா இடங்கள் (hardening consonants), you will never lose a mark. Make a dedicated pocket notebook of difficult sandhi combinations and revise it every morning.',
      '3. Dissecting Part B (இலக்கியம் - Literature): From the Sangam anthology (எட்டுத்தொகை, பத்துப்பாட்டு) to the ethical literature of பதினெண்கீழ்க்கணக்கு (such as திருக்குறள் and நாலடியார்), create a visual timeline matrix. Note the poet, who commissioned the work, the metre used (ஆசிரியப்பா, வெண்பா), and the total number of verses.',
      '4. Dissecting Part C (தமிழ் அறிஞர்களும் தமிழ்த் தொண்டும்): This section tests your depth on modern Renaissance writers like பாரதியார், பாரதிதாசன், நாமக்கல் கவிஞர், கவிமணி தேசிக விநாயகம் பிள்ளை, and pioneers of the Dravidian movement like தந்தை பெரியார் and பேரறிஞர் அண்ணா. Frequently asked questions focus on their pseudonyms (புனைப்பெயர்கள்) and titles conferred by educational bodies.',
      '5. The Golden Habit: Daily 50-Question OMR Drill: Knowledge without speed is futile in a 3-hour examination. Practice 50 objective Tamil questions daily under timed conditions to eliminate careless reading errors.',
    ],
    tags: ['TNPSC', 'General Tamil', 'Group 4', 'Group 2', 'Exam Strategy'],
    featured: true,
  },
  {
    id: 'post-2',
    slug: 'upsc-vs-tnpsc-group-1-integrated-preparation-strategy',
    title: 'UPSC Civil Services vs TNPSC Group 1: Crafting an Integrated Preparation Strategy',
    category: 'Examination Strategy',
    author: 'Academic Advisory Board',
    authorRole: 'Civil Services Mentorship Wing, TAF IAS Academy',
    date: 'February 2, 2025',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Can you prepare simultaneously for UPSC IAS and TNPSC Group 1? Explore the overlapping syllabus, critical divergences in Unit 8/9, and daily routine balancing.',
    content: [
      'A common dilemma among serious administrative aspirants across Tamil Nadu is whether to prepare exclusively for UPSC Civil Services or simultaneously target TNPSC Group 1. With the revision of the TNPSC syllabus over recent years, the analytical depth and subject overlap between the two examinations have reached an all-time high.',
      'The Common Core: Both examinations share fundamental subjects: Indian Polity & Constitution, Modern Indian History, Indian Economy, Geography, Environment & Biodiversity, and Science & Technology. Aspirants who rigorously master NCERTs and standard reference books like Laxmikanth for Polity or Ramesh Singh for Economy build an unassailable foundation for both examinations.',
      'The Divergence — State Specific Syllabi: Where TNPSC Group 1 diverges sharply is in its regional emphasis, specifically Unit 8 (Tamil Society, Keeladi excavations, Thirukkural, Dravidian Movement) and Unit 9 (Development Administration and Welfare Schemes of Tamil Nadu). A civil service aspirant must budget at least 30% of their weekly study time to master these state-specific modules through Aamu Publication guides.',
      'Mains Answer Writing Nuances: UPSC demands broad interdisciplinary analytical framing, often asking "Critically analyze" or "Examine the policy implications". TNPSC Group 1 Mains rewards structured point-by-point presentation with relevant administrative facts, constitutional articles, and government scheme names.',
      'Conclusion: Preparing for both is not only feasible but strategically advantageous, providing dual avenues to enter high public administrative services within a single rigorous study lifecycle.',
    ],
    tags: ['UPSC', 'TNPSC Group 1', 'Strategy', 'Civil Services'],
    featured: true,
  },
  {
    id: 'post-3',
    slug: 'tnusrb-si-psychology-and-physical-test-guide',
    title: 'Cracking TNUSRB Police SI: Balancing the 60-Mark Psychology Paper and Physical Efficiency',
    category: 'Government Job Updates',
    author: 'Uniform Services Wing',
    authorRole: 'Head of Police Recruitment Mentorship, TAF IAS Academy',
    date: 'February 18, 2025',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'The 60 marks in the Psychology section decide the TNUSRB SI cutoff. Pair this with our structured morning training regime to earn maximum stars in the PET.',
    content: [
      'The Sub-Inspector of Police examination conducted by the Tamil Nadu Uniformed Services Recruitment Board (TNUSRB) is one of the most competitive tests in the state. What separates rank-holders from candidates who narrowly miss the cutoff is the Psychology and Logical Reasoning section.',
      'Why Psychology is the Deciding Factor: The main written exam consists of 140 objective questions (70 marks). While 80 questions are allocated to General Knowledge, 60 questions belong to Psychology. Scoring 55+ in Psychology is practically mandatory for a top state rank.',
      'Key High-Yield Topics: Master Direction Sense, Blood Relations, Number and Letter Analogies, Coding-Decoding, Venn Diagrams, and Syllogisms. Use short elimination techniques rather than writing extensive equations.',
      'Don’t Neglect the Physical Efficiency Test (PET): Passing the written test is only half the battle. In the physical test, every single star counts towards your final merit list. Rope climbing requires specialized upper-body and core strength that cannot be developed in two weeks after results. Begin your running and rope practice right alongside your written studies.',
      'At TAF IAS Academy residential campuses in Tenkasi and Thanjavur, our aspirants follow a disciplined schedule of 5:30 AM ground drills followed by intensive academic study throughout the day.',
    ],
    tags: ['TNUSRB', 'Police SI', 'Psychology', 'Physical Test', 'Uniform Services'],
  },
  {
    id: 'post-4',
    slug: 'effective-newspaper-reading-for-competitive-exams',
    title: 'How to Read The Hindu & Dinamani for Daily Current Affairs Without Wasting Hours',
    category: 'Current Affairs',
    author: 'Current Affairs Editorial Desk',
    authorRole: 'Research & Content Lead, TAF IAS Academy',
    date: 'March 1, 2025',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Stop reading newspapers like a casual reader. Learn how to map daily editorials, government policy announcements, and legal judgments directly to your exam syllabus.',
    content: [
      'Newspapers are the lifeblood of competitive exam preparation. Yet many aspirants spend three to four hours daily reading the paper and still fail to extract actionable exam points. The secret lies in syllabus-filtered reading.',
      'What to Skip: Political party statements, crime reports without legal precedent, local city gossip, and entertainment news must be skipped immediately.',
      'What to Read Deeply: Editorial columns discussing economic growth, Reserve Bank policy, judicial pronouncements by the Supreme Court and Madras High Court, environmental treaties, and Tamil Nadu government welfare scheme launches.',
      'Synthesize Notes by Theme, Not by Date: Instead of maintaining a chronological diary of random events, categorize your notes into Polity, Economy, Environment, Science & Tech, and Tamil Nadu Governance. When an update arrives on a topic, append it to your existing topic sheet.',
      'Utilize TAF Daily Current Affairs: Supplement your morning reading with our curated bilingual bulletins available free on our website and mobile application.',
    ],
    tags: ['Current Affairs', 'The Hindu', 'Dinamani', 'Study Habits'],
  },
  {
    id: 'post-5',
    slug: 'overcoming-exam-anxiety-and-maintaining-consistency',
    title: 'Overcoming Competitive Exam Anxiety: Mental Resilience for Long-Term Aspirants',
    category: 'Student Guidance',
    author: 'Student Wellness & Counseling Cell',
    authorRole: 'Mentorship Counselor, TAF IAS Academy',
    date: 'March 10, 2025',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'The journey towards a government job is often a marathon of 1 to 2 years. Learn how to navigate burnout, family pressure, and exam-day nervousness.',
    content: [
      'Preparing for competitive examinations like TNPSC or UPSC is as much a test of mental fortitude as it is of academic brilliance. Many aspirants experience periods of acute self-doubt, comparison with peers who have entered private jobs, and anxiety before major mock tests.',
      '1. Focus on the Process, Not the Unknown Future: Break your massive syllabus down into weekly milestones. Celebrate completing a chapter or achieving an 80% accuracy in an OMR test rather than obsessing over the final vacancy count.',
      '2. Guard Your Sleep and Physical Health: Late-night cramming that sacrifices sleep degrades cognitive recall by up to 40%. Maintain 7 hours of restorative sleep and take a 30-minute brisk walk daily.',
      '3. Surround Yourself with Positive Aspirants: In our residential hostel environments at Tenkasi and Thanjavur, peer learning groups provide constant motivation and keep procrastination at bay.',
      'Remember, every serving officer you admire today was once an anxious student sitting at a desk with an uncertain future. Persistence is the ultimate equalizer.',
    ],
    tags: ['Mental Health', 'Motivation', 'Study Habits', 'Student Welfare'],
  },
];
