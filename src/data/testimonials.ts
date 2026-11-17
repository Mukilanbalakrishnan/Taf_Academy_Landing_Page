export interface Testimonial {
  id: string;
  name: string;
  hometown: string;
  exam: string;
  post: string;
  year: number;
  photoUrl: string;
  quote: string;
  videoUrlSnippet?: string;
  highlightPhrase: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'S. Karthikeyan',
    hometown: 'Tenkasi District',
    exam: 'TNPSC Group 1',
    post: 'Deputy Collector (State Rank 03)',
    year: 2023,
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    highlightPhrase: 'Transformative Mains answer writing evaluation and relentless faculty mentoring',
    quote: 'Coming from a modest rural family in southern Tamil Nadu, cracking Group 1 felt like a distant fantasy. Joining TAF IAS Academy changed everything. Founder Aagasa Moorthy sir and our faculty spent hours analyzing every test sheet. Aamu Publication Unit 8 & 9 books were the bedrock of my success.',
  },
  {
    id: 'test-2',
    name: 'R. Vigneshwaran',
    hometown: 'Thanjavur District',
    exam: 'TNSURB Police SI',
    post: 'Sub-Inspector of Police (State Rank 01)',
    year: 2022,
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    highlightPhrase: 'Secured State 1st Rank through disciplined residential hostel training',
    quote: 'The residential hostel campus in Thanjavur gave me the exact atmosphere I needed. Early morning physical training for rope climbing and running combined with deep psychology paper analysis helped me achieve State Rank 1 in the SI examination.',
  },
  {
    id: 'test-3',
    name: 'M. Deepa Lakshmi',
    hometown: 'Madurai',
    exam: 'TNPSC Group 1',
    post: 'Deputy Superintendent of Police (DSP - State Rank 07)',
    year: 2023,
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    highlightPhrase: 'Empowering women aspirants to assume premier leadership roles in uniform and civil service',
    quote: 'TAF IAS Academy instills an unmatched sense of confidence in women aspirants. The mock interviews presided by retired IPS officers removed all nervousness before the official TNPSC commission board.',
  },
  {
    id: 'test-4',
    name: 'K. Saravanakumar',
    hometown: 'Virudhunagar',
    exam: 'TNPSC Group 4',
    post: 'Village Administrative Officer (VAO - State Rank 02)',
    year: 2024,
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    highlightPhrase: '99 out of 100 in General Tamil through line-by-line textbook tests',
    quote: 'I scored 99 out of 100 in General Tamil because of TAF’s daily 100-mark OMR tests. The academy’s teachers make sure not a single line of Samacheer Kalvi is skipped.',
  },
];
