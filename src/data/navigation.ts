export interface NavSubItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  category?: string;
}

export interface NavCourseGroup {
  category: string;
  items: NavSubItem[];
}

export interface NavItem {
  title: string;
  href: string;
  isMegaMenu?: boolean;
  dropdown?: NavSubItem[];
  megaGroups?: NavCourseGroup[];
  badge?: string;
  description?: string;
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
    dropdown: [
      {
        title: 'About TAF IAS Academy',
        href: '/about#academy',
        description: 'Pioneering competitive exam coaching across Tamil Nadu since 2009',
      },
      {
        title: 'Our Journey',
        href: '/about#journey',
        description: 'From a single classroom in Tenkasi to a 92-center institution',
      },
      {
        title: 'Founder',
        href: '/about#founder',
        description: 'Visionary leadership of Mr. J. Aagasa Moorthy',
      },
      {
        title: 'Vision and Mission',
        href: '/about#vision-mission',
        description: 'Democratizing prestigious civil service education for every youth',
      },
    ],
  },
  {
    title: 'Courses',
    href: '/courses',
    isMegaMenu: true,
    megaGroups: [
      {
        category: 'TNPSC',
        items: [
          {
            title: 'Group 1',
            href: '/courses/tnpsc/group-1',
            description: 'Deputy Collector, DSP, Commercial Tax Officer - Comprehensive Prelims & Mains',
            badge: 'Flagship',
          },
          {
            title: 'Group 2 / 2A',
            href: '/courses/tnpsc/group-2',
            description: 'Sub Registrar, Municipal Commissioner & Non-Interview posts',
          },
          {
            title: 'Group 4',
            href: '/courses/tnpsc/group-4',
            description: 'VAO, Junior Assistant, Typist & Field Surveyor preparation',
            badge: 'Popular',
          },
        ],
      },
      {
        category: 'TNSURB',
        items: [
          {
            title: 'SI (Sub-Inspector)',
            href: '/courses/tnsurb/si',
            description: 'Taluk, AR & TSP Sub-Inspector written test & physical test coaching',
            badge: 'High Selection',
          },
          {
            title: 'PC (Police Constable)',
            href: '/courses/tnsurb/pc',
            description: 'Intensive constable preparation with hostel & physical drills',
          },
        ],
      },
      {
        category: 'CENTRAL & TECHNICAL',
        items: [
          {
            title: 'BANKING',
            href: '/courses/banking',
            description: 'IBPS PO / Clerk, SBI PO / Clerk & Regional Rural Banks',
          },
          {
            title: 'SSC',
            href: '/courses/ssc',
            description: 'CGL, CHSL, MTS & GD Constable specialized bilingual batches',
          },
          {
            title: 'RRB',
            href: '/courses/rrb',
            description: 'NTPC, Group D, ALP & RPF Railway recruitment tests',
          },
          {
            title: 'TRB',
            href: '/courses/trb',
            description: 'Teachers Recruitment Board PG Assistant & Block Educational Officer',
          },
        ],
      },
      {
        category: 'UPSC & FOUNDATION',
        items: [
          {
            title: 'UPSC Civil Services',
            href: '/courses/upsc',
            description: 'IAS, IPS, IFS, IRS Prelims, Mains & Interview mentoring with Delhi methodology',
            badge: 'Elite',
          },
          {
            title: 'Junior IAS',
            href: '/courses/junior-ias',
            description: 'Early foundation program for school & college students',
            badge: 'Youth Program',
          },
          {
            title: 'ONLINE',
            href: '/courses/online',
            description: 'State-of-the-art interactive live digital classes & test portal for all programs',
            badge: 'Flexible',
          },
        ],
      },
    ],
  },
  {
    title: 'Our Centers',
    href: '/centers',
    badge: '92 Branches',
  },
  {
    title: 'Achievements',
    href: '/achievements',
    dropdown: [
      {
        title: 'Rank List',
        href: '/achievements',
        description: 'Verified top state ranks in TNPSC, TNUSRB & Central Exams',
      },
      {
        title: 'Hall of Fame',
        href: '/achievements#hall-of-fame',
        description: '16,000+ government officers shaped since 2009',
      },
    ],
  },
  {
    title: 'Events',
    href: '/events',
    dropdown: [
      {
        title: 'Functions',
        href: '/events#functions',
        description: '18th Year Celebration, annual conventions & institutional ceremonies',
      },
      {
        title: 'Achiever Program',
        href: '/events#achievers',
        description: 'Grand student felicitation & rank-holder award ceremonies',
      },
    ],
  },
  {
    title: 'Books',
    href: '/books',
    description: 'Aamu Publication & TAF authentic study resources',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Notification',
    href: '/notifications',
    badge: 'Live',
  },
  {
    title: 'More',
    href: '#',
    dropdown: [
      {
        title: 'Current Affairs',
        href: '/current-affairs',
        description: 'Daily, weekly and monthly curated competitive current affairs',
      },
      {
        title: 'Careers',
        href: '/careers',
        description: 'Faculty, curriculum developer and center management openings',
      },
    ],
  },
  {
    title: 'Contact Us',
    href: '/contact',
  },
];
