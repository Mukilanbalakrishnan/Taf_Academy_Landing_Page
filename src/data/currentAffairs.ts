export interface CurrentAffairItem {
  id: string;
  title: string;
  tamilTitle?: string;
  category: 'Tamil Nadu Affairs' | 'National Policy' | 'Economy & Banking' | 'Science & Environment' | 'International & Treaties' | 'Sports & Awards';
  cadence: 'Daily' | 'Weekly' | 'Monthly';
  dateLabel: string;
  summary: string;
  keyPoints: string[];
  syllabusRelevance: string;
  source: string;
}

export const CURRENT_AFFAIRS: CurrentAffairItem[] = [
  {
    id: 'ca-1',
    title: 'Keeladi Phase X Excavations: New Sangam Age Artifacts and Carbon Dating Revelations',
    tamilTitle: 'கீழடி 10-ஆம் கட்ட அகழாய்வு: சங்க கால செங்கல் கட்டுமானங்கள் மற்றும் புதிய தொல்பொருட்கள்',
    category: 'Tamil Nadu Affairs',
    cadence: 'Daily',
    dateLabel: 'Latest Daily Bulletin',
    summary: 'State Department of Archaeology unearths sophisticated drainage systems, carnelian beads, and inscribed Tamil-Brahmi potsherds pushing urban Sangam antiquity firmly past the 6th century BCE.',
    keyPoints: [
      'Excavation uncovers water management conduits reflecting advanced ancient civic engineering.',
      'Tamil-Brahmi script graffiti inscribed on clay vessels reaffirms widespread literacy during the Sangam epoch.',
      'Direct evidentiary relevance to TNPSC Unit 8 (Heritage and Archaeological Discoveries in Tamil Nadu).',
    ],
    syllabusRelevance: 'TNPSC Group 1 & 2 Unit 8; UPSC GS Paper 1 (Ancient Indian History & Heritage)',
    source: 'Tamil Nadu State Department of Archaeology',
  },
  {
    id: 'ca-2',
    title: 'Tamil Nadu Green Energy Corridor & Offshore Wind Energy Policy 2025',
    tamilTitle: 'தமிழ்நாடு பசுமை எரிசக்தி வழித்தடம் மற்றும் கடலோர காற்றாலை கொள்கை',
    category: 'Science & Environment',
    cadence: 'Daily',
    dateLabel: 'Latest Daily Bulletin',
    summary: 'The state government launches groundbreaking initiatives to harness the high-velocity Gulf of Mannar offshore wind corridor to augment Tamil Nadu\'s renewable energy contribution beyond 50%.',
    keyPoints: [
      'Targeting 5,000 MW offshore wind capacity by 2030 along the southern coastline (Dhanushkodi to Kanyakumari).',
      'Integration with TANGEDCO\'s smart grid to minimize transmission wheeling losses.',
      'Significant topic for General Studies mains descriptive answer on sustainable industrialization.',
    ],
    syllabusRelevance: 'TNPSC Unit 9 (Development Administration); UPSC GS Paper 3 (Energy & Infrastructure)',
    source: 'State Energy Department Policy Note',
  },
  {
    id: 'ca-3',
    title: 'Monetary Policy Review: RBI Retains Stance with Focus on Food Inflation Smoothing',
    category: 'Economy & Banking',
    cadence: 'Weekly',
    dateLabel: 'Weekly Economic Roundup',
    summary: 'The Monetary Policy Committee (MPC) reviews the repo rate trajectory, credit-deposit ratios, and foreign exchange reserves maintaining stable liquidity for public sector banking.',
    keyPoints: [
      'Core CPI inflation trends and agricultural harvest stabilization analysis.',
      'Detailed overview of statutory liquidity ratio (SLR), cash reserve ratio (CRR), and marginal standing facility (MSF).',
      'Crucial study material for Banking (IBPS/SBI) and SSC examinations.',
    ],
    syllabusRelevance: 'Banking Awareness; TNPSC Indian Economy; UPSC GS Paper 3',
    source: 'Reserve Bank of India Bulletin',
  },
  {
    id: 'ca-4',
    title: 'Pudhumai Penn & Tamil Pudhalvan Schemes: Educational Gross Enrollment Ratio Gains',
    tamilTitle: 'புதுமைப் பெண் & தமிழ்ப் புதல்வன் திட்டங்கள்: உயர்கல்வி சேர்க்கை விகித உயர்வு',
    category: 'Tamil Nadu Affairs',
    cadence: 'Weekly',
    dateLabel: 'Weekly Policy Review',
    summary: 'Statistical evaluation of the state\'s flagship DBT financial assistance initiative of ₹1,000 per month for government school students entering higher education.',
    keyPoints: [
      'Significant spike in female undergraduate enrollment in STEM courses across government polytechnics and engineering colleges.',
      'Comparison of Tamil Nadu\'s Gross Enrollment Ratio (GER ~51%) against the national average (~28%).',
      'Essential case study for TNPSC Mains essays on social justice and human capital formation.',
    ],
    syllabusRelevance: 'TNPSC Unit 9 (Social Welfare Schemes & Human Development); UPSC GS Paper 2',
    source: 'TN Higher Education Department Statistical Digest',
  },
  {
    id: 'ca-5',
    title: 'Monthly Comprehensive Competitive Digest: Constitution, Environment & State Affairs',
    category: 'National Policy',
    cadence: 'Monthly',
    dateLabel: 'Monthly Master Dossier',
    summary: 'A curated 120-page monthly compendium published by TAF IAS Academy Research Wing compiling national bills, international summits, Supreme Court judgments, and state government schemes.',
    keyPoints: [
      'Categorized into objective MCQs, one-liner rapid facts, and descriptive analytical essays.',
      'Includes 100 high-probability practice questions with detailed bilingual answer rationales.',
      'Available free for all TAF IAS Academy students and portal members.',
    ],
    syllabusRelevance: 'All Competitive Examinations (TNPSC, UPSC, TNUSRB, SSC, RRB)',
    source: 'TAF IAS Academy Editorial Board',
  },
];
